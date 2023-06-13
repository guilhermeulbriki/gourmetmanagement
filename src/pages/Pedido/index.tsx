import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import back from '../../assets/vetor-back.svg';

import { useBag } from '../../hooks/Bag';

import * as S from './styles';
import BagItem from '../../components/BagItem';

const Pedido: React.FC = () => {
  const [pageStatus, setPageStatus] = useState<'success' | 'noResult'>(
    'success'
  );

  const history = useHistory();
  const { bagItems, getTotalPrice } = useBag();

  useEffect(() => {
    if (bagItems.length < 1) {
      setPageStatus('noResult');
    }
  }, [bagItems]);

  const handleConfirm = useCallback(() => {
    history.push('/finish');
  }, [history]);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <div onClick={() => history.goBack()}>
            <img src={back} alt="Voltar" />
            <h1>Voltar</h1>
          </div>
        </S.HeaderContent>
      </S.Header>

      {pageStatus !== 'success' ? (
        <S.LoadingError>
          {pageStatus === 'noResult' && (
            <div className="noResult">
              <p>Você ainda não adicionou nenhum item no seu pedido</p>
              <span onClick={() => history.push('/')}>Ver cardápio</span>
            </div>
          )}
        </S.LoadingError>
      ) : (
        <div className="order-content">
          <S.Pedido>
            <h1>Seu Pedido</h1>

            {bagItems.map((item) => (
              <BagItem key={item.id} id={item.id} />
            ))}
          </S.Pedido>

          <S.Footer>
            <hr></hr>
            <div>
              <section>
                <p className="total">Total:</p>
                <p className="valorTotal">{getTotalPrice()}</p>
              </section>
              <button onClick={handleConfirm} className="btnConfirmar">
                Confirmar
              </button>
            </div>
          </S.Footer>
        </div>
      )}
    </S.Container>
  );
};

export default Pedido;
