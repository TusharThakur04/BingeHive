import styled from "styled-components";
import { theme } from "../../../styles/theme/theme";

export const SliderWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  .custom-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 30px;
    width: 30px;
    z-index: 1;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-50%) scale(0.95);
    }
  }

  .custom-arrow.next {
    right: -32px;
  }

  .custom-arrow.prev {
    left: -32px;
  }

  .slick-dots {
    li {
      button::before {
        color: red;
      }
    }
  }
`;
