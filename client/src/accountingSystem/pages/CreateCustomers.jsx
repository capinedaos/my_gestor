import React, { useEffect } from "react";
import { ButtonReturn, ItemButton } from "../../components";

export const CreateCustomers = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <h2>Crear Cliente - Proveedor</h2>
        <ButtonReturn route={"/accounting-system/customers"} />
        <form
          onSubmit={onSubmit}
          className="needs-validation border border-danger"
          noValidate
        >
          <div className="row">
            <div className="col display">
              <label htmlFor="names" className="form-label">
                Codigo
              </label>
              <input
                type="text"
                id="names"
                // onChange={(e) => setNames(e.target.value)}
                // value={names || ""}
                className="form-control"
                required
              />
              <div className="valid-feedback">
                Campo ingresado correctamente
              </div>
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
            <div className="col display">
              <label htmlFor="names" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="names"
                // onChange={(e) => setNames(e.target.value)}
                // value={names || ""}
                className="form-control"
                required
              />
              <div className="valid-feedback">
                Campo ingresado correctamente
              </div>
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
          <div className="row">
            <div className="col display">
              <label htmlFor="names" className="form-label">
                Direccion
              </label>
              <input
                type="text"
                id="names"
                // onChange={(e) => setNames(e.target.value)}
                // value={names || ""}
                className="form-control"
                required
              />
              <div className="valid-feedback">
                Campo ingresado correctamente
              </div>
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
          <div className="row">
            <div className="col display">
              <label htmlFor="names" className="form-label">
                Telefono
              </label>
              <input
                type="text"
                id="names"
                // onChange={(e) => setNames(e.target.value)}
                // value={names || ""}
                className="form-control"
                required
              />
              <div className="valid-feedback">
                Campo ingresado correctamente
              </div>
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
            <div className="col display">
              <label htmlFor="names" className="form-label">
                Movil
              </label>
              <input
                type="text"
                id="names"
                // onChange={(e) => setNames(e.target.value)}
                // value={names || ""}
                className="form-control"
                required
              />
              <div className="valid-feedback">
                Campo ingresado correctamente
              </div>
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
            <div className="col display">
              <label htmlFor="names" className="form-label">
                Email
              </label>
              <input
                type="text"
                id="names"
                // onChange={(e) => setNames(e.target.value)}
                // value={names || ""}
                className="form-control"
                required
              />
              <div className="valid-feedback">
                Campo ingresado correctamente
              </div>
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
