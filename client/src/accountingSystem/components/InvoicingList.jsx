import React from "react";

export const InvoicingList = () => {
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
            <th scope="col">Numero</th>
            <th scope="col">Fecha</th>
            <th scope="col">Cliente</th>
            <th scope="col">Terminos</th>
            <th scope="col">Vendedor</th>
            <th scope="col">Total</th>
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
            <td>23/02/2023</td>
            <td>Multinacional sas</td>
            <td>contado</td>
            <td>sin vendedor</td>
            <td>$ 14.250</td>
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
            <td>001</td>
            <td>23/02/2023</td>
            <td>Multinacional sas</td>
            <td>contado</td>
            <td>sin vendedor</td>
            <td>$ 14.250</td>
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
            <td>001</td>
            <td>23/02/2023</td>
            <td>Multinacional sas</td>
            <td>contado</td>
            <td>sin vendedor</td>
            <td>$ 14.250</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
