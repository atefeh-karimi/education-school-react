import React from "react";
import { DynamicFaIcon } from "./DynamicFaIcon";
import "./cardCategory.style.css";

function getRandomColor() {
  let colorValues = ["#f75842", "#00bf8e", "#6c63ff", "#f7c94b"];
  return colorValues[Math.floor(Math.random() * colorValues.length)];
}
function CardCategory({ title, body, icon }) {
  return (
    <article className="category">
      <span style={{ background: getRandomColor() }} className="category__icon">
        <DynamicFaIcon name={icon} />
      </span>
      <h5>{title}</h5>
      <p>{body}</p>
    </article>
  );
}

export default CardCategory;
