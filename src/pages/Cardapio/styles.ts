import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 24px 20px 50px 20px;
  background: linear-gradient(110.79deg, #dc3c59 3.01%, #ed513c 103.76%);
  height: 114px;

  div {
    .searchIcon {
      position: absolute;
      top: 106px;
      left: 36px;
    }

    input {
      height: 56px;
      width: 100%;
      background: ${colors.grayscale.white};
      -webkit-appearance: none;
      box-shadow: 0px 8px 32px rgba(24, 24, 25, 0.1);
      border-radius: 8px;
      border: None;
      margin-top: 24px;
      padding-left: 48px;

      font-size: 16px;
      line-height: 160%;
      color: ${colors.grayscale.black};

      &::placeholder {
        color: ${colors.grayscale.darkLight};
      }
    }
  }
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
    color: ${colors.grayscale.white};
  }
`;

export const ProductCardContainer = styled.section`
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

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
      p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
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
