import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../../styles/theme/theme";
export const ShowsItemWrapper = styled(Link)`
  padding: 0 10px;
  display: block;
  margin-bottom: 15px;

  .item-content {
    border-radius: 15px;
    border: 1px solid ${theme.colors.black15};
    padding: 16px;
    height: 100%;
    background-color: ${theme.colors.black12};

    .item-img {
      overflow: hidden;
      border-radius: 12px;
    }
    .item-body {
      margin-top: 20px;
    }

    .item-info {
      column-gap: 8px;
      row-gap: 4px;
    }

    .rating,
    .premiere {
      border-radius: 51px;
      border: 1px solid ${theme.colors.black15};
      background: ${theme.colors.secondary};
      padding: 2px 10px;
      column-gap: 6px;

      .rating-star {
        width: 16px;
      }

      .rating-value {
        font-weight: 600 !important;
      }
    }
  }
`;
