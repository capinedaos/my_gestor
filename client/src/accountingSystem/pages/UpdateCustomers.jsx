import { ButtonReturn } from "../../components";
import { FormCustomers } from "../components";

export const UpdateCustomers = () => {
  return (
    <>
      <div className="container">
        <h2>Modificar Cliente - Proveedor</h2>
        <ButtonReturn route={"/accounting-system/customers"} />
        <FormCustomers />
      </div>
    </>
  );
};
