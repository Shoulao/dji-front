import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function SpeechCommand() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <React.Fragment>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </React.Fragment>
  );
}

export default SpeechCommand;
