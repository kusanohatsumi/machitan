import React from 'react'
import { auth } from '../CommonCompornents/Firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import { Course } from '../page_Course/Course';
import { NewAccount } from '../page_Account/NewAccount';

export const Checking = () => {
    const [user] = useAuthState(auth); 
  return (
    <>
      {user ?
        <Course />
        :
        <NewAccount />
      }
    </>
  )
}
