import React from 'react';

import back from '../../assets/vetor-back.svg';
import pedido from '../../assets/pedido.png';
import menos from '../../assets/btn_menos.svg'
import mais from '../../assets/btn_mais.svg'

import * as S from './styles';

const Pedido: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <div>
            <img src={back} alt="Voltar" />
            <h1>Voltar</h1>
          </div>
        </S.HeaderContent>
      </S.Header>

      <S.Pedido>
        <h1>Seu Pedido</h1>

        <S.Item>
          <img src={pedido} alt="Pedido" />

          <div>
            <p className='description'>Porção de alguma coisa que ...</p>
            <p className='price'>R$ 65,00</p>

            <section>
              <button>
                <img src={menos} alt="Menos" />
              </button>
              <p className='quantia'>1</p>
              <button>
                <img src={mais} alt="Mais" />
              </button>
            </section>
          </div>
        </S.Item>
        <S.Item>
          <img src={pedido} alt="Pedido" />

          <div>
            <p className='description'>Porção de alguma coisa que ...</p>
            <p className='price'>R$ 65,00</p>

            <section>
              <button>
                <img src={menos} alt="Menos" />
              </button>
              <p className='quantia'>1</p>
              <button>
                <img src={mais} alt="Mais" />
              </button>
            </section>
          </div>
        </S.Item>

      </S.Pedido>

      <S.Footer>
        <section>
          <p className='total'>Total:</p>
          <p className='valorTotal'>R$ 120,00</p>
        </section>
        <button className="btnConfirmar">Confirmar</button> 
      </S.Footer>
    </S.Container>
  );
};

export default Pedido;
