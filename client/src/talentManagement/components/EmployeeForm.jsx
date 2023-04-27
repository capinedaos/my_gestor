import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  createEmployeeThunk,
  updateEmployeeThunk,
} from "../../app/slicesTalentManagement/employee.slice";
import { getContractByEmployeeIdThunk } from "../../app/slicesTalentManagement/contract.slice";
import { useFormValidation } from "../../hooks";
import { ModalInformation } from "./ModalInformation";

export const EmployeeForm = ({
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
  employeeSelected,
  deselectEmployee,
  titleModal,
  textButton,
}) => {
  const dispatch = useDispatch();
  const [names, setNames] = useState("");
  const [identification, setIdentification] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");

  const contract = useSelector((state) => state.contract);
  const [contracActive, setContracActive] = useState({});
  const [salary, setSalary] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const [information, setInformation] = useState("");

  useFormValidation();

  useEffect(() => {
    if (employeeSelected !== null) {
      dispatch(getContractByEmployeeIdThunk(employeeSelected.id));
      const contractFind = contract.find(
        (contract) => contract.status === "activo"
      );
      setContracActive(contractFind);
      setNames(employeeSelected.names);
      setIdentification(employeeSelected.identification);
      setBirthday(moment(employeeSelected.birthday).format("YYYY-MM-DD"));
      setPhone(employeeSelected.phone);
      setArea(employeeSelected.area);
      setSalary(contracActive?.salary);
      setInitialDate(moment(contracActive?.initialDate).format("YYYY-MM-DD"));
      setFinalDate(moment(contracActive?.finalDate).format("YYYY-MM-DD"));
    } else {
      setNames("");
      setIdentification("");
      setBirthday("");
      setPhone("");
      setArea("");
      setSalary("");
      setInitialDate("");
      setFinalDate("");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeSelected, contracActive, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const employee = {
      names,
      identification,
      bankAccount: "",
      gender: "",
      birthday,
      bloodTypes: "",
      rh: "",
      phone,
      city: "",
      address: "",
      email: "",
      studies: "",
      area,
      salary,
      initialDate,
      finalDate,
    };

    if (new Date(birthday).getTime() > new Date().getTime()) {
      alert("Fecha invalida");
    } else {
      // editar
      if (employeeSelected !== null) {
        dispatch(updateEmployeeThunk(employee, employeeSelected.id));
        deselectEmployee();
        setInformation("Empleado modificado");
      } else {
        // crear
        dispatch(createEmployeeThunk(employee));
        deselectEmployee();
        setInformation("Empleado creado");
        e.target.reset();
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
                <label htmlFor="names" className="form-label">
                  Nombres
                </label>
                <input
                  type="text"
                  id="names"
                  onChange={(e) => setNames(e.target.value)}
                  value={names || ""}
                  placeholder="Ingresa los nombres"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="mb-3">
                <label htmlFor="identification" className="form-label">
                  N° Documento
                </label>
                <input
                  type="text"
                  id="identification"
                  onChange={(e) => setIdentification(e.target.value)}
                  value={identification || ""}
                  placeholder="Ingresa numero de documento"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="birthday" className="form-label">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="birthday"
                  onChange={(e) => setBirthday(e.target.value)}
                  value={birthday || ""}
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Telefono
                </label>
                <input
                  type="text"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone || ""}
                  placeholder="Ingresa un numero de telefono"
                  className="form-control"
                  required
                />
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
                  value={salary || ""}
                  placeholder="Ingresa un salario"
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
                  Fecha inicio contrato
                </label>
                <input
                  type="date"
                  id="initialDate"
                  onChange={(e) => setInitialDate(e.target.value)}
                  value={initialDate || ""}
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
                  Fecha fin contrato
                </label>
                <input
                  type="date"
                  id="finalDate"
                  onChange={(e) => setFinalDate(e.target.value)}
                  value={finalDate || ""}
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="typeContract" className="form-label">
                  Area
                </label>
                <select
                  type="text"
                  id="area"
                  onChange={(e) => setArea(e.target.value)}
                  value={area}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="Administrativa">Administrativa</option>
                  <option value="Ventas">Ventas</option>
                  <option value="Planta">Planta</option>
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
