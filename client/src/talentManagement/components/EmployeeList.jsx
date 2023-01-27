import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeThunk } from "../../app/slicesTalentManagement/employee.slice";
import ModalDelete from "./ModalDelete";
import { formatNumber } from "../../hooks";
import { getContractByEmployeeIdThunk } from "../../app/slicesTalentManagement/contract.slice";
import { getSocialSecurityByEmployeeIdThunk } from "../../app/slicesTalentManagement/socialSecurity.slice";
import { getEndowmentByEmployeeIdThunk } from "../../app/slicesTalentManagement/endowment.slice";
import { getFamilyInformationByEmployeeIdThunk } from "../../app/slicesTalentManagement/familyInformation.slice";
import { getHealthyLifeByEmployeeIdThunk } from "../../app/slicesTalentManagement/healthyLife.slice";
import { getSalaryIncreaseByEmployeeIdThunk } from "../../app/slicesTalentManagement/salaryIncrease.slice";
import { getAreaThunk } from "../../app/slicesTalentManagement/area.slice";

const EmployeeList = ({ setTitleModal, selectEmployee, setTextButton }) => {
  const employees = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const [idEmployee, setIdEmployee] = useState(0);

  useEffect(() => {
    dispatch(getEmployeeThunk());
  }, [dispatch]);

  return (
    <div className="table-responsive rounded-3" style={{ height: "410px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">Nombres</th>
            <th scope="col">Identificacion</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Direccion</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employees)
            ? employees.map((employee) => (
                <tr className="text-left" key={employee.id}>
                  <td>
                    <Link
                      to={`/talent-management/employee/${employee.id}`}
                      className="nav-link active"
                    >
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => {
                          dispatch(
                            getContractByEmployeeIdThunk(employee.id),
                            getSocialSecurityByEmployeeIdThunk(employee.id),
                            getEndowmentByEmployeeIdThunk(employee.id),
                            getFamilyInformationByEmployeeIdThunk(employee.id),
                            getHealthyLifeByEmployeeIdThunk(employee.id),
                            getSalaryIncreaseByEmployeeIdThunk(employee.id),
                            getAreaThunk()
                          );
                        }}
                      >
                        {employee.names}
                      </button>
                    </Link>
                  </td>

                  <td>{formatNumber(employee.identification)}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.city}</td>
                  <td>{employee.address}</td>
                  <td>
                    <button
                      onClick={() => {
                        selectEmployee(employee);
                        setTitleModal("Editar empleado");
                        setTextButton("Editar empleado");
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
                        setIdEmployee(employee.id);
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
        idEmployee={idEmployee}
      />
     
    </div>
  );
};

export default EmployeeList;
