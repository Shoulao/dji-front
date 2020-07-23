import { config } from "../_urls/config";
import { endpoints } from "../_urls/urls";

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    return data;
  });
};

export const initVoiceCommand = transcript => {
  console.log(transcript);
  const message = transcript ? transcript : "command";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ command: message }),
  };

  return fetch(`${config.apiUrl}${endpoints.voiceCommand}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      if (data.status === 201) {
        console.log("Command sent - ok!");
        console.log("Command: " + data.com);
      } else {
        console.log("ERROR: something went wrong.");
      }
    })
    .catch(err => console.log(err));
};
