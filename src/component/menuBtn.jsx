import React from "react";
import "../app.css";

function MenuBtn(props) {
  function getClasses() {
    let classes = "fa fa-";
    classes += props.name === "menu" ? "bars" : "times";
    return classes;
  }
  return (
    <button className="open-menu-btn">
      <i className={getClasses()}></i>
    </button>
  );
}

export default MenuBtn;
