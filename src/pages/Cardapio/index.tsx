import React from 'react';
import ProductCard from '../../components/ProductCard';

import sacola from '../../assets/shopping-bag.svg';
import search from '../../assets/search.svg';
import thumbnail from '../../assets/img.png';

import { useBag } from '../../hooks/Bag';

import * as S from './styles';

const Cardapio: React.FC = () => {
  const { items } = useBag();

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <h1>Bem vindo!</h1>

          <div className="bag">
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
          <input type="text" placeholder="Buscar ..." />
        </div>
      </S.Header>

      <S.ProductCardContainer>
        <ProductCard
          id={1}
          thumbnail={thumbnail}
          desciption="Feijoada da família brasileira tamanho grande"
          price="90,00"
        />
      </S.ProductCardContainer>
    </S.Container>
  );
};

export default Cardapio;
