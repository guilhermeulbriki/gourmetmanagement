import styled from 'styled-components';
import { colors } from '../../styles/colors';

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

  img {
    color: ${colors.grayscale.black};
  }
`;

export const Pedido = styled.div`
  padding: 0 20px 32px 20px;


`
export const Item = styled.div`
  margin: 24px 0 24px 0;
  display: flex;

  img{
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }

  div{
    margin-left: 16px;
    .description{
      color: ${colors.grayscale.darkHigh};
      opacity: 0.8;
    }

    .price{
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      color: ${colors.grayscale.black};
    }

    section{
      display: flex;
      align-items: center;
      padding-top: 8px;
      
      .quantia{
        color: ${colors.grayscale.black};
        margin: 0 10px;
        width: 20px;
        text-align: center;
      }

      button{
        background-color: transparent;
        border: none;
        
        img{
          width: 32px;
          height: 32px;
        }
        
      }
    }
  }

`
export const Footer = styled.div`
  position: fixed;
  bottom: 0px;
  padding-bottom: 12px;
  width: 100%;
  background: ${colors.grayscale.white};
  display: flex;
  justify-content: space-between;

  section {
    padding-left: 20px;
  
    .total{
      color: ${colors.grayscale.black};
      opacity: 0.8;
    }

    .valorTotal{
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
      color: ${colors.primary};
    }
  }

  .btnConfirmar {
      margin-right: 20px;
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
`;
