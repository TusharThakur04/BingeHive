import styled from "styled-components";
import { media, theme } from "../../../styles/theme/theme";

export const SeasonItemWrapper = styled.div`
  margin-bottom: 3px;
  padding: 0 10px;
  border-radius: 10px;

  width: 100%;

  ${media.md`
    width:90%;`}
  ${media.sm`
    width:100%;`}

  .season-body {
    display: none;

    &.show {
      display: block;
    }
  }

  .btn {
    background: transparent;
    .up,
    .down {
      color: white;
    }
  }
`;
