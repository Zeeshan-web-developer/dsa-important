import React, { useCallback, useState, useEffect, useRef } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [currentsignal, setCurrentSignal] = useState("red");

  //0 – 5 sec → 🔴 Red
  // 5 – 9 sec → 🟢 Green
  // 9 – 11 sec → 🟡 Yellow
  // After 11 sec → cycle repeats from 0
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => (prev + 1) % 12);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const getSignal = (count) => {
    if (count <= 5) return "red";
    if (count <= 9) return "green";
    return "yellow";
  };

  return (
    <>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: getSignal(count),
          margin: "20px auto",
          border: "2px solid black",
        }}
      ></div>

      <h2 style={{ textAlign: "center" }}>
        {getSignal(count)} - {count}
      </h2>
    </>
  );
}

export default Parent;
