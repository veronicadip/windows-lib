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
import InfoIcon from "./components/Icons/msg_information-0.png";
import Modal from "./components/Modal/Modal";
import TitleBar from "./components/TitleBar/TitleBar";
import DosIcon from "./components/Icons/ms_dos-1.png";
import IconGallery from "./components/IconGallery/IconGallery";
import ImgFolder from "./components/Icons/directory_open_cabinet_fc-2.png";
import WindowsIcon from "./components/Icons/windows-0.png";

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
                <Typography
                  white
                >{`import Typography from "./components/Typography/Typography";
`}</Typography>
                <Typography white>
                  {`<Typography white>
              You can use any Windows 98 icon and put it anywhere, like this!
              <img src={SmileIcon} alt="smile windows 98 icon" />
            </Typography>`}
                </Typography>
              </div>
            </div>
            <Typography white>
              Here you will find all the Windows 98 icons with each name to
              import them:
            </Typography>
            <div className="windowsBorders">
              <TitleBar icon={ImgFolder} title="List of icons"></TitleBar>
              <IconGallery />
            </div>
          </div>
          <div className="sectionContainer">
            <Typography white type="h4">
              Inputs
            </Typography>
            <Typography white>
              To use the available inputs in Windows 98, you'll need to use the{" "}
              {`<Input />`} component. It accepts the "type" prop{" "}
              {`(email, number, password, search, tel, text and url)`}, if you
              don't add any type, it will be a text type by default.
            </Typography>
            <div className="componentsContainer">
              <Input />
            </div>
            <div className="windowsBorders">
              <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
              <div className="codeContainer">
                <Typography white>
                  import Input from "./components/Input/Input";
                </Typography>
                <Typography white>{`<Input />`}</Typography>
              </div>
            </div>
            <Typography white>
              The Input component also accepts the next props: placeholder,
              required, disabled and id.
            </Typography>
            <div className="componentsContainer">
              <div className="componentContainer">
                <Input
                  type="text"
                  placeholder="Username"
                  id="username"
                  required
                ></Input>
              </div>
              <div className="componentContainer">
                <Input
                  type="password"
                  placeholder="Password"
                  id="password"
                  required
                ></Input>
              </div>
              <div className="componentContainer">
                <Input
                  type="email"
                  placeholder="Email"
                  id="email"
                  required
                ></Input>
              </div>
              <div className="componentContainer">
                <Input
                  type="number"
                  placeholder="Age"
                  id="age"
                  required
                ></Input>
              </div>
              <div className="componentContainer">
                <Input type="tel" placeholder="Tel" id="tel" required></Input>
              </div>
              <div className="componentContainer">
                <Input
                  type="url"
                  placeholder="Website"
                  id="website"
                  required
                ></Input>
              </div>
            </div>
            <div className="windowsBorders">
              <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
              <div className="codeContainer">
                <Typography
                  white
                >{`import Input from "./components/Input/Input";
`}</Typography>
                <Typography white>{`<Input
                  type="text"
                  placeholder="Username"
                  id="username"
                  required
                ></Input>`}</Typography>
                <Typography white>{`<Input
                  type="password"
                  placeholder="Password"
                  id="password"
                  required
                ></Input>`}</Typography>
                <Typography white>{`<Input
                  type="email"
                  placeholder="Email"
                  id="email"
                  required
                ></Input>`}</Typography>
                <Typography white>{`<Input
                  type="number"
                  placeholder="Age"
                  id="age"
                  required
                ></Input>`}</Typography>
                <Typography
                  white
                >{` <Input type="tel" placeholder="Tel" id="tel" required></Input>`}</Typography>
                <Typography white>{`<Input
                  type="url"
                  placeholder="Website"
                  id="website"
                  required
                ></Input>`}</Typography>
              </div>
            </div>
            <div className="componentsContainer">
              <Input
                type="search"
                placeholder="Search Bar"
                id="searchBar"
              ></Input>
            </div>
            <div className="windowsBorders">
              <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
              <div className="codeContainer">
                <Typography
                  white
                >{`import Input from "./components/Input/Input";
`}</Typography>
                <Typography white>{`<Input
                type="search"
                placeholder="Search Bar"
                id="searchBar"
              ></Input>`}</Typography>
              </div>
            </div>
            <div className="componentsContainer">
              <Input disabled placeholder="Disabled"></Input>
            </div>
          </div>
          <div className="sectionContainer">
            <Typography white type="h4">
              Modal
            </Typography>
            <Typography white>
              The Modal component comes with a button that opens it but you can
              pass it a prop named "open" and it will be opened by default.
              Also, you can pass a prop "buttonContent" to customize the button
              that opens the modal{" "}
              {`(it comes with a default "Open Modal" string value.)`}.
            </Typography>
            <Typography white>
              To add things inside the modal, you will need to nest them inside
              the {`<Modal />`} component. To add a title and icon to the bar,
              you need to pass the props "icon" and "title".
            </Typography>
            <div className="componentsContainer">
              <Modal
                icon={WindowsIcon}
                title="Windows Modal"
                buttonContent="Open me!"
              >
                <div className="modalContent">
                  <div>
                    <img src={InfoIcon} alt="Information windows icon" />
                  </div>
                  <div className="modalInfo">
                    <Typography bold type="h6">
                      You opened this modal!
                    </Typography>
                    <Typography>
                      You can add anything in here! To close the modal, you can
                      click outside it or press the cross button.
                    </Typography>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="windowsBorders">
              <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
              <div className="codeContainer">
                <Typography
                  white
                >{`import Typography from "./components/Typography/Typography";
`}</Typography>
                <Typography
                  white
                >{`import Modal from "./components/Modal/Modal";
`}</Typography>
                <Typography
                  white
                >{`import InfoIcon from "./components/Icons/msg_information-0.png";
`}</Typography>
                <Typography
                  white
                >{`import WindowsIcon from "./components/Icons/windows-0.png";
`}</Typography>
                <Typography
                  white
                >{`<Modal icon={WindowsIcon} title="Windows Modal">`}</Typography>
                <Typography
                  white
                >{`<div className="modalContent">`}</Typography>
                <Typography white>{`<div>`}</Typography>
                <Typography
                  white
                >{`<img src={InfoIcon} alt="Information windows icon" />`}</Typography>
                <Typography white>{`</div>`}</Typography>
                <Typography white>{`<div className="modalInfo">`}</Typography>
                <Typography white>{`<Typography bold type="h6">
                      You opened this modal!
                    </Typography>`}</Typography>
                <Typography white>{`<Typography>
                      You can add anything in here! To close the modal, you can
                      click outside it or press the cross button.
                    </Typography>`}</Typography>
                <Typography white>{`</div>`}</Typography>
                <Typography white>{`</div>`}</Typography>
                <Typography white>{`</Modal>`}</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
