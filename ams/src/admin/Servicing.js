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
    axios.get("http://localhost:6969/api/service-info", {
        params: {}
    }).then((response) => {
        console.log(response.data);
        setResult(response.data);
    }).catch((error) => {
        console.log(error)
    })
}


  return (
    <body className="body_white">
      <br />
      <h1 className="user_heading">Customer Details</h1>
      <br />
      <section className="intro">
        <div className="bg-image h-100" >
          <div className="mask d-flex align-items-center h-100">
            <div className="user_table container">
              <div className="row justify-content-center">
                <div className="col-12">
                  
                    <div className="card-body p-0">
                      <div
                        className="table-responsive table-scroll"
                        data-mdb-perfect-scrollbar="true"
                        
                      >
                        <table className="table table-striped mb-0">
                          <thead >
                            <tr>
                              <th scope="col">User Name</th>
                              <th scope="col">Bike Company</th>
                              <th scope="col">Bike Model</th>
                              <th scope="col">Bike Number</th>
                              <th scope="col">Problems</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            result.map((obj)=>{
                                return(
                                <tr>
                                  <td>{obj.fname}</td>
                                  <td>{obj.bcompany}</td>
                                  <td>{obj.bmodel}</td>
                                  <td>{obj.bnumber}</td>
                                  <td>{obj.problem}</td>
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
