import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useBag } from '../../hooks/Bag';

import addIcon from '../../assets/add-icon.svg';

import { formatter } from '../../utils/formatPrice';
import { getImage } from '../../utils/getImage';
import * as S from './styles';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  caminho: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  caminho,
  name,
  price,
  id,
}) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    getImageFunction();
  }, []);

  const getImageFunction = async () => {
    const response = await getImage(caminho);
    setImage(response);
  };

  const { addNewItem } = useBag();

  const history = useHistory();

  return (
    <S.ProductCard>
      <div
        className="content"
        onClick={() => history.push('/detalhes', { id })}
      >
        <img src={image} alt="thumbnail" />

        <div className="description">
          <p>{name}</p>
          <span>{formatter.format(parseFloat(price))}</span>
        </div>
      </div>

      <img
        src={addIcon}
        alt="addToCart"
        onClick={() => addNewItem(id, parseFloat(price))}
      />
    </S.ProductCard>
  );
};

export default ProductCard;
