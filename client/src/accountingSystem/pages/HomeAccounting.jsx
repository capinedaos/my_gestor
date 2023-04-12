import React from "react";
// import { useSelector } from "react-redux";
import { ModuleCard, ButtonReturn } from "../../components";
import "../../assets/styles/HomeMyGestor.css";
import { Link } from "react-router-dom";

export const HomeAccounting = () => {
  return (
    <div className="container">
      <h1>Sistema Contable</h1>
      <ButtonReturn route={`/home`} />
      <div className="container_module_card">
        <Link to="/accounting-system/invoicing" className="link">
          <ModuleCard
            module_name="Facturacion"
            icon={<i className="bi bi-calculator"></i>}
            // counter={employees.length}
          />
        </Link>
        <Link to="/accounting-system/#" className="link">
          <ModuleCard
            module_name="Cuentas por Pagar"
            icon={<i className="bi bi-cash-coin"></i>}
            // counter={employees.length}
          />
        </Link>
        <Link to="/accounting-system/#" className="link">
          <ModuleCard
            module_name="Cuentas por Cobrar"
            icon={<i className="bi bi-cash-stack"></i>}
            // counter={employees.length}
          />
        </Link>
        <Link to="/accounting-system/#" className="link">
          <ModuleCard
            module_name="Inventario"
            icon={<i className="bi bi-dropbox"></i>}
            // counter={employees.length}
          />
        </Link>
        <Link to="/accounting-system/#" className="link">
          <ModuleCard
            module_name="Parametros"
            icon={<i className="bi bi-tools"></i>}
            // counter={employees.length}
          />
        </Link>
        <Link to="/accounting-system/#" className="link">
          <ModuleCard
            module_name="Contabilidad"
            icon={<i className="bi bi-clipboard-data"></i>}
            // counter={employees.length}
          />
        </Link>
        <Link to="/accounting-system/customers" className="link">
          <ModuleCard
            module_name="Clientes Proveedores"
            icon={<i className="bi bi-person-video2"></i>}
            // counter={employees.length}
          />
        </Link>
        <Link to="/accounting-system/#" className="link">
          <ModuleCard
            module_name="Caja Menor"
            icon={<i className="bi bi-bank"></i>}
            // counter={employees.length}
          />
        </Link>
      </div>
    </div>
  );
};
