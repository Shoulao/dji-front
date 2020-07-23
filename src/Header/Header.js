import React from "react";
import logo from "../_assets/drone/drone-prof.png";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { headerData, notAuthData } from "./data";
import { ReactComponent as LogoIcon } from "../_assets/icons/logo.svg";
import styled from "@emotion/styled";

function Header() {
  const [menuCollection, setMenuCollection] = React.useState(notAuthData);
  const isUserAuth = useSelector(state => state.authentication?.loggedIn);

  React.useEffect(() => {
    if (!isUserAuth) {
      setMenuCollection(headerData);
    }
  }, [isUserAuth]);

  return (
    <HeaderContainer>
      <Wrapper>
        <Logo>
          <LogoIcon className="logo_img" />
        </Logo>
        <Menu>
          {menuCollection.map((element, i) => (
            <NavLink
              className={element.disabled ? "menu_item disabled-link" : "menu_item "}
              to={element.path}
              exact={true}
              activeClassName="active"
              key={element.path}
            >
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
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  box-shadow: 3px 3px 4px -3px var(--neutral-300);
`;

const Wrapper = styled.div`
  height: var(--headerHeight);
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
    width: 30px;
    opacity: 0.8;
    height: auto;
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

    &.disabled-link {
      opacity: 0.3;
      pointer-events: none;
    }

    &.active {
      color: var(--blue);
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
  font-weight: bold;
  font-size: 10px;
  color: var(--neutral-500);
`;

export default withRouter(Header);
