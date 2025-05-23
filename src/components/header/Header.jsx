import { Link } from "react-router-dom";
import {
  BrandWrapper,
  HeaderIconWrapper,
  HeaderWrapper,
  NavWrapper,
} from "./Header.styled";
import { Container } from "../../styles/global/default";
import { Icons } from "../../assets/icons";
import routeConstants from "../../constants/routeConstants";
import { useLocation } from "react-router-dom";
import useHeaderBackground from "../../hooks/hasBackground";
import { useSelector, useDispatch } from "react-redux";
import { showSidebar, closeSidebar } from "../../redux/slices/sidebarSlice";

const Header = () => {
  const location = useLocation();
  const hasBackground = useHeaderBackground();
  const dispatch = useDispatch();
  const sidebarState = useSelector((state) => state.sidebar.value);
  // console.log(sidebarState);

  const handleNavLinkClick = () => {
    dispatch(closeSidebar());
  };

  return (
    <HeaderWrapper
      className={`flex items-center ${hasBackground ? "sm-header" : ""}`}
    >
      <Container className="w-full">
        <div className="header-content flex items-centre justify-between">
          <BrandWrapper to={routeConstants.HOME}>
            <h1 className="to-home">BingeHive</h1>
          </BrandWrapper>
          <NavWrapper
            className={`flex items-center justify-center ${sidebarState ? "show" : ""}`}
          >
            <button
              type="button"
              onClick={() => {
                dispatch(closeSidebar());
              }}
              className="sidebar-close-btn"
            >
              <img src={Icons.CloseSB} alt="close" />
            </button>
            <ul className="nav-list flex items-center justify-center bg-black06">
              <li
                className={` nav-items flex justify-center ${location.pathname === routeConstants.HOME ? "active" : ""}`}
              >
                <Link
                  onClick={handleNavLinkClick}
                  to={routeConstants.HOME}
                  className={`nav-Link 
                  inline-flex items-center justify-center text-center`}
                >
                  Home
                </Link>
              </li>
              <li
                className={` nav-items flex justify-center ${location.pathname === routeConstants.SHOWS ? "active" : ""}`}
              >
                <Link
                  onClick={handleNavLinkClick}
                  to={routeConstants.SHOWS}
                  className={`nav-Link 
                  inline-flex items-center justify-center text-center`}
                >
                  Shows
                </Link>
              </li>
              <li
                className={` nav-items flex justify-center ${location.pathname === "/support" ? "active" : ""}`}
              >
                <Link
                  onClick={handleNavLinkClick}
                  to="/support"
                  className={`nav-Link 
                  inline-flex items-center justify-center text-center`}
                >
                  Support
                </Link>
              </li>
              <li
                className={` nav-items flex justify-center ${location.pathname === "/subscription" ? "active" : ""}`}
              >
                <Link
                  onClick={handleNavLinkClick}
                  to="/subscription"
                  className={`nav-Link 
                  inline-flex items-center justify-center text-center`}
                >
                  Subscription
                </Link>
              </li>
            </ul>
          </NavWrapper>
          <HeaderIconWrapper className="flex items-center">
            <Link
              to="/search"
              className="icon-link flex items-center justify-center"
            >
              <img src={Icons.Search} alt="search" />
            </Link>
            <Link to="/" className="icon-link flex items-center justify-center">
              <img src={Icons.Bell} alt="search" />
            </Link>
            <button
              type="button"
              className="icon-link flex items-center justify-center sidebar-open-btn "
              onClick={() => {
                dispatch(showSidebar());
              }}
            >
              <img src={Icons.Menu} alt="" />
            </button>
          </HeaderIconWrapper>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
