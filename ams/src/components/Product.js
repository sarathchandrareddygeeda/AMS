import React , { useEffect }from "react";
import "../styles/product.css";
import { useState } from "react";
import axios from "axios";
import { Navigate} from 'react-router-dom';
import { useTheme } from "./themeContext";



export default function Product({ children }) {

  const[state, setState]=useState(1)
  const [result, setResult] = useState([]);
  var [up, setUp]=useState([]);
  const [res1, setRes1] = useState();
  const themer = useTheme();
  useEffect(()=>
  {

    getProducts()
  
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

  axios.post('http://localhost:6969/api/cart', {
    productId:objid,
    email:themer.email,
    name:objname,
    price:objprice,
    image:objimage,
}).then((response)=>{
  console.log(response.data);
  setRes1(response.data)
}).catch((err)=>{console.log(err)})
// setState(state+1)
}



  const theme = useTheme();
  if(theme.login===true)
  {
  return (
        <div
          className={theme.theme === true ? "product_dark" : "product_white"}
        >
          <div className="product_header">
          <div class="product_grid product_main-content ">
          {
        result.map((obj) => (
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
          ))}  

            {/* <div class="product_card">
              <div class="product_image">
                <img src={bounce2} alt="tree" />
              </div>

              <div class="product_description">
                Hero Xpulse 200 4V Booking for Ex-showroom Price (Sports
                Red,Blue,Black)
                <br />
                <div class="products_description_buttons">
                  <h3>₹1,37,496</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Buy Now</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
                <img src={bounce3} alt="tree" />
              </div>

              <div class="product_description">
                Hero Xtreme 160R Booking for Ex-showroom Price (Matt Axis
                Grey)/(Matt Axis Red)
                <div class="products_description_buttons">
                  <h3>₹1,23,496</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Buy Now</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
                <img src={bounce4} alt="tree" />
              </div>

              <div class="product_description">
                Hero HF Deluxe (Self Start) Booking for Ex-showroom Price (Candy
                Blazing Red/Black/Blue)
                <div class="products_description_buttons">
                  <h3>₹65,488</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Buy Now</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
                <img src={bounce5} alt="tree" />
              </div>

              <div class="product_description">
                Hero Pleasure+ VX Drum Booking for Ex-showroom Price (Matte
                Vernier Grey)
                <div class="products_description_buttons">
                  <h3> ₹70,508 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Buy Now</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce6} alt="tree" />
              </div>

              <div class="product_description">
                Hero Pleasure+ VX Drum Booking for Ex-showroom Price (Pole star
                Blue)
                <div class="products_description_buttons">
                  <h3> ₹70,508 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Buy Now</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce7} alt="tree" />
              </div>

              <div class="product_description">
                Hero Destini 125 Drum Booking for Ex-showroom Price (Nexus Blue)
                <div class="products_description_buttons">
                  <h3> ₹83,568 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Buy Now</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce8} alt="tree" />
              </div>

              <div class="product_description">
                Hero Maestro Edge 125 Drum Booking for Ex-showroom Price (Mattep
                )
                <div class="products_description_buttons">
                  <h3> ₹77,896 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Buy Now</small>
                  </button>
                </div>
              </div>
            </div> */}
          </div>
          </div>
        </div>
  );
}
if(theme.login===false){
  return(
    <Navigate to="/login" />
  )
}
}
