import React from "react";
import { SocialIconsStyled } from "./styles/SocialIcons.Styled";
import {
  FaTelegram,
  FaTwitter,
  FaPaperPlane,
  FaInstagram,
} from "react-icons/fa";

function SocialIcons() {
  return (
    <SocialIconsStyled>
      <li>
        <FaTelegram />
      </li>
      <li>
        <FaTwitter />
      </li>
      <li>
        <FaPaperPlane />
      </li>
      <li>
        <FaInstagram />
      </li>
    </SocialIconsStyled>
  );
}

export default SocialIcons;
