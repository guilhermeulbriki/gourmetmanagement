import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.grayscale.black};

  .code {
    width: 100%;
  }

  .back {
    position: absolute;
    top: 24px;
    left: 20px;
    color: ${colors.grayscale.white};
    width: 32px;
    height: 32px;
  }
`;
