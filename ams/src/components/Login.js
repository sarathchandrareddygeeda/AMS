import React, { useState } from "react";
import "../styles/login.css";
import cart from "../media/loginright.png";
import { useTheme } from "./themeContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
export default function Login() {
  const theme = useTheme();
  const [login,setLogin]=useState(false)
// const loginhandle = ()=>
// {

// }
const [res, setRes] = useState(null);

const navigate = useNavigate();
const handleSubmit =(event)=>
{
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  axios.post('http://localhost:6969/api/auth', {
    email : data.get('email'),
    password : data.get('password')
  }).then((response)=>{
    console.log(response.data);
    setRes(response.data)
      setLogin(true);
  theme.handlogin(true);
    navigate("/");
  }).catch((err)=>{console.log(err)})
}
  return (
    <div>
      <div class={theme.theme === true ? "login6_dark" : "login6_white"}>
        <div class="login_header">
          <div class="login6_login">
            <div class="login6_login_box">
              <div class="login6_left">
                <div class="login6_contact">
                  <form onSubmit={handleSubmit}>
                    <h3>SIGN IN</h3>
                    <label>Email</label>
                    <input type="email" placeholder="Email" name="email" />
                    <label>Password</label>
                    <input type="text" placeholder="PASSWORD" name="password" />
                    <button class="login6_submit" value={login}   >Login</button>{/**/}
                  </form>
                </div>
              </div>
              <div class="login6_right-inductor text-center justify-content-center">
                <img src={cart} alt="" />
                <p className="primary text-decoration-underline">Not a Member?</p>
                <Link class="btn btn-primary text-wrap text-center" to="/register">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
