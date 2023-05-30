import React from 'react';
import { QrReader } from 'react-qr-reader';

const QrCode: React.FC = () => {
  return (
    <QrReader
      constraints={{}}
      onResult={(result, error) => {
        if (result) {
          console.log(result.getText);
        }

        if (error) {
          console.log(error);
        }
      }}
    />
  );
};

export default QrCode;
