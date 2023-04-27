import React from "react";
import { NavBar } from "../accountingSystem/components";
import { Routes, Route } from "react-router-dom";
import {
  HomeAccounting,
  Invoicing,
  DetailInvoincing,
  CreateInvoincing,
  UpdateInvoincing,
  UpdateCustomers,
  Customers,
  CreateCustomers,
} from "../accountingSystem/pages";

const RoutesAccountingSystem = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomeAccounting />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/detail-invoicing" element={<DetailInvoincing />} />
        <Route path="/create-invoicing" element={<CreateInvoincing />} />
        <Route path="/create-customers" element={<CreateCustomers />} />
        <Route path="/update-invoicing" element={<UpdateInvoincing />} />
        <Route path="/update-customers" element={<UpdateCustomers />} />
      </Routes>
    </div>
  );
};

export default RoutesAccountingSystem;
