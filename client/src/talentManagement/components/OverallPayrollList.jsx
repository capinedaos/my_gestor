import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOverallPayrollThunk,
  getOverallPayrollByIdThunk,
} from "../../app/slicesTalentManagement/overallPayroll.slice";
import { getEmployeePayrollByOverallPayrollId } from "../../app/slicesTalentManagement/employeePayroll.slice";
import { ModalDelete } from "./ModalDelete";
import { useCoinFormatter } from "../../hooks";

export const OverallPayrollList = ({
  setTitleModal,
  selectOverallPayroll,
  setTextButton,
}) => {
  const overallPayroll = useSelector((state) => state.overallPayroll);
  const dispatch = useDispatch();
  const [idOverallPayroll, setIdOverallPayroll] = useState(0);
  // const [search, setSearch] = useState("");
  // const [overallPayrollList, setOverallPayrollList] = useState([]);
  // const [overallPayrollFilter, setOverallPayrollFilter] = useState([]);

  useEffect(() => {
    dispatch(getOverallPayrollThunk());
    // setOverallPayrollList(overallPayroll);
    // setOverallPayrollFilter(overallPayroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  //   filter(e.target.value);
  // };

  // const filter = (search) => {
  //   // eslint-disable-next-line array-callback-return
  //   let searchResult = overallPayrollFilter.filter((element) => {
  //     if (
  //       element.typeOfSettlement
  //         .toString()
  //         .toLowerCase()
  //         .includes(search.toLowerCase()) ||
  //       element.description
  //         .toString()
  //         .toLowerCase()
  //         .includes(search.toLowerCase())
  //     ) {
  //       return element;
  //     }
  //   });
  //   setOverallPayrollList(searchResult);
  // };

  return (
    <>
      {/* <div className="input-group mb-3">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="form-control"
          placeholder="Busqueda por Tipo o Descripcion"
          aria-label="Busqueda por Tipo o Descripcion"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-info"
          type="button"
          id="button-addon2"
        >
          <i className="bi bi-search"></i>
        </button>
      </div> */}

      <div className="table-responsive rounded-3" style={{ height: "410px" }}>
        <table className="table table-sm table-striped border-primary text-gray-900">
          <thead className="bg-light table-info text-black">
            <tr>
              <th scope="col">Estado</th>
              <th scope="col">Tipo de liquidacion</th>
              <th scope="col">Descripción</th>
              <th scope="col">Periodo de pago</th>
              <th scope="col">Total nomina</th>

              <th scope="col">Accion</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(overallPayroll)
              ? overallPayroll.map((overallPayroll) => (
                  <tr className="text-left" key={overallPayroll.id}>
                    <td>{overallPayroll.status}</td>
                    <td>{overallPayroll.typeOfSettlement}</td>
                    <td>
                      <Link
                        to={`/talent-management/proof-payment/${overallPayroll.id} `}
                      >
                        {overallPayroll.description}
                      </Link>
                    </td>
                    <td>{overallPayroll.paymentPeriod}</td>
                    <td>
                      {useCoinFormatter.format(overallPayroll.totalPayroll)}
                    </td>

                    {overallPayroll.status === "En proceso" ? (
                      <td>
                        <Link
                          to={`/talent-management/complete-payroll/${overallPayroll.id} `}
                        >
                          <button
                            type="button"
                            className="btn btn-info"
                            onClick={() => {
                              dispatch(
                                getOverallPayrollByIdThunk(overallPayroll.id),
                                getEmployeePayrollByOverallPayrollId(
                                  overallPayroll.id
                                )
                              );
                            }}
                          >
                            <i className="bi bi-gear-wide-connected"></i>
                          </button>
                        </Link>
                      </td>
                    ) : (
                      <td>
                        <Link
                          to={`/talent-management/payroll-information/${overallPayroll.id} `}
                        >
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              dispatch(
                                getOverallPayrollByIdThunk(overallPayroll.id),
                                getEmployeePayrollByOverallPayrollId(
                                  overallPayroll.id
                                )
                              );
                            }}
                          >
                            <i className="bi bi-info-circle"></i>
                          </button>
                        </Link>
                      </td>
                    )}

                    <td>
                      <button
                        onClick={() => {
                          selectOverallPayroll(overallPayroll);
                          setTitleModal("Editar nomina");
                          setTextButton("Editar nomina");
                        }}
                        className="btn btn-warning"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalForm"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setIdOverallPayroll(overallPayroll.id);
                        }}
                        type="button"
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#modalDelete"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              : []}
          </tbody>
        </table>
        <ModalDelete
          className={"modal fade"}
          idModal={"modalDelete"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          idOverallPayroll={idOverallPayroll}
        />
      </div>
    </>
  );
};
