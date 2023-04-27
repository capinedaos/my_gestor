import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getEmployeePayrollByIdThunk } from "../../app/slicesTalentManagement/employeePayroll.slice";
import { getSocialSecurityByEmployeeIdThunk } from "../../app/slicesTalentManagement/socialSecurity.slice";
import { getContractByEmployeeIdThunk } from "../../app/slicesTalentManagement/contract.slice";
import { getCompanyThunk } from "../../app/slices/company.slice";
import { ButtonReturn } from "../../components";
import { useCoinFormatter, formatNumber } from "../../hooks";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const DetailEmployeePayroll = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const company = useSelector((state) => state.company);
  const socialSecurity = useSelector((state) => state.socialSecurity);
  const employeePayroll = useSelector((state) => state.employeePayroll);
  const contract = useSelector((state) => state.contract);
  const [contracActive, setContracActive] = useState({});

  useEffect(() => {
    dispatch(getEmployeePayrollByIdThunk(id));
    dispatch(getCompanyThunk());
    axios
      .get(
        `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee-payroll/${id}`,
        getConfig()
      )
      .then((res) => {
        dispatch(
          getContractByEmployeeIdThunk(res.data.employeePayrollById.employeeId)
        );
        dispatch(
          getSocialSecurityByEmployeeIdThunk(
            res.data.employeePayrollById.employeeId
          )
        );
      });

    const contractFind = contract.find(
      (contract) => contract.status === "activo"
    );
    setContracActive(contractFind);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  return (
    <div className="container">
      <h2>COMPROBANTE DE PAGO DE NÓMINA</h2>
      <ButtonReturn
        route={`/talent-management/complete-payroll/${employeePayroll.overallPayrollId}`}
      />
      <h3>Detalle de nomina: {employeePayroll.employee?.names} </h3>
      <table className="table table-bordered border-light table-sm">
        <tbody>
          <tr>
            <th scope="row" className="table-secondary">
              EMPRESA:
            </th>
            <td>{company?.companyName}</td>
          </tr>
          <tr>
            <th scope="row" className="table-secondary">
              NIT:
            </th>
            <td>{company?.nit}</td>
          </tr>
          <tr>
            <th scope="row" className="table-secondary">
              DIRECCION:
            </th>
            <td>{company?.address}</td>
          </tr>
          <tr>
            <th scope="row" className="table-secondary">
              TELEFONO:
            </th>
            <td>{company?.phone}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered border-light table-sm">
        <tbody>
          <tr>
            <th scope="row" className="table-secondary">
              Empleado:
            </th>
            <td>{employeePayroll.employee?.names}</td>
            <th scope="row" className="table-secondary">
              Cuenta:
            </th>
            <td>{employeePayroll.employee?.bankAccount}</td>
          </tr>
          <tr>
            <th scope="row" className="table-secondary">
              Identificacion:
            </th>
            <td>{formatNumber(employeePayroll.employee?.identification)} </td>
            <th scope="row" className="table-secondary">
              Pension:
            </th>
            <td>{socialSecurity?.afp}</td>
          </tr>
          <tr>
            <th scope="row" className="table-secondary">
              Cargo:
            </th>
            <td>{contracActive?.position} </td>
            <th scope="row" className="table-secondary">
              Salud:
            </th>
            <td>{socialSecurity?.eps}</td>
          </tr>
          <tr>
            <th scope="row" className="table-secondary">
              Salario:
            </th>
            <td>{useCoinFormatter.format(employeePayroll?.salary)} </td>
            <th scope="row" className="table-secondary">
              Periodo:
            </th>
            <td>{employeePayroll.overallPayroll?.paymentPeriod}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered border-light table-sm">
        <thead>
          <tr className="table-secondary">
            <th scope="col">CONCEPTO</th>
            <th scope="col">DETALLE</th>
            <th scope="col">HORAS</th>
            <th scope="col">DIAS</th>
            <th scope="col">%</th>
            <th scope="col">DEVENGADO</th>
            <th scope="col">DEDUCCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {employeePayroll.totalDiurnalBasic !== 0 ? (
            <tr>
              <td>BASICO DIURNO</td>
              <td></td>
              <td>{employeePayroll.hDiurnalBasic}</td>
              <td>{employeePayroll.hDiurnalBasic / 8}</td>
              <td>100</td>
              <td>
                {useCoinFormatter.format(employeePayroll.totalDiurnalBasic)}
              </td>
              <td>0</td>
            </tr>
          ) : null}

          {employeePayroll.totalNocturnalBasic !== 0 ? (
            <tr>
              <td>BASICO NOCTURNO</td>
              <td></td>
              <td>{employeePayroll.hNocturnalBasic}</td>
              <td>{employeePayroll.hNocturnalBasic / 8}</td>
              <td>135</td>
              <td>{employeePayroll.totalNocturnalBasic}</td>
              <td>0</td>
            </tr>
          ) : null}

          {employeePayroll.totalDiurnalExtra !== 0 ? (
            <tr>
              <td>EXTRA DIURNO</td>
              <td></td>
              <td>{employeePayroll.hDiurnalExtra}</td>
              <td>{employeePayroll.hDiurnalExtra / 8}</td>
              <td>125</td>
              <td>{employeePayroll.totalDiurnalExtra}</td>
              <td>0</td>
            </tr>
          ) : null}

          {employeePayroll.totalNocturnalExtra !== 0 ? (
            <tr>
              <td>EXTRA NOCTURNO</td>
              <td></td>
              <td>{employeePayroll.hNocturnalExtra}</td>
              <td>{employeePayroll.hNocturnalExtra / 8}</td>
              <td>175</td>
              <td>{employeePayroll.totalNocturnalExtra}</td>
              <td>0</td>
            </tr>
          ) : null}

          {employeePayroll.totalFestiveDiurnalBasic !== 0 ? (
            <tr>
              <td>FESTIVO BASICO DIURNO</td>
              <td></td>
              <td>{employeePayroll.hFestiveDiurnalBasic}</td>
              <td>{employeePayroll.hFestiveDiurnalBasic / 8}</td>
              <td>175</td>
              <td>{employeePayroll.totalFestiveDiurnalBasic}</td>
              <td>0</td>
            </tr>
          ) : null}

          {employeePayroll.totalFestiveNocturnalBasic !== 0 ? (
            <tr>
              <td>FESTIVO BASICO NOCTURNO</td>
              <td></td>
              <td>{employeePayroll.hFestiveNocturnalBasic}</td>
              <td>{employeePayroll.hFestiveNocturnalBasic / 8}</td>
              <td>210</td>
              <td>{employeePayroll.totalFestiveNocturnalBasic}</td>
              <td>0</td>
            </tr>
          ) : null}

          {employeePayroll.totalFestiveDiurnalExtra !== 0 ? (
            <tr>
              <td>FESTIVO EXTRA DIURNO</td>
              <td></td>
              <td>{employeePayroll.hFestiveDiurnalExtra}</td>
              <td>{employeePayroll.hFestiveDiurnalExtra / 8}</td>
              <td>200</td>
              <td>{employeePayroll.totalFestiveDiurnalExtra}</td>
              <td>0</td>
            </tr>
          ) : null}

          {employeePayroll.totalFestiveNocturnalExtra !== 0 ? (
            <tr>
              <td>FESTIVO EXTRA NOCTURNO</td>
              <td></td>
              <td>{employeePayroll.hFestiveNocturnalExtra}</td>
              <td>{employeePayroll.hFestiveNocturnalExtra / 8}</td>
              <td>250</td>
              <td>{employeePayroll.totalFestiveNocturnalExtra}</td>
              <td>0</td>
            </tr>
          ) : null}

          {employeePayroll.totalCompensatory !== 0 ? (
            <tr>
              <td>COMPENSATORIO</td>
              <td></td>
              <td>{employeePayroll.hCompensated}</td>
              <td>{employeePayroll.hCompensated / 8}</td>
              <td>175</td>
              <td>{employeePayroll.totalCompensatory}</td>
              <td>0</td>
            </tr>
          ) : null}

          {employeePayroll.daysUnfitnessGeneral !== 0 ? (
            <tr>
              <td>INCAPACIDAD GENERAL</td>
              <td></td>
              <td>0</td>
              <td>{employeePayroll.daysUnfitnessGeneral} </td>
              <td>66.67</td>
              <td>0</td>
              <td>
                {useCoinFormatter.format(employeePayroll.disabilityValue)}
              </td>
            </tr>
          ) : null}

          {employeePayroll.daysOfAbsence !== 0 ? (
            <tr>
              <td>AUSENCIA</td>
              <td></td>
              <td>0</td>
              <td>{employeePayroll.daysOfAbsence} </td>
              <td>100</td>
              <td>0</td>
              <td>
                {useCoinFormatter.format(employeePayroll.deductionAbsence)}
              </td>
            </tr>
          ) : null}

          {employeePayroll.daysOfLicence !== 0 ? (
            <tr>
              <td>LICENCIA</td>
              <td></td>
              <td>0</td>
              <td>{employeePayroll.daysOfLicence}</td>
              <td>100</td>
              <td>0</td>
              <td>
                {useCoinFormatter.format(employeePayroll.deductionLicense)}
              </td>
            </tr>
          ) : null}

          {employeePayroll.deductionLoanMoney !== 0 ? (
            <tr>
              <td>PRESTAMO</td>
              <td></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>
                {useCoinFormatter.format(employeePayroll.deductionLoanMoney)}
              </td>
            </tr>
          ) : null}

          {employeePayroll.deductionSuspension !== 0 ? (
            <tr>
              <td>SUSPENSION</td>
              <td></td>
              <td>0</td>
              <td>{employeePayroll.daysOfSuspension}</td>
              <td>100</td>
              <td>0</td>
              <td>
                {useCoinFormatter.format(employeePayroll.deductionSuspension)}
              </td>
            </tr>
          ) : null}

          {employeePayroll.otherDeductions !== 0 ? (
            <tr>
              <td>OTRAS DEDUCCIONES</td>
              <td></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>
                {useCoinFormatter.format(employeePayroll.otherDeductions)}
              </td>
            </tr>
          ) : null}

          <tr>
            <td>AUXILIO DE TRANSPORTE</td>
            <td></td>
            <td>0</td>
            <td>{employeePayroll.workedDays}</td>
            <td>0</td>
            <td>
              {useCoinFormatter.format(
                employeePayroll.transportationAssistance
              )}
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>APORTE SALUD</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>4</td>
            <td>0</td>
            <td>{useCoinFormatter.format(employeePayroll.health)}</td>
          </tr>
          <tr>
            <td>APORTE PENSION</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>4</td>
            <td>0</td>
            <td>{useCoinFormatter.format(employeePayroll.pension)}</td>
          </tr>
        </tbody>
      </table>

      <table className="table table-bordered border-light table-sm">
        <tbody>
          <tr>
            <th scope="row" className="table-secondary">
              TOTAL DEVENGADO:
            </th>
            <td>{useCoinFormatter.format(employeePayroll?.totalAccrued)}</td>
          </tr>
          <tr>
            <th scope="row" className="table-secondary">
              DEDUCCIONES:
            </th>
            <td>{useCoinFormatter.format(employeePayroll?.totalDeductions)}</td>
          </tr>
          <tr>
            <th scope="row" className="table-secondary">
              NETO A PAGAR:
            </th>
            <td>{useCoinFormatter.format(employeePayroll?.netPayable)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
