import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>Our employees</h1>
      <Counter from={100} to={500} duration={3000} />
      <h1>Our projects</h1>
      <Counter from={0} to={1200} duration={10000} />
    </div>
  );
}

export default App;