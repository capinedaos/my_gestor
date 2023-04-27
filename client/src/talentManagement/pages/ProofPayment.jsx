import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import { useCoinFormatter } from "../../hooks";
import { EmployeePayrollList } from "../components";
import { ButtonReturn } from "../../components";
import { getEmployeePayrollByOverallPayrollId } from "../../app/slicesTalentManagement/employeePayroll.slice";
import "../assets/styles/CompletePayroll.css";

export const ProofPayment = () => {
  const dispatch = useDispatch();
  const employeePayroll = useSelector((state) => state.employeePayroll);
  const [overallPayroll, setOverallPayroll] = useState({});
  const [totalAccrued, setTotalAccrued] = useState(0);
  const [totalDeductions, setTotalDeductions] = useState(0);
  const [totalNetPayable, setTotalNetPayable] = useState(0);
  const { id } = useParams();

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
    console.log(overallPayroll.status);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);
  return (
    <div className="container">
      <h2>Detalle de nomina</h2>
      <ButtonReturn route={"/talent-management/overall-payroll"} />
      <div className="container-header">
        <div>
          <h6>Nomina: {overallPayroll.paymentPeriod} </h6>
          <h6>Tipo de liquidacion: {overallPayroll.typeOfSettlement} </h6>
          <h6>Estado: {overallPayroll.status} </h6>
          <h5>Empleados: {employeePayroll.length} </h5>
        </div>
        <div className="item-header">
          <p>Total ingresos: {useCoinFormatter.format(totalAccrued)} </p>
          <p>Total decucciones: {useCoinFormatter.format(totalDeductions)} </p>
          <p>Total neto a pagar: {useCoinFormatter.format(totalNetPayable)} </p>
        </div>
      </div>
      <EmployeePayrollList
        setTotalAccrued={setTotalAccrued}
        setTotalDeductions={setTotalDeductions}
        setTotalNetPayable={setTotalNetPayable}
      />
    </div>
  );
};
