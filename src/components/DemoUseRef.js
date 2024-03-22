import React, { useEffect, useRef, useState } from "react";

const DemoUseRef = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  //console.log(ref);

  console.log("rendering...");

  let i = useRef(null);
  // useEffect(() => {
  //   i.current = setInterval(() => {
  //     console.log("Namaste React setinterval" + Math.random());
  //   }, 1000);

  //return () => clearInterval(i.current);
  //}, []);

  return (
    <div className="border border-black rounded-lg w-[50%] h-96 m-2 p-2">
      <h1>DemoUseRef Example:</h1>
      <div>
        <button
          className="border border-black p-2 m-2"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span>Let = {x}</span>
      </div>
      <div>
        <button
          className="border border-black p-2 m-2"
          onClick={() => {
            setY(y + 1);
            console.log(y);
          }}
        >
          Increase x
        </button>
        <span>state variable = {y}</span>
      </div>
      <div>
        <button
          className="border border-black p-2 m-2"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref.current is " + ref.current); // once the component re-renders its value persisted and will get updated in UI. its slow :p
          }}
        >
          Ref
        </button>
        <span>Ref variable = {ref.current}</span>
        <button
          className="text-white font-bold border border-red-500 bg-red-500 p-2 m-2 rounded-lg"
          onClick={() => {
            clearInterval(i.current);
          }}
        >
          Stop Printing
        </button>
      </div>
    </div>
  );
};

export default DemoUseRef;
