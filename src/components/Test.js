import { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

// const Test = () => {
//   const [count, setCount] = useState(0);

//   const handleCount = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <p>Count is {count}</p>
//       <button onClick={handleCount}>click</button>
//     </div>
//   );
// };

// controlled and uncontrolled scryRenderedComponents

const Test = () => {
  const [Text, setText] = useState("");

  const handleChangeEvent = (e) => {
    const TypedData = e.target.value;
    setText(TypedData);
  };
  return (
    <div>
      <p>Input data sync:</p>
      <input
        className="border"
        type="text"
        onChange={handleChangeEvent}
        value={Text}
        label="First Input"
      />
      <input
        className="border"
        type="text"
        onChange={handleChangeEvent}
        value={Text}
        label="Second Input"
      />

      <p>Input data typed: {Text}</p>
    </div>
  );
};

export default Test;
