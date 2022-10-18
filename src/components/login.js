import React, {useState, useContext} from 'react';
import axios from "axios";
import {AuthContext} from "../context/auth.context"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [identifier, setIdentifier] = useState("")
    const [password, setPassword] = useState("")
    const { setToken, authenticateUser } = useContext(AuthContext);
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    
         axios.post("https://drab-red-cuttlefish-boot.cyclic.app/admin/login", {identifier, password})
            .then(response => {
                console.log("JWT token", response.data.authToken);
                setToken(response.data.authToken);
                authenticateUser()
             })
             .then(response => {
              console.log(response)
              navigate("/admin/dashboard")})
             .catch(err => console.log(err))

    }

  return (

    <div className="flex h-[calc(100vh-115px)] items-center justify-center">
  <div className="w-full max-w-md space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src={process.env.PUBLIC_URL + "/pvs_vlogo.png"} alt="Your Company" />

      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-black">Admin Access</h2>
     
    </div>
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px rounded-md shadow-sm px-50 md:px-0">
        <div>
          <label for="identifier" className="sr-only">Identifier</label>
          <input id="identifier" name="identifier" type="identifier" required className="relative block w-3/4 md:w-full left-1/2 -translate-x-2/4 md:left-0 md:-translate-x-0 appearance-none rounded border border-gray-300 px-3 py-2 my-2 placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink" placeholder="Identifier" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" required className="relative block w-3/4 md:w-full left-1/2 -translate-x-2/4 md:left-0 md:-translate-x-0 appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

    
      <div>
        <button type="submit" className="group relative flex w-3/4 md:w-full left-1/2 -translate-x-2/4 md:left-0 md:-translate-x-0 justify-center rounded-md border border-transparent bg-pink py-2 px-4 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-black group-hover:text-pink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
      )
    }
    
    export default Login
   