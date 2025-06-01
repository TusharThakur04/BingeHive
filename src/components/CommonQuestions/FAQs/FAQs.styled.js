import styled from "styled-components";
import { media } from "../../../styles/theme/theme";

export const FAQsWrapper = styled.div`
  margin: 10px 0px;
  padding: 0 20px;

  .faqItems {
    // grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg`
    padding: 0 10px;`}
`;
