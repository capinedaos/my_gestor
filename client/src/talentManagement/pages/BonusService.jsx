import React, { useState } from "react";
import { BonusServiceForm, BonusServiceList } from "../components";
import { ButtonReturn } from "../../components";

export const BonusService = () => {
  const [bonusServiceSelected, setBonusServiceSelected] = useState(null);
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");

  const selectBonusService = (bonusService) => {
    setBonusServiceSelected(bonusService);
  };

  const deselectBonusService = () => {
    setBonusServiceSelected(null);
  };

  return (
    <>
      <div className="container">
        <h2>Prima de servicios</h2>

        <div className="display">
          <ButtonReturn route={"/talent-management/home"} />
          <button
            type="button"
            className="btn btn-primary mb-4"
            data-bs-toggle="modal"
            data-bs-target="#modalForm"
            onClick={() => {
              setTitleModal("Registrar prima");
              setTextButton("Agregar prima");
              deselectBonusService();
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

        <BonusServiceForm
          className={"modal fade"}
          idModal={"modalForm"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          bonusServiceSelected={bonusServiceSelected}
          deselectBonusService={deselectBonusService}
          titleModal={titleModal}
          textButton={textButton}
        />

        <BonusServiceList
          setTitleModal={setTitleModal}
          selectBonusService={selectBonusService}
          setTextButton={setTextButton}
        />
      </div>
    </>
  );
};
