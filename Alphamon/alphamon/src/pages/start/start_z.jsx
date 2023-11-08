import React from 'react';
import './start_sty.css';
import { useNavigate } from 'react-router-dom';

  function Start() {
    const navigate = useNavigate();
    return (
      <div className="z-start">
        <img className='logoimg' src='images/alphalogo.png' alt="logo"/>
        <p className='appname'>Welcome to AlphaMon</p>
        <button className='blsig' onClick={()=>navigate('/join')}>Sign up</button>
        <button className='whlog' onClick={()=>navigate('/login')}>Login</button>
      </div>
    );
  }

export default Start;
