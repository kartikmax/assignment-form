import { Button, Stack, Card } from "@mui/material";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const getBackgroundColor = (count) => {
   
    const clampedCount = Math.max(-100, Math.min(100, count));
    
    const t = (clampedCount + 100) / 200; 
    const r = Math.round(255 * (1 - Math.pow(1 - t, 3))); 
    const g = Math.round(255 * (1 - Math.pow(t, 3))); 
    const b = 255; 

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <Card style={{ backgroundColor: getBackgroundColor(count) }}>
      <Stack spacing={2} style={{ width: "100%" }}>
        <Stack direction="row" justifyContent="center">
          <h1>Counter: {count}</h1>
        </Stack>
        <Stack direction="row" justifyContent="space-around">
          <div>
            <Button variant="contained" onClick={decrement}>
              -
            </Button>
          </div>
          <div>
            <Button variant="contained" onClick={increment}>
              +
            </Button>
          </div>
          <div>
            <Button variant="contained" onClick={reset}>
              reset
            </Button>
          </div>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Counter;
