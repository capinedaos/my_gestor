import React from "react";
import "../assets/styles/ModuleCard.css";

export const ModuleCard = (props) => {
  return (
    <>
      <div className="module_card position-relative">
        <h4>{props.module_name} </h4>
        <div className="container_icon">{props.icon}</div>

        {props.counter ? (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            {props.counter}
            <span className="visually-hidden">unread messages</span>
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};


