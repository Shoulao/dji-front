import React from "react";
import socket from "../_services/socket";
import { ReactComponent as TakeOff } from "../_assets/icons/takeoff.svg";
import { ReactComponent as Land } from "../_assets/icons/land.svg";
import { ReactComponent as Up } from "../_assets/icons/up.svg";
import { ReactComponent as Down } from "../_assets/icons/down.svg";
import { ReactComponent as Left } from "../_assets/icons/left.svg";
import { ReactComponent as Right } from "../_assets/icons/right.svg";
import { ReactComponent as Emergency } from "../_assets/icons/alert.svg";
import { ReactComponent as Placeholder } from "../_assets/icons/drone_placeholder.svg";
import { ReactComponent as Rotate } from "../_assets/icons/3d.svg";
import { ReactComponent as Flip } from "../_assets/icons/coin.svg";

export function sendCommand(command) {
  // console.log("command", command);
  return function () {
    console.log(`Sending command: ${command}`);
    socket.emit("command", command);
  };
}
export const commands = [
  { label: "ccw", command: "ccw 90", icon: Rotate },
  { label: "up", command: "up 20", icon: Up },
  { label: "cw", command: "cw 90", icon: Rotate },
  { label: "left", command: "left 15", icon: Left },
  { label: "", command: "", icon: Placeholder },
  { label: "right", command: "right 15", icon: Right },
  { label: "flip", command: "flip b", icon: TakeOff },
  { label: "down", command: "down 15", icon: Down },
  { label: "flip", command: "flip r", icon: Flip },
  { label: "land", command: "land", icon: Land },
  { label: "start", command: "takeoff", icon: TakeOff },
  { label: "emergency", command: "emergency", icon: Emergency },
];
export const assignKeyCapColor = cl => {
  if (cl) {
    if (cl.includes("esc")) return "#e33112";
    if (cl.includes("char")) return "##eee";
    if (cl.includes("side")) return "#747474";
    if (cl.includes("control")) return "#fab525";
  }

  return null;
};
export const keyboardKeys = [
  [
    { label: "esc", dataKey: 27, keyClass: "esc fn_keys low_profile strict_width" },
    { label: "f1", dataKey: 112, keyClass: "fn_keys low_profile strict_width" },
    { label: "f2", dataKey: 113, keyClass: "fn_keys low_profile strict_width" },
    { label: "f3", dataKey: 114, keyClass: "fn_keys low_profile strict_width" },
    { label: "f4", dataKey: 115, keyClass: "fn_keys low_profile strict_width" },
    { label: "f5", dataKey: 116, keyClass: "fn_keys low_profile strict_width" },
    { label: "f6", dataKey: 117, keyClass: "fn_keys low_profile strict_width" },
    { label: "f7", dataKey: 118, keyClass: "fn_keys low_profile strict_width" },
    { label: "f8", dataKey: 119, keyClass: "fn_keys low_profile strict_width" },
    { label: "f9", dataKey: 120, keyClass: "fn_keys low_profile strict_width" },
    { label: "f10", dataKey: 121, keyClass: "fn_keys low_profile strict_width" },
    { label: "f11", dataKey: 122, keyClass: "fn_keys low_profile strict_width" },
    { label: "f12", dataKey: 123, keyClass: "fn_keys low_profile strict_width" },
    { label: "pwr", dataKey: "n/a", keyClass: "fn_keys low_profile strict_width" },
  ],
  [
    { label: "`", labelDown: "~", dataKey: 192, keyClass: "side strict_width" },
    {
      label: <Flip className="key_icon smaller" />,
      labelDown: "!",
      dataKey: 49,
      keyClass: "strict_width",
      command: "flip b",
    },
    {
      label: <Rotate className="key_icon smaller rotate_left" />,
      labelDown: "@",
      dataKey: 50,
      keyClass: "strict_width",
      command: "ccw 90",
    },
    {
      label: <Rotate className="key_icon smaller" />,
      labelDown: "#",
      dataKey: 51,
      keyClass: "strict_width",
      command: "cw 90",
    },
    { label: "4", labelDown: "$", dataKey: 52, keyClass: "strict_width" },
    { label: "5", labelDown: "%", dataKey: 53, keyClass: "strict_width" },
    { label: "6", labelDown: "^", dataKey: 54, keyClass: "strict_width" },
    { label: "7", labelDown: "&", dataKey: 55, keyClass: "strict_width" },
    { label: "8", labelDown: "*", dataKey: 56, keyClass: "strict_width" },
    { label: "9", labelDown: "(", dataKey: 57, keyClass: "strict_width" },
    { label: "0", labelDown: ")", dataKey: 48, keyClass: "strict_width" },
    { label: "-", labelDown: "_", dataKey: 45, keyClass: "strict_width" },
    {
      label: <Emergency className="key_icon smaller" />,
      labelDown: "+",
      dataKey: 61,
      keyClass: "strict_width",
      command: "emergency",
    },
    {
      label: "backspace",
      dataKey: 8,
      keyClass: "side delete strict_width",
    },
  ],
  [
    { label: "tab", dataKey: 9, keyClass: "side tab strict_width" },
    { label: "q", dataKey: 113, keyClass: "strict_width" },
    {
      label: <Up className="key_icon smaller" />,
      dataKey: 119,
      keyClass: "strict_width",
      command: "up 10cm",
    },
    { label: "e", dataKey: 101, keyClass: "strict_width" },
    { label: "r", dataKey: 114, keyClass: "strict_width" },
    { label: "t", dataKey: 116, keyClass: "strict_width" },
    { label: "y", dataKey: 121, keyClass: "strict_width" },
    { label: "u", dataKey: 117, keyClass: "strict_width" },
    { label: "i", dataKey: 105, keyClass: "strict_width" },
    { label: "o", dataKey: 111, keyClass: "strict_width" },
    { label: "p", dataKey: 112, keyClass: "strict_width" },
    { label: "[", keyClass: "strict_width" },
    { label: "]", keyClass: "strict_width" },
    { label: `na`, keyClass: "side strict_width" },
  ],
  [
    { label: "caps lock", keyClass: "side caps_lock strict_width" },
    {
      label: <Left className="key_icon smaller" />,
      dataKey: 97,
      keyClass: "strict_width",
      command: "left 10cm",
    },
    {
      label: <Down className="key_icon smaller" />,
      dataKey: 115,
      keyClass: "strict_width",
      command: "down 10cm",
    },
    {
      label: <Right className="key_icon smaller" />,
      dataKey: 100,
      keyClass: "strict_width",
      command: "right 10cm",
    },
    { label: "f", dataKey: 102, keyClass: "strict_width" },
    { label: "g", dataKey: 103, keyClass: "strict_width" },
    { label: "h", dataKey: 104, keyClass: "strict_width" },
    { label: "j", dataKey: 106, keyClass: "strict_width" },
    { label: "k", dataKey: 107, keyClass: "strict_width" },
    { label: "l", dataKey: 108, keyClass: "strict_width" },
    { label: ";", labelDown: ":", dataKey: 59, keyClass: "strict_width" },
    { label: "'", labelDown: `"`, dataKey: 39, keyClass: "strict_width" },
    {
      label: <TakeOff className="key_icon" />,
      dataKey: 13,
      keyClass: "side enter strict_width",
      command: "takeoff",
    },
  ],
  [
    { label: "shift", dataKey: 16, keyClass: "side shift strict_width" },
    { label: "z", dataKey: 122, keyClass: "strict_width" },
    { label: "x", dataKey: 120, keyClass: "strict_width" },
    { label: "c", dataKey: 99, keyClass: "strict_width" },
    { label: "v", dataKey: 118, keyClass: "strict_width" },
    { label: "b", dataKey: 98, keyClass: "strict_width" },
    { label: "n", dataKey: 110, keyClass: "strict_width" },
    { label: "m", dataKey: 109, keyClass: "strict_width" },
    { label: ",", labelDown: `<`, keyClass: "strict_width" },
    { label: ".", labelDown: `>`, keyClass: "strict_width" },
    { label: "/", labelDown: "?", keyClass: "strict_width" },
    { label: "shift", dataKey: "16-R", keyClass: "side shift strict_width" },
  ],
  [
    { label: "fn", keyClass: "side strict_width" },
    { label: "control", dataKey: 17, keyClass: "side strict_width" },
    { label: "option", dataKey: 18, keyClass: "side strict_width" },
    { label: "command", dataKey: 91, keyClass: "side cmd strict_width" },
    { label: <Land className="key_icon" />, dataKey: 32, keyClass: "space strict_width" },
    { label: "command", dataKey: "93-R", keyClass: "side cmd strict_width" },
    { label: "option", dataKey: "18-R", keyClass: "side strict_width" },
    { label: "left", dataKey: 37, keyClass: "side arr strict_width" },
    {
      top: { label: "up", dataKey: 38, keyClass: "side arr strict_width" },
      bottom: { label: "down", dataKey: 39, keyClass: "side arr strict_width" },
    },
    { label: "right", dataKey: 39, keyClass: "side arr strict_width" },
  ],
];

export const commandsOnPress = {
  13: "takeoff",
  100: "right 50cm",
  115: "back 50cm",
  97: "left 50cm",
  119: "forward 50cm",
  32: "land",
  61: "emergency",
  51: "cw 90",
  50: "ccw 90",
  49: "flip b",
};
