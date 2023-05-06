import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTheme } from "./themeContext";

export default function ChangePassword() {
  const [res, setRes] = useState(null);
  const theme = useTheme();
    const navigate = useNavigate();
  const handlechangesubmit =(event) =>{
    console.log(theme.reset)
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      axios.post("http://localhost:6969/api/modifypass", {
      email:theme.reset,
      password: data.get("password")
    })
    .then((response) => {
      console.log(response.data);
      setRes(response.data);
        // navigate("/");
      }
    )
    .catch((err) => {
      console.log(err);
    }); 
  }
  return (
    <div>
      <form onSubmit={handlechangesubmit}>
        <label>Enter new Password</label>
        <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" name='password'/>
        <button type="submit" >click me</button>
      </form>
    </div>
  )
}
