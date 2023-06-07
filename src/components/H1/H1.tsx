import { FunctionComponent } from "react";
import "./styles.css";

interface Props {
  children: string;
}

const H1: FunctionComponent<Props> = (props) => {
  return <h1>{props.children}</h1>;
};

export default H1;
