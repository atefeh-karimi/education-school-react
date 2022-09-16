import React from "react";
import List from "./List";
import SocialIcons from "../component/SocialIcons";
import Logo from "../component/Logo";
import { permalinks, privacy, contact } from "../content/links";
import "./FooterStyle.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__1">
          <Logo />
          <p>
            لورم با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
            گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            که لازم است.
          </p>
        </div>

        <List titleList="لینک‌های مهم" data={permalinks} />

        <List titleList="حریم خصوصی " data={privacy} />
        <div>
          <List titleList="تماس باما" data={contact} className="ltr" />
          <SocialIcons />
        </div>
      </div>
      <div className="footer__copyright">
        <small>Copyright &copy;ATIK2</small>
      </div>
    </footer>
  );
}

export default Footer;
