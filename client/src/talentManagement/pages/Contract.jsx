import React, { useState } from "react";
import { ContractForm, ContractList } from "../components";
import { ButtonReturn } from "../../components";

export const Contract = () => {
  const [contractSelected, setContractSelected] = useState(null);
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");

  const selectContract = (contract) => {
    setContractSelected(contract);
  };

  const deselectContract = () => {
    setContractSelected(null);
  };

  return (
    <>
      <div className="container">
        <h1>Contratos</h1>

        <ButtonReturn route={"/talent-management/home"} />

        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalForm"
            onClick={() => {
              setTitleModal("Registrar contrato");
              setTextButton("Agregar contrato");
              deselectContract();
            }}
          >
            Registrar Contrato
          </button>

          <ContractForm
            className={"modal fade"}
            idModal={"modalForm"}
            tabIndex={"-1"}
            aria-labelledby={"exampleModalLabel"}
            aria-hidden={"true"}
            contractSelected={contractSelected}
            deselectContract={deselectContract}
            titleModal={titleModal}
            textButton={textButton}
          />
        </div>

        <ContractList
          setTitleModal={setTitleModal}
          selectContract={selectContract}
          setTextButton={setTextButton}
        />
      </div>
    </>
  );
};
