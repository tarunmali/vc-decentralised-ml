import React, { useState,useEffect } from "react";
import Timer from "./Timer";
import Cookies from 'js-cookie';

let count=0;

function about() {
  // count++
  window.open('https://stackoverflow.com/','_blank');
  // window.open("https://stackoverflow.com/", "", "width=200,height=100"); 
}




function Ssstopwatch1() {

  const stime = Cookies.get('stime');
  const time = Cookies.get('time');
  let pps=0;
  
  
  useEffect(()=>{
    if(pps<10 && pps!=0) about();
    }, [])


  return (
      
    <div >
      <h3 className="karan"> <b>Wrong posture duration</b> </h3>
      <Timer time={time-stime} />

      <h3 className="karan"> <b>Predicted Posture Score</b> </h3>
      {time!=0 && time>stime && (pps=(stime/time)*10)}
      <h3>{pps}</h3>

    </div>
  );
}
  
export default Ssstopwatch1;
