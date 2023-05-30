import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";

function QRcode() {
  const [result, setResult] = useState("No result");

  const handleScan = (data) => {
    while(result == 'No result' || result == undefined){
      if (data) {
        setResult(data);
      }
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const handleResult = (result) => {
    console.log(result);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        onResult={handleResult}
        style={{ width: "100%" }}
        constraints={{
          facingMode: 'environment'
        }}
      />
      <p>{result}</p>
    </div>
  );
}

export default QRcode;