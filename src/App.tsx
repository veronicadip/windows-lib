import "./App.css";
import Button from "./components/Button/Button";
import Typography from "./components/Typography/Typography";
import Input from "./components/Input/Input";

function App() {
  return (
    <div>
      <Typography type="h1">Windows 98 elements</Typography>
      <hr />
      <Typography bold={true} type="h2">
        Buttons
      </Typography>
      <Typography type="h4">Default</Typography>
      <Button disabled={false}>Click me</Button>
      <Typography type="h4">Disabled</Typography>
      <Button disabled={true}>Don't even try</Button>
      <hr />
      <Typography bold={true} type="h2">
        Typography
      </Typography>
      <Typography type="h4">Heading Components</Typography>
      <Typography type="h1">h1. Windows heading</Typography>
      <Typography type="h2">h2. Windows heading</Typography>
      <Typography type="h3">h3. Windows heading</Typography>
      <Typography type="h4">h4. Windows heading</Typography>
      <Typography type="h5">h5. Windows heading</Typography>
      <Typography type="h6">h6. Windows heading</Typography>
      <Typography type="h4">Paragraph</Typography>
      <Typography type="p">This is a `p` element</Typography>
      <Typography type="p">
        This is a `p` element <span>- with a span inside -</span>
      </Typography>
      <hr />
      <Typography bold={true} type={"h2"}>
        Inputs
      </Typography>
      <Input type="number"></Input>
    </div>
  );
}

export default App;
