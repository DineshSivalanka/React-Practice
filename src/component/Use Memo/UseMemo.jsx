import React, { useState, useMemo } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const slowFunction = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {Math.sqrt(i)} // heavy work
    return num;
  };

  const result = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <>
      <h2>Expensive Result: {result}</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>
    </>
  );
};

export default Example;