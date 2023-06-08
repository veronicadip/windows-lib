import "./App.css";
import Button from "./components/Button/Button";
import Typography from "./components/Typography/Typography";

function App() {
  return (
    <div>
      <Typography bold={false} type={"h1"}>
        Windows 98 elements
      </Typography>
      <br />
      <Typography bold={true} type={"h2"}>
        Buttons
      </Typography>
      <Typography bold={false} type={"h4"}>
        Default
      </Typography>
      <Button disabled={false}>Click me</Button>
      <h4>Disabled</h4>
      <Button disabled={true}>Don't even try</Button>
      <hr />
      <Typography bold={true} type={"h2"}>
        Typography
      </Typography>
      <Typography bold={false} type={"h4"}>
        Heading Components
      </Typography>
      <Typography type="h1" bold={false}>
        h1. Windows heading
      </Typography>
      <Typography type="h2" bold={false}>
        h2. Windows heading
      </Typography>
      <Typography type="h3" bold={false}>
        h3. Windows heading
      </Typography>
      <Typography type="h4" bold={false}>
        h4. Windows heading
      </Typography>
      <Typography type="h5" bold={false}>
        h5. Windows heading
      </Typography>
      <Typography type="h6" bold={false}>
        h6. Windows heading
      </Typography>
      <Typography bold={false} type={"h4"}>
        Paragraph
      </Typography>
      <Typography bold={false} type={"p"}>
        This is a `p` element
      </Typography>
      <Typography bold={false} type={"p"}>
        This is a `p` element <span>- with a span inside -</span>
      </Typography>
    </div>
  );
}

export default App;
