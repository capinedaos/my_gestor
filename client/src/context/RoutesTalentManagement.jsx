import React from "react";
import { NavBar } from "../talentManagement/components";
import { Routes, Route } from "react-router-dom";
import {
  HomeTalentManagement,
  Employee,
  OverallPayroll,
  CreateOverallPayroll,
  DetailEmployee,
  Unfitness,
  MissingWork,
  LoanMoney,
  DetailLoanMoney,
  BonusService,
  DetailBonusService,
  Liquidation,
  DetailLiquidation,
  CompletePayroll,
  TableFirstFortnight,
  TableMonthly,
  TableSecondFortnight,
  DetailEmployeePayroll,
  PayrollInformation,
  ProofPayment,
  // Contract,
} from "../talentManagement/pages";

const RoutesTalentManagement = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomeTalentManagement />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/overall-payroll" element={<OverallPayroll />} />
        <Route
          path="/create-overall-payroll"
          element={<CreateOverallPayroll />}
        />
        <Route path="/employee/:id" element={<DetailEmployee />} />
        <Route path="/loan-money/:id" element={<DetailLoanMoney />} />
        <Route path="/bonus-service/:id" element={<DetailBonusService />} />
        <Route
          path="/employee-payroll/:id"
          element={<DetailEmployeePayroll />}
        />
        <Route
          path="/payroll-information/:id"
          element={<PayrollInformation />}
        />
        <Route path="/proof-payment/:id" element={<ProofPayment />} />
        <Route path="/complete-payroll/:id" element={<CompletePayroll />} />
        <Route path="/liquidation/:id" element={<DetailLiquidation />} />
        <Route path="/unfitness" element={<Unfitness />} />
        <Route path="/missing-work" element={<MissingWork />} />
        <Route path="/loan-money" element={<LoanMoney />} />
        <Route path="/bonus-service" element={<BonusService />} />
        <Route path="/liquidation" element={<Liquidation />} />
        <Route path="/monthly-payroll/:id" element={<TableMonthly />} />
        <Route
          path="/first-fortnight-payroll/:id"
          element={<TableFirstFortnight />}
        />
        <Route
          path="/second-fortnight-payroll/:id"
          element={<TableSecondFortnight />}
        />
        {/* <Route path="/contract" element={<Contract />} /> */}
      </Routes>
    </div>
  );
};

export default RoutesTalentManagement;
