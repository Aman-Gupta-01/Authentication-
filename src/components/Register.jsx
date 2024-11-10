
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        let userData = {name, id, password}
        fetch("http://localhost:3000/user", {
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userData)
        }).then((res)=>{
            toast.success('User Successfully Registered, Redirecting to login')
            setTimeout(() => {
                navigate('/Login')
            }, 2000);
        }).catch((error)=>toast.error(error)
    )
    }

  return <>
  <div className='flex items-center justify-center mt-48'>
    <form onSubmit={handleSubmit} className='grid text-center font-bold border-2 px-2 py-3 rounded-lg border-neutral-600  items-center gap-2 justify-center'>
        <h1 className='text-xl text-indigo-600'>Register</h1>
        <input className='border-2 border-neutral-500 rounded-xl p-2' value={name} onChange={(e)=>setName(e.target.value)} type="text" required placeholder='Full Name...'/>
        <input className='border-2 border-neutral-500 rounded-xl p-2' id={id} onChange={(e)=>setId(e.target.value)} type="email" required placeholder='Email...'/>
        <input className='border-2 border-neutral-500 rounded-xl p-2' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder='Password...'/>
        <button type="submit" className='rounded-full bg-blue-600 border-gray-400 mx-6 py-2 border-2'>Register</button>
        <h1>Already Registerd?<Link className='underline text-blue-400' to={"/Login"} > click here</Link> to login</h1>
    </form>
  </div>  
  </>
}

export default Register