import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h3>What we do?</h3>
      <h1>We take care of fututre!</h1>
      <div id="cardholder">
        <div id="topcards">
          <div id="card">
            <div id="info">
              <p>Investment</p>
              <h2>Strength solution</h2>
              <a href="#">Read more -</a>
            </div>
          </div>
          <div id="card">
            <div id="info">
              <p>Investment</p>
              <h2>Strength solution</h2>
              <a href="#">Read more -</a>
            </div>
          </div>
        </div>
        <div id="bottomcards">
          <div id="card">
            <div id="info">
              <p>Investment</p>
              <h2>Strength solution</h2>
              <a href="#">Read more -</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
