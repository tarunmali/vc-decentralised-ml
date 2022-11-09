import React from "react";  
import { Paper, makeStyles } from '@material-ui/core';
import Sstopwatch1 from './Sstopwatch1';
import Stopwatch1 from './Stopwatch1';




const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '10px',
      border: '2px solid black',
      margin: '10px',
    },
  }));



function Cook () 
{ 
    const classes = useStyles();
    return (  
        <Paper className={classes.paper}>
            <h3 style={{textAlign: 'center' }}>Stats of the last video call</h3>
            <Stopwatch1/> 
            <Sstopwatch1/>
        </Paper>
        );  
    } 
export default Cook;