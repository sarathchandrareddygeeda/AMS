import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTheme } from "./themeContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


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
      notify();
        navigate("/login");
      }
    )
    .catch((err) => {
      console.log(err);
      notify1();
    }); 
  }
  function notify(){
 
    toast.success("Password Updated", {
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
toast.error("Something went wrong! Please try again", {
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
      <form onSubmit={handlechangesubmit}>
        <br />
        <h4>Enter new Password</h4>
        <br />
        <input type="password" placeholder="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" name='password'/>
        <br />
        <br />
        <button className="btn btn-primary" type="submit" >Change Password</button>
      </form>
    </div>
  )
}
