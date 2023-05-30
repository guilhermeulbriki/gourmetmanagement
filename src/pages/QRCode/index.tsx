import React, { useState } from 'react';
import QRcode from '../../components/QR_reader';
import Webcam from 'react-webcam';

const QrCode: React.FC = () => {
  // const [data, setData] = useState('No result');

  return (
    <>
      <QRcode />
    </>
  );
};

export default QrCode;
