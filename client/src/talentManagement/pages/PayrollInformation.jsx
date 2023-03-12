import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { useParams } from "react-router-dom";
import { getEmployeePayrollByOverallPayrollId } from "../../app/slicesTalentManagement/employeePayroll.slice";
import { ButtonReturn } from "../../components";
import { useCoinFormatter } from "../../hooks";
import moment from "moment";

export const PayrollInformation = () => {
  const [overallPayroll, setOverallPayroll] = useState({});
  const employeePayroll = useSelector((state) => state.employeePayroll);
  const dispatch = useDispatch();
  const [totalNetPayable, setTotalNetPayable] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/api/v1/talent-management/overall-payroll/${id}`,
        getConfig()
      )
      .then((res) => {
        setOverallPayroll(res.data.overallPayroll);
      });

    dispatch(getEmployeePayrollByOverallPayrollId(id));
    let total = 0;
    if (employeePayroll.length > 0) {
      employeePayroll.map((employeePayroll) => {
        total += employeePayroll.netPayable;
      });
    }
    setTotalNetPayable(total);
  }, [id, dispatch]);

  return (
    <div className="container">
      <h2>Info de nomina</h2>
      <ButtonReturn route={"/talent-management/overall-payroll"} />

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Estado de nomina</h5>
          <a href="#" className="btn btn-primary">
            <i className="bi bi-check-circle">Nomina terminada</i>
          </a>
          <p className="card-text">
            Fecha:
            {moment(overallPayroll.updatedAt).format("YYYY-MM-DD")}
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Informacion general</h5>

          <p className="card-text">
            Nomina:
            {overallPayroll.paymentPeriod}
          </p>
          <p>
            Numero de empleados:
            {employeePayroll.length}
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> Neto a pagar a colaboradores</h5>

          <p className="card-text">
            {useCoinFormatter.format(totalNetPayable)}
          </p>
        </div>
      </div>
    </div>
  );
};
