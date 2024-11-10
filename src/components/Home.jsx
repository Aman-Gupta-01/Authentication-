import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='flex items-center justify-center mt-48'>
        <button type="submit" onClick={()=>navigate('/Register')} className='rounded-full p-4 bg-blue-600 border-gray-400 mx-6 py-2 border-2'>Register</button>
        <button type="submit" onClick={()=>navigate('/Login')} className='rounded-full p-4 bg-blue-600 border-gray-400 mx-6 py-2 border-2'>Login</button>
    </div>
  )
}

export default Home