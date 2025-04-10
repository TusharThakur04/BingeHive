import styled from "styled-components";
import { media, theme } from "../../../../styles/theme/theme";

export const GenreItemWrapper = styled.div`
  margin: 0 10px;

  ${media.lg`
        margin:0 8px;
    `}

  .item-content {
    padding: 15px;
    background-color: ${theme.colors.black06};
    border-radius: 15px;
  }
`;
