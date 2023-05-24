import React, {useEffect, useState} from 'react';
import ProductCard from '../../components/ProductCard';

import sacola from '../../assets/shopping-bag.svg';
import search from '../../assets/search.svg';
import thumbnail from '../../assets/img.png';

import { useBag } from '../../hooks/Bag';
import api from "../../services/api";

import * as S from './styles';

export interface ItensCardapio {
    idpslist: number;
    solutions: string;
    problems: string;
  }

const Cardapio: React.FC = () => {
  const { items } = useBag();
  const [itens_cardapio, setItens_Cardapio] = useState<ItensCardapio[]>([])


  useEffect(() => {
    api.get('/showProblemSolution').then((response) => {
      const cardapio_aux = response.data
      setItens_Cardapio(cardapio_aux)
    })
  },[])

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
        {itens_cardapio.map((item) => (
          <ProductCard
            id={item.idpslist}
            thumbnail={thumbnail}
            desciption={item.solutions}
            price={item.problems}
          />
        ))}
        
      </S.ProductCardContainer>
    </S.Container>
  );
};

export default Cardapio;
