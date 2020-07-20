import React from "react";
import logo from "../_assets/drone/drone-prof.png";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { headerData, notAuthData } from "./data";
import styled from "@emotion/styled";

function Header() {
  const [menuCollection, setMenuCollection] = React.useState(notAuthData);
  const isUserAuth = true;

  React.useEffect(() => {
    if (isUserAuth) {
      setMenuCollection(headerData);
    }
  }, [isUserAuth]);

  return (
    <HeaderContainer>
      <Wrapper>
        <Logo>
          <img src={logo} alt="" className="logo_img" />
        </Logo>
        <Menu>
          {menuCollection.map(element => (
            <NavLink className="menu_item" to={element.path} exact={true} activeClassName="active">
              <element.icon className="menu_icon" />
              <p className="menu_label">{element.label}</p>
            </NavLink>
          ))}
        </Menu>
        <Info>2020</Info>
      </Wrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  height: var(--headerHeight);
  width: var(--headerWidth);
  background: transparent;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  box-shadow: 3px 3px 8px -3px var(--neutral-300);
`;

const Wrapper = styled.div`
  height: var(--headerHeight);
  width: var(--headerWidth);
  background: transparent;
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: var(--headerWidth);
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo_img {
    width: 60px;
    user-select: none;
  }
`;

const Menu = styled.div`
  width: var(--headerWidth);
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .menu_item {
    text-align: center;
    width: 70px;
    margin: 10px auto;
    text-decoration: none;
    color: var(--dark-000);
    padding: 5px;

    &.active {
      :nth-of-type(1) {
        color: var(--red);
      }
      :nth-of-type(2) {
        color: var(--green);
      }
      :nth-of-type(3) {
        color: var(--blue);
      }
      :nth-of-type(4) {
        color: var(--yellow);
      }
      :nth-of-type(5) {
        color: var(--purple);
      }
    }

    .menu_label {
      text-align: center;
      margin: 0;
      font-size: 14px;
      font-weight: bold;
    }

    .menu_icon {
      width: 35px;
      height: auto;
    }
  }
`;

const Info = styled.div`
  width: var(--headerWidth);
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(Header);
