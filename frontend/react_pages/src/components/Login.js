import React, { useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import '../login.css'
import { useHistory } from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'

export default function LoginForm() {
    const [logincreds, setLoginCreds] = useContext(AuthContext)
    const [tokenSuccess, setTokenSuccess] = useContext(AuthContext)
    const history = useHistory()
    /* const [password, setPassword] = useState('') */
    

    const handleLoginChange = e => {
        setLoginCreds({
          ...logincreds,
          [e.target.name]: e.target.value
        }
      )} 
    
    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post('/api/auth/login', logincreds)
          .then(res => {
            console.log('user signed in successfully', res.data, logincreds)
            localStorage.setItem('token', res.data.token)
            setTokenSuccess(true)
            history.push('/marketplace')
          })
          .catch(err => {
            alert('incorrect username and/or password, please try again', err)
            console.log('error loggin in', err.message, logincreds)
            setTokenSuccess(false)
            
          })
        } 
   

    return (
        <div className="login">
            <form className='form' onSubmit={handleSubmit}>
                <h1>Login</h1>
            <label>
                Username:
                <input 
                    name='user_name'
                    type='text'
                    autoFocus
                    value={logincreds.user_name}
                    onChange={handleLoginChange}
                    required/>
            </label>
<br/>
            <label>
                Password:
                <input
                    name='password'
                    type='password'
                    value={logincreds.password}
                    onChange={handleLoginChange}
                    required/>
           </label>
<br/>
            <button style={{display:'inline-block',fontSize: '0.8em', backgroundColor:'#ed4933', color:'#ffffff', cursor: 'pointer', fontWeight:'600', padding:'0 2.75em' ,  letterSpacing:'0.225em', fontSizeAdjust: '0.8em', textTransform:'uppercase'}}>Submit</button>
            
            </form>
        </div>
    )

}



