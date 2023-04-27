/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { ModalDelete } from "./ModalDelete";
import { formatNumber } from "../../hooks";
import { useCoinFormatter } from "../../hooks";
import {
  getEmployeePayrollByOverallPayrollId,
  getEmployeePayrollByIdThunk,
  getEmployeePayrollByEmployeeIdThunk,
} from "../../app/slicesTalentManagement/employeePayroll.slice.jsx";

import { getContractByEmployeeIdThunk } from "../../app/slicesTalentManagement/contract.slice";
import { getSocialSecurityByEmployeeIdThunk } from "../../app/slicesTalentManagement/socialSecurity.slice";
import { getEndowmentByEmployeeIdThunk } from "../../app/slicesTalentManagement/endowment.slice";
import { getFamilyInformationByEmployeeIdThunk } from "../../app/slicesTalentManagement/familyInformation.slice";
import { getHealthyLifeByEmployeeIdThunk } from "../../app/slicesTalentManagement/healthyLife.slice";
import { getSalaryIncreaseByEmployeeIdThunk } from "../../app/slicesTalentManagement/salaryIncrease.slice";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const EmployeePayrollList = ({
  setTotalAccrued,
  setTotalDeductions,
  setTotalNetPayable,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employeePayroll = useSelector((state) => state.employeePayroll);
  const [idEmployeePayroll, setIdEmployeePayroll] = useState(0);
  const [overallPayroll, setOverallPayroll] = useState({});
  const { id } = useParams();
  let totalAccrued = 0;
  let totalDeductions = 0;
  let totalNetPayable = 0;

  const addNewsPayroll = (id) => {
    dispatch(getEmployeePayrollByIdThunk(id));

    // eslint-disable-next-line array-callback-return
    employeePayroll.map((employeePayroll) => {
      if (employeePayroll.overallPayroll.typeOfSettlement === "mensual") {
        navigate(`/talent-management/monthly-payroll/${id}`);
      } else if (
        employeePayroll.overallPayroll.typeOfSettlement === "primera quincena"
      ) {
        navigate(`/talent-management/first-fortnight-payroll/${id}`);
      } else {
        // segunda quincena
        navigate(`/talent-management/second-fortnight-payroll/${id}`);
      }
    });
  };

  useEffect(() => {
    axios
      .get(
        `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/overall-payroll/${id}`,
        getConfig()
      )
      .then((res) => {
        setOverallPayroll(res.data.overallPayroll);
      });

    dispatch(getEmployeePayrollByOverallPayrollId(id));
    if (employeePayroll.length > 0) {
      // eslint-disable-next-line array-callback-return
      employeePayroll.map((employeePayroll) => {
        totalAccrued += employeePayroll.totalAccrued;
        totalDeductions += employeePayroll.totalDeductions;
        totalNetPayable += employeePayroll.netPayable;
      });
    }
    setTotalAccrued(totalAccrued / 2);
    setTotalDeductions(totalDeductions / 2);
    setTotalNetPayable(totalNetPayable / 2);
  }, [dispatch, id]);

  return (
    <div className="table-responsive rounded-3" style={{ height: "410px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">Nombres</th>
            <th scope="col">Identificacion</th>
            <th scope="col">Salario</th>
            <th scope="col">Ingresos</th>
            <th scope="col">Deducciones</th>
            <th scope="col">Neto a pagar</th>
            <th scope="col">Ver mas</th>
            {overallPayroll?.status === "En proceso" ? (
              <>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employeePayroll)
            ? employeePayroll.map((employeePayroll) => (
                <tr className="text-left" key={employeePayroll.id}>
                  <td>
                    <Link
                      to={`/talent-management/employee/${employeePayroll.employeeId}`}
                      className="nav-link active"
                    >
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => {
                          dispatch(
                            getContractByEmployeeIdThunk(
                              employeePayroll.employeeId
                            ),
                            getSocialSecurityByEmployeeIdThunk(
                              employeePayroll.employeeId
                            ),
                            getEndowmentByEmployeeIdThunk(
                              employeePayroll.employeeId
                            ),
                            getFamilyInformationByEmployeeIdThunk(
                              employeePayroll.employeeId
                            ),
                            getHealthyLifeByEmployeeIdThunk(
                              employeePayroll.employeeId
                            ),
                            getSalaryIncreaseByEmployeeIdThunk(
                              employeePayroll.employeeId
                            ),
                            getEmployeePayrollByEmployeeIdThunk(
                              employeePayroll.employeeId
                            ),
                          );
                        }}
                      >
                        {employeePayroll.employee?.names}
                      </button>
                    </Link>
                  </td>

                  <td>
                    {formatNumber(employeePayroll.employee?.identification)}{" "}
                  </td>
                  <td>{useCoinFormatter.format(employeePayroll.salary)} </td>
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
                      to={`/talent-management/employee-payroll/${employeePayroll.id}`}
                    >
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => {
                          dispatch(
                            getEmployeePayrollByIdThunk(employeePayroll.id)
                          );
                        }}
                      >
                        <i className="bi bi-plus-circle"></i>
                      </button>
                    </Link>
                  </td>

                  {employeePayroll.overallPayroll?.status === "En proceso" ? (
                    <>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning me-1"
                          onClick={() => {
                            addNewsPayroll(employeePayroll.id);
                          }}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
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
                    </>
                  ) : null}
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
