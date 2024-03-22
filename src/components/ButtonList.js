import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Music", "Live", "Comedy", "Games", "News", "Cooking"];
  return (
    <div className="flex">
      {list.map((name, index) => {
        return <Button key={index} name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
