import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUnfitnessThunk } from "../../app/slicesTalentManagement/unfitness.slice";
import ModalDelete from "./ModalDelete";

const UnfitnessList = ({ setTitleModal, selectUnfitness, setTextButton }) => {
  const unfitness = useSelector((state) => state.unfitness);
  const dispatch = useDispatch();
  const [idUnfitness, setIdUnfitness] = useState(0);

  useEffect(() => {
    dispatch(getUnfitnessThunk());
  }, [dispatch]);

  return (
    <div className="table-responsive rounded-3" style={{ height: "410px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">Empleado</th>
            <th scope="col">Origen</th>
            <th scope="col">Diagnostico</th>
            <th scope="col">Fecha inicial</th>
            <th scope="col">Fecha final</th>
            <th scope="col">Duracion</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(unfitness)
            ? unfitness.map((unfitness) => (
                <tr className="text-left" key={unfitness.id}>
                  <td>
                    <Link
                      to={`/talent-management/employee/${unfitness.employeeId}`}
                      className="nav-link active"
                    >
                      <button type="button" className="btn btn-link">
                        {unfitness.employee?.names}
                      </button>
                    </Link>
                  </td>
                  <td>{unfitness.origin}</td>
                  <td>{unfitness.diagnostic}</td>
                  <td>
                    {new Date(unfitness.initialDate).toLocaleDateString()}
                  </td>
                  <td>{new Date(unfitness.finalDate).toLocaleDateString()}</td>
                  <td>{unfitness.term}</td>
                  <td>
                    <button
                      onClick={() => {
                        selectUnfitness(unfitness);
                        setTitleModal("Editar incapacidad");
                        setTextButton("Editar incapacidad");
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
                        setIdUnfitness(unfitness.id);
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
        idUnfitness={idUnfitness}
      />
    </div>
  );
};

export default UnfitnessList;
