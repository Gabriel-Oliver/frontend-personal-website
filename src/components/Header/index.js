import React from "react";

import "./styles.css";
import icon from "../../assets/img/icon.png";
export default function Header(params) {
  return (
    <div className="HeaderBar">
      <img src={icon} alt="Logo" className="Logo" />
    </div>
  );
}
