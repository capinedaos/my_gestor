import React from "react";
import { useDispatch } from "react-redux";
import { payLoanByIdThunk } from "../../app/slicesTalentManagement/loanMoney.slice";

export const ModalPayLoan = ({
  idLoanMoney,
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
}) => {
  const dispatch = useDispatch();

  const payLoan = (idLoanMoney) => {
    dispatch(payLoanByIdThunk(idLoanMoney));
  };

  return (
    <div
      className={className}
      id={idModal}
      tabIndex={tabIndex}
      aria-labelledby={ariaLabelledby}
      aria-hidden={ariaHidden}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Saldar Prestamo
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
                payLoan(idLoanMoney);
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
