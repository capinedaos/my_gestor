import React from "react";
import "../assets/styles/LoadingScreen.css"

export const LoadingScreen = () => {
  return (
    <div className="overlay">
      <div className="lds-hourglass"></div>
    </div>
  );
};

