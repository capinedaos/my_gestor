import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalDelete from "./ModalDelete";
import { formatNumber } from "../../hooks";
import { useCoinFormatter } from "../../hooks";
import {
  getEmployeePayrollByOverallPayrollId,
  getEmployeePayrollByIdThunk,
} from "../../app/slicesTalentManagement/employeePayroll.slice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EmployeePayrollList = () => {
  const dispatch = useDispatch();
  const employeePayroll = useSelector((state) => state.employeePayroll);
  const [idEmployeePayroll, setIdEmployeePayroll] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEmployeePayrollByOverallPayrollId(id));
  }, [dispatch]);

  return (
    <div className="table-responsive rounded-3" style={{ height: "410px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">Nombres</th>
            <th scope="col">Identificacion</th>
            <th scope="col">Salario</th>
            <th scope="col">Novedades</th>
            <th scope="col">Ingresos</th>
            <th scope="col">Deducciones</th>
            <th scope="col">Neto a pagar</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employeePayroll)
            ? employeePayroll.map((employeePayroll) => (
                <tr className="text-left" key={employeePayroll.id}>
                  <td>nombres</td>
                  <td>documento</td>
                  <td>{useCoinFormatter.format(employeePayroll.salary)} </td>
                  <td>Ver detalle</td>
                  <td>
                    {useCoinFormatter.format(employeePayroll.totalAccrued)}{" "}
                  </td>
                  <td>
                    {useCoinFormatter.format(employeePayroll.totalDeductions)}{" "}
                  </td>
                  <td>
                    {useCoinFormatter.format(employeePayroll.netPayable)}{" "}
                  </td>
                  <td>
                    <Link
                      to={`/talent-management/add-news-payroll/${employeePayroll.id}`}
                      className="nav-link active"
                    >
                      <button
                        type="button"
                        className="btn btn-info me-1"
                        onClick={() => {
                          dispatch(
                            getEmployeePayrollByIdThunk(employeePayroll.id)
                          );
                        }}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setIdEmployeePayroll(employeePayroll.id);
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
        idEmployeePayroll={idEmployeePayroll}
      />
    </div>
  );
};

export default EmployeePayrollList;
