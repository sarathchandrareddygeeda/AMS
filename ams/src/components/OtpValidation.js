import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTheme } from "./themeContext";

export default function OtpValidation() {
    const [res, setRes] = useState(null);
    const navigate = useNavigate();
    const theme = useTheme();
    const handleotp = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(theme.reset)
        axios.post("http://localhost:6969/api/otpvalid", {
          email:theme.reset,
          otp: data.get("otp")
      })
      .then((response) => {
        console.log(response.data);
        setRes(response.data);
          navigate("/changep");
        }
      )
      .catch((err) => {
        console.log(err);
      }); 
      
     
    }

  return (
    <div>
      <form onSubmit={handleotp}>
        <input type="text"  name="otp"/>
        <button type='submit'>Verify</button>
      </form>
    </div>
  )
}
