import React, { useState, createContext } from 'react';


export const AuthContext = createContext(null)

//inital values will be empty strings and axios post request will set values


export const AuthProvider = (props) => {
  
  //add hooks here
  const [logincreds, setLoginCreds] = useState({user_name: '', password: ''})//value={logincreds.username} && {logincreds.password}//
  const [registercreds, setRegisterCreds] = useState({user_name: '', password: '', location: ''})//value={}
  const [tokenSuccess, setTokenSuccess] = useState(false)

  

    /* const formReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = ""))
    } */




  return(
    <AuthContext.Provider 
      value={[logincreds, setLoginCreds, tokenSuccess, setTokenSuccess, registercreds, setRegisterCreds]}>
      {props.children}
    </AuthContext.Provider>
  )
}