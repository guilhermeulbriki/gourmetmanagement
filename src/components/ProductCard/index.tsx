import React from 'react';

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
  return (
    <S.ProductCard>
      <div className="content">
        <img src={thumbnail} alt="thumbnail" />

        <div className="description">
          <p>{desciption}</p>
          <span>R$ {price}</span>
        </div>
      </div>

      <img src={addIcon} alt="addToCart" />
    </S.ProductCard>
  );
};

export default ProductCard;
