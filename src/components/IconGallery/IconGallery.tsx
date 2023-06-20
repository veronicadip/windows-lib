import { FunctionComponent, useState } from "react";
import "./styles.css";
import Typography from "./../Typography/Typography";

interface Props {
  open?: boolean;
}

const IconGallery: FunctionComponent<Props> = ({ open }) => {
  const [isOpen, setIsOpen] = useState(!open ? false : true);
  const icons = require.context("./../Icons", false, /\.(png)$/);

  if (!isOpen) {
    return <></>;
  }
  return (
    <div className="windowsIconGallery">
      {icons.keys().map((iconPath, index) => (
        <div className="windowsIconContainer">
          <img
            key={index}
            src={icons(iconPath)}
            alt={`Icon ${index}`}
            className="windowsIcon"
          />
          <Typography>{iconPath.replace("./", "")}</Typography>
        </div>
      ))}
    </div>
  );
};

export default IconGallery;
