import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Back } from '../../assets/close.svg';

import * as S from './styles';

import QRCodeComponent from '../../components/QRCode';

const QrCode: React.FC = () => {
  const history = useHistory();

  return (
    <S.Container>
      <Back onClick={() => history.goBack()} className="back" />

      <QRCodeComponent />
    </S.Container>
  );
};

export default QrCode;
