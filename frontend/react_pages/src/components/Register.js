import React, { useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import '../login.css'
import { useHistory } from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'



export default function RegisterForm() {
    const [registercreds, setRegisterCreds] = useContext(AuthContext);
    const [tos, setTos] = useState(false);

    const history = useHistory()

    const handleRegisterChange = e => {
        setRegisterCreds({
        ...registercreds,
        [e.target.name]: e.target.value
        }
      )} 

    const handleCheck = e => {
        setTos({ 
         ...tos, 
        [e.target.name]: e.target.checked }
      )}  

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post('/api/auth/register', registercreds)
          .then(res => {
            console.log('user has registered successfully', res.data)
            history.push('/') 
          })
          .catch(err => {
            console.log('user registration failed', err) 
            alert('unable to register, please try again')    
          })
        } 
    
       


    return (
      <div>
      <h2 style={{marginTop: '30px', fontFamily: 'inter', color: 'white'}}>Become a member now!</h2>
      <br></br>
        <div className="login">
            <form className='form' onSubmit={handleSubmit}>
                <h1>Create Account</h1>
            <label>
                Username:
                <input 
                    name='user_name'
                    type='text'
                    autoFocus
                    value={registercreds.user_name}
                    onChange={handleRegisterChange}
                    required/>
            </label>
<br/>
            <label>
                Password:
                <input
                    name='password'
                    type='password'
                    value={registercreds.password}
                    onChange={handleRegisterChange}
                    required/>
           </label>
<br/>
            <label>
                Location:
                <input
                    name='location'
                    type='text'
                    value={registercreds.location}
                    onChange={handleRegisterChange}
                    required/>
           </label>
           <label >
               Terms
               <input
                    name='tos-checked'
                    type='checkbox'
                    value={tos}
                    onChange={handleCheck}
                    required
                    />

           </label>
<br/>
            <button style={{display:'inline-block',fontSize: '0.8em', backgroundColor:'#ed4933', color:'#ffffff', cursor: 'pointer', fontWeight:'600', padding:'0 2.75em' ,  letterSpacing:'0.225em', fontSizeAdjust: '0.8em', textTransform:'uppercase'}}>Submit</button>
            
            </form>
        </div>
        </div>
    )
      
}


