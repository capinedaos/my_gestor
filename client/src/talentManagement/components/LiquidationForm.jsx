import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  createLiquidationThunk,
  updateLiquidationThunk,
} from "../../app/slicesTalentManagement/liquidation.slice";

import { getEmployeeThunk } from "../../app/slicesTalentManagement/employee.slice";
import { useFormValidation } from "../../hooks";
import { ModalInformation } from "./ModalInformation";

export const LiquidationForm = ({
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
  liquidationSelected,
  deselectLiquidation,
  titleModal,
  textButton,
}) => {
  const dispatch = useDispatch();
  const [finalDate, setFinalDate] = useState("");
  const [initialDateBonus, setInitialDateBonus] = useState("");
  const [finalDateBonus, setFinalDateBonus] = useState("");
  const [transportationAssistance, setTransportationAssistance] = useState(0);
  const [employeeId, setEmployeeId] = useState("");
  const employees = useSelector((state) => state.employee);
  const [information, setInformation] = useState("");

  useFormValidation();

  useEffect(() => {
    dispatch(getEmployeeThunk());
    if (liquidationSelected !== null) {
      setFinalDate(moment(liquidationSelected.finalDate).format("YYYY-MM-DD"));
      setInitialDateBonus(
        moment(liquidationSelected.initialDateBonus).format("YYYY-MM-DD")
      );
      setFinalDateBonus(
        moment(liquidationSelected.finalDateBonus).format("YYYY-MM-DD")
      );

      setTransportationAssistance(liquidationSelected.transportationAssistance);
      setEmployeeId(liquidationSelected.employeeId);
    } else {
      setFinalDate("");
      setInitialDateBonus("");
      setFinalDateBonus("");
      setTransportationAssistance("");
      setEmployeeId("");
    }
  }, [liquidationSelected, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const liquidation = {
      finalDate,
      initialDateBonus,
      finalDateBonus,
      transportationAssistance,
      employeeId,
    };

    if (
      new Date(initialDateBonus).getTime() > new Date(finalDateBonus).getTime()
    ) {
      alert("Fecha de prima invalida");
    } else {
      // editar
      if (liquidationSelected !== null) {
        dispatch(updateLiquidationThunk(liquidation, liquidationSelected.id));
        deselectLiquidation();
        setInformation("Liquidacion modificada");
      } else {
        // crear
        dispatch(createLiquidationThunk(liquidation));
        deselectLiquidation();
        setInformation("Liquidacion registrada");
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
                <label htmlFor="finalDate" className="form-label">
                  Fecha final liquidacion
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
                <label htmlFor="initialDateBonus" className="form-label">
                  Fecha inicial prima
                </label>
                <input
                  type="date"
                  id="initialDateBonus"
                  onChange={(e) => setInitialDateBonus(e.target.value)}
                  value={initialDateBonus}
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="finalDateBonus" className="form-label">
                  Fecha final prima
                </label>
                <input
                  type="date"
                  id="finalDateBonus"
                  onChange={(e) => setFinalDateBonus(e.target.value)}
                  value={finalDateBonus}
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
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
