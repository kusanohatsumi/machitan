import React from 'react'
import "./QR.scss"

import { useState } from "react";
import { useZxing } from "react-zxing";

export const QR = () => {
    const [result, setResult] = useState("");
    const { ref } = useZxing({
        onResult(result) {
            setResult(result.getText());
        },
    });
    

  return (
    <div>
        <video id='camera' ref={ref} />
        <p>
            <span>Last result:</span>
            <span>{result}</span>
        </p>
    </div>
  )
}
