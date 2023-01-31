import React from 'react'
import "./Log.scss";
import { Header } from '../CommonCompornents/Header'

export const Log = () => {
  return (
    <>
        <Header />
        <div id='label' className='label label--text'>
            <p>スタンプ履歴</p>
        </div>
        
        <div className='log'>
            <div className='log__item'>
                <figure className='stamp'></figure>
                <div className='text'>
                    <p>2023/01/07</p>
                    <p className='plase'>美山町肱谷</p>
                </div>
            </div>

            <div className='log__item'>
                <figure className='stamp'></figure>
                <div className='text'>
                    <p>2023/01/07</p>
                    <p className='plase'>美山町肱谷</p>
                </div>
            </div>

            <div className='log__item'>
                <figure className='stamp'></figure>
                <div className='text'>
                    <p>2023/01/07</p>
                    <p className='plase'>美山町肱谷</p>
                </div>
            </div>

            <div className='log__item'>
                <figure className='stamp'></figure>
                <div className='text'>
                    <p>2023/01/07</p>
                    <p className='plase'>美山町肱谷</p>
                </div>
            </div>

            <div className='log__item'>
                <figure className='stamp'></figure>
                <div className='text'>
                    <p>2023/01/07</p>
                    <p className='plase'>美山町肱谷</p>
                </div>
            </div>
            <div className='log__item'>
                <figure className='stamp'></figure>
                <div className='text'>
                    <p>2023/01/07</p>
                    <p className='plase'>美山町肱谷</p>
                </div>
            </div>



        </div>



    </>
  )
}
