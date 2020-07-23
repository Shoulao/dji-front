import React from "react";
import VoiceControlPanel from "../_components/VoiceControlPanel";
import DroneStatus from "../_components/DroneSocket";

export default function VoiceControl() {
  return (
    <React.Fragment>
      <div className="row">
        {/* <div className="col-lg-6 col-md-6 col-sm-6">
          <DroneStatus />
        </div> */}
        <div className="col-lg-6 col-md-6 col-sm-6">
          <VoiceControlPanel />
        </div>
      </div>
    </React.Fragment>
  );
}
