import styled from "styled-components";
import { theme, media } from "../../../../styles/theme/theme";

export const FAQsItemsWrapper = styled.div`
  width: 700px;
  margin: 5px 0;

  ${media.lg`
    width:650px;
    `}

  ${media.md`
        width:550px;
        `}
    ${media.sm`
        width:400px;
        `}

  .FAQ-body {
    background-color: ${theme.colors.black10};
    border-radius: 10px;
    padding: 0 8px;
  }
  .ans {
    color: ${theme.colors.primary};
  }
`;
