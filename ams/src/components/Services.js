import React from 'react'
import '../styles/services.css'
export default function Services() {
  return (
	<div className='service'>
	<div className='services_form container'>
		<div className='service_header'>
	  <form className='serviceform'>
		<h1 className='servicehead'>Book Our Service</h1>
		<br />
		<label className="services_label">Full name</label>
		<br />
		<input type="text" className="serviceinput" id="bcompany" name="fname" />
		<br />
		<label className="services_label">Bike Company</label>
		<br />
		<input type="text" className="serviceinput" id="bcompany" name="fname" />
		<br />
		<label className="services_label" >Bike Model</label>
		<br />
		<input type="text" className="serviceinput" id="bmodel" name="lname" />
		<br />
		<label className="services_label" >Bike Number</label>
		<br />
		<input type="text" className="serviceinput" id="bmodel" name="lname" />
		<br />
		<label className="services_label" >Date</label>
		<br />
		<input type="date" className="serviceinput" id="bmodel" name="lname" />
		<br />
		<label className="services_label" >Are there any probelms?</label>
		<br />
		<textarea className="serviceinput"></textarea>
		<br />
		<button className="service_but"type='submit'>Book</button>
	  </form>
    </div>
	</div>
	</div>
  )
}
