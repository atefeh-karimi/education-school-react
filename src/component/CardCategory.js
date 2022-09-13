import React from "react";
import { DynamicFaIcon } from "./DynamicFaIcon";
import getRandomColor from "./getRandomColor";
import "./styles/CardCategory.style.css";

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
