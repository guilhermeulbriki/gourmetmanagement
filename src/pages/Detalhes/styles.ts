import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div``;

export const Header = styled.header`
  padding: 24px 20px 50px 20px;
  background: ${colors.grayscale.white};
  height: 72px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    display: flex;
    h1 {
      padding-left: 12px;
      font-size: 16px;
    }
  }

  img{
    color: ${colors.grayscale.black};
  }
`;

export const Detalhes = styled.div`
  padding: 0 20px;
  img{
    height: 180px;
    width: 100%;
    filter: drop-shadow(0px 8px 32px rgba(24, 24, 25, 0.1));
    border-radius: 8px;
  }

  div {
    h1{
      padding-top: 16px;
    }

    p{
      padding: 8px 0;
    }

    span{
      font-family: 'Poppins';
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
      color: ${colors.primary}
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid ${colors.grayscale.lowMedium};
  margin: 16px 0;
`

export const Ingredientes = styled.div`
  padding: 0 20px;

  h1{
    font-size: 18px;
    padding-bottom: 8px;
  }

`
export const Footer = styled.div`
  position: fixed;
  bottom: 12px;
  width: 100%;
  section{
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .btnAdicionar{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48%;
      height: 48px;

      background: ${colors.grayscale.white};
      border: 1px solid ${colors.primary};
      border-radius: 8px;

      font-family: 'Lato';
      font-weight: 500;
      font-size: 18px;
      line-height: 135%;
      color: ${colors.primary};

      img{
        padding-right: 8px;
        height: 20px;
      }
    }

    .btnPedir{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48%;
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
  
`
