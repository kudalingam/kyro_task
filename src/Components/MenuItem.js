import React from "react";

const MenuItem = (props) => {
  const { icon, name } = props;
  return (
    <>
      <li>
        {icon}
        <span>{name}</span>
      </li>
    </>
  );
};

export default MenuItem;
