import React from "react";
import {
  BrandWrapper,
  HeaderIconWrapper,
  HeaderWrapper,
  NavWrapper,
} from "./Header.styled";
import { Container } from "../../styles/global/default";
import { Images } from "../../assets/images";
import { Icons } from "../../assets/icons";
import routeConstants from "../../constants/routeConstants";

const Header = () => {
  return (
    <HeaderWrapper className={`flex items-center`}>
      <Container className="w-full">
        <div className="header-content flex items-centre justify-between">
          <BrandWrapper to={routeConstants.HOME}></BrandWrapper>
          <NavWrapper>
            <button>
              <img src="" alt="hi" />
            </button>
          </NavWrapper>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
