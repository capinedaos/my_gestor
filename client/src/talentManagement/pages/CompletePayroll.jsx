import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import { useCoinFormatter, formatNumber } from "../../hooks";
import { ModalDelete, ButtonReturn, EmployeePayrollList } from "../components";
import "../assets/styles/CompletePayroll.css";

const CompletePayroll = () => {
  const dispatch = useDispatch();
  const [overallPayroll, setOverallPayroll] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/api/v1/talent-management/overall-payroll",
        getConfig()
      )
      .then((res) => {
        const overallPayrollSearch = res.data.overallPayroll.find(
          (overallPayroll) => overallPayroll.id === Number(id)
        );
        setOverallPayroll(overallPayrollSearch);
      });
  }, [id, dispatch]);

  return (
    <div className="container">
      <h2>Novedades</h2>
      <div className="buttons">
        <ButtonReturn route={"/talent-management/overall-payroll"} />
        <button className="btn btn-primary">Liquidar</button>
      </div>
      <div>
        <div className="container-header">
          <div>
            <h6>Nomina: {overallPayroll.paymentPeriod} </h6>
            <h5>Empleados</h5>
          </div>
          <div className="item-header">
            <p>Total ingresos:</p>
            <p>Total decucciones:</p>
            <p>Total neto a pagar:</p>
          </div>
        </div>
        <EmployeePayrollList />
      </div>
    </div>
  );
};

export default CompletePayroll;
