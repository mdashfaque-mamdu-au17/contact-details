import React from "react";

const ButtonIcon = ({ id, Icon, color, clickHandler }) => {
  return (
    <button className="px-2 hover:cursor-pointer" onClick={clickHandler(id)}>
      <Icon size={22} className={`text-${color}-900`} weight="fill" />
    </button>
  );
};

export default ButtonIcon;
