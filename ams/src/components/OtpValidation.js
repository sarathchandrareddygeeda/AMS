import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTheme } from "./themeContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {db_link} from '../link.js';
  
export default function OtpValidation() {
    const [res, setRes] = useState(null);
    const navigate = useNavigate();
    const theme = useTheme();
    const handleotp = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(theme.reset)
        axios.post(`${db_link}api/otpvalid`, {
          email:theme.reset,
          otp: data.get("otp")
      })
      .then((response) => {
        console.log(response.data);
        setRes(response.data);
        notify();
          navigate("/changep");
        }
      )
      .catch((err) => {
        console.log(err);
        notify1();
      }); 
      
     
    }
    function notify(){
 
      toast.success("OTP verified", {
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
  toast.error("Invalid OTP", {
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
    <div className="container-fluid border border-black" align="center">
      <form onSubmit={handleotp}>
        <h1>Enter OTP</h1>
        <br />
        <input type="text" placeholder="OTP" name="otp"/>
        <br />
        <br />
        <button className="btn btn-primary"type='submit'>Verify</button>
      </form>
    </div>
  )
}
