import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getLiquidationThunk,
  getLiquidationByIdThunk,
} from "../../app/slicesTalentManagement/liquidation.slice";
import { getContractByEmployeeIdThunk } from "../../app/slicesTalentManagement/contract.slice";
import ModalDelete from "./ModalDelete";
import { useCoinFormatter } from "../../hooks";

const LiquidationList = ({
  setTitleModal,
  selectLiquidation,
  setTextButton,
}) => {
  const liquidation = useSelector((state) => state.liquidation);
  const dispatch = useDispatch();
  const [idLiquidation, setIdLiquidation] = useState(0);

  useEffect(() => {
    dispatch(getLiquidationThunk());
  }, [dispatch]);

  return (
    <div className="table-responsive rounded-3" style={{ height: "410px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">Empleado</th>
            <th scope="col">Fecha inicial</th>
            <th scope="col">Fecha final</th>
            <th scope="col">Salario devengado</th>
            <th scope="col">Auxilio de transporte</th>
            <th scope="col">Neto pagado</th>
            <th scope="col">Detalle</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(liquidation)
            ? liquidation.map((liquidation) => (
                <tr className="text-left" key={liquidation.id}>
                  <td>
                    <Link
                      to={`/talent-management/employee/${liquidation.employeeId}`}
                      className="nav-link active"
                    >
                      <button type="button" className="btn btn-link">
                        {liquidation.employee?.names}
                      </button>
                    </Link>
                  </td>
                  <td>
                    {new Date(liquidation.initialDate).toLocaleDateString()}
                  </td>
                  <td>
                    {new Date(liquidation.finalDate).toLocaleDateString()}
                  </td>
                  <td>{useCoinFormatter.format(liquidation.salary)}</td>
                  <td>
                    {useCoinFormatter.format(
                      liquidation.transportationAssistance
                    )}
                  </td>
                  <td>
                    {useCoinFormatter.format(liquidation.totalLiquidation)}
                  </td>
                  <td>
                    <Link
                      to={`/talent-management/liquidation/${liquidation.id}`}
                    >
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => {
                          dispatch(
                            getLiquidationByIdThunk(liquidation.id),
                            getContractByEmployeeIdThunk(liquidation.employeeId)
                          );
                        }}
                      >
                        <i className="bi bi-plus-circle"></i>
                      </button>
                    </Link>
                  </td>

                  <td>
                    <button
                      onClick={() => {
                        selectLiquidation(liquidation);
                        setTitleModal("Editar liquidacion");
                        setTextButton("Editar liquidacion");
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
                        setIdLiquidation(liquidation.id);
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
        idLiquidation={idLiquidation}
      />
    </div>
  );
};

export default LiquidationList;
