import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const DemoUseMemo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //console.log("rendering...");

  //const primeNumber = findNthPrime(text);
  const primeNumber = useMemo(() => findNthPrime(text), [text]);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div
      className={
        "border border-black rounded-lg w-[50%] h-96 m-2 p-2 " +
        (isDarkTheme && "bg-gray-400 text-white")
      }
    >
      <h1>DemoUseMemo Example:</h1>
      <div>
        <input
          className="border border-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={() => handleThemeToggle()}>Toggle</button>
      <div>nth prime number is : {primeNumber}</div>
    </div>
  );
};

export default DemoUseMemo;
