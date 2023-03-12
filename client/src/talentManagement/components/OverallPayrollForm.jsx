import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateOverallPayrollThunk } from "../../app/slicesTalentManagement/overallPayroll.slice";
import { useFormValidation } from "../../hooks";
import { ModalInformation } from "./ModalInformation";

export const OverallPayrollForm = ({
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
  overallPayrollSelected,
  deselectOverallPayroll,
  titleModal,
  textButton,
}) => {
  const dispatch = useDispatch();
  const [typeOfSettlement, setTypeOfSettlement] = useState("");
  const [description, setDescription] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [information, setInformation] = useState("");

  useFormValidation();

  useEffect(() => {
    if (overallPayrollSelected !== null) {
      setTypeOfSettlement(overallPayrollSelected.typeOfSettlement);
      setDescription(overallPayrollSelected.description);
      setMonth(overallPayrollSelected.month);
      setYear(overallPayrollSelected.year);
    } else {
      setTypeOfSettlement("");
      setDescription("");
      setMonth("");
      setYear("");
    }
  }, [overallPayrollSelected, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const overallPayroll = {
      typeOfSettlement,
      description,
      month,
      year,
    };

    dispatch(
      updateOverallPayrollThunk(overallPayroll, overallPayrollSelected.id)
    );
    deselectOverallPayroll();
    setInformation("Nomina modificada");
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
                <label htmlFor="typeOfSettlement" className="form-label">
                  Tipo de liquidacion
                </label>
                <select
                  type="text"
                  id="typeOfSettlement"
                  onChange={(e) => setTypeOfSettlement(e.target.value)}
                  value={typeOfSettlement}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="mensual">Mensual</option>
                  <option value="primera quincena">Primera quincena</option>
                  <option value="segunda quincena">Segunda quincena</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descripción
                </label>
                <input
                  type="text"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="month" className="form-label">
                  Mes
                </label>
                <select
                  type="text"
                  id="month"
                  onChange={(e) => setMonth(e.target.value)}
                  value={month}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="1">Enero</option>
                  <option value="2">Febrero</option>
                  <option value="3">Marzo</option>
                  <option value="4">Abril</option>
                  <option value="5">Mayo</option>
                  <option value="6">Junio</option>
                  <option value="7">Julio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Septiembre</option>
                  <option value="10">Octubre</option>
                  <option value="11">Noviembre</option>
                  <option value="12">Diciembre</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="year" className="form-label">
                  Año
                </label>
                <input
                  type="number"
                  id="year"
                  onChange={(e) => setYear(e.target.value)}
                  value={year}
                  className="form-control"
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
