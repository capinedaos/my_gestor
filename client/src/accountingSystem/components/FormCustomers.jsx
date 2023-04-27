import React from "react";

export const FormCustomers = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="needs-validation" noValidate>
      <div className="display">
        <div>
          <div className="input-group mb-3">
            <span className="input-group-text">Codigo</span>
            <input type="text" className="form-control" />
            <span className="input-group-text">Nombre</span>
            <input type="text" className="form-control" />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Direccion</span>
            <input type="text" className="form-control" />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Movil</span>
            <input type="text" className="form-control" />
            <span className="input-group-text">Telefono</span>
            <input type="text" className="form-control" />
            <span className="input-group-text">Email</span>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Contacto</span>
            <input type="text" className="form-control" />
            <span className="input-group-text">Tipo</span>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="mx-3">
          <div className="input-group mb-3">
            <span className="input-group-text">Pais</span>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Ciudad</span>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Vendedor</span>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Precio</span>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Termino</span>
        <input type="text" className="form-control" />
        <span className="input-group-text">Cupo</span>
        <input type="text" className="form-control" />
      </div>

      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" class="btn btn-primary">
          Aceptar
        </button>
        <button type="button" class="btn btn-secondary">
          Cancelar
        </button>
      </div>
    </form>
  );
};
