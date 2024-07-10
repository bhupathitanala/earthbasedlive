import {Navbar, Nav, NavDropdown, Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from 'react';

// Images

import Shopping_Img1 from '../assets/Conscious_Food _Apple_shopping.jpg';
import  garcina_image from '../assets/garcinia_indica_kokum_shopping2.webp';
import  coffee_powder_image from '../assets/COFFEE-POWDER-POUCH-shopping3.jpg';
import  ctc_tea_image from '../assets/CTC-TEA-1-shopping4.jpg';
import  green_tea_image from '../assets/GREEN-TEA-shopping5.jpg';
import  freeze_image from '../assets/Freeze_Dried_Berry_shopping6.jpeg';
import  blended_image  from '../assets/BLENDED-shopping7.jpg';
 
import maximize_icon from '../assets/maximize_icon.png'
import buycard from '../assets/buycard.png'



// image


function  Health_Wellness() {

 
      const [selectedCategory, setSelectedCategory] = useState('');

      const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
      };
    
      const getProductsByCategory = (category) => {
        // Here you can fetch products based on the selected category from an API or database
        // For this example, I'm just returning some static data
        switch (category) {
          case 'Healthy Diet Foods':
            return [
                <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>
,
              // Add more product cards as needed
            ];
          case 'Protein Powder':
            return [
                <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>
,
              // Add more product cards as needed
            ];
          
            return [
                <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>
    ,
            // Add more product cards as needed
            ];

          default:
              return [] ;
        }
      };
      
      
  return (
    <>
     
    {/* <Firstone/>  */}

    <div className="Section1 mt-5">
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h1 className="Shoppage_Heading1 ">Chocolates</h1>
                </Col>
            </Row>
        </Container>
    </div>



    <div className="Section2 mb-5 mt-5 d-none d-md-block">
        <Container>
            <Row>
                 
    <div>
    <h2>Select a category:</h2>
        <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select a Category</option>
            <option value="Healthy Diet Foods">Healthy Diet Foods</option>
            <option value="Protein Powder">Protein Powder</option>
        </select>

    {selectedCategory && (
        <div>
            <h3>Products in {selectedCategory} category:</h3>
            <ul>
                {getProductsByCategory(selectedCategory).map((product, index) => (
                    <React.Fragment key={index}>
                    {product}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )}
    </div>


                <Col lg={2} md={2} sm={12}>
                    <div className="button1 pt-2 ps-2 shadow d-flex flex-row justify-content-center">
                        <p className="Shoppage_Para1 text-center">Popularity</p>
                        <p className="chevron-down ms-2 mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="#5A5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={12}>
                    <div className="button1 pt-2 ps-2 shadow d-flex flex-row justify-content-center">
                        <p className="Shoppage_Para2 ">₹174.00 - ₹290.00</p>
                        <p className="chevron-down ms-2 mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="#5A5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></p>
                    </div>
                </Col>
                <Col lg={2} md={2} sm={12}>
                    <div className="button1 pt-2 ps-2 shadow d-flex flex-row justify-content-center">
                        <p className="Shoppage_Para1 text-center">All Brands</p>
                        <p className="chevron-down ms-2 mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="#5A5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={12}>
                    <div className="pt-2 d-flex flex-row justify-content-center">
                        <p className="Shoppage_Para1 ">Showing 1-20 Of resilts.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>



    <div className="Section3">
        <Container fluid >
        {/* Row 1  */}

        <Row className="d-flex flex-row justify-content-center">

            {/* starting  Cards */}

            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>


            {/* starting  Cards */}

            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={garcina_image} alt={garcina_image} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Garcinia In........</p>
                            <p className='cardpara3'>₹159.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>
            
            {/* starting  Cards */}

            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={coffee_powder_image} alt={coffee_powder_image} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>COFFEE POWDER POUCH 2 scal ........</p>
                            <p className='cardpara3'>₹285.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>

            {/* starting  Cards */}


            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={ctc_tea_image} alt={ctc_tea_image} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Ecotyl CTC Tea (Chai Patti) ........</p>
                            <p className='cardpara3'>₹285.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>

            {/* starting  Cards */}

            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={green_tea_image} alt={green_tea_image} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Ecotyl Green Tea Leaves Fr ........</p>
                            <p className='cardpara3'>₹340.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>

        </Row>

        {/* Row 2  */}

        <Row className="d-flex flex-row justify-content-center">

            {/* starting  Cards */}

            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={freeze_image} alt={freeze_image} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Freeze Dried Berry -Berry  ........</p>
                            <p className='cardpara3'>₹2700.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>
            
            {/* starting  Cards */}

            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={blended_image} alt={blended_image} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Freeze Dried Blended   ........</p>
                            <p className='cardpara3'>₹2700.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>


            {/* starting  Cards */}


            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>

            {/* starting  Cards */}


            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>

            {/* starting  Cards */}


            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>


        </Row>

        {/* Row 3 */}

        <Row className="d-flex flex-row justify-content-center">


            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>

            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={blended_image} alt={blended_image} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Freeze Dried Blended   ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>

            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>


            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>


            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>


        </Row>



        {/* Row 4  */}

        <Row className="d-flex flex-row justify-content-center">

            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>


            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>


            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>

            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>


            <Col lg={2} md={2} sm={12} className='mb-5 p-2'>
                <Card style={{ borderRadius: '20px' }}>
                    <span class="offers">-39%</span>
                    <div className='  image_border'>
                    <img src={Shopping_Img1} alt={Shopping_Img1} className='img-fluid shopimg p-3 ' />
                        <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car  '/>
                    </div> 
                    <div className='d-flex p-2'>
                        <div className="">
                            <p className='cardpara1 mt-3'>Daily Alternative </p>
                            <p className='cardpara2'>Conscious Food Apple Cider  ........</p>
                            <p className='cardpara3'>₹490.00</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                            <img src={buycard} alt={buycard} className="img-fluid buycard" />
                        </div>
                    </div>
                </Card>
            </Col>


        </Row>

        </Container>
    </div>
     
    </>
  )
}


export default Health_Wellness;
