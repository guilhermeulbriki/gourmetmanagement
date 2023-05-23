import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';

import ProductCard from '../../components/ProductCard';

import { useBag } from '../../hooks/Bag';

import sacola from '../../assets/shopping-bag.svg';
import search from '../../assets/search.svg';
import thumbnail from '../../assets/img.png';
import loading from '../../assets/redLoading.json';

import * as S from './styles';

const Cardapio: React.FC = () => {
  const { items } = useBag();
  const [isErrored, setIsErrored] = useState(false);
  const [isNoResult, setIsNoResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const history = useHistory();

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
          <h1>Bem vindo!</h1>

          <div className="bag" onClick={() => history.push('/pedido')}>
            <img src={sacola} alt="Sacola" />

            {items > 0 && (
              <div className="number">
                <p>{items}</p>
              </div>
            )}
          </div>
        </S.HeaderContent>

        <div>
          <img src={search} className="searchIcon" alt="Pesquisa" />
          <input
            type="text"
            placeholder="Buscar ..."
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
      </S.Header>

      {isErrored || isNoResult || isLoading ? (
        <S.LoadingError>
          {isLoading && (
            <Lottie options={loadingOptions} height={140} width={140} />
          )}

          {isErrored && (
            <div className="error">
              <p>Ocorreu um erro ao tentar carregar o cardápio</p>
              <span>Tentar novamente</span>
            </div>
          )}

          {isNoResult && (
            <div className="noResult">
              <p>Nenhum resultado encontrado</p>
              <span onClick={() => setSearchInput('')}>Limpar pesquisa</span>
            </div>
          )}
        </S.LoadingError>
      ) : (
        <S.ProductCardContainer>
          <ProductCard
            id={1}
            thumbnail={thumbnail}
            desciption="Feijoada da família brasileira tamanho grande"
            price="90,00"
          />
        </S.ProductCardContainer>
      )}
    </S.Container>
  );
};

export default Cardapio;
