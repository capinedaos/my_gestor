import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    axios
      .post("http://localhost:4000/api/v1/users/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
        alert("Sesión iniciada correctamente");
      })
      .catch((error) => {
        if (error.statusCode === 400) {
          alert("Credenciales incorrectas");
        }
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(submit)}>
        <h2>Inicio de sesion</h2>
        <h2>My Gestor</h2>
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
  );
};

export default Login;
