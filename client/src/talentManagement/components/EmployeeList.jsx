import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeThunk } from "../../app/slicesTalentManagement/employee.slice";
import { ModalDelete } from "./ModalDelete";
import { formatNumber } from "../../hooks";
import { getContractByEmployeeIdThunk } from "../../app/slicesTalentManagement/contract.slice";
import { getSocialSecurityByEmployeeIdThunk } from "../../app/slicesTalentManagement/socialSecurity.slice";
import { getEndowmentByEmployeeIdThunk } from "../../app/slicesTalentManagement/endowment.slice";
import { getFamilyInformationByEmployeeIdThunk } from "../../app/slicesTalentManagement/familyInformation.slice";
import { getHealthyLifeByEmployeeIdThunk } from "../../app/slicesTalentManagement/healthyLife.slice";
import { getSalaryIncreaseByEmployeeIdThunk } from "../../app/slicesTalentManagement/salaryIncrease.slice";

export const EmployeeList = ({
  setTitleModal,
  selectEmployee,
  setTextButton,
}) => {
  const employee = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const [idEmployee, setIdEmployee] = useState(0);
  // const [search, setSearch] = useState("");
  // const [employeeList, setEmployeeList] = useState([]);
  // const [employeesFilter, setEmployeesFilter] = useState([]);

  useEffect(() => {
    dispatch(getEmployeeThunk());
    // setEmployeeList(employee);
    // setEmployeesFilter(employee);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  //   filter(e.target.value);
  // };

  // const filter = (search) => {
  //   let searchResult = employeesFilter.filter((element) => {
  //     if (
  //       element.names.toString().toLowerCase().includes(search.toLowerCase()) ||
  //       element.identification
  //         .toString()
  //         .toLowerCase()
  //         .includes(search.toLowerCase())
  //     ) {
  //       return element;
  //     } else {
  //       return null;
  //     }
  //   });
  //   setEmployeeList(searchResult);
  // };

  return (
    <>
      {/* <div className="input-group mb-3">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="form-control"
          placeholder="Busqueda por Nombre o Documento"
          aria-label="Busqueda por Nombre o Documento"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-info"
          type="button"
          id="button-addon2"
        >
          <i className="bi bi-search"></i>
        </button>
      </div> */}

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
            {Array.isArray(employee)
              ? employee.map((employee) => (
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
                              getFamilyInformationByEmployeeIdThunk(
                                employee.id
                              ),
                              getHealthyLifeByEmployeeIdThunk(employee.id),
                              getSalaryIncreaseByEmployeeIdThunk(employee.id)
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
    </>
  );
};
