import React from "react";
import { ButtonReturn, ItemButton } from "../../components";
import { CustomersList } from "../components";
import { Link } from "react-router-dom";

export const Customers = () => {
  return (
    <>
      <div className="container">
        <h2>Clientes-Proveedores</h2>
        <ButtonReturn route={"/accounting-system/home"} />
        <div className="input-group mb-3">
          <input
            type="text"
            // value={search}
            // onChange={handleChange}
            className="form-control"
            placeholder="Busqueda por Nombre o Tipo"
            aria-label="Busqueda por Nombre o Tipo"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-info"
            type="button"
            id="button-addon2"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
        <CustomersList />
        <div className="d-flex justify-content-between mt-3">
          <Link to="/accounting-system/create-customers" className="link">
            <ItemButton
              icon={<i className="bi bi-file-earmark-plus-fill"></i>}
              title={"Crear"}
            />
          </Link>

          <Link to="/accounting-system/update-customers" className="link">
            <ItemButton
              icon={<i className="bi bi-pencil"></i>}
              title={"Modificar"}
            />
          </Link>

          <Link to="/accounting-system/#" className="link">
            <ItemButton
              icon={<i className="bi bi-zoom-in"></i>}
              title={"Consultar"}
            />
          </Link>

          <ItemButton
            icon={<i className="bi bi-trash"></i>}
            title={"Eliminar"}
          />
          <ItemButton icon={<i className="bi bi-coin"></i>} title={"Balance"} />
          <ItemButton
            icon={<i className="bi bi-journals"></i>}
            title={"Reportes"}
          />
        </div>
      </div>
    </>
  );
};
