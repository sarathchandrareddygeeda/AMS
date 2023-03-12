import React from "react";
import "../styles/login.css";
import cart from "../media/registerimag.png";
import { useTheme } from "./themeContext";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
export default function Register( ) {
const theme = useTheme();

  const [res, setRes] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post('http://localhost:6969/api/register', {
      username : data.get('username'),
      email : data.get('email'),
      password : data.get('password')
    }).then((response)=>{
      console.log(response.data);
      
      setRes(response.data)
    }).catch((err)=>{console.log(err)})
  }

  return (
    <div>
      <div class={theme.theme === true ? "login6_dark" : "login6_white"} >
        <div class="register_header">
          <div class="login6_login">
            <div class="login6_login_box">
              <div class="login6_left">
                <div class="login6_contact_register">
                  <form onSubmit={handleSubmit}>
                    <h3>Register</h3>
                    <label>UserName</label>
                    <input type="text" placeholder="USERNAME" name='username'/>
                    <label>Email</label>
                    <input type="email" placeholder="EMAIL" name='email' />
                    <label>Password</label>
                    <input type="password" placeholder="PASSWORD" name='password'/>
                    <button class="login6_submit">Register</button>
                  </form>
                </div>
              </div>
              <div class="login6_right-inductor text-center justify-content-center">
                <img src={cart} alt="" />
                <p className="primary text-decoration-underline">Already a Member?</p>
                <Link class="btn btn-primary text-wrap text-center" to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      <br></br>
      </div>
    </div>
  );
}
