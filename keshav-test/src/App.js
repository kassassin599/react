import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(value);

    setValue(""); // Clear the input field by setting the state to an empty string
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
