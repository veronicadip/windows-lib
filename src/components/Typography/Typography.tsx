import { FunctionComponent, PropsWithChildren } from "react";
import "./styles.css";

interface Props extends PropsWithChildren {
  bold?: boolean;
  type?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  white?: boolean;
}

const Typography: FunctionComponent<Props> = ({ children, bold, type }) => {
  // TODO: consider using a swtich case
  if (!type || type === "p") {
    return <p className={!bold ? "windowsP" : "windowsP pBold"}>{children}</p>;
  }
  if (type === "h1") {
    return (
      <h1 className={!bold ? "windowsH1" : "windowsH1 h1Bold"}>{children}</h1>
    );
  }
  if (type === "h2") {
    return (
      <h2 className={!bold ? "windowsH2" : "windowsH2 h2Bold"}>{children}</h2>
    );
  }
  if (type === "h3") {
    return (
      <h3 className={!bold ? "windowsH3" : "windowsH3 h3Bold"}>{children}</h3>
    );
  }
  if (type === "h4") {
    return (
      <h4 className={!bold ? "windowsH4" : "windowsH4 h4Bold"}>{children}</h4>
    );
  }
  if (type === "h5") {
    return (
      <h5 className={!bold ? "windowsH5" : "windowsH5 h5Bold"}>{children}</h5>
    );
  }
  if (type === "h6") {
    return (
      <h6 className={!bold ? "windowsH6" : "windowsH6 h6Bold"}>{children}</h6>
    );
  }
  return <></>;
};

export default Typography;
