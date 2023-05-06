import React ,{useRef} from "react";
import emailjs from '@emailjs/browser'
import axios from "axios";
import { Link } from "react-router-dom";
import { useState} from "react";

export default function RP() {
    const form = useRef();
  const [otp,setOpt]=useState(0);
  const [res, setRes] = useState(null);
  const gen =()=>{
    const min = 1000;
    const max = 9999;
    var k = Math.floor(Math.random() * (max - min + 1)) + min;
    setOpt(k);
  }
  const hand = (e) => { 
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    axios.post('http://localhost:6969/api/resetpass', {
      email : data.get('user_email'),
      otp :data.get('otp')
    }).then((response)=>{
      console.log(response.data);

      setRes(response.data)      
    }).catch((err)=>{console.log(err)})
    emailjs.sendForm(
      "gmail",
      "template_cp2mckc",
      form.current,
      "gfq6NagqRdwFMbbNE"
    );
  };
  return (
    <div>
    <form ref={form} onSubmit={hand}>
    <label>Email</label>
        <input type="email"  onChange={gen} name="user_email" />
        <input hidden type="text" name="otp" value={otp}></input>
{        console.log(otp)
}        <button type="submit" ><Link to="/otpvalid"> Click me </Link></button>
    </form>
    </div>
  );
}
