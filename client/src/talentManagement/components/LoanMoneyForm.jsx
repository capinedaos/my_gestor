import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  createLoanMoneyThunk,
  updateLoanMoneyThunk,
} from "../../app/slicesTalentManagement/loanMoney.slice";

import { getEmployeeThunk } from "../../app/slicesTalentManagement/employee.slice";
import { useFormValidation } from "../../hooks";
import { ModalInformation } from "./ModalInformation";

export const LoanMoneyForm = ({
  className,
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
  loanMoneySelected,
  deselectLoanMoney,
  titleModal,
  textButton,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("");
  const [numberAmount, setNumberAmount] = useState("");
  const [outlayDate, setOutlayDate] = useState("");
  const [personAuthorizes, setPersonAuthorizes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cause, setCause] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const employees = useSelector((state) => state.employee);
  const [information, setInformation] = useState("");

  useFormValidation();

  useEffect(() => {
    dispatch(getEmployeeThunk());
    if (loanMoneySelected !== null) {
      setQuantity(loanMoneySelected.quantity);
      setNumberAmount(loanMoneySelected.numberAmount);
      setOutlayDate(moment(loanMoneySelected.outlayDate).format("YYYY-MM-DD"));
      setPersonAuthorizes(loanMoneySelected.personAuthorizes);
      setPaymentMethod(loanMoneySelected.paymentMethod);
      setCause(loanMoneySelected.cause);
      setEmployeeId(loanMoneySelected.employeeId);
    } else {
      setQuantity("");
      setNumberAmount("");
      setOutlayDate("");
      setPersonAuthorizes("");
      setPaymentMethod("");
      setCause("");
      setEmployeeId("");
    }
  }, [loanMoneySelected, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const loanMoney = {
      quantity,
      numberAmount,
      outlayDate,
      personAuthorizes,
      paymentMethod,
      cause,
      employeeId,
    };

    // editar
    if (loanMoneySelected !== null) {
      dispatch(updateLoanMoneyThunk(loanMoney, loanMoneySelected.id));
      deselectLoanMoney();
      setInformation("Prestamo modificado");
    } else {
      // crear
      dispatch(createLoanMoneyThunk(loanMoney));
      deselectLoanMoney();
      setInformation("Prestamo registrado");
    }
  };

  return (
    <form onSubmit={onSubmit} className="needs-validation" noValidate>
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
                {titleModal}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Valor Prestamo
                </label>
                <input
                  type="number"
                  id="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  placeholder="Ingresa una cantidad"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="numberAmount" className="form-label">
                  Numero de cuotas
                </label>
                <select
                  type="number"
                  id="numberAmount"
                  onChange={(e) => setNumberAmount(e.target.value)}
                  value={numberAmount}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="outlayDate" className="form-label">
                  Fecha desembolso
                </label>
                <input
                  type="date"
                  id="outlayDate"
                  onChange={(e) => setOutlayDate(e.target.value)}
                  value={outlayDate}
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="personAuthorizes" className="form-label">
                  Persona que autoriza
                </label>
                <input
                  type="text"
                  id="personAuthorizes"
                  onChange={(e) => setPersonAuthorizes(e.target.value)}
                  value={personAuthorizes}
                  placeholder="Ingresa un autorizado"
                  className="form-control"
                  required
                />
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="paymentMethod" className="form-label">
                  Medio de pago
                </label>
                <select
                  type="text"
                  id="paymentMethod"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  value={paymentMethod}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="Efectivo">Efectivo</option>
                  <option value="Transferencia">Transferencia</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>

              <div className="mb-3">
                <label htmlFor="cause" className="form-label">
                  Causa o Motivo
                </label>
                <select
                  type="text"
                  id="cause"
                  onChange={(e) => setCause(e.target.value)}
                  value={cause}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option value="Estudio">Estudio</option>
                  <option value="Compras Hogar">Compras Hogar</option>
                  <option value="Compra Vehiculo">Compra Vehiculo</option>
                  <option value="Inversion">Inversion</option>
                  <option value="Calamidad">Calamidad</option>
                  <option value="No especifica">No especifica</option>
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
              <div className="mb-3">
                <label htmlFor="employeeId" className="form-label">
                  Empleado
                </label>
                <select
                  type="text"
                  id="employeeId"
                  onChange={(e) => setEmployeeId(e.target.value)}
                  value={employeeId}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  {Array.isArray(employees)
                    ? employees.map((employee) => (
                        <option value={employee.id} key={employee.id}>
                          {employee.names}
                        </option>
                      ))
                    : []}
                </select>
                <div className="valid-feedback">
                  Campo ingresado correctamente
                </div>
                <div className="invalid-feedback">Campo obligatorio</div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                data-bs-target="#modalInformation"
                data-bs-toggle="modal"
              >
                {textButton}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalInformation
        idModal={"modalInformation"}
        className={"modal fade"}
        tabIndex={"-1"}
        aria-labelledby={"exampleModalLabel"}
        aria-hidden={"true"}
        information={information}
      />
    </form>
  );
};
