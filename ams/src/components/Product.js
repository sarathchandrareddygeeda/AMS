import React , { useEffect }from "react";
import "../styles/product.css";
import { useState } from "react";
import axios from "axios";
import { Navigate , Link} from 'react-router-dom';
import { useTheme } from "./themeContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Product({ children }) {
  const[state, setState]=useState(1)
  const [result, setResult] = useState(" ");
  var [up, setUp]=useState([]);
  const [res1, setRes1] = useState();
  const [pid,setpid] = useState(null);
  const themer = useTheme();
  const handProductId= (event, objid)=>{
    console.log(objid)
    setpid(objid)
    themer.handProductId(objid);
  }
  useEffect(()=>
  {
    getProducts()
  },[state])
  function notifycart(){
 
    toast.success("Added to cart Successfully", {
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
  function notifycart1()
{
  toast.error("Something went wrong Try again", {
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
  notifycart();
  setRes1(response.data)
}).catch((err)=>{console.log(err)

  notifycart1();
})
}
  const theme = useTheme();
  if(theme.login===true)
  {
    if(result===" "){
      return(
        <div className='perloader'>
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      )

    }
    else{
  return (
        <div
          className={theme.theme === true ? "product_dark" : "product_white"}
        >
          <div className="product_header">
          <div className="product_grid product_main-content ">
          {
        result.map((obj) => (
            <div className="product_card">
              <div className="product_image">
                <img src={obj.image} alt="tree" />
              </div>
              <div className="product_description">
                    {obj.name}
                <div className="products_description_buttons">
                  <h3>₹{obj.price}</h3>

                  <button type="button" className="btn btn-primary " onClick={(e)=>handleCart(e, obj._id,obj.price,obj.name,obj.image)}  name="productId">
                 <small  >Buy Now</small>
                  </button>
                  {/* <button type="button" className="btn btn-primary " onClick={(e)=>handProductId(e, obj._id) } name="productId">
                  <Link to='/custinfo'><small  >Buy Now</small></Link>
                  </button> */}
                </div>
              </div>
            </div>
          ))}  
          </div>
          </div>
        </div>
  );
          }
}
if(theme.login===false){
  return(
    <Navigate to="/login" />
  )
}
}
