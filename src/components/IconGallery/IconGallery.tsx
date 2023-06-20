import { FunctionComponent, useState } from "react";
import "./styles.css";
import Typography from "./../Typography/Typography";

const IconGallery: FunctionComponent = () => {
  const icons = require.context("./../Icons", false, /\.(png)$/);
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
