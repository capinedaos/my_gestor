import React from "react";

export const ItemButton = ({ icon, title }) => {
  return (
    <>
      <button type="button" class="btn btn-secondary btn-lg">
        {" "}
        <h1>{icon}</h1>
        {title}
      </button>
    </>
  );
};
