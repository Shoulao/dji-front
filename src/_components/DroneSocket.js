import React from "react";
import socket from "../_services/socket";
import styled from "@emotion/styled";

function useDroneState() {
  const [droneState, updateDroneState] = React.useState([]);

  React.useEffect(() => {
    socket.on("dronestate", updateDroneState);
  }, []);

  return droneState;
}

function useSocket() {
  const [status, updateStatus] = React.useState("DISCONNECTED");

  React.useEffect(() => {
    socket.on("status", updateStatus);
  }, []);

  return status;
}

function DroneStatus() {
  const status = useSocket();
  const droneState = useDroneState([]);
  console.log(droneState);

  const returnPixelHeight = h => {
    return (h * 40) / 300;
  };

  return (
    <StatusContainer>
      <StatusElement>
        <StatusLabel>status</StatusLabel>
        <StatusIndicator status={status} />
      </StatusElement>

      <StatusElement>
        <StatusLabel>battery</StatusLabel>
        <BatteryWrapper>
          {droneState.bat ? <Battery batStatus={droneState.bat} /> : "no data"}
        </BatteryWrapper>
      </StatusElement>

      <StatusElement>
        <StatusLabel>temperature</StatusLabel>
        <TemperatureWrapper>
          <TemperatureIndicator temp={droneState.templ} />
          <TemperatureText>{droneState.templ ? droneState.templ : "60"}</TemperatureText>
        </TemperatureWrapper>
      </StatusElement>

      <StatusElement>
        <StatusLabel>height</StatusLabel>
        <HeightWrapper>
          <HeightIndicator height={droneState.h ? returnPixelHeight(droneState.h) : 1} />
        </HeightWrapper>
      </StatusElement>
    </StatusContainer>
  );
}

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  padding: 5px;
  box-shadow: 3px 3px 4px -3px var(--neutral-300);
  width: calc(100vw - var(--headerWidth));
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  left: var(--headerWidth);
  background: var(--neutral-000);
  height: 60px;
`;

const StatusIndicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${props => (props.status === "CONNECTED" ? "var(--green)" : "var(--red)")};
`;

const StatusElement = styled.div`
  margin-right: 20px;
  padding: 0px 15px;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-start;
`;

const StatusLabel = styled.span`
  font-weight: bold;
  font-size: 11px;
  margin-top: 5px;
`;

const BatteryWrapper = styled.div`
  background: transparent;
  border: 2px solid var(--dark-000);
  border-radius: 3px;
  width: 70px;
  height: 20px;
  display: flex;
  flex-direction: rop;
  align-items: stretch;
  padding: 1px;
  justify-content: flex-start;
  position: relative;

  ::after {
    content: "";
    background: var(--dark-000);
    height: 12px;
    width: 6px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    top: 2px;
    display: block;
    position: absolute;
    left: 100%;
  }
`;

const Battery = styled.div`
  display: flex;
  height: 14px;
  background: ${props =>
    props.batStatus > 60 ? "var(--green)" : props.batStatus > 20 ? "var(--yellow)" : "var(--red)"};
  width: ${props => props.batStatus}%;
`;

const TemperatureWrapper = styled.div`
  display: flex;
  width: 60px;
  height: 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 2px solid var(--neutral-000);
  border-bottom: none;
  background: linear-gradient(90deg, var(--blue), var(--yellow), var(--red));
  position: relative;
`;

const transformRotate = t => `rotate(${t}deg)`;

const TemperatureIndicator = styled.div`
  position: absolute;
  transition: all 0.3s ease;
  bottom: 0;
  left: 0;
  width: 30px;
  transform: translateX(-2px) ${props => transformRotate(props.temp)};
  height: 2px;
  background: var(--dark-050);
  transform-origin: 100% 50%;
`;

const TemperatureText = styled.div`
  display: flex;
  width: 50px;
  height: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: var(--neutral-000);
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-25px);
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

const HeightWrapper = styled.div`
  display: block;
  position: relative;
  border: 1px solid var(--dark-050);
  border-right-color: transparent;
  border-top-color: transparent;
  width: 20px;
  height: 40px;
  top: 3px;

  ::after {
    content: "0m";
    position: absolute;
    left: -15px;
    bottom: -5px;
    display: block;
    font-size: 8px;
  }

  ::before {
    content: "3m";
    position: absolute;
    left: -15px;
    top: -5px;
    display: block;
    font-size: 8px;
  }
`;

const HeightIndicator = styled.div`
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  bottom: ${props => props.height}px;
  left: 7px;
  background: var(--red);
`;

export default DroneStatus;
