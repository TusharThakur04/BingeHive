import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { media, theme } from "../../styles/theme/theme";

export const HeaderWrapper = styled.header`
  height: 120px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  ${media.lg`
      height: 100px;
  `}

  ${media.sm`
      height: 80px;
  `}

  &.sm-header {
    height: auto !important;
    padding-top: 12px;
    padding-bottom: 12px;
    box-shadow: ${theme.shadows.medium};
    border-bottom: 2px solid ${theme.colors.black10};

    .nav-list {
      padding: 0;
      height: auto;
    }

    .nav-link {
      &.active {
        border-radius: 0;
      }
    }
  }
`;
export const BrandWrapper = styled(Link)``;
export const NavWrapper = styled.nav``;
export const HeaderIconWrapper = styled.div``;
