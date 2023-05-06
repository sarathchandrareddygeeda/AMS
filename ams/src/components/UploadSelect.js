import React from "react";
import "../styles/uploadselect.css";
import up1 from "../media/uploadselect1.png";
import up2 from "../media/uploadselect2.png";
import { Link } from "react-router-dom";
export default function UploadSelect() {
  return (
    <>
    <div className="upload_center">
      <div className={"uploads_white"}>
        <div class="upload_grid upload_main-content ">
          <div class="upload_card">
            <div class="upload_image">
              <img src={up2} alt="tree" />
            </div>
            <div class="upload_description">
              <h2>Spare Parts</h2>
              <div class="upload_description_buttons">
                {/* <h3>{obj.price}</h3> */}
                <Link to="/uploadspare">
                  <button
                    type="button"
                    class="btn btn-primary "
                    name="productId"
                  >
                    <small>Add SpareParts</small>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="upload_card">
            <div class="upload_image">
              <img src={up1} alt="tree" />
            </div>
            <div class="upload_description">
            <h2>Bikes</h2>
              <div class="products_description_buttons">
                {/* <h3>{obj.price}</h3> */}
                <Link to="/upload">
                  <button
                    type="button"
                    class="btn btn-primary "
                    name="productId"
                  >
                    <small>Add Bike</small>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
