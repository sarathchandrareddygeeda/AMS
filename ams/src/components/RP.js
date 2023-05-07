import React ,{useRef} from "react";
import emailjs from '@emailjs/browser'
import axios from "axios";
import { Link } from "react-router-dom";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./themeContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export default function RP() {
    const form = useRef();
  const [otp,setOpt]=useState(0);
  const [res, setRes] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const gen =()=>{
    const min = 1000;
    const max = 9999;
    var k = Math.floor(Math.random() * (max - min + 1)) + min;
    setOpt(k);
  }
  const hand = (e) => { 
    e.preventDefault();
   
    emailjs.sendForm(
      "gmail",
      "template_cp2mckc",
      form.current,
      "gfq6NagqRdwFMbbNE"
    );
     const data = new FormData(e.currentTarget);
    axios.post('http://localhost:6969/api/resetpass', {
      email : data.get('user_email'),
      otp :data.get('otp')
    }).then((response)=>{
      console.log(response.data);
      theme.handReset(data.get("user_email"));
      notify();
      navigate('/otpvalid');
      setRes(response.data)      
    }).catch((err)=>{console.log(err)
    notify1();
  })
   
  };
  function notify(){
 
    toast.success("OTP sent Successfully", {
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
  toast.error("Email not registered", {
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
    <form ref={form} onSubmit={hand}>
      <h1>Enter Email Address</h1>
      <br />
      <br />
    <label>Email</label>
        <input type="email" onChange={gen} name="user_email" />
        <input hidden type="text" name="otp" value={otp} ></input>
{        console.log(otp)
}        
<br />
<br />
<button className="btn btn-primary"type="submit">Verify email </button>
    </form>
    </div>
  );
}
