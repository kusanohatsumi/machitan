import React from 'react'
import "./QR.scss"

import { useState } from "react";
import { useZxing } from "react-zxing";
import { Header } from '../CommonCompornents/Header';

export const QR = () => {
    // --- QRコードリーダー ---
    const [result, setResult] = useState("");
    const { ref } = useZxing({
        onResult(result) {
            setResult(result.getText());
        },
    });

    // --- toggle ---
    const [active, setActive] = useState(false);
    const classToggle = () =>{
        setActive(!active);
    }





  return (
    <div>
        <div id='label' className='label label--QR'>
        {result ? 
            <p>スタンプGET</p>
            :
            <p>QRを読み込む</p>
        }
        </div>
        <Header />

        <video id='camera' ref={ref} />
        {result ? 
            <div>
                <div className='stampMat'>
                    <p className='tapInfo'>ここをタップ↓</p>
                    <div className='stamp'>
                        <span className={
                            active ? "get"
                            :
                            null
                        }
                        onClick={classToggle}
                        ></span>
                    </div>
                </div>
            </div>
            :
            null
        }

    </div>

  )
}