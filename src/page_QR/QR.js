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
    // const [isOpen,setIsOpen] = useState("");
    // const onClickToggle = () => {
    //     setIsOpen(!isOpen);
    // };






  return (
    <div>
        {/* <video id='camera' ref={ref} /> */}
        {/* <Modal>
            <h2>Content from children</h2>
        </Modal> */}
        {/* <button onClick={onClickToggle}>open</button> */}
        <video id='camera' ref={ref} />
        {result ? 
            <div>
                <p>保存されています</p>
                <div className='stampMat'>
                    <p>スタンプ台紙</p>
                    <div className='stamp'>
                        <span></span>
                    </div>
                </div>
            </div>
            :
            null
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