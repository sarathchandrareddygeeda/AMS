import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from "react";
import '../styles/preloader.css';
import '../styles/cart.css';
import { useTheme } from './themeContext';
function Cart1() {
    const [result, setResult] = useState(" ");
  const themer= useTheme();
    useEffect(()=>
{
  getProducts1()

})
    function getProducts1() {
        axios.get("http://localhost:6969/api/cart-get", {
            params: {}
        }).then((response) => {
            console.log(response.data);
            setResult(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }








    const handleDelete = (id)=> {
      if (window.confirm(`Are you sure you want to delete ${id}`)) {
        fetch("http://localhost:6969/api/remove", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            _id: id,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
          console.log(data.data);
            getProducts1();
          });
      }
    };















    if(result===" "){
      return(
        <div className='perloader'>
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      )

    }else{
  return (
    
    <div className="cart_styling">
     <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="cart_shopping">Shopping Cart</h3>
            
          </div>
          
    { result.map((obj)=>{   
      if( obj.email===themer.email){  
        return(
            <div>
    <section class="h-100" >
    <div class="cart_container h-100 py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-10">     
          <div class="card rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <div class="k justify-content-between align-items-center"><img className="cart_img"
                    src={obj.image}alt="Cotton T-shirt"/>
                    </div>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <p class="lead fw-normal mb-4">{obj.name}</p>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button class="btn btn-link px-2"
                   >
                    <i class="fas fa-minus"></i>
                  </button>
  
                  <input id="form1" min="0" name="quantity" value="2" type="number"
                    class="form-control form-control-sm" />
  
                  <button class="btn btn-link px-2"
                    >
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 class="mb-0">{obj.price}</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"><button class="btn btn-primary" type="button" onClick={()=>handleDelete(obj._id)}>Remove</button></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
        )
       
      }      
    }


  )
          }
                
  </div>
  )
  
}
}
export default Cart1
