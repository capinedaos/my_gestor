import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import moment from "moment";
import { updateEmployeeThunk } from "../../app/slicesTalentManagement/employee.slice";
import {
  createContractThunk,
  getContractByEmployeeIdThunk,
  updateContractThunk,
} from "../../app/slicesTalentManagement/contract.slice";
import {
  getSocialSecurityByEmployeeIdThunk,
  updateSocialSecurityByIdThunk,
} from "../../app/slicesTalentManagement/socialSecurity.slice";
import {
  getEndowmentByEmployeeIdThunk,
  updateEndowmentByIdThunk,
} from "../../app/slicesTalentManagement/endowment.slice";
import {
  getFamilyInformationByEmployeeIdThunk,
  updateFamilyInformationByIdThunk,
} from "../../app/slicesTalentManagement/familyInformation.slice";
import {
  getHealthyLifeByEmployeeIdThunk,
  updateHealthyLifeByIdThunk,
} from "../../app/slicesTalentManagement/healthyLife.slice";
import { getSalaryIncreaseByEmployeeIdThunk } from "../../app/slicesTalentManagement/salaryIncrease.slice";

import {
  SalaryIncreaseForm,
  SalaryIncreaseList,
  ContractList,
  ModalInformation,
} from "../components";
import { ButtonReturn } from "../../components";

