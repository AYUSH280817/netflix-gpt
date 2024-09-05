import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [signin,setsignin]=useState(true);
    const toggleclick=()=>{
         setsignin(!signin)
    }
    return(
        <div>
        <Header/>
        <div className="absolute">
        <img 
         src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg" alt="logo"/>
        </div>
         <form className=" w-3/12 bg-black p-12 absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
            <h1 className="font-bold text-3xl p-2 m-2">{signin ?"Sign in":"Sign UP"}</h1>
            {!signin && <input type="text" placeholder="Name"  className="p-2 m-2 w-full bg-gray-500"/>}
           <input type="text" placeholder="Email Address or Phone Number"  className="p-2 m-2 w-full bg-gray-500"/>
           <input type="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-500"/>
           <button className="bg-red-700 p-2 m-2 w-full rounded-lg">{signin ?"Sign in":"Sign UP"}</button>
           <p className="p-2 m-2 cursor-pointer" onClick={toggleclick}>New to Netflix Sign Up Now</p>
         </form>
        </div>
    )
}
export default Login;