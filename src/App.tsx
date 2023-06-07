import "./App.css";
import Button from "./components/Button/Button";
import H1 from "./components/H1/H1";

function App() {
  return (
    <div>
      <h1>Windows 98 elements</h1>
      <br />
      <h2>Buttons</h2>
      <h4>Default</h4>
      <Button disabled={false}>Click me</Button>
      <h4>Disabled</h4>
      <Button disabled={true}>Don't even try</Button>
      <hr />
      <h2>Typography</h2>
      <h4>Headings</h4>
      <H1>h1. Windoes 98 heading</H1>
    </div>
  );
}

export default App;
