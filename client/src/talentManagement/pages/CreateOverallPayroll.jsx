import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  createOverallPayrollThunk,
  getOverallPayrollThunk,
} from "../../app/slicesTalentManagement/overallPayroll.slice";
import {
  createEmployeePayrollThunk,
  getEmployeePayrollThunk,
} from "../../app/slicesTalentManagement/employeePayroll.slice";
import { getEmployeeThunk } from "../../app/slicesTalentManagement/employee.slice";
import { useNavigate } from "react-router-dom";
import { ButtonReturn } from "../components";

const CreateOverallPayroll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employee);
  const overallPayrolls = useSelector((state) => state.overallPayroll);
  // const employeePayrolls = useSelector((state) => state.employeePayroll);
  const [employeesData, setEmployeesData] = useState([]);
  const [ids, setIds] = useState([]);

  // handle events
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });

  useEffect(() => {
    dispatch(getOverallPayrollThunk());
    dispatch(getEmployeePayrollThunk());
    dispatch(getEmployeeThunk());
    setEmployeesData(employees);
  }, [dispatch, employees]);

  // handle submit
  const onSubmit = (data) => {
    dispatch(createOverallPayrollThunk(data));

    //  let overallPayrollId = 0;
    //  overallPayrolls.map((payroll) => {
    //    overallPayrollId = payroll.id;
    //  });

    //  let dataPayroll = {};

    // // hacer map de arrays ids
    // ids.map((employeeId) => {
    //   dataPayroll = {
    //     employeeId: employeeId,
    //     overallPayrollId: overallPayrollId,
    //   };
    //   dispatch(createEmployeePayrollThunk(dataPayroll));
    // });
    alert("Nomina creada");
    // navigate("/talent-management/overall-payroll");
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="justify-content-between  p-3 input-group">
            <div className="mb-3">
              <label htmlFor="typeOfSettlement" className="form-label">
                Tipo de liquidacion
              </label>
              <select
                className="form-control"
                {...register("typeOfSettlement", {
                  required: "Seleccione un opcion",
                })}
                id="typeOfSettlement"
              >
                <option value="" disabled>
                  Seleccione una opcion
                </option>
                <option value="mensual">Mensual</option>
                <option value="primera quincena">Primera quincena</option>
                <option value="segunda quincena">Segunda quincena</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción
              </label>
              <input
                type="text"
                className="form-control"
                {...register("description", {
                  required: "Ingrese una descripcion",
                })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="month" className="form-label">
                Mes
              </label>
              <select
                className="form-control"
                {...register("month", {
                  required: "Seleccione un mes",
                })}
                id="month"
              >
                <option value="" disabled>
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
            </div>

            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                Año
              </label>
              <input
                type="number"
                id="year"
                className="form-control"
                {...register("year", {
                  required: "Ingrese un año",
                })}
              />
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
                        name="allselect"
                      />
                    </th>
                    <th scope="col">N°</th>
                    <th scope="col">Nombres</th>
                    <th scope="col">Identificacion</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {employeesData.map((employee, index) => (
                    <tr className="text-left" key={index}>
                      <th>
                        <input
                          type="checkbox"
                          name={employee.names}
                          className="form-check-input"
                        />
                      </th>
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
              <button type="submit" value="Submit" className="btn btn-success">
                Crear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOverallPayroll;
