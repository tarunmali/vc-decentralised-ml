import React, { useState } from "react";
import Timer from "./Timer";
// import ControlButtons from "./ControlButtons";
 

let isActive, setIsActive
let isPaused, setIsPaused
let time, setTime

const handleStart1 = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume1 = () => {
    setIsPaused(!isPaused);
  };
  



function Stopwatch1() {
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
    <div >
      <h3 className="karan"> <b>Call duration</b> </h3>
      <Timer time={time} />
    </div>
  );
}
  
export default Stopwatch1;
export {handleStart1,handlePauseResume1};