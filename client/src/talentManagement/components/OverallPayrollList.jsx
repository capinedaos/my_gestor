import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOverallPayrollThunk,
  getOverallPayrollByIdThunk,
} from "../../app/slicesTalentManagement/overallPayroll.slice";
import ModalDelete from "./ModalDelete";
import { useCoinFormatter } from "../../hooks";

const OverallPayrollList = ({
  setTitleModal,
  selectOverallPayroll,
  setTextButton,
}) => {
  const overallPayroll = useSelector((state) => state.overallPayroll);
  const dispatch = useDispatch();
  const [idOverallPayroll, setIdOverallPayroll] = useState(0);

  useEffect(() => {
    dispatch(getOverallPayrollThunk());
  }, [dispatch]);

  return (
    <div className="table-responsive rounded-3" style={{ height: "410px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">Estado</th>
            <th scope="col">Tipo de liquidacion</th>
            <th scope="col">Descripción</th>
            <th scope="col">Periodo de pago</th>
            <th scope="col">Total nomina</th>
            <th scope="col">Completar</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(overallPayroll)
            ? overallPayroll.map((overallPayroll) => (
                <tr className="text-left" key={overallPayroll.id}>
                  <td>{overallPayroll.status}</td>
                  <td>{overallPayroll.typeOfSettlement}</td>
                  <td>{overallPayroll.description}</td>
                  <td>{overallPayroll.paymentPeriod}</td>
                  <td>
                    {useCoinFormatter.format(overallPayroll.totalPayroll)}
                  </td>

                  <td>
                    <Link
                      to={`/talent-management/complete-payroll/${overallPayroll.id} `}
                    >
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => {
                          getOverallPayrollByIdThunk(overallPayroll.id);
                        }}
                      >
                        <i className="bi bi-check-circle"></i>
                      </button>
                    </Link>
                  </td>

                  <td>
                    <button
                      onClick={() => {
                        selectOverallPayroll(overallPayroll);
                        setTitleModal("Editar nomina");
                        setTextButton("Editar nomina");
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
                        setIdOverallPayroll(overallPayroll.id);
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
        idOverallPayroll={idOverallPayroll}
      />
    </div>
  );
};

export default OverallPayrollList;