import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import { useCoinFormatter, formatNumber } from "../../hooks";
import { getContractByEmployeeIdThunk } from "../../app/slicesTalentManagement/contract.slice";
import { ModalDelete, LiquidationForm } from "../components";
import { ButtonReturn } from "../../components";

export const DetailLiquidation = () => {
  const dispatch = useDispatch();
  const [idLiquidation, setIdLiquidation] = useState(0);
  const [liquidation, setLiquidation] = useState({});
  const [contracActive, setContracActive] = useState({});
  const contract = useSelector((state) => state.contract);
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");
  const [liquidationSelected, setLiquidationSelected] = useState(null);
  const { id } = useParams();

  const selectLiquidation = (liquidation) => {
    setLiquidationSelected(liquidation);
  };

  const deselectLiquidation = () => {
    setLiquidationSelected(null);
  };

  useEffect(() => {
    axios
      .get(
        "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/liquidation",
        getConfig()
      )
      .then((res) => {
        const liquidationSearch = res.data.liquidation.find(
          (liquidation) => liquidation.id === Number(id)
        );
        setLiquidation(liquidationSearch);
      });
    if (liquidation?.employeeId !== undefined) {
      dispatch(getContractByEmployeeIdThunk(liquidation?.employeeId));
    }
    const contractFind = contract.find(
      (contract) => contract.status === "activo"
    );
    setContracActive(contractFind);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  return (
    <>
      <div className="container">
        <h2>Detalle liquidacion</h2>
        <ButtonReturn route={"/talent-management/liquidation"} />
        <div className="p-3 border bg-light text-center">
          <h3>LIQUIDACION DE PRESTACIONES SOCIALES</h3>
          <Link
            to={`/talent-management/employee/${liquidation.employeeId}`}
            className="btn btn-primary"
          >
            {liquidation.employee?.names}
          </Link>
        </div>

        <table className="table table-bordered border-light table-sm">
          <tbody>
            <tr>
              <th scope="row" className="table-primary">
                Nombre empleado
              </th>
              <td>{liquidation.employee?.names}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Cedula
              </th>
              <td> {formatNumber(liquidation.employee?.identification)}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Cargo
              </th>
              <td>{contracActive?.position}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Salario
              </th>
              <td>{useCoinFormatter.format(liquidation?.salary)}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Fecha inicio
              </th>
              <td>
                {" "}
                {new Date(liquidation?.initialDate).toLocaleDateString()}
              </td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Fecha fin
              </th>
              <td> {new Date(liquidation?.finalDate).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Auxilio de transporte
              </th>
              <td>
                {" "}
                {useCoinFormatter.format(liquidation?.transportationAssistance)}
              </td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Fecha de creacion
              </th>
              <td> {new Date(liquidation?.createdAt).toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-bordered border-light table-sm">
          <thead>
            <tr className="table-dark">
              <th scope="col">DEVENGADOS</th>
              <th scope="col">DIAS</th>
              <th scope="col">VALOR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="table-primary">
                Cesantias
              </th>
              <td>{liquidation?.totalDays}</td>
              <td>
                {useCoinFormatter.format(liquidation?.unemploymentAssistance)}
              </td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Intereses sobre Cesantias
              </th>
              <td>{liquidation?.totalDays}</td>
              <td>
                {" "}
                {useCoinFormatter.format(liquidation?.unemploymentInterests)}
              </td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Vacaciones
              </th>
              <td>{liquidation?.totalDays}</td>
              <td> {useCoinFormatter.format(liquidation?.holidays)}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Prima
              </th>
              <td>{liquidation?.totalBonusDays}</td>
              <td> {useCoinFormatter.format(liquidation?.bonus)}</td>
            </tr>
            <tr>
              <th scope="row" className="table-danger">
                TOTAL LIQUIDACION
              </th>
              <td colSpan="2" className="table-dark">
                {" "}
                {useCoinFormatter.format(liquidation?.totalLiquidation)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
          <button
            onClick={() => {
              selectLiquidation(liquidation);
              setTitleModal("Editar liquidacion");
              setTextButton("Editar liquidacion");
            }}
            className="btn btn-warning btn-lg"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalForm"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            onClick={() => {
              setIdLiquidation(liquidation.id);
            }}
            type="button"
            className="btn btn-danger btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modalDelete"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>

        <ModalDelete
          className={"modal fade"}
          idModal={"modalDelete"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          idLiquidation={idLiquidation}
        />

        <LiquidationForm
          className={"modal fade"}
          idModal={"modalForm"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          liquidationSelected={liquidationSelected}
          deselectLiquidation={deselectLiquidation}
          titleModal={titleModal}
          textButton={textButton}
        />
      </div>
    </>
  );
};
