import React, { useState } from "react";
import '../styles/services.css'
import axios from "axios"
import { Navigate , Link} from 'react-router-dom';
import { useTheme } from "./themeContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { db_link } from "../link";
export default function Services() {
	const [res, setRes] = useState(null);
	const themer = useTheme();
	const handleSubmit =(event)=>
{
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  axios.post(`${db_link}api/services`, {
    fname : data.get('fname'),
    bcompany : data.get('bcompany'),
	bmodel:data.get('bmodel'),
	bnumber:data.get('bnumber'),
	problem:data.get('problems')
  }).then((response)=>{
    console.log(response.data);
	notify()
    setRes(response.data)      
  }).catch((err)=>{console.log(err)
       		 notify1(err)})
}
function notify(){
 
    toast.success("Booked Successfully", {
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
  const theme = useTheme();
  if(theme.login===true)
  {
  return (
	<div className='service'>
 <ToastContainer/>
	<div className='services_form container'>
		<div className='service_header'>
	  <form className='serviceform' onSubmit={handleSubmit}>
		<h1 className='servicehead'>Book Our Service</h1>
		<br />
		<label className="services_label">Full name</label>
		<br />
		<input type="text" className="serviceinput" id="bcompany" name="fname" />
		<br />
		<label className="services_label">Bike Company</label>
		<br />
		<input type="text" className="serviceinput" id="bcompany" name="bcompany" />
		<br />
		<label className="services_label" >Bike Model</label>
		<br />
		<input type="text" className="serviceinput" id="bmodel" name="bmodel" />
		<br />
		<label className="services_label" >Bike Number</label>
		<br />
		<input type="text" className="serviceinput" id="bmodel" name="bnumber" />
		<br />
		<label className="services_label" >Date</label>
		<br />
		<input type="date" className="serviceinput" id="bmodel" name="date" />
		<br />
		<label className="services_label" >Are there any problems?</label>
		<br />
		<textarea className="serviceinput" name="problems"></textarea>
		<br />
		<button className="service_but"type='submit'>Book</button>
	  </form>
    </div>
	</div>
	</div>
  )
}
if(theme.login===false){
  return(
    <Navigate to="/login" />
  )
}
}
