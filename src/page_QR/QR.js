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
    const [isOpen,setIsOpen] = useState("");
    const onClickToggle = () => {
        setIsOpen(!isOpen);
    };






  return (
    <div>
        <img src={`${process.env.PUBLIC_URL}/img/${result}`} />
        {/* <video id='camera' ref={ref} /> */}
        {/* <Modal>
            <h2>Content from children</h2>
        </Modal> */}
        {/* <button onClick={onClickToggle}>open</button> */}
        <video id='camera' ref={ref} />

        {isOpen ? 
            <div>
                <p>保存されています</p>
                <div className='stamp'>
                    スタンプ台紙
                </div>
            </div>
            :
            <p>
                保存されていません
            </p>
        }
            {/* <ReactModal 
                isOpen={isOpen}
                onRequestClose={()=>setIsOpen(false)}
                setResult={setResult}
            >
                <p>text</p>
            </ReactModal> */}


    </div>

  )
}