import React from "react";
import { ButtonReturn, ItemButton } from "../../components";
import { InvoicingList } from "../components";
import { Link } from "react-router-dom";

export const Invoicing = () => {
  return (
    <>
      <div className="container">
        <h2>Facturacion</h2>
        <ButtonReturn route={"/accounting-system/home"} />
        <div className="input-group mb-3">
          <input
            type="text"
            // value={search}
            // onChange={handleChange}
            className="form-control"
            placeholder="Busqueda por Cliente o Vendedor"
            aria-label="Busqueda por Cliente o Vendedor"
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
        <InvoicingList />
        <div className="d-flex justify-content-between mt-3">
          <Link to="/accounting-system/create-invoicing" className="link">
            <ItemButton
              icon={<i className="bi bi-file-earmark-plus-fill"></i>}
              title={"Crear"}
            />
          </Link>

          <ItemButton
            icon={<i className="bi bi-pencil"></i>}
            title={"Modificar"}
          />
          <ItemButton
            icon={<i className="bi bi-printer"></i>}
            title={"Imprimir"}
          />
          <ItemButton
            icon={<i className="bi bi-trash"></i>}
            title={"Eliminar"}
          />
          <ItemButton
            icon={<i className="bi bi-zoom-in"></i>}
            title={"Ver Dcmto"}
          />
          <ItemButton
            icon={<i className="bi bi-repeat"></i>}
            title={"Duplicar"}
          />
        </div>
      </div>
    </>
  );
};
