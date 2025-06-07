import styled from "styled-components";
import { media } from "../../styles/theme/theme";
import { Images } from "../../assets/images";
import { theme } from "../../styles/theme/theme";
export const SearchBarWrapper = styled.div`
.searchbar-top {
  position: relative;
  height: 50vh;
  background: url(${Images.HomeBanner}) center/cover;
  min-height: 68vh;

  ${media.sm`
    min-height: 50vh;
  `}

  overflow: hidden;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search {
  width: 100%;
  display: flex;
  justify-content: center;
  height:200px;
  ${media.lg`
    height: 150px;
  `}
  ${media.sm`
    height: 100px;
  `}
}

.search-box {
  display: flex;
  align-items: center;
  background: ${theme.colors.gray75};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  gap: 0.5rem;
  height:30%
}

.search-input input {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  width: 250px;
      ${media.sm`

      height:25px;
  `}



  &:focus{
    border-bottom: 2px solid ${theme.colors.primary}; 
  // box-shadow: 0 2px 0 0 ${theme.colors.primary};
  }
}

.search-icon {
  width: 48px;
  height: 48px;
    ${media.sm`
      width: 40px;
      height: 40px;
  `}
  background-color: transparent;
  border: none;
  border-radius: 6px;
  display: flex;
  align
    }

.error {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffe6e6;         /* light red background */
  color: #b30000;                    /* dark red text */
  border: 1px solid #ff4d4d;         /* softer red border */
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 1rem;
  font-weight: 500;
  z-index: 100;
  animation: fadeIn 0.3s ease-in-out;
}


`;
