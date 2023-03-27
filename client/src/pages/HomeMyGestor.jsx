/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModuleCard, NavBar } from "../components";
import {
  getCompanyThunk,
  updateCompanyThunk,
} from "../app/slices/company.slice";
import { useDispatch, useSelector } from "react-redux";
import { CompanyForm, ModalInformation } from "../talentManagement/components";

const HomeMyGestor = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company);
  const [information, setInformation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [nit, setNit] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setCompanyName(company?.companyName);
    setNit(company?.nit);
    setAddress(company?.address);
    setCity(company?.city);
    setPhone(company?.phone);
    setEmail(company?.email);
  }, [company]);

  useEffect(() => {
    dispatch(getCompanyThunk());
  }, [dispatch]);

  const onSubmitCompany = (e) => {
    e.preventDefault();
    const data = {
      companyName,
      nit,
      address,
      city,
      phone,
      email,
    };
    dispatch(updateCompanyThunk(data, 1));
    setInformation("Informacion empleado modificado");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        {company === null ? (
          <>
            <div className="container-fluid text-sm-center mt-3">
              <button
                type="button"
                className="btn btn-primary mb-4"
                data-bs-toggle="modal"
                data-bs-target="#modalForm"
              >
                Registrar Empresa
              </button>
            </div>

            <CompanyForm
              className={"modal fade"}
              idModal={"modalForm"}
              tabIndex={"-1"}
              aria-labelledby={"exampleModalLabel"}
              aria-hidden={"true"}
            />
          </>
        ) : (
          <>
            <div className="accordion mt-5" id="accordionExample">
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
                    INFORMACION DE LA EMPRESA
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
                      <form onSubmit={onSubmitCompany} noValidate>
                        <div className="form-floating mb-1">
                          <input
                            type="text"
                            id="companyName"
                            onChange={(e) => setCompanyName(e.target.value)}
                            value={companyName || ""}
                            placeholder="Ingresa los nombres"
                            className="form-control"
                          />
                          <label htmlFor="companyName">Nombres</label>
                        </div>

                        <div className="form-floating mb-1">
                          <input
                            type="text"
                            id="nit"
                            onChange={(e) => setNit(e.target.value)}
                            value={nit || ""}
                            placeholder="Ingresa numero de documento"
                            className="form-control"
                          />
                          <label htmlFor="nit">Nit</label>
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

            <ModalInformation
              idModal={"modalInformation"}
              className={"modal fade"}
              tabIndex={"-1"}
              aria-labelledby={"exampleModalLabel"}
              aria-hidden={"true"}
              information={information}
            />

            <div className="container_module_card">
              <Link to="/talent-management/home" className="link">
                <ModuleCard
                  module_name="RRHH"
                  icon={<i className="bi bi-people"></i>}
                />
              </Link>

              <Link to="/accounting-system/home" className="link">
                <ModuleCard
                  module_name="CONTABILIDAD"
                  icon={<i className="bi bi-calculator"></i>}
                />
              </Link>

              <Link to="/job-security/home" className="link">
                <ModuleCard
                  // module_name="SG-SST"
                  // icon={<i className="bi bi-clipboard2-pulse"></i>}
                  module_name=""
                  icon={<i className="bi bi-question-square"></i>}
                />
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomeMyGestor;
