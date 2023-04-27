import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import { useCoinFormatter } from "../../hooks";
import { EmployeePayrollList, ModalInformation } from "../components";
import { ButtonReturn } from "../../components";
import { getEmployeePayrollByOverallPayrollId } from "../../app/slicesTalentManagement/employeePayroll.slice";
import { finishPayrollThunk } from "../../app/slicesTalentManagement/overallPayroll.slice";
import "../assets/styles/CompletePayroll.css";

export const CompletePayroll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employeePayroll = useSelector((state) => state.employeePayroll);
  const [overallPayroll, setOverallPayroll] = useState({});
  const [totalAccrued, setTotalAccrued] = useState(0);
  const [totalDeductions, setTotalDeductions] = useState(0);
  const [totalNetPayable, setTotalNetPayable] = useState(0);
  const [information, setInformation] = useState("");
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
  }, [id, dispatch]);

  const finishPayroll = (id) => {
    dispatch(finishPayrollThunk(id));
    setInformation("Nomina Terminada");
    navigate("/talent-management/overall-payroll");
  };

  return (
    <div className="container">
      <h2>Novedades</h2>
      <div className="buttons">
        <ButtonReturn route={"/talent-management/overall-payroll"} />
        <button
          className="btn btn-primary"
          data-bs-target="#modalInformation"
          data-bs-toggle="modal"
          onClick={() => {
            finishPayroll(overallPayroll.id);
          }}
        >
          Liquidar
        </button>
        <ModalInformation
          idModal={"modalInformation"}
          className={"modal fade"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          information={information}
        />
      </div>
      <div>
        <div className="container-header">
          <div>
            <h6>Nomina: {overallPayroll.paymentPeriod} </h6>
            <h6>Tipo de liquidacion: {overallPayroll.typeOfSettlement} </h6>
            <h5>Empleados: {employeePayroll.length} </h5>
          </div>
          <div className="item-header">
            <p>Total ingresos: {useCoinFormatter.format(totalAccrued)} </p>
            <p>
              Total decucciones: {useCoinFormatter.format(totalDeductions)}{" "}
            </p>
            <p>
              Total neto a pagar: {useCoinFormatter.format(totalNetPayable)}{" "}
            </p>
          </div>
        </div>

        <EmployeePayrollList
          setTotalAccrued={setTotalAccrued}
          setTotalDeductions={setTotalDeductions}
          setTotalNetPayable={setTotalNetPayable}
        />
      </div>
    </div>
  );
};
