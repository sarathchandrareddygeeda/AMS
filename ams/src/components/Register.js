import React from "react";
import "../styles/login.css";
import cart from "../media/registerimag.png";
import { useTheme } from "./themeContext";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
const theme = useTheme();
const navigate = useNavigate();
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
      notify();
      navigate("/login");

    }).catch((err)=>{console.log(err)
    notify1(err)})
  }
  function notify(){
 
    toast.success("Registration Successful", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      // autoClose:false
      });
  }
  function notify1(err)
{
  toast.error(err, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    })
}
  return (
    <div>
      <ToastContainer/>
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
                    <input type="email" placeholder="EMAIL" pattern="[^ @]*@[^ @]*" title="Please enter a valid email address"name='email' />
                    <label>Password</label>
                    <input type="password" placeholder="PASSWORD" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" name='password'/>
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
