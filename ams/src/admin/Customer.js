import React , { useEffect }from "react";
import '../styles/user.css'
import axios from "axios";
import { useState } from "react";

export default function User() {
    const [result, setResult] = useState([]);
    const[state, setState]=useState(1)
    const[c,setC]=useState(0)

    useEffect(()=>
    {
        getProducts()
    },)

function getProducts() {
    axios.get("http://localhost:6969/api/admin-custinfo", {
        params: {}
    }).then((response) => {
        setResult(response.data);
        hand(result.length)
    }).catch((error) => {
        console.log(error)
    })
}
function hand(k)
{
  setC(k);
}


  return (
    <body className="body_white">
      <br />
      <h1 className="user_heading">Customer Details ( Count : {c})</h1>
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
                              <th scope="col">Phone Number</th>
                              <th scope="col">Address</th>
                              <th scope="col">Zip Code</th>
                              <th scope="col">City</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            result.map((obj)=>{
                                return(
                                <tr>
                                  <td>{obj.fname}</td>
                                  <td>{obj.pno}</td>
                                  <td>{obj.address}</td>
                                  <td>{obj.zipcode}</td>
                                  <td>{obj.city}</td>
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
