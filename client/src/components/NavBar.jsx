import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const logout = () => {
    localStorage.setItem("token", "");
    alert("Cerrando Sesion");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            MY GESTOR
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/user" className="nav-link active">
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link active" onClick={logout}>
                  Salir
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
