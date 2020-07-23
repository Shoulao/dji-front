import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { ReactComponent as Microphone } from "../_assets/icons/record.svg";
import { initVoiceCommand } from "../_services/drone.service";
import { sendCommand } from "../Manual/_helpers";
import { Button } from "./Button";
import { Header } from "./Header";
import styled from "@emotion/styled";

export default function VoiceControlPanel() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [speaking, setSpeaking] = React.useState(false);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <Container>
      <Header>Control Panel</Header>
      <AudioWrapper>
        <Microphone className={speaking ? "record_icon speaking" : "record_icon"} />
      </AudioWrapper>
      <ButtonWrapper>
        <Button
          backgroundColor="#1ca1f3"
          backgroundColorHover="#1ca1f3"
          textColor="#fff"
          onClick={() => {
            SpeechRecognition.startListening();
            setSpeaking(true);
          }}
        >
          Start
        </Button>
        <Button
          backgroundColor="#e33112"
          backgroundColorHover="#e33112"
          textColor="#fff"
          onClick={() => {
            // initVoiceCommand(transcript);
            SpeechRecognition.stopListening();
            setSpeaking(false);
          }}
        >
          Stop
        </Button>
        <Button
          backgroundColor="#fab525"
          backgroundColorHover="#fab525"
          textColor="#fff"
          onClick={resetTranscript}
        >
          Reset
        </Button>
        <Button
          backgroundColor="#fab525"
          backgroundColorHover="#fab525"
          textColor="#fff"
          onClick={() => initVoiceCommand(transcript)}
        >
          Call test
        </Button>
      </ButtonWrapper>
      {transcript ? (
        <Text>
          <TextLabel>Your command: </TextLabel> {transcript}
        </Text>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(var(--headerHeight) - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AudioWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .record_icon {
    max-width: 120px;
    path {
      fill: var(--red);
    }

    &.speaking {
      animation: pulse 1.3s infinite ease;
      path {
        fill: var(--green);
      }
    }

    @keyframes pulse {
      50% {
        transform: scale(1.05);
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px auto;

  button {
    margin-right: 5px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  padding: 12px 12px 12px 6px;
  border: 1px solid var(--neutral-200);
  box-shadow: 3px 3px 8px -3px var(--neutral-300);
  border-radius: 3px;
`;

const TextLabel = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: var(--dark-050);
`;
