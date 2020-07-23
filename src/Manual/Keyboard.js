import React from "react";
import styled from "@emotion/styled";
import { keyboardKeys, assignKeyCapColor, sendCommand, commandsOnPress } from "./_helpers";
import socket from "../_services/socket";
export default function Keyboard() {
  const [activeKey, setActiveKey] = React.useState(null);

  React.useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleKeyPress = e => {
    var code = e.keyCode || e.which;
    setActiveKey(code);
    // console.log(code);
    // socket.emit("command", command);
    if (commandsOnPress[code]) {
      console.log(commandsOnPress[code]);
      socket.emit("command", commandsOnPress[code]);
    }
  };

  const handleKeyUp = () => {
    setActiveKey(null);
  };

  return (
    <KeyboardWrapper>
      {keyboardKeys.map((row, i) => {
        return (
          <KeyboardRow key={i} className="keyboard_row">
            {row.map((key, i) => {
              if (key.top) {
                return (
                  <KeyCapCombinedWrapper key={i}>
                    <KeyCapCombined>{key.top.label}</KeyCapCombined>
                    <KeyCapCombined>{key.bottom.label}</KeyCapCombined>
                  </KeyCapCombinedWrapper>
                );
              } else {
                return (
                  <KeyCap
                    key={i}
                    data-key={key.dataKey ? key.dataKey : ""}
                    bgColor={assignKeyCapColor(key.keyClass)}
                    className={key.dataKey === activeKey ? `${key.keyClass} active` : key.keyClass}
                  >
                    {key.label}
                  </KeyCap>
                );
              }
            })}
          </KeyboardRow>
        );
      })}
    </KeyboardWrapper>
  );
}

const KeyboardWrapper = styled.div`
  display: flex;
  width: 780px;
  height: 310px;
  justify-content: stretch;
  flex-wrap: wrap;
  padding: 5px;
  border-radius: 3px;
  background: var(--neutral-500);
  position: relative;

  ::after {
    content: "";
    display: block;
    width: 788px;
    height: 315px;
    position: absolute;
    top: -2px;
    left: -4px;
    right: 0;
    border-radius: 3px;
    background: var(--neutral-750);
    z-index: -1;
  }
`;

const KeyboardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

const KeyCapCombinedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: space-between;
`;

const KeyCapCombined = styled.button`
  width: 50px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--neutral-800);
  position: relative;
  z-index: 999;
  background: var(--neutral-800);
  border-radius: 5px;
  font-size: 10px;

  ::before {
    display: block;
    content: "";
    position: absolute;
    top: 4px;
    background: var(--neutral-750);
    height: 13px;
    width: 38px;
    z-index: -2;
    border: 1px solid var(--neutral-750);
    border-radius: 5px 5px 5px 5px;
  }
`;

const KeyCap = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--neutral-400);
  position: relative;
  z-index: 999;
  background: ${props => (props.bgColor ? props.bgColor : "var(--neutral-300)")};
  border-radius: 5px;
  margin: 2px;
  outline: none;
  font-weight: bold;
  font-size: 10px;
  transition: all 0.2s ease;

  .key_icon {
    width: 40px;
    height: auto;

    &.smaller {
      width: 25px;
    }

    &.rotate_left {
      transform: scaleX(-1);
    }
  }

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

  &.active {
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

  ::before {
    display: block;
    content: "";
    position: absolute;
    top: 4px;
    background: var(--neutral-200);
    height: 37px;
    width: 40px;
    z-index: -2;
    border: 1px solid var(--neutral-300);
    border-radius: 5px 5px 10px 10px;
  }

  &.fn_keys {
    height: 20px;

    ::before {
      height: 8px;
    }
  }

  &.delete {
    width: 90px;

    ::before {
      width: 80px;
    }
  }

  &.tab {
    width: 60px;
    ::before {
      width: 50px;
    }
  }

  &.caps_lock {
    width: 70px;
    ::before {
      width: 60px;
    }
  }

  &.shift {
    width: 100px;
    ::before {
      width: 90px;
    }
  }

  &.space {
    width: 250px;
    ::before {
      width: 240px;
    }
  }

  &.cmd {
    width: 60px;
    ::before {
      width: 50px;
    }
  }

  &.enter {
    width: 80px;
    ::before {
      width: 70px;
    }
  }

  &.side {
    font-size: 10px;
    border: 1px solid var(--neutral-750);

    ::before {
      background: var(--neutral-750);
      border-color: var(--neutral-750);
    }
  }

  &.esc {
    border: 1px solid var(--orange);

    ::before {
      background: var(--orange);
      border-color: var(--orange);
    }
  }
`;
