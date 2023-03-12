import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  createMissingWorkThunk,
  updateMissingWorkThunk,
} from "../../app/slicesTalentManagement/missingWork.slice";

import { getEmployeeThunk } from "../../app/slicesTalentManagement/employee.slice";
import { useFormValidation } from "../../hooks";
import { ModalInformation } from "./ModalInformation";

export const MissingWorkForm = ({
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
  missingWorkSelected,
  deselectMissingWork,
  titleModal,
  textButton,
}) => {
  const dispatch = useDispatch();
  const [cause, setCause] = useState("");
  const [observation, setObservation] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [paidOut, setPaidOut] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const employees = useSelector((state) => state.employee);

  const [information, setInformation] = useState("");

  useFormValidation();

  useEffect(() => {
    dispatch(getEmployeeThunk());
    if (missingWorkSelected !== null) {
      setCause(missingWorkSelected.cause);
      setObservation(missingWorkSelected.observation);
      setInitialDate(
        moment(missingWorkSelected.initialDate).format("YYYY-MM-DD")
      );
      setFinalDate(moment(missingWorkSelected.finalDate).format("YYYY-MM-DD"));
      setPaidOut(missingWorkSelected.paidOut);
      setEmployeeId(missingWorkSelected.employeeId);
    } else {
      setCause("");
      setObservation("");
      setInitialDate("");
      setFinalDate("");
      setPaidOut("");
      setEmployeeId("");
    }
  }, [missingWorkSelected, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const missingWork = {
      cause,
      observation,
      initialDate,
      finalDate,
      paidOut,
      employeeId,
    };

    if (new Date(initialDate).getTime() > new Date(finalDate).getTime()) {
      alert("Fecha invalida");
    } else {
      // editar
      if (missingWorkSelected !== null) {
        dispatch(updateMissingWorkThunk(missingWork, missingWorkSelected.id));
        deselectMissingWork();
        setInformation("Ausencia modificada");
      } else {
        // crear
        dispatch(createMissingWorkThunk(missingWork));
        deselectMissingWork();
        setInformation("Ausencia registrada");
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
                <label htmlFor="cause" className="form-label">
                  Motivo
                </label>
                <select
                  type="text"
                  id="cause"
                  onChange={(e) => setCause(e.target.value)}
                  value={cause}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="licencia">Licencia</option>
                  <option value="ausencia">Ausencia</option>
                  <option value="suspension">Suspension</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="mb-3">
                <label htmlFor="observation" className="form-label">
                  Observacion
                </label>
                <input
                  type="text"
                  id="observation"
                  onChange={(e) => setObservation(e.target.value)}
                  value={observation}
                  placeholder="Ingresa una observacion"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
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
                <label htmlFor="paidOut" className="form-label">
                  Deducible ?
                </label>
                <select
                  type="text"
                  id="paidOut"
                  onChange={(e) => setPaidOut(e.target.value)}
                  value={paidOut}
                  className="form-control"
                  required
                >
                  {cause === "licencia" ? (
                    <>
                      <option value="" disabled>
                        Seleccione una opcion
                      </option>
                      <option value={true}>SI</option>
                      <option value={false}>NO</option>
                    </>
                  ) : (
                    <option selected="selected" value={true}>
                      SI
                    </option>
                  )}
                </select>
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
