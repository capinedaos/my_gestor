import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ModuleCard, NavBar } from "../components";
import { getCompanyThunk } from "../app/slices/company.slice";
import { useDispatch, useSelector } from "react-redux";

const HomeMyGestor = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company);

  useEffect(() => {
    dispatch(getCompanyThunk());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="container-fluid text-sm-center fs-6">
          <h1>Gestor Modulos</h1>
          <h5>Empresa: {company?.companyName}</h5>
          <h5>Nit: {company?.nit}</h5>
          <h5>Direccion: {company?.address}</h5>
          <h5>Ciudad: {company?.city}</h5>
          <h5>Telefono: {company?.phone}</h5>
          <h5>Email: {company?.email}</h5>
        </div>

        <div className="container_module_card">
          <Link to="/talent-management/home" className="link">
            <ModuleCard
              module_name="RRHH"
              icon={<i className="bi bi-people"></i>}
            />
          </Link>

          <Link to="/job-security/home" className="link">
            <ModuleCard
              // module_name="SG-SST"
              // icon={<i className="bi bi-clipboard2-pulse"></i>}
              module_name=""
              icon={<i className="bi bi-question-square"></i>}
            />
          </Link>

          <Link to="/accounting-system/home" className="link">
            <ModuleCard
              // module_name="CONTABLE"
              // icon={<i className="bi bi-calculator"></i>}
              module_name=""
              icon={<i className="bi bi-question-square"></i>}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeMyGestor;
