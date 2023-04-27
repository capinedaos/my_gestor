import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  createOverallPayrollThunk,
  getOverallPayrollThunk,
} from "../../app/slicesTalentManagement/overallPayroll.slice";
import { createEmployeePayrollThunk } from "../../app/slicesTalentManagement/employeePayroll.slice";
import { getEmployeeThunk } from "../../app/slicesTalentManagement/employee.slice";
import { useNavigate } from "react-router-dom";
import { ModalInformation } from "../components";
import { ButtonReturn } from "../../components";
import { useFormValidation } from "../../hooks";
import getConfig from "../../utils/getConfig";

export const CreateOverallPayroll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employee);
  const [employeeData, setEmployeeData] = useState([]);
  const [information, setInformation] = useState("");

  // handle events
  const { register, handleSubmit } = useForm();

  useFormValidation();

  useEffect(() => {
    dispatch(getOverallPayrollThunk());
    dispatch(getEmployeeThunk());
    setEmployeeData(employees);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempEmployee = employeeData.map((employee) => {
        return { ...employee, isChecked: checked };
      });
      setEmployeeData(tempEmployee);
    } else {
      let tempEmployee = employeeData.map((employee) =>
        employee.names === name ? { ...employee, isChecked: checked } : employee
      );
      setEmployeeData(tempEmployee);
    }
  };

  // handle submit
  const onSubmit = (data) => {
    let dataPayroll = {};

    const employeePayroll = employeeData.filter(
      (employee) => employee.isChecked === true
    );

    // console.log(employeePayroll);

    dispatch(createOverallPayrollThunk(data));

    axios
      .get(
        "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/overall-payroll",
        getConfig()
      )
      .then((res) => {
        // map de arrays ids
        // eslint-disable-next-line array-callback-return
        employeePayroll.map((employee) => {
          dataPayroll = {
            employeeId: employee.id,
            overallPayrollId:
              res.data.overallPayroll[res.data.overallPayroll.length - 1].id,
          };
          // console.log(dataPayroll);
          dispatch(createEmployeePayrollThunk(dataPayroll));
        });
      });
    setInformation("Nomina creada");
    navigate("/talent-management/overall-payroll");
  };

  const returnOverallPayroll = () => {
    navigate("/talent-management/overall-payroll");
  };

  return (
    <div className="container">
      <h1>Nueva Nomina</h1>

      <ButtonReturn route={"/talent-management/overall-payroll"} />

      <div className="p-3 shadow-lg">
        <div className="text-center">
          <h5>Detalle de nomina</h5>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="needs-validation"
          noValidate
        >
          <div className="justify-content-between  p-3 input-group">
            <div className="form-floating mb-1">
              <select
                type="text"
                id="typeOfSettlement"
                className="form-control"
                required
                {...register("typeOfSettlement")}
              >
                <option value="" defaultValue>
                  Seleccione una opcion
                </option>
                <option value="mensual">Mensual</option>
                <option value="primera quincena">Primera quincena</option>
                <option value="segunda quincena">Segunda quincena</option>
              </select>
              <label htmlFor="typeOfSettlement">Tipo de liquidacion</label>
              <div className="valid-feedback">
                Campo ingresado correctamente
              </div>
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>

            <div className="form-floating mb-1">
              <input
                type="text"
                id="description"
                className="form-control"
                required
                placeholder="Ingresa una descripción"
                {...register("description")}
              />
              <label htmlFor="description">Descripción</label>
              <div className="valid-feedback">
                Campo ingresado correctamente
              </div>
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>

            <div className="form-floating mb-1">
              <select
                type="text"
                id="month"
                className="form-control"
                required
                {...register("month")}
              >
                <option value="" defaultValue>
                  Seleccione una opcion
                </option>
                <option value="enero">Enero</option>
                <option value="febrero">Febrero</option>
                <option value="marzo">Marzo</option>
                <option value="abril">Abril</option>
                <option value="mayo">Mayo</option>
                <option value="junio">Junio</option>
                <option value="julio">Julio</option>
                <option value="agosto">Agosto</option>
                <option value="septiembre">Septiembre</option>
                <option value="octubre">Octubre</option>
                <option value="noviembre">Noviembre</option>
                <option value="diciembre">Diciembre</option>
              </select>
              <label htmlFor="month">Mes</label>
              <div className="valid-feedback">
                Campo ingresado correctamente
              </div>
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>

            <div className="form-floating mb-1">
              <input
                type="number"
                id="year"
                className="form-control"
                required
                placeholder="Ingresa un año"
                {...register("year")}
              />
              <label htmlFor="year">Año</label>
              <div className="valid-feedback">
                Campo ingresado correctamente
              </div>
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <h5>Listado de empleados</h5>
            <div
              className="table-responsive rounded-3"
              style={{ height: "410px" }}
            >
              <table className="table table-sm table-striped border-primary text-gray-900">
                <thead className="bg-light table-info text-black">
                  <tr>
                    <th scope="col">
                      {" "}
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="allSelect"
                        checked={
                          !employeeData.some(
                            (employee) => employee?.isChecked !== true
                          )
                        }
                        onChange={handleChange}
                      />
                    </th>
                    <th scope="col">N°</th>
                    <th scope="col">Nombres</th>
                    <th scope="col">Identificacion</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData.map((employee, index) => (
                    <tr className="text-left" key={index}>
                      <td>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name={employee.names}
                          checked={employee?.isChecked || false}
                          onChange={handleChange}
                        />
                      </td>
                      <td>{index + 1} </td>
                      <td>{employee.names}</td>
                      <td>{employee.identification}</td>
                      <td>{employee.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 d-flex justify-content-center gap-5">
              {/* submit section */}

              <button
                onClick={returnOverallPayroll}
                type="submit"
                className="btn btn-secondary"
              >
                Regresar
              </button>
              <button
                type="submit"
                value="Submit"
                className="btn btn-success"
                data-bs-target="#modalInformation"
                data-bs-toggle="modal"
              >
                Crear
              </button>
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
      </div>
    </div>
  );
};
