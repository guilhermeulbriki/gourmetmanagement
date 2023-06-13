import React, { useEffect, useState } from 'react';

import pedido from '../../assets/pedido.png';
import menos from '../../assets/btn_menos.svg';
import mais from '../../assets/btn_mais.svg';

import { useBag } from '../../hooks/Bag';

import { formatter } from '../../utils/formatPrice';
import api from '../../services/api';

import * as S from './styles';

interface BagItemProps {
  id: number;
}

interface ItemDetails {
  nome: string;
  valor: string;
  thumbnail: string;
}

const BagItem: React.FC<BagItemProps> = ({ id }) => {
  const [itemDetails, setItemDetails] = useState<ItemDetails>(
    {} as ItemDetails
  );

  const callApi = async () => {
    const response = await api.get(`/cardapio/${id}`);

    setItemDetails(response.data);
  };

  useEffect(() => {
    callApi();
  }, []);

  const { addNewItem, removeItem, getItemQuantity } = useBag();

  return (
    <S.Container>
      <img src={pedido} alt="Pedido" />

      <div>
        <p className="description">{itemDetails.nome}</p>
        <p className="price">
          {formatter.format(parseFloat(itemDetails.valor))}
        </p>

        <section>
          <button onClick={() => removeItem(id)}>
            <img src={menos} alt="Menos" />
          </button>
          <p className="quantia">{getItemQuantity(id)}</p>
          <button onClick={() => addNewItem(id, parseFloat(itemDetails.valor))}>
            <img src={mais} alt="Mais" />
          </button>
        </section>
      </div>
    </S.Container>
  );
};

export default BagItem;
