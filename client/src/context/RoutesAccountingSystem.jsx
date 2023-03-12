import React from "react";
import { NavBar } from "../accountingSystem/components";
import { Routes, Route } from "react-router-dom";
import { HomeAccounting, Invoicing } from "../accountingSystem/pages";

const RoutesAccountingSystem = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomeAccounting />} />
        <Route path="/invoicing" element={<Invoicing />} />
      </Routes>
    </div>
  );
};

export default RoutesAccountingSystem;
