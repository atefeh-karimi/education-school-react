import React from "react";
import { content } from "../../content/courseContent";
import CardCourse from "../../component/CardCourse";

function PopularCourses() {
  return (
    <section className="courses">
      <h2>آموزش های پرمخاطب </h2>
      <div className="container courses__container">
        {content.slice(0, 3).map((c) => {
          return (
            <CardCourse key={c.id} title={c.title} body={c.body} url={c.img} />
          );
        })}
      </div>
    </section>
  );
}

export default PopularCourses;
