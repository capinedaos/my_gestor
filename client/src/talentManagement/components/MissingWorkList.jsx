import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMissingWorkThunk } from "../../app/slicesTalentManagement/missingWork.slice";
import ModalDelete from "./ModalDelete";

const MissingWorkList = ({
  setTitleModal,
  selectMissingWork,
  setTextButton,
}) => {
  const missingWork = useSelector((state) => state.missingWork);
  const dispatch = useDispatch();
  const [idMissingWork, setIdMissingWork] = useState(0);

  useEffect(() => {
    dispatch(getMissingWorkThunk());
  }, [dispatch]);

  return (
    <div className="table-responsive rounded-3" style={{ height: "410px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">Empleado</th>
            <th scope="col">Motivo</th>
            <th scope="col">Observacion</th>
            <th scope="col">Fecha inicial</th>
            <th scope="col">Fecha final</th>
            <th scope="col">Duracion</th>
            <th scope="col">Deducible</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(missingWork)
            ? missingWork.map((missingWork) => (
                <tr className="text-left" key={missingWork.id}>
                  <td>
                    <Link
                      to={`/talent-management/employee/${missingWork.employeeId}`}
                      className="nav-link active"
                    >
                      <button type="button" className="btn btn-link">
                        {missingWork.employee?.names}
                      </button>
                    </Link>
                  </td>
                  <td>{missingWork.cause}</td>
                  <td>{missingWork.observation}</td>
                  <td>
                    {new Date(missingWork.initialDate).toLocaleDateString()}
                  </td>
                  <td>
                    {new Date(missingWork.finalDate).toLocaleDateString()}
                  </td>
                  <td>{missingWork.term}</td>
                  {missingWork.paidOut ? <td>SI</td> : <td>NO</td>}
                  <td>
                    <button
                      onClick={() => {
                        selectMissingWork(missingWork);
                        setTitleModal("Editar ausencia");
                        setTextButton("Editar ausencia");
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
                        setIdMissingWork(missingWork.id);
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
        idMissingWork={idMissingWork}
      />
    </div>
  );
};

export default MissingWorkList;
