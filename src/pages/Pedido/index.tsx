import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';

import back from '../../assets/vetor-back.svg';
import pedido from '../../assets/pedido.png';
import menos from '../../assets/btn_menos.svg';
import mais from '../../assets/btn_mais.svg';
import loading from '../../assets/redLoading.json';

import * as S from './styles';

const Pedido: React.FC = () => {
  const history = useHistory();
  const [isErrored, setIsErrored] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = useCallback(() => {
    history.push('/finish');
  }, [history]);

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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

      {isErrored || isLoading ? (
        <S.LoadingError>
          {isLoading && (
            <Lottie options={loadingOptions} height={140} width={140} />
          )}

          {isErrored && (
            <div className="error">
              <p>Ocorreu um erro ao tentar carregar o seu pedido</p>
              <span>Tentar novamente</span>
            </div>
          )}
        </S.LoadingError>
      ) : (
        <div className="order-content">
          <S.Pedido>
            <h1>Seu Pedido</h1>

            <S.Item>
              <img src={pedido} alt="Pedido" />

              <div>
                <p className="description">Porção de alguma coisa que ...</p>
                <p className="price">R$ 65,00</p>

                <section>
                  <button>
                    <img src={menos} alt="Menos" />
                  </button>
                  <p className="quantia">1</p>
                  <button>
                    <img src={mais} alt="Mais" />
                  </button>
                </section>
              </div>
            </S.Item>
            <S.Item>
              <img src={pedido} alt="Pedido" />

              <div>
                <p className="description">Porção de alguma coisa que ...</p>
                <p className="price">R$ 65,00</p>

                <section>
                  <button>
                    <img src={menos} alt="Menos" />
                  </button>
                  <p className="quantia">1</p>
                  <button>
                    <img src={mais} alt="Mais" />
                  </button>
                </section>
              </div>
            </S.Item>
          </S.Pedido>

          <S.Footer>
            <hr></hr>
            <div>
              <section>
                <p className="total">Total:</p>
                <p className="valorTotal">R$ 120,00</p>
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
