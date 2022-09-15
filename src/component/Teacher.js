import React from "react";
import { FaPaperPlane, FaPhone } from "react-icons/fa";
import "./styles/Teacher.style.css";

function Teacher({ name, expert, url }) {
  return (
    <>
      {name ? (
        <div className="team__member">
          <div className="team__member-image">
            <img src={url} alt="" />
          </div>
          <div className="team__member-info">
            <h4>{name}</h4>
            <p>{expert}</p>
          </div>
          <div className="team__member-socials">
            <a href="/">
              <FaPhone />
            </a>
            <a href="/">
              <FaPaperPlane />
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Teacher;
