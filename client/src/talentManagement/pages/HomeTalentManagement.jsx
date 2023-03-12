import React from "react";
import { useSelector } from "react-redux";
import { ModuleCard, ButtonReturn } from "../../components";
import "../../assets/styles/HomeMyGestor.css";
import { Link } from "react-router-dom";

export const HomeTalentManagement = () => {
  const employees = useSelector((state) => state.employee);
  // const contract = useSelector((state) => state.contract);
  const overallPayroll = useSelector((state) => state.overallPayroll);
  const unfitness = useSelector((state) => state.unfitness);
  const missingWork = useSelector((state) => state.missingWork);
  const loanMoney = useSelector((state) => state.loanMoney);
  const bonusService = useSelector((state) => state.bonusService);
  const liquidation = useSelector((state) => state.liquidation);

  return (
    <div className="container">
      <h1>Gestion De Talento Humano</h1>
      <ButtonReturn route={`/home`} />
      <div className="container_module_card">
        <Link to="/talent-management/employee" className="link">
          <ModuleCard
            module_name="Empleados"
            icon={<i className="bi bi-person-bounding-box"></i>}
            counter={employees.length}
          />
        </Link>
        {/* <Link to="/talent-management/contract" className="link">
          <ModuleCard
            module_name="Contratos"
            icon={<i className="bi bi-briefcase"></i>}
            counter={contract.length}
          />
        </Link> */}
        <Link to="/talent-management/overall-payroll" className="link">
          <ModuleCard
            module_name="Nominas"
            icon={<i className="bi bi-cash-coin"></i>}
            counter={overallPayroll.length}
          />
        </Link>
        <Link to="/talent-management/unfitness" className="link">
          <ModuleCard
            module_name="Incapacidades"
            icon={<i className="bi bi-clipboard2-pulse"></i>}
            counter={unfitness.length}
          />
        </Link>
        <Link to="/talent-management/missing-work" className="link">
          <ModuleCard
            module_name="Ausencias"
            icon={<i className="bi bi-calendar-x"></i>}
            counter={missingWork.length}
          />
        </Link>
        <Link to="/talent-management/loan-money" className="link">
          <ModuleCard
            module_name="Prestamos"
            icon={<i className="bi bi-bank"></i>}
            counter={loanMoney.length}
          />
        </Link>
        <Link to="/talent-management/bonus-service" className="link">
          <ModuleCard
            module_name="Prima"
            icon={<i className="bi bi-piggy-bank"></i>}
            counter={bonusService.length}
          />
        </Link>
        <Link to="/talent-management/liquidation" className="link">
          <ModuleCard
            module_name="Liquidacion"
            icon={<i className="bi bi-cash-coin"></i>}
            counter={liquidation.length}
          />
        </Link>
      </div>
    </div>
  );
};
