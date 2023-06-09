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
      <Typography type="h4">Text type (default)</Typography>
      <Input></Input>
      <br />
      <br />
      <Input placeholder="This one have a placeholder"></Input>
      <Typography type="h4">Number</Typography>
      <Input type="number" placeholder="I'm a number input"></Input>
      <Typography type="h4">Password</Typography>
      <Input type="password" placeholder="I'm a password input"></Input>
      <Typography type="h4">Email</Typography>
      <Input type="email" placeholder="I'm a email input"></Input>
      <Typography type="h4">Search</Typography>
      <Input type="search" placeholder="I'm a search input"></Input>
      <Typography type="h4">Tel</Typography>
      <Input type="tel" placeholder="I'm a tel input"></Input>
      <Typography type="h4">Url</Typography>
      <Input type="url" placeholder="I'm a url input"></Input>
    </div>
  );
}

export default App;
