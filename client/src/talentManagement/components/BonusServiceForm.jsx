import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  createBonusServiceThunk,
  updateBonusServiceThunk,
} from "../../app/slicesTalentManagement/bonusService.slice";
import { getEmployeeThunk } from "../../app/slicesTalentManagement/employee.slice";
import { useFormValidation } from "../../hooks";
import { ModalInformation } from "./ModalInformation";

export const BonusServiceForm = ({
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
  bonusServiceSelected,
  deselectBonusService,
  titleModal,
  textButton,
}) => {
  const dispatch = useDispatch();
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [transportationAssistance, setTransportationAssistance] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const employees = useSelector((state) => state.employee);

  const [information, setInformation] = useState("");

  useFormValidation();

  useEffect(() => {
    dispatch(getEmployeeThunk());
    if (bonusServiceSelected !== null) {
      setInitialDate(
        moment(bonusServiceSelected.initialDate).format("YYYY-MM-DD")
      );
      setFinalDate(moment(bonusServiceSelected.finalDate).format("YYYY-MM-DD"));
      setTransportationAssistance(
        bonusServiceSelected.transportationAssistance
      );
      setEmployeeId(bonusServiceSelected.employeeId);
    } else {
      setInitialDate("");
      setFinalDate("");
      setTransportationAssistance("");
      setEmployeeId("");
    }
  }, [bonusServiceSelected, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const bonusService = {
      initialDate,
      finalDate,
      transportationAssistance: Number(transportationAssistance),
      employeeId,
    };

    if (new Date(initialDate).getTime() > new Date(finalDate).getTime()) {
      alert("Fecha invalida");
    } else {
      // editar
      if (bonusServiceSelected !== null) {
        dispatch(
          updateBonusServiceThunk(bonusService, bonusServiceSelected.id)
        );
        deselectBonusService();
        setInformation("Prima modificada");
      } else {
        // crear
        dispatch(createBonusServiceThunk(bonusService));
        deselectBonusService();
        setInformation("Prima registrada");
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="needs-validation" noValidate>
      <div
        className={className}
        id={idModal}
        tabIndex={tabIndex}
        aria-labelledby={ariaLabelledby}
        aria-hidden={ariaHidden}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {titleModal}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="initialDate" className="form-label">
                  Fecha inicial
                </label>
                <input
                  type="date"
                  id="initialDate"
                  onChange={(e) => setInitialDate(e.target.value)}
                  value={initialDate}
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="mb-3">
                <label htmlFor="finalDate" className="form-label">
                  Fecha final
                </label>
                <input
                  type="date"
                  id="finalDate"
                  onChange={(e) => setFinalDate(e.target.value)}
                  value={finalDate}
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="transportationAssistance"
                  className="form-label"
                >
                  Auxilio de transporte
                </label>
                <input
                  type="number"
                  id="transportationAssistance"
                  onChange={(e) => setTransportationAssistance(e.target.value)}
                  value={transportationAssistance}
                  placeholder="Ingresa un valor"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="employeeId" className="form-label">
                  Empleado
                </label>
                <select
                  type="text"
                  id="employeeId"
                  onChange={(e) => setEmployeeId(e.target.value)}
                  value={employeeId}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  {Array.isArray(employees)
                    ? employees.map((employee) => (
                        <option value={employee.id} key={employee.id}>
                          {employee.names}
                        </option>
                      ))
                    : []}
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                data-bs-target="#modalInformation"
                data-bs-toggle="modal"
              >
                {textButton}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalInformation
        idModal={"modalInformation"}
        className={"modal fade"}
        tabIndex={"-1"}
        aria-labelledby={"exampleModalLabel"}
        aria-hidden={"true"}
        information={information}
      />
    </form>
  );
};
