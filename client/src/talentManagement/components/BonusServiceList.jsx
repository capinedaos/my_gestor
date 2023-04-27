import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getBonusServiceThunk,
  getBonusServiceByIdThunk,
} from "../../app/slicesTalentManagement/bonusService.slice";
import { ModalDelete } from "./ModalDelete";
import { useCoinFormatter } from "../../hooks";

export const BonusServiceList = ({
  setTitleModal,
  selectBonusService,
  setTextButton,
}) => {
  const bonusService = useSelector((state) => state.bonusService);
  const dispatch = useDispatch();
  const [idBonusService, setIdBonusService] = useState(0);
  // const [search, setSearch] = useState("");
  // const [bonusServiceList, setBonusServiceList] = useState([]);
  // const [bonusServiceFilter, setBonusServiceFilter] = useState([]);

  useEffect(() => {
    dispatch(getBonusServiceThunk());
    // setBonusServiceList(bonusService);
    // setBonusServiceFilter(bonusService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  //   filter(e.target.value);
  // };

  // const filter = (search) => {
  //   // eslint-disable-next-line array-callback-return
  //   let searchResult = bonusServiceFilter.filter((element) => {
  //     if (
  //       element.employee?.names
  //         .toString()
  //         .toLowerCase()
  //         .includes(search.toLowerCase())
  //     ) {
  //       return element;
  //     }
  //   });
  //   setBonusServiceList(searchResult);
  // };

  return (
    <>
      {/* <div className="input-group mb-3">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="form-control"
          placeholder="Busqueda por Empleado"
          aria-label="Busqueda por Empleado"
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
              <th scope="col">Empleado</th>
              <th scope="col">Fecha inicial</th>
              <th scope="col">Fecha final</th>
              <th scope="col">Salario promedio</th>
              <th scope="col">Aux transporte</th>
              <th scope="col">Neto pagado</th>
              <th scope="col">Detalle</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(bonusService)
              ? bonusService.map((bonusService) => (
                  <tr className="text-left" key={bonusService.id}>
                    <td>
                      <Link
                        to={`/talent-management/employee/${bonusService.employeeId}`}
                        className="nav-link active"
                      >
                        <button type="button" className="btn btn-link">
                          {bonusService.employee?.names}
                        </button>
                      </Link>
                    </td>
                    <td>
                      {new Date(bonusService.initialDate).toLocaleDateString()}
                    </td>
                    <td>
                      {new Date(bonusService.finalDate).toLocaleDateString()}
                    </td>
                    <td>
                      {useCoinFormatter.format(bonusService.averageSalary)}
                    </td>
                    <td>
                      {useCoinFormatter.format(
                        bonusService.transportationAssistance
                      )}
                    </td>
                    <td>{useCoinFormatter.format(bonusService.netPayable)}</td>
                    <td>
                      <Link
                        to={`/talent-management/bonus-service/${bonusService.id}`}
                      >
                        <button
                          type="button"
                          className="btn btn-info"
                          onClick={() => {
                            dispatch(getBonusServiceByIdThunk(bonusService.id));
                          }}
                        >
                          <i className="bi bi-plus-circle"></i>
                        </button>
                      </Link>
                    </td>

                    <td>
                      <button
                        onClick={() => {
                          selectBonusService(bonusService);
                          setTitleModal("Editar prima");
                          setTextButton("Editar prima");
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
                          setIdBonusService(bonusService.id);
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
          idBonusService={idBonusService}
        />
      </div>
    </>
  );
};
