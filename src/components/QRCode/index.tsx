import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

import * as S from './styles';
import { useHistory } from 'react-router-dom';

const QRCode: React.FC = () => {
  const [pageStatus, setPageStatus] = useState<'loading' | 'success'>(
    'loading'
  );
  const [result, setResult] = useState('No result');

  const handleError = (error: string) => {
    console.error(error);
  };

  const history = useHistory();

  return (
    <S.Container>
      <QrReader
        onScan={(data) => {
          if (data) {
            setResult(data);
            history.push('/finish');
          }
        }}
        onError={handleError}
        style={{ width: '100%' }}
        delay={500}
      />
    </S.Container>
  );
};

export default QRCode;
