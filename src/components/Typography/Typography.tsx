import { FunctionComponent, ReactElement } from "react";
import "./styles.css";

interface Props {
  children: string;
  bold: boolean;
  type: string;
}

const Typography: FunctionComponent<Props> = (props) => {
  if (!props.bold) {
    if (props.type === "p") {
      return <p className="windowsP">{props.children}</p>;
    }
    if (props.type === "span") {
      return <span className="windowsSpan">{props.children}</span>;
    }
    if (props.type === "h1") {
      return <h1 className="windowsH1">{props.children}</h1>;
    }
    if (props.type === "h2") {
      return <h2 className="windowsH2">{props.children}</h2>;
    }
    if (props.type === "h3") {
      return <h3 className="windowsH3">{props.children}</h3>;
    }
    if (props.type === "h4") {
      return <h4 className="windowsH4">{props.children}</h4>;
    }
    if (props.type === "h5") {
      return <h5 className="windowsH5">{props.children}</h5>;
    }
    if (props.type === "h6") {
      return <h6 className="windowsH6">{props.children}</h6>;
    }
  }
  if (props.bold) {
    if (props.type === "h1") {
      return <h1 className="windowsH1Bold">{props.children}</h1>;
    }
    if (props.type === "h2") {
      return <h2 className="windowsH2Bold">{props.children}</h2>;
    }
    if (props.type === "h3") {
      return <h3 className="windowsH3Bold">{props.children}</h3>;
    }
    if (props.type === "h4") {
      return <h4 className="windowsH4Bold">{props.children}</h4>;
    }
    if (props.type === "h5") {
      return <h5 className="windowsH5Bold">{props.children}</h5>;
    }
    if (props.type === "h6") {
      return <h6 className="windowsH6Bold">{props.children}</h6>;
    }
  }
  return <div></div>;
};

export default Typography;
