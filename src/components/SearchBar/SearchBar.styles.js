import styled from "styled-components";
import { media } from "../../styles/theme/theme";
import { Images } from "../../assets/images";
import { theme } from "../../styles/theme/theme";
export const SearchBarWrapper = styled.div`
  .searchbar-top {
    height: 50vh;
    overflow: hidden;
    margin-bottom: 30px;
    position: relative;
    background: url(${Images.HomeBanner}) top/cover;

    ${media.sm`
        min-height:50vh
        
        `}
  }
  .search {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.colors.primary};
    border-radius: 30px;
  }
  .search-box {
    gap: 5px;

    input {
      border-radius: 15px;
    }
  }
`;
