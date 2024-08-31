import React, { useState } from "react"
import "./login.css"
import ram from "./conexion";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

    const handleLogin = async (event) => {
      event.preventDefault();
        try {
           const response = ram(email, password)
              console.log(response)
              
        } catch (error) {
            console.error('Error en la solicitud:', error);
       }
    };
  return (
    <div className="login">
        <form onSubmit={handleLogin}>
          <div className="container">
            <h1>ADMIN</h1>
            <input type="email" placeholder="Email" value={email} 
                onChange={(e) => setEmail(e.target.value)} required/>
            <input type="password" placeholder="Password" value={password} 
                onChange={(e) => setPassword(e.target.value)} required/>
            <button onClick={async () => {
                    try {
                        await handleLogin();
                        // Haz algo después de que el usuario se haya conectado, si es necesario
                    } catch (error) {
                        // Maneja el error, si es necesario
                    }
                }}>Login</button>
            <span>Olvidaste el usuario o contarseña ?</span>
          </div>
        </form>
    </div>
  )
}

export default Login

