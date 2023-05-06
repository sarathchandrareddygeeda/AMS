import { useEffect, useState } from "react";
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
      fetch("http://localhost:6969/api/uploadspare", {
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
      <h1 className='servicehead'>Add Spare Parts</h1>
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