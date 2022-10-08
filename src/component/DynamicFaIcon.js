import React from "react";
import * as Icons from "react-icons/fa";

export const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return;
  }

  return <IconComponent />;
};
