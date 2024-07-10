import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { useNavigate, useNavigation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap'

import Apicalls, { post_url }  from "../Apicalls";



export default function Vendors() {
  const [vendors, setVendors] = useState([])
  const user = useSelector((state) => state.user.auth.user)
  const navigate = useNavigate()
  // if (user?.ID) {
  useEffect(() => {
    Promise.all(
      [Apicalls.get('vendors')]
    ).then(([data]) => {
        console.log(data)
        setVendors(data.data)
    }).catch((err) => {
        console.log(err)
    })
  }, []);
  // }else {
  //   navigate('/login')
  // }
  return (
    <>
    <div className='container'>
      <div  className='row justify-content-center'>
        {
          vendors.map((ele, index) => (
            <>
              
              <div className='col-9 col-sm-4 col-md-2 text-center' style={{ alignItems:"center", margin:"10px", height:"200px", lineHeight:"200px", background:"#fff" }}>
                <a href={`/brands/${ele.ID}`}><img src={post_url + 'brandimages/' + ele.img_url} alt={ele.brandName} style={{ maxWidth:"90%", maxHeight:"90%" }} /></a>
              </div>
            </>
          ))
        }
        <div className='clearfix'></div>
      </div>
    </div>
    </>
  )
}
