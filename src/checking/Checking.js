import React from 'react'
import { auth } from '../CommonCompornents/Firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import { Course } from '../page_Course/Course';
import { Login } from '../page_Account/Login';

export const Checking = () => {
    const [user] = useAuthState(auth); 
  return (
    <>
        {user ?
            <Course />
            :
            <Login />
        }
    </>
  )
}
