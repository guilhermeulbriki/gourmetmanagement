import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  margin: 24px 0 24px 0;
  display: flex;

  img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }

  div {
    margin-left: 16px;
    .description {
      color: ${colors.grayscale.darkHigh};
      opacity: 0.8;
    }

    .price {
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      color: ${colors.grayscale.black};
    }

    section {
      display: flex;
      align-items: center;
      padding-top: 8px;

      .quantia {
        color: ${colors.grayscale.black};
        margin: 0 10px;
        width: 20px;
        text-align: center;
      }

      button {
        background-color: transparent;
        border: none;

        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;
