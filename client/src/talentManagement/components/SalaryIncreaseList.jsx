import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ModalDelete } from "./ModalDelete";
import { useCoinFormatter } from "../../hooks";
import { getSalaryIncreaseByEmployeeIdThunk } from "../../app/slicesTalentManagement/salaryIncrease.slice";

export const SalaryIncreaseList = () => {
  const salaryIncrease = useSelector((state) => state.salaryIncrease);
  const dispatch = useDispatch();
  const [idSalaryIncrease, setIdSalaryIncrease] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSalaryIncreaseByEmployeeIdThunk(id));
  }, [id, dispatch]);

  return (
    <div className="table-responsive rounded-3" style={{ height: "410px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Salario</th>
            <th scope="col">Causa</th>
            <th scope="col">Autorizo</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(salaryIncrease)
            ? salaryIncrease.map((salaryIncrease) => (
                <tr className="text-left" key={salaryIncrease.id}>
                  <td>
                    {new Date(salaryIncrease.dateIncrease).toLocaleDateString()}
                  </td>
                  <td>{useCoinFormatter.format(salaryIncrease.salary)}</td>
                  <td>{salaryIncrease.cause}</td>
                  <td>{salaryIncrease.personAuthorizes}</td>
                  <td>
                    <button
                      onClick={() => {
                        setIdSalaryIncrease(salaryIncrease.id);
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
        idSalaryIncrease={idSalaryIncrease}
      />
    </div>
  );
};
