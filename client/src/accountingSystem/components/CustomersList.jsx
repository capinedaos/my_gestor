import React from "react";

export const CustomersList = () => {
  return (
    <div className="table-responsive rounded-3" style={{ height: "350px" }}>
      <table className="table table-sm table-striped border-primary text-gray-900">
        <thead className="bg-light table-info text-black">
          <tr>
            <th scope="col">
              {" "}
              <input
                type="checkbox"
                className="form-check-input"
                name="allSelect"
              />
            </th>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Representante</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                className="form-check-input"
                // name={employee.names}
                // checked={employee?.isChecked || false}
                // onChange={handleChange}
              />
            </td>
            <td>001</td>
            <td>floristeria azusena</td>
            <td>Pedro Hernandez</td>
            <td>315435265</td>
            <td>floristeriaazusena@mail.com</td>
            <td>cliente</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                className="form-check-input"
                // name={employee.names}
                // checked={employee?.isChecked || false}
                // onChange={handleChange}
              />
            </td>
            <td>002</td>
            <td>Mil cacharros</td>
            <td>Maria Lopez</td>
            <td>312564582</td>
            <td>milcacharros@mail.com</td>
            <td>cliente</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                className="form-check-input"
                // name={employee.names}
                // checked={employee?.isChecked || false}
                // onChange={handleChange}
              />
            </td>
            <td>002</td>
            <td>Vitelsa</td>
            <td>John Doe</td>
            <td>315423652</td>
            <td>vitelsa@mail.com</td>
            <td>proveedor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
