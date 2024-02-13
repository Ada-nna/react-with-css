import React, { useState } from "react";

function Count() {
  const [mainValue, setValue] = useState(0);

  function increament() {
    setValue((previousValue) => ++previousValue);
  }
  function decreament() {
    if(mainValue === 0) return;
    setValue((previousValue) => --previousValue);
  }

  return (
    <div
      className="flex"
      style={{
        width: "300px",
        margin: "10px 0",
      }}
    >
      <button onClick={decreament}>-</button>
      <p>{mainValue}</p>
      <button onClick={increament}>+</button>
    </div>
  );
}

export default Count;
