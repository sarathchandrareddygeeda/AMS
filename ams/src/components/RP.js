import React ,{useRef} from "react";
import emailjs from '@emailjs/browser'
import { useState } from "react";
export default function RP() {
    const form = useRef();
  const [otp,setOpt]=useState(0);
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
  };
  return (
    <div>
    <form ref={form} onSubmit={hand}>
    <label>Email</label>
        <input type="email"  onChange={gen} name="user_email" />
        <input hidden type="text" name="otp" value={otp}></input>
{        console.log(otp)
}        <button type="submit" >Click me </button>
    </form>
    </div>
  );
}
