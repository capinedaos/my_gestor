import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeJobSecurity } from "../jobSecurity/pages";

const RoutesJobSecurity = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomeJobSecurity />} />
      </Routes>
    </div>
  );
};

export default RoutesJobSecurity;
