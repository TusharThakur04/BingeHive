import styled from "styled-components";
import { media } from "../../../../styles/theme/theme";

export const ShowsBannerWrapper = styled.div`
  .banner {
    min-height: 74vh;
    border-radius: 20px;
    padding: 60px 40px;

    ${media.xl`
            padding: 40px 20px;
        `}

    ${media.lg`
            padding: 30px 20px;
        `}

        ${media.sm`
            padding: 20px 16px;
        `}
  }
`;
