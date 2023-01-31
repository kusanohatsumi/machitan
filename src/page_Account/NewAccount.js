import React, { useEffect } from 'react'
import "./Account.scss";

import { Link } from 'react-router-dom';
import { auth, provider } from '../CommonCompornents/Firebase';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export const NewAccount = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [user] = useAuthState(auth)

    
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
                <button type='submit'>新規登録</button>
            </div>

            <div className='or'>
                <p>または</p>
            </div>
            <SignInWdthGoogle />


            <p className='login'>
                <Link to="/login">すでにアカウントをお持ちの方はこちら</Link>
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
