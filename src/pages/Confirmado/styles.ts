import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  hr {
    width: 100%;
    height: 0px;
    border: 0.8px solid ${colors.grayscale.lowMedium};
    margin: 16px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  margin-top: -100px;
  width: 310px;
  height: 322px;
  background: ${colors.grayscale.white};
  border: 1px solid #f6f6f6;
  box-shadow: 0px 8px 32px rgba(24, 24, 25, 0.1);
  border-radius: 16px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -48px;

    .lineCard {
      margin: 24px 0 8px 0;
      width: 262px;
      border: none;
      height: 1px;
      background: ${colors.grayscale.lowMedium};
      background: repeating-linear-gradient(
        90deg,
        ${colors.grayscale.lowMedium},
        ${colors.grayscale.lowMedium} 8px,
        transparent 8px,
        transparent 12px
      );
    }

    img {
      max-width: 96px;
      margin-bottom: 45px;
    }

    .subtitulo {
      text-align: center;
      margin: 12px 43px 0 43px;
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 24px;
      margin-top: 16px;

      .numeroItens {
        font-size: 12px;
        color: ${colors.grayscale.darkLight};
      }

      .numeroItens {
        font-size: 12px;
        color: ${colors.grayscale.black};
      }
    }
  }
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0px;
  padding-bottom: 12px;
  width: 100%;
  background: ${colors.grayscale.white};

  div {
    padding: 0 20px 0 20px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 48px;

      background: ${colors.primary};
      border: None;
      border-radius: 8px;

      font-family: 'Lato';
      font-weight: 700;
      font-size: 18px;
      line-height: 135%;
      color: ${colors.grayscale.white};
    }
  }
`;
