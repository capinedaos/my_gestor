import React from "react";
import { NavBar } from "../accountingSystem/components";
import { Routes, Route } from "react-router-dom";
import {
  HomeAccounting,
  Invoicing,
  DetailInvoincing,
  CreateInvoincing,
} from "../accountingSystem/pages";

const RoutesAccountingSystem = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomeAccounting />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/detail-invoicing" element={<DetailInvoincing />} />
        <Route path="/create-invoicing" element={<CreateInvoincing />} />
      </Routes>
    </div>
  );
};

export default RoutesAccountingSystem;
