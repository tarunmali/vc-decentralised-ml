import React, { useState } from "react";
import Timer from "./Timer";
import Cookies from 'js-cookie';


function Ssstopwatch1() {

  const stime = Cookies.get('stime');
  const time = Cookies.get('time');
  let pps=0;
  if(time!=0 && time>stime) pps=(stime/time)*10;
  return (
      
    <div >
      <h3 className="karan"> <b>Wrong posture duration</b> </h3>
      <Timer time={time-stime} />

      <h3 className="karan"> <b>Predicted Posture Score</b> </h3>
      <h3>{pps}</h3>

    </div>
  );
}
  
export default Ssstopwatch1;
