import React, { useState } from "react";
import { LoanMoneyForm, LoanMoneyList } from "../components";
import { ButtonReturn } from "../../components";

export const LoanMoney = () => {
  const [loanMoneySelected, setLoanMoneySelected] = useState(null);
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");

  const selectLoanMoney = (loanMoney) => {
    setLoanMoneySelected(loanMoney);
  };

  const deselectLoanMoney = () => {
    setLoanMoneySelected(null);
  };

  return (
    <div className="container">
      <h2>Prestamos</h2>

      <div className="display">
        <ButtonReturn route={"/talent-management/home"} />

        <button
          type="button"
          className="btn btn-primary mb-4"
          data-bs-toggle="modal"
          data-bs-target="#modalForm"
          onClick={() => {
            setTitleModal("Registrar prestamo");
            setTextButton("Agregar prestamo");
            deselectLoanMoney();
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
          placeholder="Busqueda por Empleado o Estado"
          aria-label="Busqueda por Empleado o Estado"
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

      <LoanMoneyForm
        className={"modal fade"}
        idModal={"modalForm"}
        tabIndex={"-1"}
        aria-labelledby={"exampleModalLabel"}
        aria-hidden={"true"}
        loanMoneySelected={loanMoneySelected}
        deselectLoanMoney={deselectLoanMoney}
        titleModal={titleModal}
        textButton={textButton}
      />

      <LoanMoneyList
        setTitleModal={setTitleModal}
        selectLoanMoney={selectLoanMoney}
        setTextButton={setTextButton}
      />
    </div>
  );
};
