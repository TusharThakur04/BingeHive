import styled from "styled-components";
import { Images } from "../../../assets/images";
import { media } from "../../../styles/theme/theme";

export const BannerWrapper = styled.section`
  .banner-img {
    background: url(${Images.HomeBanner}) center/cover;
    min-height: 68vh;

    ${media.sm`
        min-height:50vh
        
        `}
  }

  .banner-content {
    max-width: 1096px;
    padding-top: 20px;
    padding-bottom: 40px;

    ${media.sm`
            padding-bottom: 20px;
        `}
  }

  .banner-text {
    margin-bottom: 50px;

    ${media.lg`
            margin-bottom: 30px;
        `}

    ${media.sm`
            margin-bottom: 20px;
        `}
  }
`;
