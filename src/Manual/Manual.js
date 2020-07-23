import React from "react";
import styled from "@emotion/styled";
import DroneStatus from "../_components/DroneSocket";
import ControlGrid from "./ControlGrid";
import Keyboard from "./Keyboard";

export default function Manual() {
  return (
    <RowWrapper className="row center-lg center-md center-sm center-xs">
      <DroneStatus />
      <ContainerWrapper className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <ControlContainer>
          <Keyboard />
          <ControlGrid />
        </ControlContainer>
      </ContainerWrapper>
    </RowWrapper>
  );
}

const RowWrapper = styled.div`
  padding-top: 60px;
  width: calc(100vw - var(--headerWidth));
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: calc(100vh - 80px);
  align-items: center;
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 30px;
`;
