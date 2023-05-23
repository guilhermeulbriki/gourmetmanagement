import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  hr {
    width: 100%;
    height: 0px;
    border: 0.8px solid ${colors.grayscale.lowMedium};
    margin: 16px 0;
  }
`;

export const Header = styled.header`
  padding: 24px 20px 50px 20px;
  background: ${colors.grayscale.white};
  height: 72px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;

    h1 {
      padding-left: 12px;
      font-size: 16px;
    }
  }

  .bag {
    height: 40px;
    width: 40px;

    position: relative;

    img {
      color: ${colors.grayscale.black};
    }

    .number {
      position: absolute;
      height: 20px;
      width: 20px;
      right: 0;
      bottom: 0;
      background-color: ${colors.primary};
      border-radius: 50%;
      -webkit-appearance: none;
      box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.05);

      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: ${colors.grayscale.white};
      }
    }
  }
`;

export const Detalhes = styled.div`
  padding: 0 20px;
  img {
    height: 180px;
    width: 100%;
    filter: drop-shadow(0px 8px 32px rgba(24, 24, 25, 0.1));
    border-radius: 8px;
  }

  div {
    h1 {
      padding-top: 16px;
    }

    p {
      padding: 8px 0;
    }

    span {
      font-family: "Poppins";
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
      color: ${colors.primary};
    }
  }
`;

export const Ingredientes = styled.div`
  padding: 0 20px;

  h1 {
    font-size: 18px;
    padding-bottom: 8px;
  }
`;
export const Footer = styled.div`
  position: fixed;
  bottom: 0px;
  padding-bottom: 12px;
  width: 100%;
  background: ${colors.grayscale.white};

  section {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .btnAdicionar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48%;
      height: 48px;

      background: ${colors.grayscale.white};
      border: 1px solid ${colors.primary};
      border-radius: 8px;

      font-family: "Lato";
      font-weight: 500;
      font-size: 18px;
      line-height: 135%;
      color: ${colors.primary};

      img {
        padding-right: 8px;
        height: 20px;
      }
    }

    .btnPedir {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48%;
      height: 48px;

      background: ${colors.primary};
      border: None;
      border-radius: 8px;

      font-family: "Lato";
      font-weight: 700;
      font-size: 18px;
      line-height: 135%;
      color: ${colors.grayscale.white};
    }
  }
`;
