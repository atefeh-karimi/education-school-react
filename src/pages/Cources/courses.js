import React from "react";
import CardCourse from "../../component/CardCourse";
import { content } from "../../content/courseContent";
import "./coursesStyle.css";

function Courses() {
  return (
    <section className="courses mt-0">
      <div className="container courses__container">
        {content.map((c) => {
          return <CardCourse key={c.id} {...c} />;
        })}
      </div>
    </section>
  );
}

export default Courses;
