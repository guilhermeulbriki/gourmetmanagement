import React from "react";
import { text } from "stream/consumers";
import sacola from '../../assets/shopping-bag.svg'

import * as S from "./styles";

const Cardapio: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <div>
            <h1>Bem vindo!</h1>
          </div>

          <img src={sacola} alt='Sacola' /> 
        </S.HeaderContent>
        <input type='text' placeholder="Buscar ..."/>
      </S.Header>
    </S.Container>
  );
};

export default Cardapio;
