import React, { useState } from "react";
import { EmployeeForm, EmployeeList } from "../components";
import { ButtonReturn } from "../../components";

export const Employee = () => {
  const [employeeSelected, setEmployeeSelected] = useState(null);
  const [titleModal, setTitleModal] = useState("");
  const [textButton, setTextButton] = useState("");

  const selectEmployee = (employee) => {
    setEmployeeSelected(employee);
  };

  const deselectEmployee = () => {
    setEmployeeSelected(null);
  };

  return (
    <>
      <div className="container">
        <h2>Empleados</h2>
        <div className="display">
          <ButtonReturn route={"/talent-management/home"} />
          <button
            type="button"
            className="btn btn-primary mb-4"
            data-bs-toggle="modal"
            data-bs-target="#modalForm"
            onClick={() => {
              setTitleModal("Crear nuevo empleado");
              setTextButton("Agregar nuevo empleado");
              deselectEmployee();
            }}
          >
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
       

        <EmployeeForm
          className={"modal fade"}
          idModal={"modalForm"}
          tabIndex={"-1"}
          aria-labelledby={"exampleModalLabel"}
          aria-hidden={"true"}
          employeeSelected={employeeSelected}
          deselectEmployee={deselectEmployee}
          titleModal={titleModal}
          textButton={textButton}
        />

        <EmployeeList
          setTitleModal={setTitleModal}
          selectEmployee={selectEmployee}
          setTextButton={setTextButton}
        />
      </div>
    </>
  );
};
