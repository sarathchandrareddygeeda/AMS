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
    axios.get("http://localhost:6969/api/admin-user", {
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
                              <th scope="col">Id</th>
                              <th scope="col">Username</th>
                              <th scope="col">Email</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            result.map((obj)=>{
                                return(
                                <tr>
                                  <td>{obj._id}</td>
                                  <td>{obj.username}</td>
                                  <td>{obj.email}</td>
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
