import React, { useState } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignUp = () =>  {
    const[showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState(' ');
    const navigate = useNavigate();


 const handleSubmit = (e) => {
    e.preventDefault();
   const email = e.target.email.value;
   const password = e.target.password.value;
    console.log(email, password);
    if(isStrongPassword(password)){
        navigate('/')
    } else{
        alert('Weak Password')
    }
  };
  const isStrongPassword = (pass) =>{
     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pass);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-200 via-blue-100 to-blue-200 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl px-10 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Login</h2>

      
        <form onSubmit={handleSubmit} className="space-y-5">
       
          <div className="relative">
            <MdEmail className="absolute top-3.5 left-4 text-gray-400 text-xl" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-gray-700"
            />
          </div>

          <div className="relative">
            <MdLock className="absolute top-3.5 left-4 text-gray-400 text-xl" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`w-full pl-12 pr-12 py-3 border ${
                isStrongPassword(password) ? 'border-green-500' : 'border-red-400'
              } rounded-xl focus:outline-none text-gray-700`}
            />
            <div
              className="absolute top-3.5 right-4 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible size={22} /> : <AiFillEye size={22} />}
            </div>
          </div>
          {password && (
            <p className={`text-sm ${isStrongPassword(password) ? 'text-green-600' : 'text-red-500'}`}>
              {isStrongPassword(password)
                ? 'Strong password ✅'
                : 'Password must be 8+ chars, contain upper/lowercase & number'}
            </p>
          )}
         <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>

        
        <div className="flex items-center justify-center my-4">
          <div className="border-b border-gray-300 w-full"></div>
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <div className="border-b border-gray-300 w-full"></div>
        </div>

    
        <button
          type="button"
          onClick={() => console.log("Google login")}
          className="w-full py-3 flex items-center justify-center border border-gray-300 rounded-xl hover:bg-gray-100 transition duration-200"
        >
          <FcGoogle className="text-2xl mr-2" />
          Continue with Google
        </button>

       
        <p className="text-center text-sm text-gray-600 mt-6">
          You have no account?{' '}
          <a href="#" className="text-blue-600 hover:underline font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
};


export default SignUp;