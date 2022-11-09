import React, {useEffect,useRef,useState } from 'react';
import { SocketContext } from '../Context';
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from '@tensorflow/tfjs';
import * as knnClassifier from '@tensorflow-models/knn-classifier';


const classifier = knnClassifier.create();

let net=0,setNet;
let videoRef
let counter,setCounter;

const learn = () => {
    if(counter==0)setCounter(counter + 1);
    addExample(counter);
    console.log(counter)
  }


const earn = () => {
    if(counter==1)
    setCounter(counter -1);
    addExample(counter);
    console.log(counter)
}

const addExample = classId => {
    // Get the intermediate activation of MobileNet 'conv_preds' and pass that
    // to the KNN classifier.
    if(videoRef && videoRef.current){
        const activation = net.infer(videoRef.current, 'conv_preds');
      
        // Pass the intermediate activation to the classifier.
        classifier.addExample(activation, classId);

    }
};

async function app() {
    console.log('Loading mobilenet..');
    // Load the model.
    net = await mobilenet.load();
    setNet(net)
    console.log('Sucessfully loaded model');
    // await setupWebcam();
    
    while (videoRef) {
      // console.log("DevManus")
      // console.log(classifier.getNumClasses())
      if (classifier.getNumClasses() > 0) {
        // Get the activation from mobilenet from the webcam.
        // const activation = net.infer(webcamElement, 'conv_preds');
        const activation = net.infer(videoRef.current, 'conv_preds');
        // Get the most likely class and confidences from the classifier module.
        const result = await classifier.predictClass(activation);
  
        const classes = ['A', 'B'];
        if(classes[result.classIndex]=="B"){
          document.body.style = 'background: green;';
        }
        else{
          document.body.style = 'background: red;';  
        }
      }
      await tf.nextFrame();
    }
  }



const Ml = () => {
    [counter, setCounter] = useState(0);
    [net, setNet] = useState(0);
    videoRef = useRef(null);
    useEffect(() => {
      const getUserMedia = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({video: true});
          videoRef.current.srcObject = stream;
        } catch (err) {
          console.log(err);
        }
      };
      getUserMedia();
      app();
    }, []);

    return (
      <div>
      <video 
  ref={videoRef}
  autoPlay
  height="1"
  width="1"
  hidden={true}
  />


     { net!==0?      
      <div>
      <button onClick={learn}> Correct Posture</button>
      <button onClick={earn}> Wrong posture</button>



      </div>:      
  
  
  <div>  
  <h1>Machine learning model loading </h1>  
  </div>}
  </div>
    );
  

  
  };
  
  export default Ml;
