import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getContractByEmployeeIdThunk } from "../../app/slicesTalentManagement/contract.slice";
import { useCoinFormatter } from "../../hooks";

export const ContractList = () => {
  const contract = useSelector((state) => state.contract);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getContractByEmployeeIdThunk(id));
  }, [id, dispatch]);

  return (
    <div className="table-responsive rounded-3" style={{ height: "410px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">Tipo de contrato</th>
            <th scope="col">Salario</th>
            <th scope="col">Cargo</th>
            <th scope="col">Fecha inicial</th>
            <th scope="col">Fecha final</th>
            <th scope="col">Duracion</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(contract)
            ? contract.map((contract) => (
                <tr className="text-left" key={contract.id}>
                  <td>{contract.typeContract}</td>
                  <td>{useCoinFormatter.format(contract.salary)}</td>
                  <td>{contract.position}</td>
                  <td>{new Date(contract.initialDate).toLocaleDateString()}</td>
                  <td>{new Date(contract.finalDate).toLocaleDateString()}</td>
                  <td>{contract.duration}</td>
                  <td>{contract.status}</td>
                </tr>
              ))
            : []}
        </tbody>
      </table>
    </div>
  );
};
