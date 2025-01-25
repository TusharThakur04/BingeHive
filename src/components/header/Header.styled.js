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
export const BrandWrapper = styled(Link)`
  width: 200px;
  min-width: 200px;

  ${media.sm`
        width: 160px;
        min-width: 160px;
    `}
`;
export const NavWrapper = styled.nav`
  position: relative;
  transition: ${theme.transitions.allEaseInOut};

  .sidebar-close-btn {
    position: absolute;
    background: transparent;
    right: 4px;
    top: 14px;
    transition: ${theme.transitions.allEaseInOut};

    &:hover {
      opacity: 0.8;
      scale: 0.95;
    }
  }

  ${media.lg`
    display: inline-flex;
`}

  .nav-list {
    height: 75px;
    padding: 10px;
    border: 4px solid #1f1f1f;
    border-radius: 10px;

    ${media.lg`
        flex-direction: column;
        width: 100%;
        height: 100%!important;
        background: transparent;
        border: 0;
        justify-content: flex-start;
    `}
  }

  .nav-items {
    ${media.lg`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px dotted ${theme.colors.black15};

        &:last-child{
            border-bottom: 0;
        }
    `}
  }

  .nav-Link {
    height: 55px;
    min-width: 100px;
    padding: 14px;
    border-radius: 8px;
    color: ${theme.colors.gray75};
    font-weight: 600;
  }

  ${media.lg`
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 260px;
    background: ${theme.colors.black10};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 7px 29px 0px;
    align-items: flex-start;
    border-radius: 0;
    padding: 32px 12px;
    transform: translateX(100%);
    z-index: 1000;

    &.show{
        transform: translateX(0);
    }
  `}
`;
export const HeaderIconWrapper = styled.div``;
