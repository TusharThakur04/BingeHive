import styled from "styled-components";
import { theme } from "../../../../styles/theme/theme";

export const PaginationWrapper = styled.div`
  margin-top: 15px;
  .page {
    // margin-top: 1px;
    width: 50px;
    height: 50px;
    border: 1px solid grey;
    text-align: center;

    &.current {
      background-color: ${theme.colors.primary};
    }
  }
`;
