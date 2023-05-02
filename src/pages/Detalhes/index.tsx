import React from 'react';
import { useHistory } from 'react-router-dom';

import back from '../../assets/vetor-back.svg';
import sacola from '../../assets/shopping-bag-red.svg';
import sacolaBigger from '../../assets/shopping-bag-red-bigger.svg';
import detalhe from '../../assets/hamburger.png';

import { useBag } from '../../hooks/Bag';

import * as S from './styles';

const Detalhes: React.FC = () => {
  const { items, addNewItem } = useBag();

  const history = useHistory();

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <div onClick={() => history.goBack()}>
            <img src={back} alt="Voltar" />
            <h1>Voltar</h1>
          </div>

          <div className="bag">
            <img src={sacola} alt="Sacola" />

            {items > 0 && (
              <div className="number">
                <p>{items}</p>
              </div>
            )}
          </div>
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
          <button className="btnAdicionar" onClick={addNewItem}>
            <img src={sacolaBigger} alt="Sacola" />
            Adicionar
          </button>

          <button className="btnPedir">Pedir agora</button>
        </section>
      </S.Footer>
    </S.Container>
  );
};

export default Detalhes;
