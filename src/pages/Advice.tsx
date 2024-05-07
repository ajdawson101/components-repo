import React, { useEffect, useState } from "react";
import Message from "../components/Message/Message";

const Advice = () => {
  const [advice, setAdvice] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    if (res.ok && data.slip.advice !== advice) {
      setCount(count + 1);
    }
    setAdvice(data.slip.advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1 className="red">{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <div>
        <Message count={count} />
      </div>
    </div>
  );
};

export default Advice;
