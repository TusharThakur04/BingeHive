import styled from "styled-components";
import { media } from "../../styles/theme/theme";
import { Images } from "../../assets/images";
export const SearchBarWrapper = styled.div`
  .banner-img {
    background: url(${Images.HomeBanner}) center/cover;
    min-height: 68vh;

    ${media.sm`
        min-height:50vh
        
        `}
  }
`;
