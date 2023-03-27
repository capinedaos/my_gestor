import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormValidation } from "../../hooks";
import { ModalInformation } from "./ModalInformation";
import { createCompanyThunk } from "../../app/slices/company.slice";

export const CompanyForm = ({
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
}) => {
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");
  const [nit, setNit] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [information, setInformation] = useState("");

  useFormValidation();

  const onSubmit = (e) => {
    e.preventDefault();

    const company = {
      companyName,
      nit,
      address,
      city,
      phone,
      email,
    };

    // crear
    dispatch(createCompanyThunk(company));
    setInformation("Informacion registrada");
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
                Registrar Empresa
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
                <label htmlFor="companyName" className="form-label">
                  Nombre de la empresa
                </label>
                <input
                  type="text"
                  id="companyName"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName || ""}
                  placeholder="Ingresa el nombre"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="nit" className="form-label">
                  Nit
                </label>
                <input
                  type="text"
                  id="nit"
                  onChange={(e) => setNit(e.target.value)}
                  value={nit || ""}
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
                <label htmlFor="address" className="form-label">
                  Direccion
                </label>
                <input
                  type="text"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address || ""}
                  placeholder="Ingresa una direccion"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  Ciudad
                </label>
                <input
                  type="text"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  value={city || ""}
                  placeholder="Ingresa una ciudad"
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
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email || ""}
                  placeholder="Ingresa un email"
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
                Registrar
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
