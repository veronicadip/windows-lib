import { FunctionComponent } from "react";
import "./styles.css";

interface Props {
  type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
}

const Input: FunctionComponent<Props> = ({
  type,
  placeholder,
  required,
  disabled,
  id,
}) => {
  if (
    type !== "email" &&
    type !== "number" &&
    type !== "password" &&
    type !== "search" &&
    type !== "tel" &&
    type !== "text" &&
    type !== "url" &&
    type !== undefined
  ) {
    return <></>;
  }
  return (
    <input
      type={!type ? "text" : type}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      id={id}
      className={
        !disabled ? "windowsInput" : "windowsInput disabledWindowsInput"
      }
      key={id}
    />
  );
};

export default Input;
