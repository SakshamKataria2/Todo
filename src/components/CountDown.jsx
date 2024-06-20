import { useEffect } from "react";
import { useState } from "react";

const CountDown = () => {
  const [totaltime, setTotaltime] = useState(1500.0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotaltime((totaltime) => totaltime - 1);
    }, 1000);
    return clearInterval(interval);
  }, [totaltime]);

  return (
    <div>
      <h1 className="text-white">{totaltime}</h1>
    </div>
  );
};

export default CountDown;
