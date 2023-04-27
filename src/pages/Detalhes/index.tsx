import React from 'react';

import back from '../../assets/vetor-back.svg';
import sacola from '../../assets/shopping-bag-red.svg';
import detalhe from '../../assets/hamburger.png';

import * as S from './styles';

const Cardapio: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <div>
            <img src={back} alt="Voltar" />
            <h1>Voltar</h1>
          </div>
          <img src={sacola} alt="Sacola" />
        </S.HeaderContent>
      </S.Header>

      <S.Detalhes>
        <img src={detalhe} alt="Detalhe" />
        <div>
          <h1>Hamburguer duplo de costela com cheddar e bacon</h1>
          <p>
            Hamburguer do chefe, premiado mais de 10 vezes como o melhor
            hamburguer da região.
          </p>
          <span>R$ 40,00</span>
        </div>
      </S.Detalhes>
      <hr></hr>

      <S.Ingredientes>
        <h1>Ingredientes:</h1>
        <p>
          Pão de hamburguer, bacon, hamburguer de costela, cheedar, alface,
          tomate, cebola e molho da casa.
        </p>
      </S.Ingredientes>

      <S.Footer>
        <hr></hr>
        <section>
          <button className="btnAdicionar">
            <img src={sacola} alt="Sacola" />
            Adicionar
          </button>
          <button className="btnPedir">Pedir agora</button>
        </section>
      </S.Footer>
    </S.Container>
  );
};

export default Cardapio;
