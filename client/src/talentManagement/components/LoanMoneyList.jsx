import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoanMoneyThunk,
  getLoanMoneyByIdThunk,
} from "../../app/slicesTalentManagement/loanMoney.slice";
import ModalDelete from "./ModalDelete";
import ModalPayLoan from "./ModalPayLoan";
import { useCoinFormatter } from "../../hooks";

const LoanMoneyList = ({ setTitleModal, selectLoanMoney, setTextButton }) => {
  const loanMoney = useSelector((state) => state.loanMoney);
  const dispatch = useDispatch();
  const [idLoanMoney, setIdLoanMoney] = useState(0);

  useEffect(() => {
    dispatch(getLoanMoneyThunk());
  }, [dispatch]);
  return (
    <div className="table-responsive rounded-3" style={{ height: "410px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">Empleado</th>
            <th scope="col">Valor</th>
            <th scope="col">Fecha</th>
            <th scope="col"># coutas</th>
            <th scope="col">Valor coutas</th>
            <th scope="col">Fecha de pago</th>
            <th scope="col">Estado</th>
            <th scope="col">Detalle</th>
            <th scope="col">Saldar</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(loanMoney)
            ? loanMoney.map((loanMoney) => (
                <tr className="text-left" key={loanMoney.id}>
                  <td>
                    <Link
                      to={`/talent-management/employee/${loanMoney.employeeId}`}
                      className="nav-link active"
                    >
                      <button type="button" className="btn btn-link">
                        {loanMoney.employee?.names}
                      </button>
                    </Link>
                  </td>
                  <td>{useCoinFormatter.format(loanMoney.quantity)}</td>
                  <td>{new Date(loanMoney.outlayDate).toLocaleDateString()}</td>
                  <td className="text-center">{loanMoney.numberAmount}</td>
                  <td>{useCoinFormatter.format(loanMoney.installmentValue)}</td>
                  <td>
                    {new Date(loanMoney.paymentDate).toLocaleDateString()}
                  </td>
                  <td>{loanMoney.status}</td>
                  <td>
                    <Link
                      to={`/talent-management/loan-money/${loanMoney.id}`}
                      // className="nav-link active"
                    >
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => {
                          getLoanMoneyByIdThunk(loanMoney.id);
                        }}
                      >
                        <i className="bi bi-plus-circle"></i>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setIdLoanMoney(loanMoney.id);
                      }}
                      type="button"
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#modalPayLoan"
                    >
                      <i className="bi bi-cash-coin"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        selectLoanMoney(loanMoney);
                        setTitleModal("Editar prestamo");
                        setTextButton("Editar prestamo");
                      }}
                      className="btn btn-warning"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#modalForm"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setIdLoanMoney(loanMoney.id);
                      }}
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDelete"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            : []}
        </tbody>
      </table>
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
    </div>
  );
};

export default LoanMoneyList;
