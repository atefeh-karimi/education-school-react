import React from "react";
import { LogoStyled } from "./styles/Logo.Styled";

function Logo() {
  return (
    <LogoStyled href="/">
      <h4>
        AT<small style={{ color: "var(--color-danger)" }}>web</small>
      </h4>
    </LogoStyled>
  );
}

export default Logo;
