import React from "react";
import droneimg from "../_assets/drone/drone-prof.png";
import { Header } from "../_components/Header";
import { ReactComponent as DroneIllustrationOne } from "../_assets/drone/dda.svg";
import styled from "@emotion/styled";

function Home() {
  return (
    <HomeContainer>
      <div className="row ">
        <div className="col-lg-12">
          <Header fontSize="40px">...</Header>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Text>
          <DroneIllustrationOne className="drone_illu_one drone_illu" />
        </div>
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  padding-left: 60px;
  max-width: calc(100vw - var(--headerWidth));
  padding-top: 110px;

  .row {
    max-width: 100%;

    .drone_illu {
      width: 500px;
    }

    .drone_illu_one {
      position: fixed;
      right: 100px;
      bottom: 50px;
    }
  }
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 18px;
  max-width: 50%;
  line-height: 150%;
`;

export default Home;
