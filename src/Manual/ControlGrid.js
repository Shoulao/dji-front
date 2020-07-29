import React from "react";
import styled from "@emotion/styled";
import { commands, sendCommand } from "./_helpers";

function ControlGrid() {
  return (
    <ControlTemplate>
      {commands.map((el, i) => (
        <ControlElement
          onClick={sendCommand(el.command)}
          className={i === 0 ? "mirror" : ""}
          key={i}
        >
          {<el.icon className="control_icon" />}
          <span className={i === 0 ? "mirror" : ""}>{el.label}</span>
        </ControlElement>
      ))}
    </ControlTemplate>
  );
}

const ControlTemplate = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
  margin-left: 20px;
  background: var(--neutral-500);
  padding: 5px;
  height: 310px;
  width: 240px;
  position: relative;

  ::after {
    content: "";
    display: block;
    height: 315px;
    width: 248px;
    position: absolute;
    top: -2px;
    left: -4px;
    right: 0;
    border-radius: 3px;
    background: var(--neutral-750);
    z-index: -1;
  }
`;

const ControlElement = styled.button`
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  box-shadow: 2px 2px 12px -3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  border-radius: 3px;
  outline: none;

  &:active {
    transform: scale(0.97);

    ::after {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: repeating-linear-gradient(
        45deg,
        var(--dark-050) 25%,
        transparent 30%,
        transparent 30%
      );

      opacity: 0.7;
    }
  }

  &:hover {
    .control_icon {
      path {
        opacity: 1;
      }
    }
  }

  &.mirror {
    transform: scaleX(-1);
  }

  .control_icon {
    height: 60px;
    width: 60px;
    box-shadow: inset 1px 1px 5px -3px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    padding: 5px;
    background: var(--neutral-200);

    path {
      opacity: 0.6;
    }
  }

  span.mirror {
    transform: scaleX(-1);
  }
`;

export default ControlGrid;
