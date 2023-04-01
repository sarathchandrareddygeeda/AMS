import React, { useState } from "react";
import '../styles/services.css'
import axios from "axios"

export default function Services() {
	const [res, setRes] = useState(null);
	const handleSubmit =(event)=>
{
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  axios.post('http://localhost:6969/api/services', {
    fname : data.get('fname'),
    bcompany : data.get('bcompany'),
	bmodel:data.get('bmodel'),
	bnumber:data.get('bnumber'),
	problem:data.get('problems')
  }).then((response)=>{
    console.log(response.data);
    setRes(response.data)      
  }).catch((err)=>{console.log(err)})
}
  return (
	<div className='service'>
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
