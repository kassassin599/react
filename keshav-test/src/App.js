import React, { useState } from "react";
import "./App.css";

function App() {
  const handleFocus = () => {

    alert("Input Focused!");

  };


  return (
    <>
       <input type="text" onFocus={handleFocus} placeholder="Focus on me" />
    </>
  );
}

export default App;
