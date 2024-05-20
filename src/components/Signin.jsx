'use client'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()
  const notify = (ntfy) => toast.error(ntfy);

  const handleSubmit = async e => {
    e.preventDefault();

    console.log('form', { email, password })

    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log('Sign In successful');
      notify('Sign In successful')
      await router.push('/')
      setEmail('')
      setPassword('')
    } else {
      const data = await response.json();
      console.error('Sign In failed:', data.error);
      notify(`Sign In failed: ${data.error}`)
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign in</h1>
             
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
             
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-900 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Sign In
              </button>
              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>{' '}
                and
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="text-grey-dark mt-6">
              If you are not registered?
              <Link
                className="no-underline border-b border-blue text-blue"
                href="../signup/"
              >
                Sign Up
              </Link>
              .
            </div>
          </div>
        </div>
      </form>
      <button onClick={notify}>Notify!</button>
      <ToastContainer position="top-left" />
      
    </>
  );
};

export default Signup;
