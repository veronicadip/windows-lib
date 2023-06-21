import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Typography, {
  Props as TypographyProps,
} from "./components/Typography/Typography";
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
import ImgFolderIcon from "./components/Icons/directory_open_cabinet_fc-2.png";
import WindowsIcon from "./components/Icons/windows-0.png";
import MineIcon from "./components/Icons/game_mine_1-1.png";
import ComputerIcon from "./components/Icons/computer-2.png";
import IconWithText from "./components/IconWithText/IconWithText";
import CDRomIcon from "./components/Icons/cd_drive-2.png";
import MouseIcon from "./components/Icons/mouse-4.png";
import KeyboardIcon from "./components/Icons/keyboard-1.png";
import MonitorIcon from "./components/Icons/monitor_windows.png";

function App() {
  const [buttonContent, setButtonContent] = useState("See what I do");
  function changeContent() {
    setButtonContent("I change!");
  }

  return (
    <div className="wrapper">
      <aside className="stickySideBar">
        <TreeList fullHeight>
          <TreeItem label={<a href="#introduction">Introduction</a>}></TreeItem>
          <TreeItem label={<a href="#components">Components</a>} openBranch>
            <TreeItem label={<a href="#button">Button</a>}></TreeItem>
            <TreeItem label={<a href="#icons">Icons</a>}></TreeItem>
            <TreeItem label={<a href="#inputs">Inputs</a>}></TreeItem>
            <TreeItem label={<a href="#modal">Modal</a>}></TreeItem>
            <TreeItem label={<a href="#tabs">Tabs</a>} openBranch>
              <TreeItem label={<a href="#tabs">TabList</a>}></TreeItem>
              <TreeItem label={<a href="#tabs">Tab</a>}></TreeItem>
              <TreeItem label={<a href="#tabs">TabPanel</a>}></TreeItem>
            </TreeItem>
            <TreeItem label={<a href="#title-bar">TitleBar</a>}></TreeItem>
            <TreeItem label={<a href="#tree-list-tree-item">TreeList</a>}>
              <TreeItem
                label={<a href="#tree-list-tree-item">TreeItem</a>}
              ></TreeItem>
            </TreeItem>
            <TreeItem label={<a href="#typography">Typography</a>}></TreeItem>
          </TreeItem>
        </TreeList>
      </aside>
      <div>
        <Typography type="h1" white>
          Windows 98 UI
        </Typography>
        <div className="sectionContainer" id="introduction">
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
        <div className="sectionContainer" id="components">
          <Typography type="h3" white>
            Components
          </Typography>
          <Typography type="h4" white>
            Button<span id="button"></span>
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
                type="pre"
              >{`import Button from "./components/Button/Button";
import SmileIcon from "./components/Icons/utopia_smiley.png";

<Button>
  {"Click me! "} <img src={SmileIcon} alt="smile windows 98 icon" />
</Button>;
              `}</Typography>
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
                type="pre"
              >{`import Button from "./components/Button/Button";

<Button>This is a larger button</Button>
<Button>Hi!</Button>`}</Typography>
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
                type="pre"
              >{`import Button from "./components/Button/Button";

<Button disabled>Don't even try</Button>;`}</Typography>
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
                type="pre"
              >{`import Button from "./components/Button/Button";

<Button id="idExample" clickEventHandler={ ( ) => changeContent( ) } >
  {buttonContent}
</Button>;`}</Typography>
            </div>
          </div>
          <div className="sectionContainer" id="icons">
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
                <Typography white type="pre">
                  {`import SmileIcon from "./components/Icons/utopia_smiley.png";
import Typography from "./components/Typography/Typography";
<Typography white>
  You can use any Windows 98 icon and put it anywhere, like this!
  <img src={SmileIcon} alt="smile windows 98 icon" />
</Typography>;`}
                </Typography>
              </div>
            </div>
            <Typography white>
              Here you will find all the Windows 98 icons with each name to
              import them:
            </Typography>
            <div className="windowsBorders">
              <TitleBar icon={ImgFolderIcon} title="List of icons"></TitleBar>
              <IconGallery />
            </div>
          </div>
          <div className="sectionContainer" id="inputs">
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
                  type="pre"
                >{`import Input from "./components/Input/Input";
                
<>
  <Input type="text" placeholder="Username" id="username" required></Input>
  <Input type="password" placeholder="Password" id="password" required></Input>
  <Input type="email" placeholder="Email" id="email" required></Input>
  <Input type="number" placeholder="Age" id="age" required></Input>
  <Input type="tel" placeholder="Tel" id="tel" required></Input>
  <Input type="url" placeholder="Website" id="website" required></Input>
</>;`}</Typography>
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
          <div className="sectionContainer" id="modal">
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
                  type="pre"
                >{`import Typography from "./components/Typography/Typography";
import Modal from "./components/Modal/Modal";
import InfoIcon from "./components/Icons/msg_information-0.png";
import WindowsIcon from "./components/Icons/windows-0.png";

<Modal icon={WindowsIcon} title="Windows Modal" buttonContent="Open me!">
  <div className="modalContent">
    <div>
      <img src={InfoIcon} alt="Information windows icon" />
    </div>
    <div className="modalInfo">
      <Typography bold type="h6">
        You opened this modal!
      </Typography>
      <Typography>
        You can add anything in here! To close the modal, you can click outside it or press the cross button.
      </Typography>
    </div>
  </div>
</Modal>;`}</Typography>
              </div>
            </div>
          </div>
          <div className="sectionContainer" id="tabs">
            <Typography white type="h4">
              Tabs
            </Typography>
            <Typography
              white
            >{`The <Tabs /> component needs its children <TabList />, <Tab> and <TabPanel>. This component accepts a "selectedTab" prop to have that one selected by default, if you don't pass that prop, the value will be 1.`}</Typography>
            <Typography white type="h5">
              TabList
            </Typography>
            <Typography
              white
            >{`<TabList /> is the father of <Tab />, it contains the list of tabs.`}</Typography>
            <Typography white type="h5">
              Tab
            </Typography>
            <Typography white>
              You will need to pass the prop "value" to match the TabPanel
              component later. If you add two {`<Tab />`} components, you should
              add the first one the value "1" and the second one "2".
            </Typography>
            <Typography white>
              You can add the name of each Tab nesting it inside the component
              tag.
            </Typography>
            <Typography white type="h5">
              TabPanel
            </Typography>
            <Typography
              white
            >{`Like the <Tab /> component, you need to pass it a prop "value" matching the value of the Tab you want to link. If you add two Tab components, you need to add two TabPanel components as well.`}</Typography>
            <div className="componentsContainer">
              <Tabs>
                <TabList>
                  <Tab value={1}>About me</Tab>
                  <Tab value={2}>Click me</Tab>
                </TabList>
                <TabPanel value={1}>
                  <Typography>
                    Follow me on{" "}
                    <a href="https://github.com/veronicadip" target="_blank">
                      GitHub
                    </a>{" "}
                    if you want to see more of my projects!
                  </Typography>
                  <Typography>
                    I also have a{" "}
                    <a href="https://veronicadip.github.io./">website</a> and a{" "}
                    <a href="https://www.linkedin.com/in/veronica-dip/">
                      LinkedIn
                    </a>
                    . <img src={SmileIcon} alt="smiley windows 98 icon" />
                  </Typography>
                </TabPanel>
                <TabPanel value={2}>
                  <Typography>
                    Great! you changed tabs, this function comes with the
                    library too.
                  </Typography>
                </TabPanel>
              </Tabs>
            </div>
            <br />
            <div className="windowsBorders">
              <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
              <div className="codeContainer">
                <Typography
                  white
                  type="pre"
                >{`import Tabs from "./components/Tabs/Tabs";
import TabList from "./components/TabList/TabList";
import Tab from "./components/Tab/Tab";
import TabPanel from "./components/TabPanel/TabPanel";

<Tabs>
  <TabList>
    <Tab value={1}>About me</Tab>
    <Tab value={2}>Click me</Tab>
  </TabList>
  <TabPanel value={1}>
    <Typography>
      Follow me on{" "}
      <a href="https://github.com/veronicadip" target="_blank">
        GitHub
      </a>{" "}
      if you want to see more of my projects!
    </Typography>
    <Typography>
      I also have a <a href="https://veronicadip.github.io./">website</a> and a{" "}
      <a href="https://www.linkedin.com/in/veronica-dip/">LinkedIn</a>
      . <img src={SmileIcon} alt="smiley windows 98 icon" />
    </Typography>
  </TabPanel>
  <TabPanel value={2}>
    <Typography>Great! you changed tabs, this function comes with the library too.</Typography>
  </TabPanel>
</Tabs>;
`}</Typography>
              </div>
            </div>
          </div>
          <div className="sectionContainer" id="title-bar">
            <Typography white type="h4">
              TitleBar
            </Typography>
            <Typography white>
              This component can receive a function for each button, you can
              achieve this passing it the next props: "onMinimize", "onMaximize"
              and "onClose".
            </Typography>
            <Typography white>
              It also receives the "icon" and "title" props.
            </Typography>
            <div className="componentsContainer">
              <TitleBar icon={MineIcon} title="Minesweeper"></TitleBar>
            </div>
            <div className="windowsBorders">
              <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
              <div className="codeContainer">
                <Typography
                  white
                  type="pre"
                >{`import TitleBar from "./components/TitleBar/TitleBar";
import MineIcon from "./components/Icons/game_mine_1-1.png";

<TitleBar icon={MineIcon} title="Minesweeper"></TitleBar>`}</Typography>
              </div>
            </div>
          </div>
          <div className="sectionContainer" id="tree-list-tree-item">
            <Typography white type="h4">
              TreeList and TreeItem
            </Typography>
            <Typography white>
              <strong>TreeList</strong> is used to contain one or more nested
              TreeItems. You can pass an optional `fullHeight` prop to make it
              take the full screen height (like the tree list on the left of
              this page.)
            </Typography>
            <Typography white>
              <strong>TreeItem</strong>s can be infinitely nested and must live
              inside a <strong>TreeList</strong>.
            </Typography>

            <Typography white>
              A <strong>TreeItem</strong> requires a `label` prop, which can be
              a ReactNode, allowing you to put icons, emojis, text, etc.
            </Typography>
            <Typography white>
              A <strong>TreeItem</strong> can be opened or closed, and you can
              control this state using the `openBranch` prop.
            </Typography>
            <div className="componentsContainer">
              <TreeList>
                <TreeItem
                  label={<IconWithText icon={ComputerIcon} text="CD Rom" />}
                  openBranch
                >
                  <TreeItem
                    label={<IconWithText icon={CDRomIcon} text="Computer" />}
                    openBranch
                  >
                    <TreeItem
                      label={<IconWithText icon={MouseIcon} text="Mouse" />}
                      openBranch
                    ></TreeItem>
                  </TreeItem>
                </TreeItem>
                <TreeItem
                  label={<IconWithText icon={KeyboardIcon} text="Keyboard" />}
                  openBranch
                ></TreeItem>
                <TreeItem
                  label={<IconWithText icon={MonitorIcon} text="Monitor" />}
                  openBranch
                ></TreeItem>
              </TreeList>
            </div>
            <div className="windowsBorders">
              <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
              <div className="codeContainer">
                <Typography type="pre" white>
                  {`import TreeList from './components/TreeList/Treelist'
import TreeItem from "./components/TreeList/Treelist";

<TreeList>
  <TreeItem label={<IconWithText icon={ComputerIcon} text="CD Rom" />} openBranch>
    <TreeItem label={<IconWithText icon={CDRomIcon} text="Computer" />} openBranch>
      <TreeItem label={<IconWithText icon={MouseIcon} text="Mouse" />} openBranch></TreeItem>
    </TreeItem>
  </TreeItem>
  <TreeItem label={<IconWithText icon={KeyboardIcon} text="Keyboard" />} openBranch></TreeItem>
  <TreeItem label={<IconWithText icon={MonitorIcon} text="Monitor" />} openBranch></TreeItem>
</TreeList>
`}
                </Typography>
              </div>
            </div>
          </div>
          <div className="sectionContainer" id="typography">
            <Typography white type="h4">
              Typography
            </Typography>
            <Typography white>
              Typography is a component to give text styles. You can use the
              `type` prop to specify the typography hierarchy.
            </Typography>
            <Typography white>
              You can find all the available types below.
            </Typography>
            {["h1", "h2", "h3", "h4", "h5", "h6", "p", "pre"].map((tag) => (
              <Typography type={tag as TypographyProps["type"]} white>
                This is a {tag}
              </Typography>
            ))}
            <Typography>
              By default, Typography is color black and font-weight regular,
            </Typography>
            <Typography white>
              You can add the `white` prop to make the text white.
            </Typography>
            <Typography white bold>
              You can also add the `bold` prop to make the text bold.
            </Typography>
            <div className="windowsBorders">
              <TitleBar icon={DosIcon} title="MS-DOS Prompt"></TitleBar>
              <div className="codeContainer">
                <Typography white type="pre">
                  {`import Typography from "./components/Typography/Typography";
<>
  <Typography white type="h1">
    This is a h1
  </Typography>
  ...
  <Typography>By default, Typography is color black and font-weight regular,</Typography>
  <Typography white>You can add the "white" prop to make the text white.</Typography>
  <Typography white bold>
    You can also add the "bold" prop to make the text bold.
  </Typography>
</>;
`}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
