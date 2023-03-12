import React from "react";
import { ButtonReturn, ItemButton } from "../../components";
import { InvoicingList } from "../components";

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
        <div className="container">
          <ItemButton
            icon={<i className="bi bi-file-earmark-plus-fill"></i>}
            title={"Crear"}
          />
          <ItemButton
            icon={<i className="bi bi-file-earmark-plus-fill"></i>}
            title={"Modificar"}
          />
          <ItemButton
            icon={<i className="bi bi-file-earmark-plus-fill"></i>}
            title={"Imprimir"}
          />
          <ItemButton
            icon={<i className="bi bi-file-earmark-plus-fill"></i>}
            title={"Eliminar"}
          />
          <ItemButton
            icon={<i className="bi bi-file-earmark-plus-fill"></i>}
            title={"Ver Dcmto"}
          />
          <ItemButton
            icon={<i className="bi bi-file-earmark-plus-fill"></i>}
            title={"Duplicar"}
          />
        </div>
      </div>
    </>
  );
};
