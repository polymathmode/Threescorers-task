

import React, {useState} from 'react';
import styles from'./Login.module.css'
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';

const Login: React.FC = () => {
  const [loginDatavalue, setLoginDatavalue] = useState({})
  const navigate = useNavigate();
    const handleInputChange = (e: { target: { name: any; value: any; }; }) =>{
      console.log(e.target.name);
    console.log(e.target.value);
      setLoginDatavalue({
        ...loginDatavalue,
        [e.target.name]: e.target.value
        
      })   
    }

    const handleLogin = async(e: { preventDefault: () => void; }) =>{
      e.preventDefault();
      try {
      const loginResponse = await login(loginDatavalue)
        
        localStorage.setItem("userData", JSON.stringify(loginResponse.data) )
        navigate('/dashboard');
        console.log("LOGIN RESPONSE",loginResponse);
        
      // console.log(loginResponse.response.data.status);
      
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        console.log(error);
    }
    }
  return (
    // <div className="login-container">
    // <div style={{marginLeft:"500px",paddingTop:"5rem", backgroundColor:"red", width:"500px",padding:"" }}>
    <div className={styles.loginContainer}>
      <img src="./src/assets/IMG-3scorersLogo.png"  alt="Logo" className="logo,loginImg"/>
      <div className={styles.loginCard}>
        <h2>Login</h2>
        <form>
          <div className={styles.inputContainer}>
            <label>Email Address</label>
            <input name="email" type="email" placeholder="Enter your email" onChange={handleInputChange}/>
          </div>
          <div className={styles.inputContainer}>
            <label>Password</label>
            <input name="password"  type="password" placeholder="Enter your password" onChange={handleInputChange}/>
          </div>
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
      </div>
      <div/>
     </div>
  );
};

export default Login;
