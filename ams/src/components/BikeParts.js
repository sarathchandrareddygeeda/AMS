import React from "react";
import "../styles/BikeParts.css";
import bounce1 from "../media/p1.png";
import bounce2 from "../media/p2.png";
import bounce3 from "../media/p3.png";
import bounce4 from "../media/p4.png";
import bounce5 from "../media/p8.png";
import bounce6 from "../media/p6.png";
import bounce7 from "../media/p7.png";
import bounce8 from "../media/p9.png";
import bounce9 from "../media/p10.png";
import { Navigate} from 'react-router-dom';

import { useTheme } from "./themeContext";

export default function BikeParts({ children }) {
  const theme = useTheme();
if(theme.login===true)
{
  return (
    <div>
        <div
          className={theme.theme === true ? "product_dark" : "product_white"}
        >
          <div className="product_header">
          <div class="product_grid product_main-content ">
            <div class="product_card">
              <div class="product_image">
                <img src={bounce1} alt="tree" />
                <br></br>
                <br></br>
                <br></br>
              </div>

              <div class="product_description">
                Brake Disc Caliper
                <div class="products_description_buttons">
                  <h3> ₹4,650</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce2} alt="tree" />
                <br></br>
              </div>
              <div>
                <br></br>
              </div>
              <div class="product_description">
                Brake Disc Plate
                <div class="products_description_buttons">
                  <h3>₹2,850</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
                <br></br>

                <img src={bounce3} alt="tree" />
                <br></br>
                <br></br>
                <br></br>
              </div>

              <div class="product_description">
                Clutch Plates
                <div class="products_description_buttons">
                  <h3>₹1,350</h3>
                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
                <img src={bounce4} alt="tree" />
                <br></br>
              </div>
              <div class="product_description">
                Disc Brake Master Cylinder Assy
                <div class="products_description_buttons">
                  <h3>₹829</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
                <br></br>
                <br></br>

                <img src={bounce5} alt="tree" />

                <br></br>
                <br></br>
                <br />
              </div>

              <div class="product_description">
                Clutch Shoe
                <div class="products_description_buttons">
                  <h3> ₹70,508 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce6} alt="tree" />
              </div>

              <div class="product_description">
                One Way Clutch
                <div class="products_description_buttons">
                  <h3> ₹70,508 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce7} alt="tree" />
              </div>

              <div class="product_description">
                Clutch Assembly
                <div class="products_description_buttons">
                  <h3> ₹1,849 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce8} alt="tree" />
              </div>

              <div class="product_description">
                Break Drum
                <div class="products_description_buttons">
                  <h3> ₹1,390 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce9} alt="tree" />
              </div>

              <div class="product_description">
                Clutch Pulley
                <div class="products_description_buttons">
                  <h3> ₹1,384 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
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
