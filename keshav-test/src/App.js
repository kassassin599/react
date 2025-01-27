import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);

    alert(`Input changed to: ${event.target.value}`);
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something"
      />
    </>
  );
}

export default App;
