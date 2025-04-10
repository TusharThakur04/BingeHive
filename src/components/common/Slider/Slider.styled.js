import styled from "styled-components";
import { media, theme } from "../../../styles/theme/theme";

export const SliderWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${theme.colors.black10};
  padding: 10px;
  border-radius: 12px;

  .custom-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${theme.colors.hover};
    height: 25px;
    width: 25px;
    z-index: 1;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-50%) scale(0.95);
    }
  }

  .custom-arrow.next {
    right: -10px;
  }

  .custom-arrow.prev {
    left: -10px;
  }

  .slick-dots {
    li {
      button::before {
        color: red;
      }
    }
  }
`;
