import React from 'react'
import "./Account.scss";

import { Link } from 'react-router-dom';
import { auth, provider } from '../CommonCompornents/Firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';

export const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(
                auth, email, password
            );
        }
        catch(error){
            alert("正しく入力してください");
        }
    }

  return (
    <div className='NewAccount'>
        <h2 className='creatAccount'>ログイン</h2>
        <form onSubmit={handleSubmit}>
            <div className='creatItem'>
                <label htmlFor='email'>メールアドレス</label>
                <input 
                    value={email} type="email" name='email' placeholder='メールアドレスを入力してください'
                    onChange={(event)=>setEmail(event.target.value)}
                />
            </div>
            <div className='creatItem'>
                <label htmlFor='password'>パスワード</label>
                <input 
                    value={password} type="password" name='password' placeholder='パスワードを入力してください'
                    onChange={(event)=>setPassword(event.target.value)}
                />
            </div>
            <div className='creatItem'>
                <button type='submit'><Link to="/course">ログイン</Link></button>
            </div>

            <div className='or'>
                <p>または</p>
            </div>
            <SignInWdthGoogle />


        </form>

    </div>
  )
}
// ---- Googleでログインする
function SignInWdthGoogle(){
    const signinWidthGoogle = ()=> {
        signInWithPopup(auth,provider);
    }
    return(
        <div className='creatItem'>
            <Link to="/course">
            <button className='creatOtherBtn' type='button' onClick={signinWidthGoogle}>Googleでログイン</button>
            </Link>
        </div>
    );
    
}

