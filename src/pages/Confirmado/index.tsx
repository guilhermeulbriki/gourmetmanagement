import React from 'react';
import { useHistory } from 'react-router-dom';

import { useBag } from '../../hooks/Bag';
import check from '../../assets/check.svg';

import * as S from './styles';

const Confirmado: React.FC = () => {
  const history = useHistory();
  const { resetCart, bagQuantity, getTotalPrice } = useBag();

  const goBackToHome = () => {
    resetCart();
    history.push('/');
  };

  return (
    <S.Container>
      <S.Content>
        <S.Card>
          <section>
            <img src={check} alt="Check" />

            <h1>Pedido Confirmado!</h1>
            <p className="subtitulo">
              Seu pedido foi confirmado e já está sendo preparado.
            </p>

            <hr className="lineCard"></hr>

            <div>
              <p className="numeroItens">Número de itens</p>
              <p className="itens">{bagQuantity} itens</p>
            </div>
            <div>
              <p className="numeroItens">Total do pedido</p>
              <p className="itens">{getTotalPrice()}</p>
            </div>
          </section>
        </S.Card>
      </S.Content>

      <S.Footer>
        <hr></hr>
        <div>
          <button onClick={goBackToHome}>Ver cardápio novamente</button>
        </div>
      </S.Footer>
    </S.Container>
  );
};

export default Confirmado;
