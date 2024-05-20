import React from 'react'
import { useRouter } from 'next/navigation';

const Logout = () => {

    const router = useRouter()

    const handleSubmit = async e => {
        e.preventDefault();
    
        const response = await fetch('http://localhost:3000/api/users/logout', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          console.log('Log out successful');
         await router.push('/signin')
        } else {
          const data = await response.json();
          console.error('Log out failed:', data.message);
        }
      };
  return (
    <>
    <button onClick={handleSubmit} className=" py-2 px-3 bg-red-700 rounded-md font-bold">Log out</button>
    </>
  )
}

export default Logout