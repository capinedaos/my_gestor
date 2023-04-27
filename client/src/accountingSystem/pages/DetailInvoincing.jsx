import React, { useEffect } from "react";
import { ButtonReturn } from "../../components";
import { useDispatch, useSelector } from "react-redux";

import { getCompanyThunk } from "../../app/slices/company.slice";

export const DetailInvoincing = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company);

  useEffect(() => {
    dispatch(getCompanyThunk());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <h2>Detalle de factura</h2>
        <ButtonReturn route={"/accounting-system/invoicing"} />
        <div className="d-flex justify-content-between">
          <div>
            <h6>{company?.companyName}</h6>
            <h6>{company?.address}</h6>
            <h6>{company?.city}</h6>
          </div>
          <h4>Factura N° 009</h4>
        </div>

        <div className="container mt-2">
          <div className="row mb-2">
            <div className="col border text-start p-3">
              <h6 className="border-bottom">codigo cliente</h6>
              <h6 className="border-bottom">nombre cliente</h6>
              <h6 className="border-bottom">direccion cliente</h6>
            </div>
            <div className="col border text-start p-3">
              <h6 className="border-bottom">emitida</h6>
              <h6 className="border-bottom">vendedor</h6>
              <h6 className="border-bottom">terminos</h6>
            </div>
          </div>
          <div
            className="table-responsive rounded-3"
            style={{ height: "350px" }}
          >
            <table className="table table-sm table-striped border-primary text-gray-900">
              <thead className="bg-light table-info text-black">
                <tr>
                  <th scope="col">codigo</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">cantidad</th>
                  <th scope="col">unidad</th>
                  <th scope="col">precio</th>
                  <th scope="col">descuento</th>
                  <th scope="col">subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>telefono samsung</td>
                  <td>3</td>
                  <td>UN</td>
                  <td>$2.300.000</td>
                  <td>0</td>
                  <td>$6.900.000</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>telefono samsung</td>
                  <td>3</td>
                  <td>UN</td>
                  <td>$2.300.000</td>
                  <td>0</td>
                  <td>$6.900.000</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>telefono samsung</td>
                  <td>3</td>
                  <td>UN</td>
                  <td>$2.300.000</td>
                  <td>0</td>
                  <td>$6.900.000</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>telefono samsung</td>
                  <td>3</td>
                  <td>UN</td>
                  <td>$2.300.000</td>
                  <td>0</td>
                  <td>$6.900.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mb-2">
            <div className="col border text-start p-3">
              <h6 className="border-bottom">observaciones</h6>
              <h6 className="border-bottom">enviar a</h6>
              <h6 className="border-bottom">nombre cliente</h6>
              <h6 className="border-bottom">direccion cliente</h6>
            </div>
            <div className="col border text-start p-3">
              <h6 className="border-bottom">subtotal</h6>
              <h6 className="border-bottom">descuento</h6>
              <h6 className="border-bottom">miscelanea</h6>
              <h6 className="border-bottom">Iva</h6>
              <h6 className="border-bottom">total</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
