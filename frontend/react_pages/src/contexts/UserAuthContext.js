import React, { useState, useEffect, createContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'


export const UserAuthContext = createContext(null)


export const UserProvider = (props) => {
  
  //add hooks here
  const [user, setUser] = useState('')

  //remove useEffect after login form is merged to main branch. only used for testing purposes
  /* useEffect(() => {
    getUser()
  }, []) 

  const getUser = () => {
    axiosWithAuth().get('/api/market')
    .then(res => {
      console.log('market user data retrieved', res);
      setUser(res.data);
    })
    .catch(err => console.log('unable to market retrieve user info', err));
  }
 */


  return(
    <UserAuthContext.Provider value={user} displayName="User Data">
      {props.children}
    </UserAuthContext.Provider>
  )
}