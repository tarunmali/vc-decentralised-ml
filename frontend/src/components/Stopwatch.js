import React, { useState } from "react";
import Timer from "./Timer";
// import ControlButtons from "./ControlButtons";
 

let isActive, setIsActive
let isPaused, setIsPaused
let time, setTime

const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };


function StopWatch() {
  [isActive, setIsActive] = useState(false);
  [isPaused, setIsPaused] = useState(true);
  [time, setTime] = useState(0);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  

  
  return (
    <div className="stop-watch">
        <p>Call duration</p>
      <Timer time={time} />
      {/* <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      /> */}
    </div>
  );
}
  
export default StopWatch;
export {handleStart,handlePauseResume,handleReset};