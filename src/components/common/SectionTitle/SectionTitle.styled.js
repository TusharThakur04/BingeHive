import styled from "styled-components";
import { media } from "../../../styles/theme/theme";
export const SectionTitleWrapper = styled.div`
  margin-bottom: 20px;

  ${media.lg`
    margin-bottom:10px;
    `}

  ${media.xs`
    margin-bottom:5px;
    `}

    .title-grid {
    gap: 10px;
  }

  .title-left {
    max-width:992px
    margin-right: auto;
  }

  .title-right{
  
  }
`;
