import React , { useEffect }from "react";
import pr1 from "../media/profileimg.jpg";
import { Link } from "react-router-dom";
import "../styles/profile.css";
import { useState } from "react";
import { useTheme } from "./themeContext";
import axios from "axios";
import { db_link } from "../link";

export default function Profile() {
  const [result, setResult] = useState([]);
  const themer = useTheme();
  useEffect(()=>
  {
      getProducts()
  },)
  function getProducts() {
    axios.get(`${db_link}api/profile-user`, {
        params: {}
    }).then((response) => {
        console.log(response.data);
        setResult(response.data);
    }).catch((error) => {
        console.log(error)
    })
} return(

    <div>
      <>
    <div className="profile_center">
      <div className={"profile_white"}>
        <div className="profile_grid profile_main-content ">
          <div className="profile_card">
            <div className="profile_image">
              <img src={pr1} alt="tree" />
            </div>
            <div className="profile_description">
            {
                            result.map((obj)=>{
                              if(obj.email===themer.email)
                                return(
                                  <>
                                  <p>UserName   :{obj.username}</p>
                                  <p>Email  :{obj.email}</p>
                                  </>
                                )
                            }
                            )
                          }
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
    </div>
  )
  }

