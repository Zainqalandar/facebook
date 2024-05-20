'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const Verifyemail = () => {
    const [token, setToken] = useState('');
    const router = useRouter()

    const handleSubmit = async e => {
    e.preventDefault();

    console.log('token', { token })

    const response = await fetch('http://localhost:3000/api/users/verifyemail', {   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    if (response.ok) {
      console.log('Email verification successful');
      setToken('')
      router.push('/')
  
    } else {
      const data = await response.json();
      console.error('Email verification failed:', data.message);
    }
  };

  
  return (
    <div className="max-w-md mx-auto mt-8">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="token" className="block text-sm font-medium text-gray-700">
          Token
        </label>
        <div className="mt-1">
          <input
            id="token"
            name="token"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter your token"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default Verifyemail