import React from "react";  
import StopWatch from "./Stopwatch";
import SstopWatch from "./SStopwatch";
function Time () 
{ 
    return (  
        <div className="row" style={{width:'600px'}}>
            <div className="col-md-4">
                <StopWatch/>
            </div>
            <div className="col-md-6 offset-md-1">
                <SstopWatch/>
            </div>
        </div>
        );  
    } 
export default Time;