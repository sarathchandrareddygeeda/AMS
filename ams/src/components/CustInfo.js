import { useState } from "react";
import React from "react";
import "../styles/custinfo.css";
import axios from "axios";
export default function CustInfo() {
  const [res, setRes] = useState(null);

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
        setRes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="u">
      <div class="container">
        <h1>Shipping</h1>
        <p>Please enter your shipping details.</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <div class="fields fields--2">
            <label class="field">
              <span class="field__label" for="firstname">
                First name
              </span>
              <input
                class="field__input"
                type="text"
                id="firstname"
                name="firstname"
              />
            </label>
            <label class="field">
              <span class="field__label" for="lastname">
                Last name
              </span>
              <input
                class="field__input"
                type="text"
                id="lastname"
                name="lastname"
              />
            </label>
            <label class="field">
              <span class="field__label" for="lastname">
                PhoneNumber
              </span>
              <input
                class="field__input"
                type="text"
                id="lastname"
                name="pno"
              />
            </label>
          </div>
          <label class="field">
            <span class="field__label" for="address">
              Address
            </span>
            <input
              class="field__input"
              type="text"
              id="address"
              name="address"
            />
          </label>
          <label class="field">
            <span class="field__label" for="country">
              Country
            </span>
            <input
              class="field__input"
              type="text"
              id="country"
              name="country"
            />
          </label>
          <div class="fields fields--3">
            <label class="field">
              <span class="field__label" for="zipcode">
                Zip code
              </span>
              <input
                class="field__input"
                type="text"
                id="zipcode"
                name="zipcode"
              />
            </label>
            <label class="field">
              <span class="field__label" for="city">
                City
              </span>
              <input class="field__input" type="text" id="city" name="city" />
            </label>
            <label class="field">
              <span class="field__label" for="state">
                State
              </span>
              <input class="field__input" type="text" id="state" name="state" />
            </label>
          </div>
          <hr />
          <button class="button" type="submit" >
          Continue
        </button>
        </form>
      </div>
    </div>
  );
}
