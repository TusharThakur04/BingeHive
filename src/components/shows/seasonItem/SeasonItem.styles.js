import styled from "styled-components";
import { media, theme } from "../../../styles/theme/theme";

export const SeasonItemWrapper = styled.div`
  padding: 15px 20px;
  margin: 3px 0;
  border: 1px solid ${theme.colors.black12};
  border-radius: 10px;

  ${media.lg`
      width: 100%;
        padding: 16px 20px;
    `}

  ${media.sm`
      width:100%;
        padding: 16px;
    `}

    ${media.xs`
        padding: 12;
    `}

.season-body {
  opacity: 0;           
  visibility: hidden;  
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out; 
  height: 0;            
  overflow: hidden;     
}

.season-body.show {
  opacity: 1;           
  visibility: visible;  
  height: auto;         
}
      .season-head {
          column-gap: 10px;

    &-title {
      gap: 8px;
      *{
        margin-top: 0;
        margin-bottom: 0;
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
