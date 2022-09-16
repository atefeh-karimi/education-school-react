import React from "react";
import Form from "../../component/Form";

import { StyleSocials } from "../../component/styles/SocialIcons.Styled";
import {
  FaTwitter,
  FaPaperPlane,
  FaPhone,
  FaFax,
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./contactStyle.css";

function Contact() {
  return (
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__aside">
          <div className="aside__image">
            <img src="./image/contact.svg" alt="" />
          </div>
          <h2>ارتباط باما</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>

          <ul className="contact__details ">
            <li>
              <a href="/">
                <FaMobileAlt />
              </a>
              <h6 className="ltr">+۹۸ ۹۳۶-۶۴۸۸۴۵۵</h6>
            </li>
            <li>
              <a href="/">
                <FaEnvelope />
              </a>
              <h6>atefeh.karimi.kia@gmail.com</h6>
            </li>
            <li>
              <FaMapMarkerAlt />
              <h6>ایران - تهران</h6>
            </li>
          </ul>

          <StyleSocials>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <FaPaperPlane />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFax />
              </a>
            </li>
            <li>
              <a href="/">
                <FaPhone />
              </a>
            </li>
          </StyleSocials>
        </div>

        <Form />
      </div>
    </section>
  );
}

export default Contact;
