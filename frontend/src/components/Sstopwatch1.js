import React, { useState } from "react";
import Timer from "./Timer";
// import ControlButtons from "./ControlButtons";
 

let isActive, setIsActive
let isPaused, setIsPaused
let time, setTime

const shandleStart1 = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const shandlePauseResume1 = () => {
    setIsPaused(!isPaused);
  };
  



function Sstopwatch1() {
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
      <h3 className="karan"> <b>Correct posture duration</b> </h3>
      <Timer time={time} />
    </div>
  );
}
  
export default Sstopwatch1;
export {shandleStart1,shandlePauseResume1};