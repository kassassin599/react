
import "./App.css";

function App() {
  const handleKeyDown = () => {

    alert("Key Pressed!");

  };


  return (
    <>
     <input onKeyDown={handleKeyDown} placeholder="Press any key" />
    </>
  );
}

export default App;
