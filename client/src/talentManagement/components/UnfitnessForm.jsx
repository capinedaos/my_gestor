import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  createUnfitnessThunk,
  updateUnfitnessThunk,
} from "../../app/slicesTalentManagement/unfitness.slice";
import { getEmployeeThunk } from "../../app/slicesTalentManagement/employee.slice";
import { useFormValidation } from "../../hooks";
import { ModalInformation } from "./ModalInformation";

export const UnfitnessForm = ({
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
  unfitnessSelected,
  deselectUnfitness,
  titleModal,
  textButton,
}) => {
  const dispatch = useDispatch();
  const [origin, setOrigin] = useState("");
  const [diagnostic, setDiagnostic] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const employees = useSelector((state) => state.employee);
  const [information, setInformation] = useState("");

  useFormValidation();

  useEffect(() => {
    dispatch(getEmployeeThunk());
    if (unfitnessSelected !== null) {
      setOrigin(unfitnessSelected.origin);
      setDiagnostic(unfitnessSelected.diagnostic);
      setInitialDate(
        moment(unfitnessSelected.initialDate).format("YYYY-MM-DD")
      );
      setFinalDate(moment(unfitnessSelected.finalDate).format("YYYY-MM-DD"));
      setEmployeeId(unfitnessSelected.employeeId);
    } else {
      setOrigin("");
      setDiagnostic("");
      setInitialDate("");
      setFinalDate("");
      setEmployeeId("");
    }
  }, [unfitnessSelected, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const unfitness = {
      origin,
      diagnostic,
      initialDate,
      finalDate,
      employeeId,
    };

    if (new Date(initialDate).getTime() > new Date(finalDate).getTime()) {
      alert("Fecha invalida");
    } else {
      // editar
      if (unfitnessSelected !== null) {
        dispatch(updateUnfitnessThunk(unfitness, unfitnessSelected.id));
        deselectUnfitness();
        setInformation("Incapacidad modificada");
      } else {
        // crear
        dispatch(createUnfitnessThunk(unfitness));
        setInformation("Incapacidad registrada");
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
                <label htmlFor="origin" className="form-label">
                  Origen
                </label>
                <select
                  type="text"
                  id="origin"
                  onChange={(e) => setOrigin(e.target.value)}
                  value={origin}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="general">General</option>
                  <option value="laboral">Laboral</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="mb-3">
                <label htmlFor="diagnostic" className="form-label">
                  Diagnostico
                </label>
                <input
                  type="text"
                  id="diagnostic"
                  onChange={(e) => setDiagnostic(e.target.value)}
                  value={diagnostic}
                  placeholder="Ingresa un diagnostico"
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
