import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
  const isLogin = localStorage.getItem("id")
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      navigate("/Login");
    }
  }, []);

  const logout=()=>{
    localStorage.clear()
    navigate("/Login")
  }

  return (
    <>
    <div  onClick={logout} className='rounded-full sticky active:scale-95 top-4 flex items-center px-4 justify-center bg-blue-600 border-gray-400 py-2 border-2 text-lg font-bold'>
    <button>Logout</button>
    </div>
    <div className="flex items-center justify-center mt-64 text-4xl text-green-500 font-bold">Welcome</div>
    </>
  );
};

export default Welcome;
