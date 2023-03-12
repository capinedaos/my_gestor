import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import "../assets/styles/EmployeeForm.css";
import { deleteEmployeeByIdThunk } from "../../app/slicesTalentManagement/employee.slice";
import { deleteUnfitnessByIdThunk } from "../../app/slicesTalentManagement/unfitness.slice";
import { deleteMissingWorkByIdThunk } from "../../app/slicesTalentManagement/missingWork.slice";
import { deleteLoanMoneyByIdThunk } from "../../app/slicesTalentManagement/loanMoney.slice";
import { deleteBonusServiceByIdThunk } from "../../app/slicesTalentManagement/bonusService.slice";
import { deleteLiquidationByIdThunk } from "../../app/slicesTalentManagement/liquidation.slice";
import { deleteContractByIdThunk } from "../../app/slicesTalentManagement/contract.slice";
import { deleteSalaryIncreaseByIdThunk } from "../../app/slicesTalentManagement/salaryIncrease.slice";
import { deleteOverallPayrollByIdThunk } from "../../app/slicesTalentManagement/overallPayroll.slice";
import { deleteEmployeePayrollByIdThunk } from "../../app/slicesTalentManagement/employeePayroll.slice";

export const ModalDelete = ({
  idEmployeePayroll,
  idOverallPayroll,
  idSalaryIncrease,
  idContract,
  idLiquidation,
  idBonusService,
  idLoanMoney,
  idMissingWork,
  idUnfitness,
  idEmployee,
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const deleteData = (
    idEmployee,
    idUnfitness,
    idMissingWork,
    idLoanMoney,
    idBonusService,
    idLiquidation,
    idContract,
    idSalaryIncrease,
    idOverallPayroll
  ) => {
    if (idEmployee) {
      dispatch(deleteEmployeeByIdThunk(idEmployee));
    } else if (idUnfitness) {
      dispatch(deleteUnfitnessByIdThunk(idUnfitness));
    } else if (idMissingWork) {
      dispatch(deleteMissingWorkByIdThunk(idMissingWork));
    } else if (idLoanMoney) {
      dispatch(deleteLoanMoneyByIdThunk(idLoanMoney));
    } else if (idBonusService) {
      dispatch(deleteBonusServiceByIdThunk(idBonusService));
    } else if (idLiquidation) {
      dispatch(deleteLiquidationByIdThunk(idLiquidation));
    } else if (idContract) {
      dispatch(deleteContractByIdThunk(idContract));
    } else if (idSalaryIncrease) {
      dispatch(deleteSalaryIncreaseByIdThunk(idSalaryIncrease, id));
    } else if (idOverallPayroll) {
      dispatch(deleteOverallPayrollByIdThunk(idOverallPayroll));
    } else if (idEmployeePayroll) {
      dispatch(deleteEmployeePayrollByIdThunk(idEmployeePayroll, id));
    }
  };

  return (
    <div
      id={idModal}
      className={className}
      tabIndex={tabIndex}
      aria-labelledby={ariaLabelledby}
      aria-hidden={ariaHidden}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Eliminando informacion
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h5>Esta seguro ?</h5>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              NO
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => {
                deleteData(
                  idEmployee,
                  idUnfitness,
                  idMissingWork,
                  idLoanMoney,
                  idBonusService,
                  idLiquidation,
                  idContract,
                  idSalaryIncrease,
                  idOverallPayroll,
                  idEmployeePayroll
                );
              }}
            >
              SI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
