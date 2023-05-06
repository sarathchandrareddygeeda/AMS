import React , { useEffect }from "react";
import '../styles/user.css'
import axios from "axios";
import { useState } from "react";

export default function User() {
    const [result, setResult] = useState([]);
    const[state, setState]=useState(1)
    

    useEffect(()=>
    {
        getProducts()
    },)

function getProducts() {
    axios.get("http://localhost:6969/api/products-info", {
        params: {}
    }).then((response) => {
        console.log(response.data);
        setResult(response.data);
    }).catch((error) => {
        console.log(error)
    })
}


  return (
    <body class="body_white">
      <br />
      <h1 className="user_heading">Customer Details</h1>
      <br />
      <section class="intro">
        <div class="bg-image h-100" >
          <div class="mask d-flex align-items-center h-100">
            <div class="user_table container">
              <div class="row justify-content-center">
                <div class="col-12">
                  
                    <div class="card-body p-0">
                      <div
                        class="table-responsive table-scroll"
                        data-mdb-perfect-scrollbar="true"
                        
                      >
                        <table class="table table-striped mb-0">
                          <thead >
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Price</th>
                              <th scope="col">Image</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            result.map((obj)=>{
                                return(
                                <tr>
                                  <td>{obj.name}</td>
                                  <td>{obj.price}</td>
                                  <td><img src={obj.image} /></td>
                                </tr>
                                )
                            }
                            )
                          }
                          </tbody>
                         
                        </table>
                      </div>
                    </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}
