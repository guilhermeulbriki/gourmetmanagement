import React from "react";
import ProductCard from "../Components/ProductCard";

import sacola from '../../assets/shopping-bag.svg';
import search from '../../assets/search.svg';
import thumbnail from '../../assets/img.png';

import * as S from "./styles";

const Cardapio: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <h1>Bem vindo!</h1>
          <img src={sacola} alt='Sacola' /> 
        </S.HeaderContent>

        <div>
          <img src={search} className='searchIcon' alt='Pesquisa' /> 
          <input type='text' placeholder="Buscar ..."/>
        </div>
      </S.Header>
      
      <S.ProductCardContainer>
        <ProductCard id={1} thumbnail={thumbnail} desciption="Feijoada da família brasileira tamanho grande" price="90,00" />
      </S.ProductCardContainer>
    </S.Container>
  );
};

export default Cardapio;
