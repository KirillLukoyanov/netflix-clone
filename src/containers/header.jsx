import React from "react";
import { Header } from "../components/";
import * as ROUTES from "../constants/routes";
import logoSvg from "../logo.svg";

function HeaderContainer({ children, ...restProps }) {
  return (
    <>
      <Header src={"home-bg"}>
        <Header.Container>
          <Header.Logo to={ROUTES.HOME} src={logoSvg} alt="netflix-logo" />
          <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
        </Header.Container>
        <Header.Frame>{children}</Header.Frame>
      </Header>
    </>
  );
}

export default HeaderContainer;
