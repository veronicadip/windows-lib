import { FunctionComponent, PropsWithChildren } from "react";
import "./styles.css";

interface Props extends PropsWithChildren {
  bold?: boolean;
  type?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Typography: FunctionComponent<Props> = ({ children, bold, type }) => {
  // TODO: consider using a swtich case
  if (!bold) {
    if (!type || type === "p") {
      return <p className="windowsP">{children}</p>;
    }
    if (type === "h1") {
      return <h1 className="windowsH1">{children}</h1>;
    }
    if (type === "h2") {
      return <h2 className="windowsH2">{children}</h2>;
    }
    if (type === "h3") {
      return <h3 className="windowsH3">{children}</h3>;
    }
    if (type === "h4") {
      return <h4 className="windowsH4">{children}</h4>;
    }
    if (type === "h5") {
      return <h5 className="windowsH5">{children}</h5>;
    }
    if (type === "h6") {
      return <h6 className="windowsH6">{children}</h6>;
    }
  }

  // TODO: don't use a separate if for bold, what if I want bold AND italic?
  // add a class for bold and conditionally use that class depending on the prop.
  // Example:
  // <h2 className="windowsH1 bold" />
  if (bold) {
    if (type === "h1") {
      return <h1 className="windowsH1Bold">{children}</h1>;
    }
    if (type === "h2") {
      return <h2 className="windowsH2Bold">{children}</h2>;
    }
    if (type === "h3") {
      return <h3 className="windowsH3Bold">{children}</h3>;
    }
    if (type === "h4") {
      return <h4 className="windowsH4Bold">{children}</h4>;
    }
    if (type === "h5") {
      return <h5 className="windowsH5Bold">{children}</h5>;
    }
    if (type === "h6") {
      return <h6 className="windowsH6Bold">{children}</h6>;
    }
    if (type === "p") {
      return <p className="windowsPBold">{children}</p>;
    }
  }
  return <></>;
};

export default Typography;
