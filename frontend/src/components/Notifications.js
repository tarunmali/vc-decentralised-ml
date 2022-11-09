import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../Context';

import {handleStart,handlePauseResume,handleReset,isActive,isPaused} from './Stopwatch'


const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          {/* <Button variant="contained" color="primary" onClick={answerCall}> */}
          <Button variant="contained" color="primary" onClick={function() { answerCall();}}>
          {/* handleStart() */}
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
