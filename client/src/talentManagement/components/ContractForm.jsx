import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  createContractThunk,
  updateContractThunk,
} from "../../app/slicesTalentManagement/contract.slice";
import { getEmployeeThunk } from "../../app/slicesTalentManagement/employee.slice";
import { useFormValidation } from "../../hooks";
import { ModalInformation } from "./ModalInformation";

export const ContractForm = ({
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
  contractSelected,
  deselectContract,
  titleModal,
  textButton,
}) => {
  const dispatch = useDispatch();
  const [typeContract, setTypeContract] = useState("");
  const [salary, setSalary] = useState("");
  const [position, setPosition] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const employees = useSelector((state) => state.employee);
  const [information, setInformation] = useState("");

  useFormValidation();

  useEffect(() => {
    dispatch(getEmployeeThunk());
    if (contractSelected !== null) {
      setTypeContract(contractSelected.typeContract);
      setSalary(contractSelected.salary);
      setPosition(contractSelected.position);
      setInitialDate(moment(contractSelected.initialDate).format("YYYY-MM-DD"));
      setFinalDate(moment(contractSelected.finalDate).format("YYYY-MM-DD"));
      setEmployeeId(contractSelected.employeeId);
    } else {
      setTypeContract("");
      setSalary("");
      setPosition("");
      setInitialDate("");
      setFinalDate("");
      setEmployeeId("");
    }
  }, [contractSelected, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const contract = {
      typeContract,
      salary,
      position,
      initialDate,
      finalDate,
      employeeId,
    };

    if (new Date(initialDate).getTime() > new Date(finalDate).getTime()) {
      alert("Fecha invalida");
    } else {
      // editar
      if (contractSelected !== null) {
        dispatch(updateContractThunk(contract, contractSelected.id));
        deselectContract();
        setInformation("Contrato modificado");
      } else {
        // crear
        dispatch(createContractThunk(contract));
        deselectContract();
        setInformation("Contrato registrado");
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
                <label htmlFor="typeContract" className="form-label">
                  Tipo de contrato
                </label>
                <select
                  type="text"
                  id="typeContract"
                  onChange={(e) => setTypeContract(e.target.value)}
                  value={typeContract}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="Fijo">Fijo</option>
                  <option value="Indefinido">Indefinido</option>
                  <option value="Obra o labor">Obra o labor</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="salary" className="form-label">
                  Salario
                </label>
                <input
                  type="number"
                  id="salary"
                  onChange={(e) => setSalary(e.target.value)}
                  value={salary}
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
                <label htmlFor="position" className="form-label">
                  Cargo
                </label>
                <input
                  type="text"
                  id="position"
                  onChange={(e) => setPosition(e.target.value)}
                  value={position}
                  placeholder="Ingresa el cargo"
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
