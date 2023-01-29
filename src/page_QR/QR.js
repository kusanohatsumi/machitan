import React from 'react'
import "./QR.scss"

import { useState } from "react";
import { useZxing } from "react-zxing";
import { Link } from 'react-router-dom';

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
        <p><Link>{result}</Link></p>
    </div>
  )
}