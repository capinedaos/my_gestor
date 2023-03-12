import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useFormValidation } from "../../hooks";
import { createSalaryIncreaseThunk } from "../../app/slicesTalentManagement/salaryIncrease.slice";
import { useParams } from "react-router-dom";
import { ModalInformation } from "./ModalInformation";

export const SalaryIncreaseForm = ({
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
  titleModal,
  textButton,
}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [information, setInformation] = useState("");
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    data.employeeId = id;
    dispatch(createSalaryIncreaseThunk(data, id));
    setInformation("Aumento registrado");
  }
  useFormValidation();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="needs-validation"
      noValidate
    >
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
                <label htmlFor="salary" className="form-label">
                  Nuevo salario
                </label>
                <input
                  type="number"
                  placeholder="Ingresa un valor"
                  className="form-control"
                  {...register("salary")}
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="dateIncrease" className="form-label">
                  Fecha de incremento
                </label>
                <input
                  type="date"
                  placeholder="Ingresa una fecha"
                  className="form-control"
                  {...register("dateIncrease")}
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="cause" className="form-label">
                  Causa o motivo
                </label>
                <input
                  type="text"
                  placeholder="Ingresa un motivo"
                  className="form-control"
                  {...register("cause")}
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="personAuthorizes" className="form-label">
                  Persona que autoriza
                </label>
                <input
                  type="text"
                  placeholder="Ingresa un nombre"
                  className="form-control"
                  {...register("personAuthorizes")}
                  required
                />
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
