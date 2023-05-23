import { colors } from './../../styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

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

  .bag {
    height: 40px;
    width: 40px;

    position: relative;

    .number {
      position: absolute;
      height: 20px;
      width: 20px;
      right: 0;
      bottom: 0;
      background-color: ${colors.grayscale.white};
      border-radius: 50%;
      -webkit-appearance: none;
      box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.05);

      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: ${colors.primary};
      }
    }
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

export const LoadingError = styled.div`
  width: 100%;
  height: calc(100vh - 188px + 44px);

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    p {
      max-width: 265px;
      width: 100%;
      text-align: center;
      font-size: 16px;
      line-height: 160%;
      color: ${colors.grayscale.black};
    }

    span {
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;
      text-decoration-line: underline;
      color: #dc3c59;
    }
  }
`;
