import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import { getPayInMoneyByLoanMoneyIdThunk } from "../../app/slicesTalentManagement/payInMoney.slice";
import { ModalDelete, ModalPayLoan, LoanMoneyForm } from "../components";
import { ButtonReturn } from "../../components";
import { useCoinFormatter } from "../../hooks";

export const DetailLoanMoney = () => {
  const dispatch = useDispatch();
  const payInMoney = useSelector((state) => state.payInMoney);
  const [idLoanMoney, setIdLoanMoney] = useState(0);
  const [loanMoney, setLoanMoney] = useState({});
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");
  const [loanMoneySelected, setLoanMoneySelected] = useState(null);
  const { id } = useParams();

  const selectLoanMoney = (loanMoney) => {
    setLoanMoneySelected(loanMoney);
  };

  const deselectLoanMoney = () => {
    setLoanMoneySelected(null);
  };

  useEffect(() => {
    axios
      .get(
        "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/loan-money",
        getConfig()
      )
      .then((res) => {
        const loanMoneySearch = res.data.loanMoney.find(
          (loanMoney) => loanMoney.id === Number(id)
        );
        setLoanMoney(loanMoneySearch);
        dispatch(getPayInMoneyByLoanMoneyIdThunk(loanMoneySearch.id));
      });
  }, [id, dispatch]);

  return (
    <>
      <div className="container">
        <h2>Detalle de prestamo</h2>
        <ButtonReturn route={"/talent-management/loan-money"} />

        <div className="container text-center">
          <div className="p-3 border bg-light">
            <Link
              to={`/talent-management/employee/${loanMoney.employeeId}`}
              className="btn btn-primary"
            >
              {loanMoney.employee?.names}
            </Link>
          </div>

          <div className="row g-2">
            <div className="col-6">
              <div className="p-3 border bg-light">
                Valor:
                {useCoinFormatter.format(loanMoney.quantity)}
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                Fecha Desembolso:{" "}
                {new Date(loanMoney.outlayDate).toLocaleDateString()}
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                Numero de coutas: {loanMoney.numberAmount}
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                Valor coutas:{" "}
                {useCoinFormatter.format(loanMoney.installmentValue)}
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                Saldo: {useCoinFormatter.format(loanMoney.balance)}
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                Autorizo: {loanMoney.personAuthorizes}
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                Medio de pago: {loanMoney.paymentMethod}
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                Motivo: {loanMoney.cause}
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                Fecha de pago:{" "}
                {new Date(loanMoney.paymentDate).toLocaleDateString()}
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                Estado: {loanMoney.status}
              </div>
            </div>
          </div>
        </div>

        <div className="d-grid gap-2 mt-4 mb-4">
          <button
            onClick={() => {
              setIdLoanMoney(loanMoney.id);
            }}
            type="button"
            className="btn btn-success btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modalPayLoan"
          >
            <i className="bi bi-cash-coin"></i>
          </button>
          <button
            onClick={() => {
              selectLoanMoney(loanMoney);
              setTitleModal("Editar prestamo");
              setTextButton("Editar prestamo");
            }}
            className="btn btn-warning btn-lg"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalForm"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            onClick={() => {
              setIdLoanMoney(loanMoney.id);
            }}
            type="button"
            className="btn btn-danger btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modalDelete"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>

        <ModalDelete
          className={"modal fade"}
          idModal={"modalDelete"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          idLoanMoney={idLoanMoney}
        />
        <ModalPayLoan
          className={"modal fade"}
          idModal={"modalPayLoan"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          idLoanMoney={idLoanMoney}
        />

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

        <div>
          <h2>Abonos</h2>

          <div
            className="table-responsive rounded-3 "
            style={{ height: "410px" }}
          >
            <table className="table table-sm table-striped border-primary text-gray-900 ">
              <thead className="bg-light table-info text-black ">
                <tr>
                  <th scope="col">Valor</th>
                  <th scope="col">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(payInMoney)
                  ? payInMoney.map((payInMoney) => (
                      <tr className="text-left" key={payInMoney.id}>
                        <td>{useCoinFormatter.format(payInMoney.quantity)}</td>
                        <td>
                          {new Date(
                            payInMoney.deductionDate
                          ).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  : []}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
