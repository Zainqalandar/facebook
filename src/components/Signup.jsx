'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router =  useRouter()

  const handleSubmit = async e => {
    e.preventDefault();

    console.log('form', { name, email, password })

    const response = await fetch('http://localhost:3000/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: name, email, password }),
    });

    if (response.ok) {
      console.log('Signup successful');
      setEmail('')
      setName('')
      setPassword('')
      router.push('/verifyemail')
      console.log('Email Successfully Sand to gmail!!');
    } else {
      const data = await response.json();
      console.error('Signup failed:', data.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
                onChange={e => setName(e.target.value)}
              />
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
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
              />
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-900 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
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
              Already have an account?
              <Link
                className="no-underline border-b border-blue text-blue"
                href="../signin/"
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
