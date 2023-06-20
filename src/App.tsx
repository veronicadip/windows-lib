import { useState } from "react";
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
import IconGallery from "./components/IconGallery/IconGallery";
import ImgFolder from "./components/Icons/directory_open_cabinet_fc-2.png";

function App() {
  const [buttonContent, setButtonContent] = useState("See what I do");
  function changeContent() {
    setButtonContent("I change!");
  }

  return (
    <div className="wrapper">
      <aside className="stickySideBar">
        <TreeList fullHeight>
          <TreeItem label={"Introduction"}></TreeItem>
          <TreeItem label={"Components"} openBranch>
            <TreeItem label="Button"></TreeItem>
            <TreeItem label="Icons"></TreeItem>
            <TreeItem label="Inputs"></TreeItem>
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
            and Icon components as its children.`}
          </Typography>
          <div className="componentsContainer">
            <div className="componentContainer">
              <Button>
                {"Click me! "}
                <img src={SmileIcon} alt="smile windows 98 icon" />
              </Button>
            </div>
          </div>
          <div className="windowsBorders">
            <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
            <div className="codeContainer">
              <Typography
                white
              >{`import Button from "./components/Button/Button";
`}</Typography>
              <Typography
                white
              >{`import SmileIcon from "./components/Icons/utopia_smiley.png";
`}</Typography>
              <Typography white>{`<Button>
                Click me! <img src={SmileIcon} alt="smile windows 98 icon" />
              </Button>`}</Typography>
            </div>
          </div>
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
          <div className="windowsBorders">
            <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
            <div className="codeContainer">
              <Typography
                white
              >{`import Button from "./components/Button/Button";
`}</Typography>
              <Typography
                white
              >{`<Button>This is a larger button</Button>`}</Typography>
              <Typography white>{` <Button>Hi!</Button>`}</Typography>
            </div>
          </div>
          <Typography white>You can pass it a `disabled` prop.</Typography>
          <div className="componentsContainer">
            <Button disabled>Don't even try</Button>
          </div>
          <div className="windowsBorders">
            <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
            <div className="codeContainer">
              <Typography
                white
              >{`import Button from "./components/Button/Button";
`}</Typography>
              <Typography
                white
              >{`<Button disabled>Don't even try</Button>`}</Typography>
            </div>
          </div>
          <Typography white>
            You can pass it an id and a event handler function for click events.
          </Typography>
          <div className="componentsContainer">
            <Button id="idExample" clickEventHandler={() => changeContent()}>
              {buttonContent}
            </Button>
          </div>
          <div className="windowsBorders">
            <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
            <div className="codeContainer">
              <Typography
                white
              >{`import Button from "./components/Button/Button";
`}</Typography>
              <Typography
                white
              >{`<Button id="idExample" clickEventHandler={ ( )  =>  changeContent( ) }>
              {buttonContent}
            </Button>`}</Typography>
            </div>
          </div>
          <div className="sectionContainer">
            <Typography white type="h4">
              Icons
            </Typography>
            <Typography white>
              You can use any Windows 98 icon and put it anywhere, like this!{" "}
              <img src={SmileIcon} alt="smile windows 98 icon" />
            </Typography>
            <Typography white>
              You need to import the icon with the name you want to use. Then
              use that name as the source for the {`<img />`} tag.
            </Typography>
            <div className="windowsBorders">
              <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
              <div className="codeContainer">
                <Typography
                  white
                >{`import SmileIcon from "./components/Icons/utopia_smiley.png";`}</Typography>
                <Typography white>
                  {`<Typography white>
              You can use any Windows 98 icon and put it anywhere, like this!
              <img src={SmileIcon} alt="smile windows 98 icon" />
            </Typography>`}
                </Typography>
              </div>
            </div>
            <div className="windowsBorders">
              <TitleBar icon={ImgFolder} title="List of icons"></TitleBar>
              <IconGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
