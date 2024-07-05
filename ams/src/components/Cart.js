import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/preloader.css";
import "../styles/cart.css";
import { useTheme } from "./themeContext";
import { Link } from "react-router-dom";
import { Navigate} from 'react-router-dom';
import { db_link } from "../link";
function Cart1() {
  const [result, setResult] = useState(" ");
  const themer = useTheme();
  const [sum,setSum]=useState(0)


  useEffect(() => {
    getProducts1();
  });
  function getProducts1() {
    axios
      .get(`${db_link}api/cart-get`, {
        params: {},
      })
      .then((response) => {
        console.log(response.data);
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleDelete(objId) {
    console.log(objId);
    axios
      .post(`${db_link}api/remove`, {
        _id: objId,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const theme = useTheme();
  if(theme.login===true)
  {
  if (result === " ") {
    return (
      <div className="perloader">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4" align="center">
          <h3 className="cart_shopp">Shopping Cart</h3>
        </div>
        <div className="cart_probut" align="center">
                                <a href="#!" className="text-danger">
                                  <i className="fas fa-trash fa-lg">
                                  <button className="btn btn-info" type="button" >
                                    <Link className="cart_buybut"to="/custinfo">Proceed</Link>
                                  </button>
                                   <br />
                                  </i>
                                  </a>
                              </div>
        {result.map((obj) => {
          if (obj.email === themer.email) {
            return (
              <div>
                <section className="h-100">
                  <div className="cart_container h-100 py-5 ">
                    <div className="row d-flex justify-content-center align-items-center h-100 card-body">
                      <div className="col-10 border border-dark">
                        <div className=" mb-4">
                          <div className="card-body p-4">
                            <div className="row d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <div className="k justify-content-between align-items-center">
                                  <img
                                    className="cart_img"
                                    src={obj.image}
                                    alt="Cotton T-shirt"
                                  />
                                </div>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <p className="lead fw-normal mb-4">{obj.name}</p>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 offset-lg-1">
                                <h5 className="mb-0">₹{obj.price}</h5>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-danger">
                                  <i className="fas fa-trash fa-lg">
                                  <button className="btn btn-primary" type="button" onClick={() => handleDelete(obj._id)}>
                                  Remove
                                  </button>
                                   <br />
                                  </i>
                                  </a>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-danger">
                                  <i className="fas fa-trash fa-lg">
                                  <button className="btn btn-primary" type="button" >
                                    <Link className="cart_buybut"to="/custinfo">Buy Now</Link>
                                  </button>
                                   <br />
                                  </i>
                                  </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
            
          } 
        })}
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
export default Cart1;