export const DetailEmployee = () => {
  const dispatch = useDispatch();
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");
  const [information, setInformation] = useState("");
  const { id } = useParams();

  const contract = useSelector((state) => state.contract);
  const [contracActive, setContracActive] = useState({});
  const [typeContract, setTypeContract] = useState("");
  const [salary, setSalary] = useState("");
  const [position, setPosition] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  // const employee = useSelector((state) => state.employee);
  const [names, setNames] = useState("");
  const [identification, setIdentification] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState(0);
  const [bloodTypes, setBloodTypes] = useState("");
  const [rh, setRh] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [studies, setStudies] = useState("");
  const [area, setArea] = useState("");

  const socialSecurity = useSelector((state) => state.socialSecurity);
  const [arl, setArl] = useState("");
  const [compensationBox, setCompensationBox] = useState("");
  const [eps, setEps] = useState("");
  const [afp, setAfp] = useState("");

  const endowment = useSelector((state) => state.endowment);
  const [pants, setPants] = useState("");
  const [shirt, setShirt] = useState("");
  const [shod, setShod] = useState("");

  const familyInformation = useSelector((state) => state.familyInformation);
  const [maritalStatus, setMaritalStatus] = useState("");
  const [dependents, setDependents] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState("");
  const [ageOfChildren, setAgeOfChildren] = useState("");
  const [emergencyNumber, setEmergencyNumber] = useState("");
  const [typeOfHousing, setTypeOfHousing] = useState("");
  const [socialStratum, setSocialStratum] = useState("");

  const healthyLife = useSelector((state) => state.healthyLife);
  const [hobby, setHobby] = useState("");
  const [alcoholConsumption, setAlcoholConsumption] = useState("");
  const [tobaccoUse, setTobaccoUse] = useState("");
  const [sports, setSports] = useState("");
  const [conveyance, setConveyance] = useState("");
  const [allergyMedicine, setAllergyMedicine] = useState("");
  const [diseases, setDiseases] = useState("");
  const [operations, setOperations] = useState("");
  const [medicines, setMedicines] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee/${id}`,
        getConfig()
      )
      .then((res) => {
        // console.log(res.data.employeeById);
        const currentDate = new Date();
        const birthday = new Date(res.data.employeeById.birthday);
        const difference = Math.abs(currentDate - birthday);
        const days = difference / (1000 * 3600 * 24) + 1;
        const age = Math.floor(days / 360);

        setNames(res.data.employeeById?.names);
        setIdentification(res.data.employeeById?.identification);
        setBankAccount(res.data.employeeById?.bankAccount);
        setGender(res.data.employeeById?.gender);
        setBirthday(
          moment(res.data.employeeById?.birthday).format("YYYY-MM-DD")
        );
        setAge(age);
        setBloodTypes(res.data.employeeById?.bloodTypes);
        setRh(res.data.employeeById?.rh);
        setPhone(res.data.employeeById?.phone);
        setCity(res.data.employeeById?.city);
        setAddress(res.data.employeeById?.address);
        setEmail(res.data.employeeById?.email);
        setStudies(res.data.employeeById?.studies);
        setArea(res.data.employeeById?.area);
      });

    dispatch(getContractByEmployeeIdThunk(id));
    const contractFind = contract.find(
      (contract) => contract.status === "activo"
    );
    setContracActive(contractFind);

    setTypeContract(contractFind?.typeContract);
    setSalary(contractFind?.salary);
    setPosition(contractFind?.position);
    setInitialDate(moment(contractFind?.initialDate).format("YYYY-MM-DD"));
    setFinalDate(moment(contractFind?.finalDate).format("YYYY-MM-DD"));

    dispatch(getSocialSecurityByEmployeeIdThunk(id));
    setArl(socialSecurity?.arl);
    setCompensationBox(socialSecurity?.compensationBox);
    setEps(socialSecurity?.eps);
    setAfp(socialSecurity?.afp);

    dispatch(getEndowmentByEmployeeIdThunk(id));
    setPants(endowment?.pants);
    setShirt(endowment?.shirt);
    setShod(endowment?.shod);

    dispatch(getFamilyInformationByEmployeeIdThunk(id));
    setMaritalStatus(familyInformation?.maritalStatus);
    setDependents(familyInformation?.dependents);
    setNumberOfChildren(familyInformation?.numberOfChildren);
    setAgeOfChildren(familyInformation?.ageOfChildren);
    setEmergencyNumber(familyInformation?.emergencyNumber);
    setTypeOfHousing(familyInformation?.typeOfHousing);
    setSocialStratum(familyInformation?.socialStratum);

    dispatch(getHealthyLifeByEmployeeIdThunk(id));
    setHobby(healthyLife?.hobby);
    setAlcoholConsumption(healthyLife?.alcoholConsumption);
    setTobaccoUse(healthyLife?.tobaccoUse);
    setSports(healthyLife?.sports);
    setConveyance(healthyLife?.conveyance);
    setAllergyMedicine(healthyLife?.allergyMedicine);
    setDiseases(healthyLife?.diseases);
    setOperations(healthyLife?.operations);
    setMedicines(healthyLife?.medicines);

    dispatch(getSalaryIncreaseByEmployeeIdThunk(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  const onSubmitSocialSecurity = (e) => {
    e.preventDefault();
    const data = {
      arl,
      compensationBox,
      eps,
      afp,
    };
    dispatch(updateSocialSecurityByIdThunk(data, socialSecurity.id));
    setInformation("Seguridad social modificada");
  };

  const onSubmitEndowment = (e) => {
    e.preventDefault();
    const data = {
      pants,
      shirt,
      shod,
    };
    dispatch(updateEndowmentByIdThunk(data, endowment.id));
    setInformation("Informacion dotacion modificada");
  };

  const onSubmitFamilyInformation = (e) => {
    e.preventDefault();
    const data = {
      maritalStatus,
      dependents,
      numberOfChildren,
      ageOfChildren,
      emergencyNumber,
      typeOfHousing,
      socialStratum,
    };
    dispatch(updateFamilyInformationByIdThunk(data, familyInformation.id));
    setInformation("Informacion familiar modificada");
  };

  const onSubmitHealthyLife = (e) => {
    e.preventDefault();
    const data = {
      hobby,
      alcoholConsumption,
      tobaccoUse,
      sports,
      conveyance,
      allergyMedicine,
      diseases,
      operations,
      medicines,
    };
    dispatch(updateHealthyLifeByIdThunk(data, healthyLife.id));
    setInformation("Informacion vida saludable modificada");
  };

  const onSubmitEmployee = (e) => {
    e.preventDefault();
    const data = {
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
      area,
    };
    dispatch(updateEmployeeThunk(data, id));
    setInformation("Informacion empleado modificado");
  };

  const onSubmitContract = (e) => {
    e.preventDefault();
    const data = {
      typeContract,
      salary,
      position,
      initialDate,
      finalDate,
      employeeId: id,
    };

    if (new Date(initialDate).getTime() > new Date(finalDate).getTime()) {
      alert("Fecha invalida");
    } else {
      if (contracActive === undefined) {
        dispatch(createContractThunk(data));
        setInformation("Contrato creado");
      } else {
        dispatch(updateContractThunk(data, contracActive.id));
        setInformation("Contrato modificado");
      }
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <h1>Detalle de empleado</h1>
          <ButtonReturn route={"/talent-management/employee"} />
          <ModalInformation
            idModal={"modalInformation"}
            className={"modal fade"}
            tabIndex={"-1"}
            aria-labelledby={"exampleModalLabel"}
            aria-hidden={"true"}
            information={information}
          />

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="basic-data">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-basic-data"
                  aria-expanded="false"
                  aria-controls="collapse-basic-data"
                >
                  Datos Basicos
                </button>
              </h2>
              <div
                id="collapse-basic-data"
                className="accordion-collapse collapse"
                aria-labelledby="basic-data"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container-fluid">
                    <form onSubmit={onSubmitEmployee} noValidate>
                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="names"
                          onChange={(e) => setNames(e.target.value)}
                          value={names || ""}
                          placeholder="Ingresa los nombres"
                          className="form-control"
                        />
                        <label htmlFor="names">Nombres</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="identification"
                          onChange={(e) => setIdentification(e.target.value)}
                          value={identification || ""}
                          placeholder="Ingresa numero de documento"
                          className="form-control"
                        />
                        <label htmlFor="identification">N° Documento</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="bankAccount"
                          onChange={(e) => setBankAccount(e.target.value)}
                          value={bankAccount || ""}
                          placeholder="Ingresa una cuenta bancaria"
                          className="form-control"
                        />
                        <label htmlFor="bankAccount">N° Cuenta Bancaria</label>
                      </div>

                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="gender"
                          onChange={(e) => setGender(e.target.value)}
                          value={gender || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="femenino">Femenino</option>
                          <option value="masculino">Masculino</option>
                          <option value="otro">Otro</option>
                        </select>
                        <label htmlFor="gender">Genero</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="date"
                          id="birthday"
                          onChange={(e) => setBirthday(e.target.value)}
                          value={birthday || ""}
                          className="form-control"
                        />
                        <label htmlFor="birthday">Fecha de Nacimiento</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="age"
                          defaultValue={age || ""}
                          className="form-control"
                        />
                        <label htmlFor="age">Edad</label>
                      </div>

                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="bloodTypes"
                          onChange={(e) => setBloodTypes(e.target.value)}
                          value={bloodTypes || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="a">A</option>
                          <option value="b">B</option>
                          <option value="ab">AB</option>
                          <option value="o">O</option>
                        </select>
                        <label htmlFor="bloodTypes">Tipo de Sangre</label>
                      </div>

                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="rh"
                          onChange={(e) => setRh(e.target.value)}
                          value={rh || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="+">+</option>
                          <option value="-">-</option>
                        </select>
                        <label htmlFor="rh">RH</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="phone"
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone || ""}
                          placeholder="Ingresa un numero de telefono"
                          className="form-control"
                        />
                        <label htmlFor="phone">Telefono</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="city"
                          onChange={(e) => setCity(e.target.value)}
                          value={city || ""}
                          placeholder="Ingresa la ciudad"
                          className="form-control"
                        />
                        <label htmlFor="city">Ciudad</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="address"
                          onChange={(e) => setAddress(e.target.value)}
                          value={address || ""}
                          placeholder="Ingresa una direccion"
                          className="form-control"
                        />
                        <label htmlFor="address">Direccion</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="email"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email || ""}
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="Ingresa un email"
                        />
                        <label htmlFor="email">Email</label>
                      </div>

                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="studies"
                          onChange={(e) => setStudies(e.target.value)}
                          value={studies || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="profesional">Profesional</option>
                          <option value="tecnico-tecnologo">
                            Tecnico/Tecnologo
                          </option>
                          <option value="otro">Otro</option>
                          <option value="bachillerato">Bachillerato</option>
                          <option value="primaria">Primaria</option>
                          <option value="ninguno">Ninguno</option>
                        </select>
                        <label htmlFor="studies">Grado Academico</label>
                      </div>

                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="area"
                          onChange={(e) => setArea(e.target.value)}
                          value={area || ""}
                          className="form-control"
                        >
                          <option value="" disabled>
                            Seleccione una opcion
                          </option>
                          <option value="Administrativa">Administrativa</option>
                          <option value="Ventas">Ventas</option>
                          <option value="Planta">Planta</option>
                        </select>
                        <label htmlFor="areaId">Area</label>
                      </div>

                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-warning"
                          type="submit"
                          data-bs-target="#modalInformation"
                          data-bs-toggle="modal"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="contract">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-contract"
                  aria-expanded="false"
                  aria-controls="collapse-contract"
                >
                  Contrato
                </button>
              </h2>
              <div
                id="collapse-contract"
                className="accordion-collapse collapse"
                aria-labelledby="contract"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container-fluid">
                    <form onSubmit={onSubmitContract} noValidate>
                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="typeContract"
                          onChange={(e) => setTypeContract(e.target.value)}
                          value={typeContract || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="Fijo">Fijo</option>
                          <option value="Indefinido">Indefinido</option>
                          <option value="Obra o labor">Obra o labor</option>
                        </select>
                        <label htmlFor="typeContract">Tipo de contrato</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="number"
                          id="salary"
                          onChange={(e) => setSalary(e.target.value)}
                          value={salary || 0}
                          placeholder="Ingresa un valor"
                          className="form-control"
                        />
                        <label htmlFor="salary">Salario</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="position"
                          onChange={(e) => setPosition(e.target.value)}
                          value={position || ""}
                          placeholder="Ingresa el cargo"
                          className="form-control"
                        />
                        <label htmlFor="position">Cargo</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="date"
                          id="initialDate"
                          onChange={(e) => setInitialDate(e.target.value)}
                          value={initialDate || ""}
                          className="form-control"
                        />
                        <label htmlFor="initialDate">Fecha inicial</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="date"
                          id="finalDate"
                          onChange={(e) => setFinalDate(e.target.value)}
                          value={finalDate || ""}
                          className="form-control"
                        />
                        <label htmlFor="finalDate">Fecha final</label>
                      </div>

                      <div className="d-grid gap-2">
                        {contracActive === undefined ? (
                          <button
                            className="btn btn-primary"
                            type="submit"
                            data-bs-target="#modalInformation"
                            data-bs-toggle="modal"
                          >
                            <i className="bi bi-plus-circle"></i>
                          </button>
                        ) : (
                          <button
                            className="btn btn-warning"
                            type="submit"
                            data-bs-target="#modalInformation"
                            data-bs-toggle="modal"
                          >
                            <i className="bi bi-pencil"></i>
                          </button>
                        )}
                      </div>
                    </form>
                  </div>

                  <div
                    className="table-responsive rounded-3 mt-3"
                    style={{ height: "410px" }}
                  >
                    <h3>Historial de contratos</h3>
                    <ContractList />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="salary-increase">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-salary-increase"
                  aria-expanded="false"
                  aria-controls="collapse-salary-increase"
                >
                  Incrementos de salario
                </button>
              </h2>
              <div
                id="collapse-salary-increase"
                className="accordion-collapse collapse"
                aria-labelledby="salary-increase"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container-fluid">
                    <button
                      type="button"
                      className="btn btn-primary mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#modalForm"
                      onClick={() => {
                        setTitleModal("Registrar aumento");
                        setTextButton("Enviar");
                      }}
                    >
                      <i className="bi bi-plus-circle"></i>
                    </button>

                    <SalaryIncreaseForm
                      className={"modal fade"}
                      idModal={"modalForm"}
                      tabIndex={"-1"}
                      aria-labelledby={"exampleModalLabel"}
                      aria-hidden={"true"}
                      titleModal={titleModal}
                      textButton={textButton}
                    />

                    <SalaryIncreaseList />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="social-security">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Seguridad Social
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="social-security"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container-fluid">
                    <form onSubmit={onSubmitSocialSecurity} noValidate>
                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="arl"
                          onChange={(e) => setArl(e.target.value)}
                          value={arl || ""}
                          placeholder="Ingresa la arl"
                          className="form-control"
                        />
                        <label htmlFor="arl">ARL</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="compensationBox"
                          onChange={(e) => setCompensationBox(e.target.value)}
                          value={compensationBox || ""}
                          placeholder="Ingresa la caja compensacion"
                          className="form-control"
                        />
                        <label htmlFor="compensationBox">
                          Caja compensacion
                        </label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="eps"
                          onChange={(e) => setEps(e.target.value)}
                          value={eps || ""}
                          placeholder="Ingresa la eps"
                          className="form-control"
                        />
                        <label htmlFor="eps">EPS</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="afp"
                          onChange={(e) => setAfp(e.target.value)}
                          value={afp || ""}
                          placeholder="Ingresa la afp"
                          className="form-control"
                        />
                        <label htmlFor="afp">AFP</label>
                      </div>

                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-warning"
                          type="submit"
                          data-bs-target="#modalInformation"
                          data-bs-toggle="modal"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="endowment">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-endowment"
                  aria-expanded="false"
                  aria-controls="collapse-endowment"
                >
                  Dotacion
                </button>
              </h2>
              <div
                id="collapse-endowment"
                className="accordion-collapse collapse"
                aria-labelledby="endowment"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container-fluid">
                    <form onSubmit={onSubmitEndowment} noValidate>
                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="pants"
                          onChange={(e) => setPants(e.target.value)}
                          value={pants || ""}
                          placeholder="Ingresa la talla"
                          className="form-control"
                        />
                        <label htmlFor="pants">Pantalon</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="shirt"
                          onChange={(e) => setShirt(e.target.value)}
                          value={shirt || ""}
                          placeholder="Ingresa la talla"
                          className="form-control"
                        />
                        <label htmlFor="shirt">Camisa</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="shod"
                          onChange={(e) => setShod(e.target.value)}
                          value={shod || ""}
                          placeholder="Ingresa la talla"
                          className="form-control"
                        />
                        <label htmlFor="shod">Calzado</label>
                      </div>
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-warning"
                          type="submit"
                          data-bs-target="#modalInformation"
                          data-bs-toggle="modal"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="family-information">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-family-information"
                  aria-expanded="false"
                  aria-controls="collapse-family-information"
                >
                  Información Familiar
                </button>
              </h2>
              <div
                id="collapse-family-information"
                className="accordion-collapse collapse"
                aria-labelledby="family-information"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container-fluid">
                    <form onSubmit={onSubmitFamilyInformation} noValidate>
                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="maritalStatus"
                          onChange={(e) => setMaritalStatus(e.target.value)}
                          value={maritalStatus || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="femenino">Solter@</option>
                          <option value="masculino">Casad@</option>
                          <option value="masculino">Union libre</option>
                          <option value="masculino">Viud@</option>
                        </select>
                        <label htmlFor="maritalStatus">Estado civil</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="number"
                          id="dependents"
                          onChange={(e) => setDependents(e.target.value)}
                          value={dependents || ""}
                          placeholder="Ingresa una cantidad"
                          className="form-control"
                        />
                        <label htmlFor="dependents">
                          Numero de dependientes
                        </label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="number"
                          id="numberOfChildren"
                          onChange={(e) => setNumberOfChildren(e.target.value)}
                          value={numberOfChildren || ""}
                          placeholder="Ingresa una cantidad"
                          className="form-control"
                        />
                        <label htmlFor="numberOfChildren">
                          Numero de hijos
                        </label>
                      </div>

                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="ageOfChildren"
                          onChange={(e) => setAgeOfChildren(e.target.value)}
                          value={ageOfChildren || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="1-5 años">1-5 años</option>
                          <option value="6-10 años">6-10 años</option>
                          <option value="11-18">11-18 años</option>
                          <option value="18+">18+</option>
                        </select>
                        <label htmlFor="ageOfChildren">Edad de hijos</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="emergencyNumber"
                          onChange={(e) => setEmergencyNumber(e.target.value)}
                          value={emergencyNumber || ""}
                          placeholder="Ingrese un telefono"
                          className="form-control"
                        />
                        <label htmlFor="emergencyNumber">
                          Telefono de emergencia
                        </label>
                      </div>

                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="typeOfHousing"
                          onChange={(e) => setTypeOfHousing(e.target.value)}
                          value={typeOfHousing || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="Propia">Propia</option>
                          <option value="Arrendada">Arrendada</option>
                          <option value="Familiar">Familiar</option>
                        </select>
                        <label htmlFor="typeOfHousing">Tipo de vivienda</label>
                      </div>

                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="socialStratum"
                          onChange={(e) => setSocialStratum(e.target.value)}
                          value={socialStratum || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="1">1. Bajo-bajo</option>
                          <option value="2">2. Bajo</option>
                          <option value="3">3. Medio-bajo</option>
                          <option value="4">4. Medio</option>
                          <option value="5">5. Medio - Alto</option>
                          <option value="6">6. Alto</option>
                        </select>
                        <label htmlFor="socialStratum">Estrato social</label>
                      </div>

                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-warning"
                          type="submit"
                          data-bs-target="#modalInformation"
                          data-bs-toggle="modal"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="healthy-life">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-healthy-life"
                  aria-expanded="false"
                  aria-controls="collapse-healthy-life"
                >
                  Vida Saludable
                </button>
              </h2>
              <div
                id="collapse-healthy-life"
                className="accordion-collapse collapse"
                aria-labelledby="healthy-life"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container-fluid">
                    <form onSubmit={onSubmitHealthyLife} noValidate>
                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="hobby"
                          onChange={(e) => setHobby(e.target.value)}
                          value={hobby || ""}
                          placeholder="Ingrese un pasatiempo"
                          className="form-control"
                        />
                        <label htmlFor="hobby">Pasatiempo</label>
                      </div>

                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="alcoholConsumption"
                          onChange={(e) =>
                            setAlcoholConsumption(e.target.value)
                          }
                          value={alcoholConsumption || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="SI">Si</option>
                          <option value="NO">No</option>
                        </select>
                        <label htmlFor="alcoholConsumption">
                          Consumo de alcohol
                        </label>
                      </div>

                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="tobaccoUse"
                          onChange={(e) => setTobaccoUse(e.target.value)}
                          value={tobaccoUse || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="true">Si</option>
                          <option value="false">No</option>
                        </select>
                        <label htmlFor="tobaccoUse">Consumo de tabaco</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="sports"
                          onChange={(e) => setSports(e.target.value)}
                          value={sports || ""}
                          placeholder="Ingrese un deporte"
                          className="form-control"
                        />
                        <label htmlFor="sports">Deportes</label>
                      </div>

                      <div className="form-floating mb-1">
                        <select
                          type="text"
                          id="conveyance"
                          onChange={(e) => setConveyance(e.target.value)}
                          value={conveyance || ""}
                          className="form-control"
                        >
                          <option value="" defaultValue>
                            Seleccione una opcion
                          </option>
                          <option value="Vehiculo propio">
                            Vehiculo propio
                          </option>
                          <option value="Transporte publico">
                            Transporte publico
                          </option>
                        </select>
                        <label htmlFor="conveyance">Medio de transporte</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="allergyMedicine"
                          onChange={(e) => setAllergyMedicine(e.target.value)}
                          value={allergyMedicine || ""}
                          placeholder="Ingrese una alergia"
                          className="form-control"
                        />
                        <label htmlFor="allergyMedicine">
                          Alergia medicamentos
                        </label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="diseases"
                          onChange={(e) => setDiseases(e.target.value)}
                          value={diseases || ""}
                          placeholder="Ingrese una enfermedad"
                          className="form-control"
                        />
                        <label htmlFor="diseases">Enfermedades</label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="operations"
                          onChange={(e) => setOperations(e.target.value)}
                          value={operations || ""}
                          placeholder="Ingrese una operacion"
                          className="form-control"
                        />
                        <label htmlFor="operations">
                          Operaciones o cirugias
                        </label>
                      </div>

                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          id="medicines"
                          onChange={(e) => setMedicines(e.target.value)}
                          value={medicines || ""}
                          placeholder="Ingrese un medicamento"
                          className="form-control"
                        />
                        <label htmlFor="medicines">
                          Medicamentos que consume
                        </label>
                      </div>

                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-warning"
                          type="submit"
                          data-bs-target="#modalInformation"
                          data-bs-toggle="modal"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
