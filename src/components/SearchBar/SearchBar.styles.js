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
}

.search-box {
  display: flex;
  align-items: center;
  background: ${theme.colors.gray75};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  gap: 0.5rem;
}

.search-input input {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 0.5rem;
  width: 250px;
}

/* NEW: Style the button, not just the image */
.search-icon {
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  display: flex;
  align

`;
