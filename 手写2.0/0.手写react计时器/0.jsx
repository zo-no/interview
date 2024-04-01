import React, { useState, useEffect } from "react";

function useClock(initTime) {
  let timeId = null;
  // 计时
  const [time, setTime] = useState(initTime); //计时时间
  // 是否暂停
  const [running, setRunning] = useState(false); //默认暂停

  useEffect(() => {
    console.log(2);
    if (running && time > 0) {
      timeId = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      clearInterval(timeId);
      timeId = null;
    }

    return () => clearInterval(timeId);
  }, [running, time]);

  function run() {
    setRunning(true);
  }

  function noRun() {
    setRunning(false);
  }

  function reSet() {
    setRunning(false);
    setTime(initTime);
  }
  return [time, run, noRun, reSet];
}

// 手写计时器
export const App = () => {
  const [time, run, noRun, reSet] = useClock(5);
  return (
    <>
      <div>123</div>
      <div>{time}</div>
      <button onClick={run}>run</button>
      <button onClick={noRun}>noRun</button>
      <button onClick={reSet}>reSet</button>
    </>
  );
};
