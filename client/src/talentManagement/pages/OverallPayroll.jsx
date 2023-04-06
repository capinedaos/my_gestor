import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getOverallPayrollThunk } from "../../app/slicesTalentManagement/overallPayroll.slice";
import { OverallPayrollForm, OverallPayrollList } from "../components";
import { ButtonReturn } from "../../components";

export const OverallPayroll = () => {
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
