import React, { useState } from "react";
import { LiquidationForm, LiquidationList } from "../components";
import { ButtonReturn } from "../../components";

export const Liquidation = () => {
  const [liquidationSelected, setLiquidationSelected] = useState(null);
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");

  const selectLiquidation = (liquidation) => {
    setLiquidationSelected(liquidation);
  };

  const deselectLiquidation = () => {
    setLiquidationSelected(null);
  };

  return (
    <div className="container">
      <h2>Liquidaciones</h2>
      <div className="display">
        <ButtonReturn route={"/talent-management/home"} />
        <button
          type="button"
          className="btn btn-primary mb-4"
          data-bs-toggle="modal"
          data-bs-target="#modalForm"
          onClick={() => {
            setTitleModal("Registrar liquidacion");
            setTextButton("Crear liquidacion");
            deselectLiquidation();
          }}
        >
          <i className="bi bi-plus-circle"></i>
        </button>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          // value={search}
          // onChange={handleChange}
          className="form-control"
          placeholder="Busqueda por Empleado"
          aria-label="Busqueda por Empleado"
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

      <LiquidationForm
        className={"modal fade"}
        idModal={"modalForm"}
        tabIndex={"-1"}
        aria-labelledby={"exampleModalLabel"}
        aria-hidden={"true"}
        liquidationSelected={liquidationSelected}
        deselectLiquidation={deselectLiquidation}
        titleModal={titleModal}
        textButton={textButton}
      />

      <LiquidationList
        setTitleModal={setTitleModal}
        selectLiquidation={selectLiquidation}
        setTextButton={setTextButton}
      />
    </div>
  );
};
