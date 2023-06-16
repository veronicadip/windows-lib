import "./App.css";
import Button from "./components/Button/Button";
import Typography from "./components/Typography/Typography";
import Input from "./components/Input/Input";
import Tabs from "./components/Tabs/Tabs";
import TabList from "./components/TabList/TabList";
import Tab from "./components/Tab/Tab";
import TabPanel from "./components/TabPanel/TabPanel";
import SmileIcon from "./components/Icons/utopia_smiley.png";
import TreeList from "./components/TreeList/TreeList";
import TreeItem from "./components/TreeItem/TreeItem";
import ComputerIcon from "./components/Icons/computer_explorer_cool-4.png";
import Modal from "./components/Modal/Modal";
import TitleBar from "./components/TitleBar/TitleBar";
import DosIcon from "./components/Icons/ms_dos-1.png";

function App() {
  return (
    <div className="wrapper">
      <aside className="stickySideBar">
        <TreeList fullHeight>
          <TreeItem label={"Introduction"}></TreeItem>
          <TreeItem label={"Components"} openBranch>
            <TreeItem label="Button"></TreeItem>
            <TreeItem label="Icons"></TreeItem>
            <TreeItem label="Input"></TreeItem>
            <TreeItem label="Modal"></TreeItem>
            <TreeItem label="Tabs" openBranch>
              <TreeItem label="TabList"></TreeItem>
              <TreeItem label="Tab"></TreeItem>
              <TreeItem label="TabPanel"></TreeItem>
            </TreeItem>
            <TreeItem label={"TitleBar"}></TreeItem>
            <TreeItem label={"TreeList"} openBranch>
              <TreeItem label={"TreeItem"}></TreeItem>
            </TreeItem>
            <TreeItem label={"Typography"}></TreeItem>
          </TreeItem>
        </TreeList>
      </aside>
      <div>
        <Typography type="h1" white>
          Windows 98 UI
        </Typography>
        <div className="sectionContainer">
          <Typography type="h3" white>
            Introduction
          </Typography>
          <Typography white>
            This library is a collection of React components developed using
            TypeScript, designed to bring back the nostalgic look of Windows 98
            to your web applications. See more on{" "}
            <a
              href="https://github.com/veronicadip/windows-lib"
              target="_blank"
            >
              GitHub
            </a>
            .
          </Typography>
        </div>
        <div className="sectionContainer">
          <Typography type="h3" white>
            Components
          </Typography>
          <Typography type="h4" white>
            Button
          </Typography>
          <Typography white>
            {`This is a regular <Button /> component, you can pass strings
            and Icon components as its children. You can also give it an ID with
            a string value, and an event handler function for the click event.`}
          </Typography>
          <div className="componentsContainer">
            <div className="componentContainer">
              <Button>Click me</Button>
            </div>
          </div>
          <div className="codeContainer">
            <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
          </div>
          <br />
          <Typography white>
            The element size varies depending on its children.
          </Typography>
          <div className="componentsContainer">
            <div className="componentContainer">
              <Button>This is a larger button</Button>
            </div>
            <div className="componentContainer">
              <Button>Hi!</Button>
            </div>
          </div>
          <br />
          <Typography white>You can pass it a `disabled` prop.</Typography>
          <div className="componentsContainer">
            <Button disabled>Don't even try</Button>
          </div>
          <br />
        </div>
      </div>
      {/* <Typography type="h1">Windows 98 elements</Typography>
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
      <Typography bold={true} type="h2">
        Tabs
      </Typography>
      <Tabs>
        <TabList>
          <Tab value={1}>Lorem</Tab>
          <Tab value={2}>GitHub</Tab>
        </TabList>
        <TabPanel value={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ipsum, doloremque esse a quasi consequuntur sunt dolorum officiis
          blanditiis fugiat optio, explicabo eveniet architecto, commodi
          perferendis suscipit cum iure quae. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Reprehenderit voluptatem asperiores
          consectetur possimus? Libero molestias sint facilis eos nisi ad
          delectus quia consequuntur rerum! Voluptatibus placeat vitae
          distinctio incidunt cum.
        </TabPanel>
        <TabPanel value={2}>
          <a href="https://github.com/veronicadip" target={"_blank"}>
            Follow me on github
          </a>
          <img src={SmileIcon} alt="smiley icon" />
        </TabPanel>
      </Tabs>
      <TreeList>
        <TreeItem
          label={
            <>
              <img src={ComputerIcon} alt="computer icon" />
              Computer
            </>
          }
        >
          <TreeItem label="Nested">
            <TreeItem label="Nested II"></TreeItem>
            <TreeItem label="Nested II"></TreeItem>
            <TreeItem label="Nested II"></TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeList>

      <div>
        <Modal
          open
          title="Hello world!"
          icon={<img src={ComputerIcon} alt="computer icon" />}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          adipisci tempore maxime ut expedita alias, eligendi consectetur
          accusamus
        </Modal>
      </div> */}
    </div>
  );
}

export default App;
