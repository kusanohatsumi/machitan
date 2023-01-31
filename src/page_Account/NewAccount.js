import React from 'react'
import "./NewAccount.scss";

import { Link } from 'react-router-dom';
import { auth, provider } from '../CommonCompornents/Firebase';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


import { useState } from 'react';










export const NewAccount = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(
                auth, email, password
            );
        }
        catch(error){
            alert("正しく入力してください");
        }
    }

  return (
    <div className='NewAccount'>
        <h2 className='creatAccount'>新規登録</h2>
        <form onSubmit={handleSubmit}>
            <div className='creatItem'>
                <label htmlFor='email'>メールアドレス</label>
                <input 
                    value={email} type='email' name='email' placeholder='メールアドレスを入力してください'
                    onChange={(event)=>setEmail(event.target.value)}
                    />
            </div>
            <div className='creatItem'>
                <label htmlFor='password'>パスワード</label>
                <input 
                    value={password} type='password' name='password' placeholder='パスワードを入力してください'
                    onChange={(event)=>setPassword(event.target.value)}
                />
            </div>
            <div className='creatItem'>
                <button type='submit'>
                    <Link to="/course">新規登録</Link>
                </button>
            </div>

            <div className='or'>
                <p>または</p>
            </div>
            <SignInWdthGoogle />


            <p className='login'>
                <Link to="/login">すでにお持ちの方はこちら</Link>
            </p>
        </form>
    </div>
)
}


// ---- Google
function SignInWdthGoogle(){
    const signinWidthGoogle = ()=> {
        signInWithPopup(auth,provider);
    }
    return(
        <div className='creatItem'>
            <button className='creatOtherBtn' type='button' onClick={signinWidthGoogle}>Googleで新規作成</button>
        </div>
    );
    
}
