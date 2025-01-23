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

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <div className="header-content flex items-centre justify-between">
          <BrandWrapper>
            <img src="" alt="hello" />
          </BrandWrapper>
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
