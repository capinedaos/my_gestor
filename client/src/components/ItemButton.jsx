import React from "react";

export const ItemButton = ({ icon, title }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-dark fs-6 mb-1"
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        {" "}
        <h3>{icon}</h3>
        {title}
      </button>
    </>
  );
};
