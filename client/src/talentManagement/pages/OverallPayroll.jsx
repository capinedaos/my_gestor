import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOverallPayrollThunk } from "../../app/slicesTalentManagement/overallPayroll.slice";
import {
  ButtonReturn,
  OverallPayrollForm,
  OverallPayrollList,
} from "../components";

const OverallPayroll = () => {
  const dispatch = useDispatch();
  const [overallPayrollSelected, setOverallPayrollSelected] = useState(null);
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");

  const selectOverallPayroll = (overallPayroll) => {
    setOverallPayrollSelected(overallPayroll);
  };

  const deselectOverallPayroll = () => {
    setOverallPayrollSelected(null);
  };

  useEffect(() => {
    dispatch(getOverallPayrollThunk());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h2>Nominas</h2>

        <div className="display">
          <ButtonReturn route={"/talent-management/home"} />

          <Link to={"/talent-management/create-overall-payroll"}>
            <button className="btn btn-primary mx-2 mb-3">
              <i className="bi bi-plus-circle"></i>
            </button>
          </Link>
        </div>

        <div className="mb-3 mt-3 mx-auto">
          <input type="text" id="id" className="form-control" />
          <button className="btn btn-primary">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <OverallPayrollForm
          className={"modal fade"}
          idModal={"modalForm"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          overallPayrollSelected={overallPayrollSelected}
          deselectOverallPayroll={deselectOverallPayroll}
          titleModal={titleModal}
          textButton={textButton}
        />

        <OverallPayrollList
          setTitleModal={setTitleModal}
          selectOverallPayroll={selectOverallPayroll}
          setTextButton={setTextButton}
        />
      </div>
    </>
  );
};

export default OverallPayroll;
