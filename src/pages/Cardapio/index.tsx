import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';

import ProductCard from '../../components/ProductCard';

import { useBag } from '../../hooks/Bag';

import sacola from '../../assets/shopping-bag.svg';
import search from '../../assets/search.svg';
import thumbnail from '../../assets/img.png';
import loading from '../../assets/redLoading.json';

import api from '../../services/api';

import * as S from './styles';

export interface ItensCardapio {
  id: number;
  nome: string;
  valor: string;
  thumbnail: string;
}

const Cardapio: React.FC = () => {
  const [pageStatus, setPageStatus] = useState<
    'loading' | 'error' | 'success' | 'noResult'
  >('loading');
  const [searchInput, setSearchInput] = useState('');
  const [itensCardapio, setItensCardapio] = useState<ItensCardapio[]>([]);

  const history = useHistory();
  const { bagQuantity } = useBag();

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const callApi = async () => {
    try {
      setPageStatus('loading');
      const response = await api.get('/cardapio');
      setItensCardapio(response.data);
    } catch (error) {
      setPageStatus('error');
    } finally {
      setPageStatus('success');
    }
  };

  const searchitems = async (search: string) => {
    setSearchInput(search);

    if (search) {
      try {
        setPageStatus('loading');
        const response = await api.get(`/cardapio/buscar/${search}`);
        setItensCardapio(response.data);
        setPageStatus('success');
      } catch (error) {
        setPageStatus('noResult');
      }
    } else {
      await callApi();
    }
  };

  const cleanSearch = async () => {
    setSearchInput('');
    callApi();
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <h1>Bem vindo!</h1>

          <div className="bag" onClick={() => history.push('/pedido')}>
            <img src={sacola} alt="Sacola" />

            {bagQuantity > 0 && (
              <div className="number">
                <p>{bagQuantity}</p>
              </div>
            )}
          </div>
        </S.HeaderContent>

        <div>
          <img src={search} className="searchIcon" alt="Pesquisa" />
          <input
            type="text"
            placeholder="Buscar ..."
            onChange={(e) => searchitems(e.target.value)}
            value={searchInput}
          />
        </div>
      </S.Header>

      {pageStatus !== 'success' ? (
        <S.LoadingError>
          {pageStatus === 'loading' && (
            <Lottie options={loadingOptions} height={140} width={140} />
          )}

          {pageStatus === 'error' && (
            <div className="error">
              <p>Ocorreu um erro ao tentar carregar o cardápio</p>
              <span onClick={callApi}>Tentar novamente</span>
            </div>
          )}

          {pageStatus === 'noResult' && (
            <div className="noResult">
              <p>Nenhum resultado encontrado</p>
              <span onClick={cleanSearch}>Limpar pesquisa</span>
            </div>
          )}
        </S.LoadingError>
      ) : (
        <S.ProductCardContainer>
          {itensCardapio.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              thumbnail={thumbnail}
              name={item.nome}
              price={item.valor}
            />
          ))}
        </S.ProductCardContainer>
      )}
    </S.Container>
  );
};

export default Cardapio;
