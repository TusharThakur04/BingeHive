import styled from "styled-components";
import { media } from "../../../../styles/theme/theme";

export const ShowsListWrapper = styled.div`
  .shows-list {
    grid-template-columns: repeat(5, 1fr);

    ${media.lg`
            grid-template-columns: repeat(4, 1fr);
        `}
    ${media.md`
            grid-template-columns: repeat(3, 1fr);
        `}

    ${media.sm`
            grid-template-columns: repeat(2, 1fr);
        `}
  }
`;
