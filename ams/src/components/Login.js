import React, { useState } from "react";
import "../styles/login.css";
import cart from "../media/loginright.png";
import { useTheme } from "./themeContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  // import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const theme = useTheme();
  const [login, setLogin] = useState(false);
  const [res, setRes] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
   
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post("http://localhost:6969/api/auth", {
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((response) => {
        console.log(response.data);
        setRes(response.data);
        
        if (response.data.message === "Customer") {
          navigate("/");
          notify();
          setLogin(true);
          theme.handlogin(data.get("email"));
        } else {
          setLogin(true);
          notify2()
          theme.handlogin("Admin");
          navigate("/dash");
        }
      })
      .catch((err) => {
        console.log(err);
        notify1();
      }); 
      
     
  };
  function notify2(){
 
    toast.success("Welcome Admin", {
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
function notify(){
 
    toast.success("Login Successful", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
function notify1()
{
  toast.error("Invalid Credentials", {
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
                    <input type="password" placeholder="PASSWORD" name="password" />
                    <button class="login6_submit" value={login}>
                      Login
                    </button>
                    <Link class="forgot_link"to='/rp'>forgotpassword?</Link>
                  </form>
                </div>
              </div>
              <div class="login6_right-inductor text-center justify-content-center">
                <img src={cart} alt="" />
                <p className="primary text-decoration-underline">
                  Not a Member?
                </p>
                <Link
                  class="btn btn-primary text-wrap text-center"
                  to="/register"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
