import React from 'react';
import LoginForm from './Login'


const Home = () => {
  return(
    <div>
      <h2 style={{marginTop: '30px', fontFamily: 'inter', color: 'white'}}>Welcome!</h2>
      <br></br>
      <LoginForm/>
    </div>

  )
}


export default Home;