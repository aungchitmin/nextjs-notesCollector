import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'


//login page
const Index = () => {
  const [inputs, setInputs] = useState('')
  const router = useRouter()

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      const data = await response.json();
      //console.log('data reached')
      //console.log(data)
      
       //router.push(`/Notes?${data.token}`);
       router.push(`/Notes?${data.id}`);
    } catch (error) {
      console.log('not run at all')
      console.log(error)
      router.push('/')
    }
    
  }

  return (
    <div className="container mx-auto ">
    <div className='flex flex-col items-center justify-center  h-screen w-screen'>
    <h1 className='text-2xl font-bold mb-5'>Login</h1>
    <form className='flex flex-col items-center p-3 w-4/5 gap-5 '>
      <input
      className='p-3 border-none text-lg w-full'
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
        required
      />
      <input
      className='p-3 border-none text-lg w-full'
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
        required
      />
      <button className='px-0 m-2 rounded-lg py-2 w-1/2 border-none bg-green-400' onClick={handleSubmit}>Login</button>
      <span className='text-xs'>
        Don&apos;t you have an account? <Link href="/Register"><span className='text-sm font-bold'>Register</span></Link>
      </span>
    </form>
    </div>
  </div>
  )
}

export default Index