import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Button from "react-bootstrap/Button";
// import { MyVerticallyCenteredModal } from "../components";
import { getUserThunk } from "../app/slices/user.slice";
import { NavBar } from "../components";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Usuarios</h1>
        <div className="table-responsive rounded-3" style={{ height: "410px" }}>
          <table className="table table-sm table-striped border-primary text-gray-900">
            <thead className="bg-light table-info text-black">
              <tr>
                <th scope="col">Nombre de usuario</th>
                <th scope="col">Email</th>
                <th scope="col">Rol</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="text-left" key={user.id}>
                  <td>{user.username.toUpperCase()}</td>
                  <td>{user.email.toUpperCase()}</td>
                  <td>{user.role.toUpperCase()}</td>
                  <td>
                    <i className="bi bi-person-dash"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
