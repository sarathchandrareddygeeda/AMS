import React from "react";
import user from "../media/userimg1.png";
import customer from "../media/customerimg1.png"
import { Link } from "react-router-dom";
import upload from "../media/upload.png"
import service1 from "../media/services1.png"
import product1 from "../media/products12.png"
export default function Dashboard() {
  return (
    <div className="admin_body">
    <div className={"product_white"}>
      <div className="product_header">
        <div className="product_grid product_main-content ">
          
            <div className="product_card">
              <div className="product_image">
                <img src={user} alt="tree" />
              </div>
              <div className="product_description">
                {/* {obj.name} */}
                <div className="products_description_buttons">
                  {/* <h3>{obj.price}</h3> */}
                <Link to='/admin-user'>
                  <button
                    type="button"
                    className="btn btn-primary "
                    name="productId"
                  >
                    <small>Users</small>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product_card">
              <div className="product_image">
                <img src={customer} alt="tree" />
              </div>
              <div className="product_description">
                {/* {obj.name} */}
                <div className="products_description_buttons">
                  {/* <h3>{obj.price}</h3> */}
                <br />
                <Link to='/customers'>
                  <button
                    type="button"
                    className="btn btn-primary "
                    name="productId"
                  >
                    <small>Customers</small>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product_card">
              <div className="product_image">
                <img src={upload} alt="tree" />
              </div>
              <div className="product_description">
                {/* {obj.name} */}
                <div className="products_description_buttons">
                  {/* <h3>{obj.price}</h3> */}
                <br />
                <Link to='/uploadselect'>
                  <button
                    type="button"
                    className="btn btn-primary "
                    name="productId"
                  >
                    <small>Upload</small>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product_card">
              <div className="product_image">
                <img src={service1} alt="tree" />
              </div>
              <div className="product_description">
                {/* {obj.name} */}
                <div className="products_description_buttons">
                  {/* <h3>{obj.price}</h3> */}
                <br />
                <Link to='/serviceinfo'>
                  <button
                    type="button"
                    className="btn btn-primary "
                    name="productId"
                  >
                    <small>Service History</small>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product_card">
              <div className="product_image">
                <img src={product1} alt="tree" />
              </div>
              <div className="product_description">
                {/* {obj.name} */}
                <div className="products_description_buttons">
                  {/* <h3>{obj.price}</h3> */}
                <br />
                <Link to='/productinfo'>
                  <button
                    type="button"
                    className="btn btn-primary "
                    name="productId"
                  >
                    <small>Products</small>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>





  );
}