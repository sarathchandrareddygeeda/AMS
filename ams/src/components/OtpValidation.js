import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function OtpValidation() {
    const [res, setRes] = useState(null);
    const navigate = useNavigate();
    const handleotp = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post("http://localhost:6969/api/otpvalid", {
        otp: data.get("otp")
      })
      .then((response) => {
        console.log(response.data);
        setRes(response.data);
          navigate("/");
        }
      )
      .catch((err) => {
        console.log(err);
      }); 
      
     
    }

  return (
    <div>
      <form onSubmit={handleotp}>
        <input type="text"  name='otp'/>
        <button type='submit'>Verify</button>
      </form>
    </div>
  )
}
