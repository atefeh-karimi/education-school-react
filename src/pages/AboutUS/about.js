import React from "react";
import CardAchievemet from "../../component/CardAchievemet";
import Teacher from "../../component/Teacher";
import { TeachersInfo } from "../../content/TeachersInfo";
import "./aboutStyle.css";

function About() {
  return (
    <>
      {" "}
      <section className="about__achievements">
        <div className="container about__achievement-container">
          <div className="about__achievements-left">
            <img src="./image/about achievements.svg" alt="" />
          </div>
          <div className="about__achievements-right">
            <h1>افتخار ما</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>

            <div className="achievemets__cards">
              <CardAchievemet title="دوره" number="۴۵۰+" icon="FaVideo" />
              <CardAchievemet title="کاربر" number="۷۹،۰۰۰+" icon="FaUsers" />
              <CardAchievemet title="جایزه" number="۲۶+" icon="FaAward" />
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <h2>همکاران</h2>
        <div className="container team__container">
          {TeachersInfo.map((c) => {
            return (
              <Teacher key={c.id} name={c.name} expert={c.expert} url={c.img} />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default About;
