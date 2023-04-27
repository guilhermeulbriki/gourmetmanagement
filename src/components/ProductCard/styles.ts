import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ProductCard = styled.div`
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;

  .content {
    display: flex;
    gap: 16px;

    img {
      height: 64px;
      width: 64px;
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 4px;

      p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        font-size: 14px;
        line-height: 160%;
      }

      span {
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: ${colors.grayscale.black};
      }
    }
  }
`;
