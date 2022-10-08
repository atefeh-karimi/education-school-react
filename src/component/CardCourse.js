import React from "react";
import { Btn } from "./btn";
import "./styles/CardCourse.style.css";

function CardCourse({ title, body, img }) {
  const theme = {
    textColor: "white",
    backgroundColor: "#f75842",
    hoverTextColor: "white",
  };
  return (
    <article className="course">
      <div className="course__image">
        <img src={img} alt="" />
      </div>
      <div className="course__info">
        <h4> {title}</h4>
        <p>{body}</p>
        <Btn theme={theme} href="Courses">
          شروع یادگیری
        </Btn>
      </div>
    </article>
  );
}

export default CardCourse;
