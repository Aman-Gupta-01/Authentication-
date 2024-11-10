import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/user/"+id).then((res)=>{
            if(!res.ok){
                toast.error("User Not Found")
            }
            return res.json();
        }).then((resp)=>{
            if (resp.password !== password) {
                toast.error("Incorrect Password")
                return null;
            }else{
                toast.success("Login Successful, Redirecting to Welcome page")
                navigate("/welcome")
                localStorage.setItem("id", id);
            }
            console.log(resp);
        }).catch((error)=>{toast.error("Login Failed, User not found or server error")})
    }

  return <>
  <div className='flex items-center justify-center mt-48'>
  <form onSubmit={handleSubmit} className='grid text-center font-bold border-2 px-2 py-3 rounded-lg border-neutral-600  items-center gap-2 justify-center'>
        <h1 className='text-xl text-indigo-600'>Login</h1>
        <input className='border-2 border-neutral-500 rounded-xl p-2' id={id} onChange={(e)=>setId(e.target.value)} type="email" required placeholder='Email...'/>
        <input className='border-2 border-neutral-500 rounded-xl p-2' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder='Password...'/>
        <button type="submit" className='rounded-full bg-blue-600 border-gray-400 mx-6 py-2 border-2'>Login</button>
        <h1>New User?<Link className='underline text-blue-400' to={"/Register"} > click here</Link> to register</h1>
    </form>
  </div>  
  </>
}

export default Login