import React from "react";
import { DynamicFaIcon } from "./DynamicFaIcon";
import getRandomColor from "./getRandomColor";

import {
  AchievemetCardStyle,
  AchievemetIconStyle,
} from "./styles/CardAchievemet.Style";

function CardAchievemet({ icon, title, number }) {
  return (
    <AchievemetCardStyle>
      <AchievemetIconStyle style={{ background: getRandomColor() }}>
        <DynamicFaIcon name={icon} />
      </AchievemetIconStyle>
      <h3>{number}</h3>
      <p>{title}</p>
    </AchievemetCardStyle>
  );
}

export default CardAchievemet;
