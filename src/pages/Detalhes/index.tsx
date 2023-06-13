import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Lottie from 'react-lottie';

import back from '../../assets/vetor-back.svg';
import sacola from '../../assets/shopping-bag-red.svg';
import sacolaBigger from '../../assets/shopping-bag-red-bigger.svg';
import detalhe from '../../assets/hamburger.png';
import loading from '../../assets/redLoading.json';

import { useBag } from '../../hooks/Bag';
import api from '../../services/api';
import { formatter } from '../../utils/formatPrice';

import * as S from './styles';

interface IProductDetail {
  id: number;
  nome: string;
  valor: string;
  thumbnail: string;
  descricao: string;
}

const Detalhes: React.FC = () => {
  const [pageStatus, setPageStatus] = useState<'loading' | 'error' | 'success'>(
    'loading'
  );
  const [productDetails, setProductDetails] = useState<IProductDetail>(
    {} as IProductDetail
  );

  const history = useHistory();
  const location = useLocation<{ id: number }>();
  const { bagQuantity, addNewItem } = useBag();

  const { id } = location.state;
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const callApi = useCallback(async () => {
    try {
      setPageStatus('loading');
      await api.get(`/cardapio/${id}`).then((response) => {
        setProductDetails(response.data);
      });
    } catch (error) {
      setPageStatus('error');
    } finally {
      setPageStatus('success');
    }
  }, [id]);

  useEffect(() => {
    callApi();
  }, [callApi]);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <div onClick={() => history.goBack()}>
            <img src={back} alt="Voltar" />
            <h1>Voltar</h1>
          </div>

          <div className="bag" onClick={() => history.push('/pedido')}>
            <img src={sacola} alt="Sacola" />

            {bagQuantity > 0 && (
              <div className="number">
                <p>{bagQuantity}</p>
              </div>
            )}
          </div>
        </S.HeaderContent>
      </S.Header>

      {pageStatus !== 'success' ? (
        <S.LoadingError>
          {pageStatus === 'loading' && (
            <Lottie options={loadingOptions} height={140} width={140} />
          )}

          {pageStatus === 'error' && (
            <div className="error">
              <p>Ocorreu um erro ao tentar carregar os detalhes desse item</p>
              <span>Tentar novamente</span>
            </div>
          )}
        </S.LoadingError>
      ) : (
        <div className="product-content">
          <S.Detalhes>
            <img src={detalhe} alt="Detalhe" />
            <div>
              <h1>{productDetails.nome}</h1>
              <p>{productDetails.descricao}</p>
              <span>{formatter.format(parseFloat(productDetails.valor))}</span>
            </div>
          </S.Detalhes>

          <hr></hr>

          <S.Ingredientes>
            <h1>Ingredientes:</h1>
            <p>{productDetails.descricao}</p>
          </S.Ingredientes>
        </div>
      )}

      <S.Footer>
        <hr></hr>
        <section>
          <button
            className="btnAdicionar"
            onClick={() =>
              addNewItem(productDetails.id, parseFloat(productDetails.valor))
            }
          >
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
