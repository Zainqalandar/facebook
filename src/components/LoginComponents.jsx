'use client';
import { useState } from 'react';
import React from 'react';
import authService from '@/lib/auth'

const LoginComponents = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const session = await authService.login({
        email,
        password
      })
      // if (session) {
      //     const userData = await authService.getCurrentUser()
      //     console.log('form', { email, password })
      // }
  } catch (error) {
    console.log(error)
  }


    
  };
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="align-center">
                <div className="content">
                  <img src="img/fb.png" alt="" />
                  <p>
                    Facebook helps you connect and share with the people in your
                    life.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-5 col-xs-12">
              <div className="login-form">
                <form onSubmit={handleSubmit}>
                  <input
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Email address or phone number"
                  />
                  <br />
                  <input onChange={e => setPassword(e.target.value)} value={password} id="pass" type="text" placeholder="Password" />
                  <br />
                  <button id="login-btn">Log In</button>
                  <br />
                  <a href="#">Forgotten password?</a>
                  <br />
                  <button id="create-btn">Create New Account</button>
                  <br />
                </form>
              </div>
              <footer>
                <a
                  href="#"
                  style={{
                    fontWeight: 'bold',
                    color: 'var(--black)',
                    textDecoration: 'none',
                  }}
                >
                  Create a Page
                </a>
                for a celebrity, band or business.
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponents;
