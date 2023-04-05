import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  RoutesTalentManagement,
  RoutesJobSecurity,
  RoutesAccountingSystem,
} from "./context";
import { Home } from "./home";
import { Login, HomeMyGestor, User } from "./pages";

import { LoadingScreen, ProtectedRoutes } from "./components";
import { useSelector } from "react-redux";
import "swiper/css/bundle";

export default function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <>
      <BrowserRouter>
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<HomeMyGestor />} />
            <Route path="/user" element={<User />} />

            <Route
              path="/talent-management/*"
              element={<RoutesTalentManagement />}
            />
            <Route path="/job-security/*" element={<RoutesJobSecurity />} />
            <Route
              path="/accounting-system/*"
              element={<RoutesAccountingSystem />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
