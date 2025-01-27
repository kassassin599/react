import React, { useState } from "react";
import "./App.css";

function App() {
  const handleCopy = () => {

    alert("Text Copied!");

  };





  return (
    <>
         <input type="text" onCopy={handleCopy} value="Copy this text" readOnly />

    </>
  );
}

export default App;
