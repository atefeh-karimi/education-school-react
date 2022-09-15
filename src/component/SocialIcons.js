import React from "react";
import { SocialIconsStyled } from "./styles/SocialIcons.Styled";
import { FaTwitter, FaPaperPlane, FaInstagram } from "react-icons/fa";

function SocialIcons() {
  return (
    <SocialIconsStyled>
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
