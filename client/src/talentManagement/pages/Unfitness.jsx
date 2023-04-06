import React, { useState } from "react";
import { UnfitnessForm, UnfitnessList } from "../components";
import { ButtonReturn } from "../../components";

export const Unfitness = () => {
  const [unfitnessSelected, setUnfitnessSelected] = useState(null);
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");

  const selectUnfitness = (unfitness) => {
    setUnfitnessSelected(unfitness);
  };

  const deselectUnfitness = () => {
    setUnfitnessSelected(null);
  };

  return (
    <>
      <div className="container">
        <h2>Incapacidades</h2>

        <div className="display">
          <ButtonReturn route={"/talent-management/home"} />
          <button
            type="button"
            className="btn btn-primary mb-4"
            data-bs-toggle="modal"
            data-bs-target="#modalForm"
            onClick={() => {
              setTitleModal("Registrar nueva incapacidad");
              setTextButton("Agregar nueva incapacidad");
              deselectUnfitness();
            }}
          >
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>

        <UnfitnessForm
          className={"modal fade"}
          idModal={"modalForm"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          unfitnessSelected={unfitnessSelected}
          deselectUnfitness={deselectUnfitness}
          titleModal={titleModal}
          textButton={textButton}
        />

        <UnfitnessList
          setTitleModal={setTitleModal}
          selectUnfitness={selectUnfitness}
          setTextButton={setTextButton}
        />
      </div>
    </>
  );
};
