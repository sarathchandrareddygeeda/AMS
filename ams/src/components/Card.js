// import React from 'react'
// import axios from 'axios';
// // import '../styles/card.scss'
// export default function Card() {
  import { useEffect, useState } from "react";
import { db_link } from "../link";
  export default function Card() {
    const [image, setImage] = useState("");
    const [allImage,setAllImage]=useState([]);
    function covertToBase64(e) {
      console.log(e);
  
      var reader = new FileReader();
  
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        console.log(reader.result); //base64encoded string
        setImage(reader.result);
      };
  
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  
    const  uploadImage=(event) =>{
      const data1 = new FormData(event.currentTarget);
      fetch(`${db_link}api/upload`, {
        method: "POST",
  
        crossDomain: true,
  
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
  
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          base64: image,
          name:data1.get('name'),
          price:data1.get('price')
        })
      }).then((res) => res.json()).then((data) => console.log(data))
    }
  
  
  
  
  
    return (
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
    );
  }
  
  // // Get the file input element
  // const fileInput = document.getElementById('images');
  
  // // Set up an event listener for when a file is selected
  // // fileInput.addEventListener('change', function() {
  //   // Create a new FormData object
  //   const formData = new FormData();
  
  //   // Add the file to the FormData object
  //   // formData.append('file', fileInput.files[0]);
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //   // Make an Axios request to upload the file
  //   axios.post('http://localhost:6969/api/upload', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  //   .then(function(response) {
  //     console.log(response);
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
  // };
  
  //   return (
  //     <div className-="upload">
  //       <form onSubmit={handleSubmit} enctype="multipart/form-data">
  
  //   <h1><strong>File upload</strong> with style and pure CSS</h1>
  
  //   {/* <div className="form-group">
  //     <label for="title">Title <span>Use title case to get a better result</span></label>
  //     <input type="text" name="title" id="title" className="form-controll"/>
  //   </div>
  //   <div className="form-group">
  //     <label for="caption">Caption <span>This caption should be descriptiv</span></label>
  //     <input type="text" name="caption" id="caption" className="form-controll"/>
  //   </div> */}
  
  //   <div className="form-group file-area">
  //         <label for="images">Images <span>Your images should be at least 400x300 wide</span></label>
  //     <input type="file" name="image" id="images" required="required" multiple="multiple" />
  //     <div className="file-dummy">
  //       <div className="success">Great, your files are selected. Keep on.</div>
  //       <div className="default">Please select some files</div>
  //     </div>
  //   </div>
  
  //   <div className="form-group">
  //     <button type="submit">Upload images</button>
  //   </div>
  
  // </form>
  
  //     </div>
  //   )
  // }
  