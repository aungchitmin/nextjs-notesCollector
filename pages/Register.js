import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Register = () => {
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

      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(inputs),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
      //console.log(response.body)
      router.push("/");
    }
  
    return (
      <div className="container mx-auto ">
      <div className='flex flex-col items-center justify-center  h-screen w-screen'>
      <h1 className='text-2xl font-bold mb-5'>Register</h1>
      <form className='flex flex-col items-center p-3 w-4/5 gap-5 '>
        <input
        className='p-3 border-none text-lg w-full'
          type="text"
          placeholder="username"
          name="name"
          onChange={handleChange}
          required
        />
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
        <button className='px-0 m-2 rounded-lg py-2 w-1/2 border-none bg-green-400' onClick={handleSubmit}>Register</button>
        <span className='text-xs'>
          Do you already have an account? <Link href="/"><span className='text-sm font-bold'>Login</span></Link>
        </span>
      </form>
      </div>
    </div>
    )
}

export default Register