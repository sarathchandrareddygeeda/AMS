import React, { useEffect } from "react";
import "../styles/product.css";
import axios from "axios";
// import bounce4 from "../media/bike4.png";
import { useState } from "react";
// import { Navigate} from 'react-router-dom';
// import { useTheme } from "./themeContext";

export default function Product({ children }) {
 const[state, setState]=useState(1)
  const [result, setResult] = useState([]);
  var [up, setUp]=useState([]);
  const [res1, setRes1] = useState();
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
return(
result.map((obj)=>{
  if(obj.name==="chatla sai")
  {
    return(
        <div className="product_white">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
    )
  }
})
)
//   return (
//     <>
//     {
//         result.map((obj) => (
//         <div className="product_white">
//           <div className="product_header">
//           <div class="product_grid product_main-content ">
//             <div class="product_card">
//               <div class="product_image">
//                 <img src={obj.image} alt="tree" />
//               </div>
//               <div class="product_description">
//                     {obj.name}
//                 <div class="products_description_buttons">
//                   <h3>{obj.price}</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//         </div>
//           ))}   
//           </> 
//   );
}


