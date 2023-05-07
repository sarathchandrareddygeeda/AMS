import { useState } from "react";
import React from "react";
import "../styles/custinfo.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function CustInfo() {
  const [res, setRes] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post("http://localhost:6969/api/custinfo", {
        fname: data.get("firstname"),
        lname: data.get("lastname"),
        pno:data.get("pno"),
        address: data.get("address"),
        state: data.get("state"),
        country: data.get("country"),
        zipcode: data.get("zipcode"),
        city: data.get("city"),
      })
      .then((response) => {
        console.log(response.data);
        successful();
        navigate("/");
        setRes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function successful(){
 
    toast.success("Order Placed Successfully", {
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
  return (
    <div className="u">
      <h1>Shipping Details</h1>
      <div className="container">
        <h2>Please enter your details.</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" for="firstname">
                First name
              </span>
              <input
                className="field__input"
                type="text"
                id="firstname"
                name="firstname"
              />
            </label>
            <label className="field">
              <span className="field__label" for="lastname">
                Last name
              </span>
              <input
                className="field__input"
                type="text"
                id="lastname"
                name="lastname"
              />
            </label>
            <label className="field">
              <span className="field__label" for="lastname">
                PhoneNumber
              </span>
              <input
                className="field__input"
                type="text"
                id="lastname"
                name="pno"
              />
            </label>
          </div>
          <label className="field">
            <span className="field__label" for="address">
              Address
            </span>
            <input
              className="field__input"
              type="text"
              id="address"
              name="address"
            />
          </label>
          <label className="field">
            <span className="field__label" for="country">
              Country
            </span>
            <input
              className="field__input"
              type="text"
              id="country"
              name="country"
            />
          </label>
          <div className="fields fields--3">
            <label className="field">
              <span className="field__label" for="zipcode">
                Zip code
              </span>
              <input
                className="field__input"
                type="text"
                id="zipcode"
                name="zipcode"
              />
            </label>
            <label className="field">
              <span className="field__label" for="city">
                City
              </span>
              <input className="field__input" type="text" id="city" name="city" />
            </label>
            <label className="field">
              <span className="field__label" for="state">
                State
              </span>
              <input className="field__input" type="text" id="state" name="state" />
            </label>
          </div>
          <hr />
          <div align="center">
          <button className="button" type="submit" >
          Continue
        </button>
        </div>
        </form>
      </div>
    </div>
  );
}
