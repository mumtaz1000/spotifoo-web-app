import React from "react";

export default function ClickEvent() {
  const handleClick = (event) => {
    console.log("Hello from click",event);
  };

  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e.target);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <button
        onClick={(e) => {
          handleClickAgain("Mario",e);
        }}
      >
        On click!
      </button>
    </div>
  );
}
