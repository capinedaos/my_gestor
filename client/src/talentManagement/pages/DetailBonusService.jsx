import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import { useCoinFormatter, formatNumber } from "../../hooks";
import { getContractByEmployeeIdThunk } from "../../app/slicesTalentManagement/contract.slice";
import { ModalDelete, BonusServiceForm } from "../components";
import { ButtonReturn } from "../../components";

export const DetailBonusService = () => {
  const dispatch = useDispatch();
  const [idBonusService, setIdBonusService] = useState(0);
  const [bonusService, setBonusService] = useState({});
  const contract = useSelector((state) => state.contract);
  const [contracActive, setContracActive] = useState({});
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");
  const [bonusServiceSelected, setBonusServiceSelected] = useState(null);
  const { id } = useParams();

  const selectBonusService = (bonusService) => {
    setBonusServiceSelected(bonusService);
  };

  const deselectBonusService = () => {
    setBonusServiceSelected(null);
  };

  useEffect(() => {
    axios
      .get(
        "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/bonus-service",
        getConfig()
      )
      .then((res) => {
        const bonusServiceSearch = res.data.bonusService.find(
          (bonusService) => bonusService.id === Number(id)
        );
        setBonusService(bonusServiceSearch);
      });
    if (bonusService?.employeeId !== undefined) {
      dispatch(getContractByEmployeeIdThunk(bonusService?.employeeId));
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
        <h2>Detalle de prima</h2>
        <ButtonReturn route={"/talent-management/bonus-service"} />
        <div className="p-3 border bg-light text-center">
          <h3>LIQUIDACION DE PRIMA</h3>
          <Link
            to={`/talent-management/employee/${bonusService.employeeId}`}
            className="btn btn-primary"
          >
            {bonusService.employee?.names}
          </Link>
        </div>

        <table className="table table-bordered border-light table-sm">
          <tbody>
            <tr>
              <th scope="row" className="table-primary">
                Nombre empleado
              </th>
              <td>{bonusService.employee?.names}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Cedula
              </th>
              <td> {formatNumber(bonusService.employee?.identification)}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Cargo
              </th>
              <td>{contracActive?.position}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Fecha inicio
              </th>
              <td>
                {" "}
                {new Date(bonusService?.initialDate).toLocaleDateString()}
              </td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Fecha fin
              </th>
              <td> {new Date(bonusService?.finalDate).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Auxilio de transporte
              </th>
              <td>
                {" "}
                {useCoinFormatter.format(
                  bonusService?.transportationAssistance
                )}
              </td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Dias no laborados
              </th>
              <td> {bonusService?.daysNotWorked}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Salario promedio
              </th>
              <td> {useCoinFormatter.format(bonusService?.averageSalary)}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Base liquidacion
              </th>
              <td>
                {" "}
                {useCoinFormatter.format(
                  bonusService?.averageSalary +
                    bonusService?.transportationAssistance
                )}{" "}
              </td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Fecha de creacion
              </th>
              <td> {new Date(bonusService?.createdAt).toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-bordered border-light table-sm">
          <thead>
            <tr className="table-dark">
              <th scope="col">CONCEPTO</th>
              <th scope="col">DIAS</th>
              <th scope="col">VALOR</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-danger">
              <th scope="row">Prima</th>
              <td> {bonusService?.days}</td>
              <td>{useCoinFormatter.format(bonusService?.netPayable)}</td>
            </tr>
          </tbody>
        </table>

        <div>
          <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
            <button
              onClick={() => {
                selectBonusService(bonusService);
                setTitleModal("Editar prima");
                setTextButton("Editar prima");
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
                setIdBonusService(bonusService.id);
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
            idBonusService={idBonusService}
          />

          <BonusServiceForm
            className={"modal fade"}
            idModal={"modalForm"}
            tabIndex={"-1"}
            aria-labelledby={"exampleModalLabel"}
            aria-hidden={"true"}
            bonusServiceSelected={bonusServiceSelected}
            deselectBonusService={deselectBonusService}
            titleModal={titleModal}
            textButton={textButton}
          />
        </div>
      </div>
    </>
  );
};
