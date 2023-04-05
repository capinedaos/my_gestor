import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Footer, Header } from "../home";
import "../assets/styles/Login.css";

import { ModalInformation } from "../components/ModalInformation";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  // const [information, setInformation] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submit = (data) => {
    axios
      .post("http://localhost:4000/api/v1/users/login", data)
      .then((res) => {
        // alert("Sesión iniciada correctamente");
        localStorage.setItem("token", res.data.token);
        handleClose();
        navigate("/home");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          handleClose();
          // alert("credenciales incorrectas");
        }
      });
  };

  return (
    <>
      <Header />

      <div className="login-container text-bg-secondary p-3 mb-4">
        <form onSubmit={handleSubmit(submit)}>
          <div className="display center">
            <h2>Inicio de sesion</h2>
            <i className="bi bi-lock fs-1 mx-2"></i>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              {...register("email")}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              {...register("password")}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            INGRESAR
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
