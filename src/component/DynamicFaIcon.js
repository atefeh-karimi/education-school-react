import React from "react";
import * as Icons from "react-icons/fa";

/* Your icon name from database data can now be passed as prop */
export const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return;
  }

  return <IconComponent />;
};
