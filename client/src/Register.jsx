import axios from "axios";
import { useState } from "react"

export default function Register() {
    const[username,setUsername] = useState('');
    const[password, setPassowrd] = useState('');
    async function register(ev) {
        ev.preventDefault();
        await axios.post('./register' ,{username,password});

    }

    return (
       <div className="bg-hero-pattern bg-no-repeat bg-contain bg-right h-screen flex items-center">
        <form className="w-64 mx-auto mb-12" onSubmit={register}>
            <input value ={username}
                   onChange={ev => setUsername(ev.target.value)}
                   type = "text" placeholder = "Username"  
                   className="block w-full rounded-sm p-2 mb-2 border" />
            <input  value ={password}
                    onChange={ev => setPassowrd(ev.target.value)}  
                    type = "password" placeholder="Password" 
                    className="bg-blue-200 block w-full rounded-sm p-2 mb-2 border" />
            <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
        </form>
       </div>
    )
}
