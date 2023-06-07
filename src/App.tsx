import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <h1>Windows 98 elements</h1>
      <h3>Button</h3>
      <h4>Default</h4>
      <Button text="Click me" disabled={false} />
      <h4>Disabled</h4>
      <Button text="Don't even try" disabled={true} />
    </div>
  );
}

export default App;
