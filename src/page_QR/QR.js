import React, { useEffect } from 'react'
import "./QR.scss"

import { useState } from "react";
import { useZxing } from "react-zxing";
import useModal from './useModal';
import ReactModal from 'react-modal';

export const QR = () => {
    // --- QRコードリーダー ---
    const [result, setResult] = useState("");
    const { ref } = useZxing({
        onResult(result) {
            setResult(result.getText());
        },
    });

    // --- モーダル ---
    // const { Modal, openModal, closeModal } = useModal();
    const [show,setShow] = useState(false);




    if (result == "") {
        console.log("null");
        console.log(result);
    }else{
        console.log("full");
        console.log(result);
    }

  return (
    <div>
        <video id='camera' ref={ref} />
        <img src={`${process.env.PUBLIC_URL}/img/${result}`} />
        {/* <Modal>
            <h2>Content from children</h2>
            <video id='camera' ref={ref} />
            <button onClick={closeModal}>Close</button>
        </Modal> */}
        <ReactModal 
            isOpen={show}
            onRequestClose={()=>setShow(false)}
            setResult={setResult}
        />
    </div>

  )
}