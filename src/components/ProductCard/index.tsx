import React from 'react';
import { useHistory } from 'react-router-dom';

import { useBag } from '../../hooks/Bag';

import addIcon from '../../assets/add-icon.svg';

import * as S from './styles';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  thumbnail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  thumbnail,
  name,
  price,
  id,
}) => {
  const { addNewItem } = useBag();

  const history = useHistory();

  return (
    <S.ProductCard>
      <div
        className="content"
        onClick={() => history.push('/detalhes', { id })}
      >
        <img src={thumbnail} alt="thumbnail" />

        <div className="description">
          <p>{name}</p>
          <span>{price}</span>
        </div>
      </div>

      <img src={addIcon} alt="addToCart" onClick={addNewItem} />
    </S.ProductCard>
  );
};

export default ProductCard;
