import React, { useState } from "react";
import { MissingWorkForm, MissingWorkList } from "../components";
import { ButtonReturn } from "../../components";

export const MissingWork = () => {
  const [missingWorkSelected, setMissingWorkSelected] = useState(null);
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");

  const selectMissingWork = (missingWork) => {
    setMissingWorkSelected(missingWork);
  };

  const deselectMissingWork = () => {
    setMissingWorkSelected(null);
  };
  return (
    <>
      <div className="container">
        <h2>Ausencias</h2>

        <div className="display">
          <ButtonReturn route={"/talent-management/home"} />
          <button
            type="button"
            className="btn btn-primary mb-4"
            data-bs-toggle="modal"
            data-bs-target="#modalForm"
            onClick={() => {
              setTitleModal("Registrar ausencia");
              setTextButton("Agregar ausencia");
              deselectMissingWork();
            }}
          >
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>

      

        <MissingWorkForm
          className={"modal fade"}
          idModal={"modalForm"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          missingWorkSelected={missingWorkSelected}
          deselectMissingWork={deselectMissingWork}
          titleModal={titleModal}
          textButton={textButton}
        />

        <MissingWorkList
          setTitleModal={setTitleModal}
          selectMissingWork={selectMissingWork}
          setTextButton={setTextButton}
        />
      </div>
    </>
  );
};
