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
    
         axios.post("http://localhost:5005/admin/login", {identifier, password})
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

    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src={process.env.PUBLIC_URL + "/pvs_vlogo.png"} alt="Your Company" />

      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Admin Access</h2>
     
    </div>
    <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="identifier" class="sr-only">Identifier</label>
          <input id="identifier" name="identifier" type="identifier"  required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink sm:text-sm" placeholder="identifier" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

    
      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-pink py-2 px-4 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-black group-hover:text-pink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
   