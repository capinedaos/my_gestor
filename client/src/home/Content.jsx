import React from "react";
import imgHome from "../assets/images/imgHome.jpg";
import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <div className="container display" style={{ height: "80vh" }}>
      <img
        src={imgHome}
        className="card-img-top"
        alt="..."
        style={{ width: "28rem", height: "30rem" }}
      />

      <div className="container mb-4">
        <h1 className="mt-4 text-center">
          Gestiona novedades, genera nominas, liquida prestaciones sociales,
          crea facturas, gestiona inventarios, cartera y muchos mas !!!
        </h1>
        <Link to="/login" className="btn btn-primary btn-lg">
          Acceder
        </Link>
      </div>
    </div>
  );
};
