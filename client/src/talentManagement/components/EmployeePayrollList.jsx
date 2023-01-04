import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalDelete from "./ModalDelete";
import { formatNumber } from "../../hooks";

const EmployeePayrollList = () => {
  const employeePayroll = useSelector((state) => state.employeePayroll);
  const dispatch = useDispatch();
  const [idEmployeePayroll, setIdEmployeePayroll] = useState(0);

  return (
    <div className="table-responsive rounded-3" style={{ height: "410px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">Nombres</th>
            <th scope="col">Identificacion</th>
            <th scope="col">Novedades</th>
            <th scope="col">Ingresos</th>
            <th scope="col">Deducciones</th>
            <th scope="col">Neto a pagar</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employeePayroll)
            ? employeePayroll.map((employeePayroll) => (
                <tr className="text-left" key={employeePayroll.id}>
                  <td>{employeePayroll.employee.names}</td>
                  <td>
                    {formatNumber(employeePayroll.employee.identification)}
                  </td>
                  <td>Ver detalle</td>
                  <td>{employeePayroll.totalAccrued} </td>
                  <td>{employeePayroll.totalDeductions} </td>
                  <td>{employeePayroll.netPayable} </td>

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
