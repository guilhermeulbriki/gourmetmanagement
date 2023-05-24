import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import * as S from "./styles";

const QRCode: React.FC = () => {
  // const webcamRef = useRef<Webcam>(null);

  // useEffect(() => {
  //   const requestCameraAccess = async () => {
  //     try {
  //       const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
  //       if (webcamRef.current?.video) {
  //         webcamRef.current.video.srcObject = mediaStream;
  //       }
  //     } catch (error) {
  //       console.log("Erro ao solicitar acesso à câmera:", error);
  //     }
  //   };

  //   requestCameraAccess();
  // }, []);

  return <Webcam />;
};

export default QRCode;
