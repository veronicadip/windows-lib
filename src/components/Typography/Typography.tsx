import { FunctionComponent, PropsWithChildren, CSSProperties } from "react";
import "./styles.css";

interface Props extends PropsWithChildren {
  bold?: boolean;
  type?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  white?: boolean;
}

const Typography: FunctionComponent<Props> = ({
  children,
  bold,
  type,
  white,
}) => {
  // TODO: consider using a swtich case
  if (!type || type === "p") {
    return (
      <p
        className={`windowsP ${!bold ? "" : "pBold"} ${
          !white ? "" : "whiteFont"
        }`}
      >
        {children}
      </p>
    );
  }
  if (type === "h1") {
    return (
      <h1
        className={`windowsH1 ${!bold ? "" : "h1Bold"} ${
          !white ? "" : "whiteFont"
        }`}
      >
        {children}
      </h1>
    );
  }
  if (type === "h2") {
    return (
      <h2
        className={`windowsH2 ${!bold ? "" : "h2Bold"} ${
          !white ? "" : "whiteFont"
        }`}
      >
        {children}
      </h2>
    );
  }
  if (type === "h3") {
    return (
      <h3
        className={`windowsH3 ${!bold ? "" : "h3Bold"} ${
          !white ? "" : "whiteFont"
        }`}
      >
        {children}
      </h3>
    );
  }
  if (type === "h4") {
    return (
      <h4
        className={`windowsH4 ${!bold ? "" : "h4Bold"} ${
          !white ? "" : "whiteFont"
        }`}
      >
        {children}
      </h4>
    );
  }
  if (type === "h5") {
    return (
      <h5
        className={`windowsH5 ${!bold ? "" : "h5Bold"} ${
          !white ? "" : "whiteFont"
        }`}
      >
        {children}
      </h5>
    );
  }
  if (type === "h6") {
    return (
      <h6
        className={`windowsH6 ${!bold ? "" : "h6Bold"} ${
          !white ? "" : "whiteFont"
        }`}
      >
        {children}
      </h6>
    );
  }
  return <></>;
};

export default Typography;
