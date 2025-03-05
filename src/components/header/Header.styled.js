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
    height: 125px;
    padding-top: 12px;
    padding-bottom: 12px;
    box-shadow: ${theme.shadows.large};
    border-bottom: 2px solid ${theme.colors.black10};
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
    display: none;
    position: absolute;
    background: transparent;
    right: 4px;
    top: 14px;
    transition: ${theme.transitions.allEaseInOut};

    &:hover {
      opacity: 0.8;
      scale: 0.95;
    }

    ${media.lg`
      display:block;
      position: absolute;
      right:12px;
      `}
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
    height: 55px;
    min-width: 110px;
    &.active {
      background-color: ${theme.colors.black10};
      color: ${theme.colors.white};
      border-radius: 10px;
    }

    ${media.lg`
        height:100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px dotted ${theme.colors.black15};

        &:last-child{
            border-bottom: 0;
        }
    `};
  }

  .nav-Link {
    border-radius: 8px;
    color: ${theme.colors.gray75};
    font-weight: 600;

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  ${media.lg`
    position:fixed;
    right:0;
    top:0;
    height:50%;
    width:200px;
    background: ${theme.colors.black10};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 7px 29px 0px;
    border-radius: 0;
    transform: translateX(100%);
    z-index: 1000;

    &.show{
        transform: translateX(0);
      }
    `}
`;
export const HeaderIconWrapper = styled.div`
  column-gap: 16px;

  .icon-link {
    min-width: 40px;
    width: 40px;
    height: 35px;
    padding: 4px;
    background: transparent;

    ${media.lg`
      width: 26px;
      height: 26px;
      min-width: 26px;
      `}

      img {
      width: 100%;
    }

    &:hover {
      opacity: 0.7;
      }

    &.sidebar-open-btn {
      display: none;

    ${media.lg`
       display: inline-flex;
      `}
    }
    
`;
