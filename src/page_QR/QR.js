import React, { useEffect } from 'react'
import "./QR.scss"

import { useState } from "react";
import { useZxing } from "react-zxing";
import { Header } from '../CommonCompornents/Header';

import { db, auth } from '../CommonCompornents/Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { doc, setDoc } from 'firebase/firestore';


export const QR = () => {
    // --- QRコードリーダー ---
    const [result, setResult] = useState("Logo.svg");
    const { ref } = useZxing({
        onResult(result) {
            setResult(result.getText());
        },
    });

    // --- toggle ---
    const [active, setActive] = useState(false);
    const [resultImg, setResultImg] = useState("");
    const classToggle = () =>{
        setActive(!active);
        setResultImg(result);
        setDoc(doc(db,"myStamp", user.uid),result);

    }

    // --- データ保存 ---
    const [user] = useAuthState(auth); 




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
                    <div className='stamp' onClick={classToggle}>
                        <img src={`${process.env.PUBLIC_URL}/img/${resultImg}`} />
                        {/* <span className={
                            active ? "get"
                            :
                            null
                        }
                        onClick={classToggle}
                        > */}

                        {/* </span> */}
                    </div>
                </div>
            </div>
            :
            null
        }

    </div>

  )
}