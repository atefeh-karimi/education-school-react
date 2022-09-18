import React from "react";
import { SocialIconsStyled } from "./styles/SocialIcons.Styled";
import { FaTwitter, FaPaperPlane, FaInstagram } from "react-icons/fa";

function SocialIcons() {
  return (
    <SocialIconsStyled >
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
          <FaInstagram />
        </a>
      </li>
    </SocialIconsStyled>
  );
}

export default SocialIcons;
