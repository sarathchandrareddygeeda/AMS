import React from 'react'

export default function ChangePassword() {
  return (
    <div>
         <div className='service'>
	<div className='services_form container'>
		<div className='service_header'>
      <form className="serviceform" onSubmit={uploadImage}>
      <h1 className='servicehead'>Add Bikes</h1>
      <br />
      <div className="upload_head">
        <div className="upload_inner">
        <label className="services_label">Description</label>
        <br />
                      <input type="text" className="serviceinput" placeholder="Name" name='name' />
                      <br />
        <label className="services_label">Price</label>
        <br />
                      <input type="number" className="serviceinput" placeholder="price" name='price' />
                      <br />
                      <label className="services_label">Upload Image</label>
                      <br />
          <input accept="image/*" type="file" className="serviceinput" onChange={covertToBase64} />
          {image === "" || image === null ? (
            ""
          ) : (
            <img width={100} height={100} src={image} />
          )}
          <br />
          <button type="submit" className="service_but">Upload</button>
        </div>
      </div>
      </form>
</div>
</div>
</div>
    </div>
  )
}
