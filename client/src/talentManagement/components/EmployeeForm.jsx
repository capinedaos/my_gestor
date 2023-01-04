import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
  createEmployeeThunk,
  updateEmployeeThunk,
} from "../../app/slicesTalentManagement/employee.slice";
import { getAreaThunk } from "../../app/slicesTalentManagement/area.slice";
import { useFormValidation } from "../../hooks";

const EmployeeForm = ({
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
  const navigate = useNavigate();
  const [names, setNames] = useState("");
  const [identification, setIdentification] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [bloodTypes, setBloodTypes] = useState("");
  const [rh, setRh] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [studies, setStudies] = useState("");
  const [areaId, setAreaId] = useState("");
  const areas = useSelector((state) => state.area);

  const [salary, setSalary] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  useFormValidation();

  useEffect(() => {
    dispatch(getAreaThunk());
    if (employeeSelected !== null) {
      setNames(employeeSelected.names);
      setIdentification(employeeSelected.identification);
      setBankAccount(employeeSelected.bankAccount);
      setGender(employeeSelected.gender);
      setBirthday(moment(employeeSelected.birthday).format("YYYY-MM-DD"));
      setBloodTypes(employeeSelected.bloodTypes);
      setRh(employeeSelected.rh);
      setPhone(employeeSelected.phone);
      setCity(employeeSelected.city);
      setAddress(employeeSelected.address);
      setEmail(employeeSelected.email);
      setStudies(employeeSelected.studies);
      setAreaId(employeeSelected.areaId);
    } else {
      setNames("");
      setIdentification("");
      setBankAccount("");
      setGender("");
      setBirthday("");
      setBloodTypes("");
      setRh("");
      setPhone("");
      setCity("");
      setAddress("");
      setEmail("");
      setStudies("");
      setAreaId("");
    }
  }, [employeeSelected, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const employee = {
      names,
      identification,
      bankAccount,
      gender,
      birthday,
      bloodTypes,
      rh,
      phone,
      city,
      address,
      email,
      studies,
      areaId,
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
        alert("Empleado modificado");
      } else {
        // crear
        dispatch(createEmployeeThunk(employee));
        alert("Empleado creado");
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
                  value={names}
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
                  value={identification}
                  placeholder="Ingresa numero de documento"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              {/* <div className="mb-3">
                <label htmlFor="bankAccount" className="form-label">
                  N° Cuenta Bancaria
                </label>
                <input
                  type="text"
                  id="bankAccount"
                  onChange={(e) => setBankAccount(e.target.value)}
                  value={bankAccount}
                  placeholder="Ingresa una cuenta bancaria"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div> */}
              {/* <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Genero
                </label>
                <select
                  type="text"
                  id="gender"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="femenino">Femenino</option>
                  <option value="masculino">Masculino</option>
                  <option value="otro">Otro</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div> */}
              <div className="mb-3">
                <label htmlFor="birthday" className="form-label">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="birthday"
                  onChange={(e) => setBirthday(e.target.value)}
                  value={birthday}
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              {/* <div className="mb-3">
                <label htmlFor="bloodTypes" className="form-label">
                  Tipo de Sangre
                </label>
                <select
                  type="text"
                  id="bloodTypes"
                  onChange={(e) => setBloodTypes(e.target.value)}
                  value={bloodTypes}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="ab">AB</option>
                  <option value="o">O</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div> */}
              {/* <div className="mb-3">
                <label htmlFor="rh" className="form-label">
                  RH
                </label>
                <select
                  type="text"
                  id="rh"
                  onChange={(e) => setRh(e.target.value)}
                  value={rh}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="+">+</option>
                  <option value="-">-</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div> */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Telefono
                </label>
                <input
                  type="text"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  placeholder="Ingresa un numero de telefono"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              {/* <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  Ciudad
                </label>
                <input
                  type="text"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  placeholder="Ingresa la ciudad"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div> */}
              {/* <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Direccion
                </label>
                <input
                  type="text"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  placeholder="Ingresa una direccion"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div> */}
              {/* <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Ingresa un email"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div> */}
              {/* <div className="mb-3">
                <label htmlFor="studies" className="form-label">
                  Grado Academico
                </label>
                <select
                  type="text"
                  id="studies"
                  onChange={(e) => setStudies(e.target.value)}
                  value={studies}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="profesional">Profesional</option>
                  <option value="tecnico-tecnologo">Tecnico/Tecnologo</option>
                  <option value="otro">Otro</option>
                  <option value="bachillerato">Bachillerato</option>
                  <option value="primaria">Primaria</option>
                  <option value="ninguno">Ninguno</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div> */}

              <div className="mb-3">
                <label htmlFor="salary" className="form-label">
                  Salario
                </label>
                <input
                  type="number"
                  id="salary"
                  onChange={(e) => setSalary(e.target.value)}
                  value={salary}
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
                  Fecha fin contrato
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
                <label htmlFor="areaId" className="form-label">
                  Area
                </label>
                <select
                  type="text"
                  id="areaId"
                  onChange={(e) => setAreaId(e.target.value)}
                  value={areaId}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  {Array.isArray(areas)
                    ? areas.map((area) => (
                        <option value={area.id} key={area.id}>
                          {area.nameArea}
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
              >
                {textButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmployeeForm;
