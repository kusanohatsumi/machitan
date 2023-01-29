import React from 'react'
import { Link } from 'react-router-dom';
import { auth, provider } from '../CommonCompornents/Firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'

import { useState } from 'react';


export const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function handleSubmit(e){
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
                <label>メールアドレス</label>
                <input 
                    type="email" placeholder='メールアドレスを入力してください'
                    onChange={(e)=>setEmail(e.target.value)}
                    />
            </div>
            <div className='creatItem'>
                <label>パスワード</label>
                <input 
                    type="password" placeholder='パスワードを入力してください'
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div className='creatItem'>
                <button type='submit'><Link>ログイン</Link></button>
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

