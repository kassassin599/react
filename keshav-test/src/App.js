import React, { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);



  useEffect(() => {

    // Set up a timer that runs every second

    const intervalId = setInterval(() => {

      setSeconds((prevSeconds) => prevSeconds + 1);

    }, 1000);



    // Cleanup function: clear the interval when the component unmounts

    return () => clearInterval(intervalId);

  }, []); // Run the effect only once on component mount



  return (

    <div>

      <h3>Timer</h3>

      <p>Elapsed time: {seconds} seconds</p>

    </div>

  );
}

export default App;
