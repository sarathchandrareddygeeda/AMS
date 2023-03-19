import React, { useEffect } from "react";
import "../styles/product.css";
import axios from "axios";
import bounce4 from "../media/bike4.png";
import { useState } from "react";
// import { Navigate} from 'react-router-dom';

export default function Product({ children }) {
 const[state, setState]=useState(1)
  const [result, setResult] = useState([]);
  var [up, setUp]=useState([]);
  const [res1, setRes1] = useState();
  useEffect(()=>
  {
    // if(state===1){
    getProducts()
    // setState(0)
    // }
  },[state])

  function getProducts() {
    axios.get("http://localhost:6969/api/card", {
        params: {}
    }).then((response) => {
        console.log(response.data);
        setResult(response.data);
    }).catch((error) => {
        console.log(error)
    })
}
const handleCart= (event, objid,objprice,objname,objimage)=>
{
 console.log(objid)
 console.log(objprice)
 console.log(objname)
 console.log(objimage)
  event.preventDefault();
  
  // const data = new FormData(event.currentTarget);

    axios.post('http://localhost:6969/api/cart', {
        productId:objid,
        name:objname,
        price:objprice,
        image:objimage,
    }).then((response)=>{
      console.log(response.data);
      setRes1(response.data)
    }).catch((err)=>{console.log(err)})
    // setState(state+1)
}
  return (
    <>
    {
        result.map((obj) => (
          <form>
        <div
          className="product_white"
        >

          <div className="product_header">
          <div class="product_grid product_main-content ">
            <div class="product_card">
              <div class="product_image">
                <img src={obj.image} alt="tree" />
              </div>
              <div class="product_description">
                    {obj.name}
                <div class="products_description_buttons">
                  <h3>{obj.price}</h3>

                  <button type="button" class="btn btn-primary " onClick={(e)=>handleCart(e, obj._id,obj.price,obj.name,obj.image)}  name="productId">
                    <small  >Buy Now</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </form>
          ))}   
          </> 
  );
}


