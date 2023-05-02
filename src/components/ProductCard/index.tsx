import React from 'react';
import { useHistory } from 'react-router-dom';

import { useBag } from '../../hooks/Bag';

import addIcon from '../../assets/add-icon.svg';

import * as S from './styles';

interface ProductCardProps {
  id: number;
  thumbnail: string;
  desciption: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  thumbnail,
  desciption,
  price,
}) => {
  const { addNewItem } = useBag();

  const history = useHistory();

  return (
    <S.ProductCard>
      <div className="content" onClick={() => history.push('/detalhes')}>
        <img src={thumbnail} alt="thumbnail" />

        <div className="description">
          <p>{desciption}</p>
          <span>R$ {price}</span>
        </div>
      </div>

      <img src={addIcon} alt="addToCart" onClick={addNewItem} />
    </S.ProductCard>
  );
};

export default ProductCard;
