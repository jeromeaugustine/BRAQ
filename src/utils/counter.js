import React, { useState } from "react";
import Button from "../utils/button";

export default function MintCounter() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <div>
        <div class="count">
          <h1 className="count">{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}
