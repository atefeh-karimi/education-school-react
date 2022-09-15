import React from "react";
import { Btn } from "../../component/btn";
import "./headerStyle.css";

function Header() {
  const theme = {
    textColor: "white",
    backgroundColor: "#f75842",
    hoverTextColor: "white",
  };

  return (
    <header>
      <div className="container header__container">
        <div className="header__left">
          <h1>باگسترش مهارت هایتان مسیرشغلی خودرا هموارکنید.</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
          <Btn theme={theme} href="Courses">
            شروع کنید
          </Btn>
        </div>
        <div className="header__right">
          <div className="header__right-image">
            <img src="image/header.svg" alt="logo" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
