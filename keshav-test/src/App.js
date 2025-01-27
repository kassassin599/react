import React, { useState } from "react";
import "./App.css";

function App() {
  const handleBlur = () => {

    alert("Input Lost Focus!");

  };




  return (
    <>
        <input type="text" onBlur={handleBlur} placeholder="Blur me" />
    </>
  );
}

export default App;
