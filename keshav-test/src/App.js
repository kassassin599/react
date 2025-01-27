import React, { useState } from 'react';

import "./App.css";

function App() {
  const [text, setText] = useState("Mouse Over Me");

  const handleMouseOver = () => {
    setText("Thank You");
  };

  const handleMouseOut = () => {
    setText("Mouse Over Me");
  };

  return (
    <>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          backgroundColor: "#D94A38",

          width: "120px",

          height: "20px",

          padding: "40px",

          textAlign: "center",

          cursor: "pointer",
        }}
      >
        {text}
      </div>
    </>
  );
}

export default App;
