import React from "react";
import { Card, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import maximize_icon from '../assets/maximize_icon.png'
import buycard from '../assets/buycard.png'
import kitchen from '../assets/kitchen.png'
import kitchen2 from '../assets/kitchen2.png'
import kitchen3 from '../assets/kitchen3.png'
import kitchen4 from '../assets/kitchen4.png'
import kitchen5 from '../assets/kitchen5.png'
import kitchen6 from '../assets/kitchen6.png'
import kitchen7 from '../assets/kitchen7.png'
// import kitchen8 from '../assets/kitchen8.png'
// import kitchen9 from '../assets/kitchen9.png'
// import kitchen10 from '../assets/kitchen10.png'
// import kitchen11 from '../assets/kitchen11.png'
// import kitchen12 from '../assets/kitchen12.png'
// import kitchen13 from '../assets/kitchen13.png'
// import kitchen14 from '../assets/kitchen14.png'
// import kitchen15 from '../assets/kitchen15.png'
// import kitchen16 from '../assets/kitchen16.png'
// import kitchen17 from '../assets/kitchen17.png'

function Kitchen() {
    return (
        <>
            <section>
                <Container>
                    <Row className="my-5">
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="Shoppage_Heading1">Kitchen and Dining</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className="my-4">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <DropdownButton className="price_btn" title='price'>
                                <Dropdown.Item></Dropdown.Item>
                                <Dropdown.Item></Dropdown.Item>
                                <Dropdown.Item></Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container fluid>
                    <Row className="d-flex flex-row justify-content-center">
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen} alt={kitchen} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>BECO Best Home Care Combo...</p>
                                        <p className='cardpara3'>₹598.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen2} alt={kitchen2} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Beco Compostable Inches Garbage B....</p>
                                        <p className='cardpara3'>₹390.00-₹540</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen3} alt={kitchen3} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Beco Eco-Friendly Reusabl...</p>
                                        <p className='cardpara3'>₹350.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen4} alt={kitchen4} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Beco Sustainable Bamboo T...</p>
                                        <p className='cardpara3'>₹270.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen5} alt={kitchen5} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Coconut Coir Dish Scrub p...</p>
                                        <p className='cardpara3'>₹299.00-₹599.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        {/* <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen} alt={kitchen} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>BECO Best Home Care Combo...</p>
                                        <p className='cardpara3'>₹598.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col> */}
                    </Row>
                </Container>
            </section>
            <section>
            <Container fluid>
                    <Row className="d-flex flex-row justify-content-center">
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen6} alt={kitchen6} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Coconut Shell Small Snack...</p>
                                        <p className='cardpara3'>₹399.00-₹749.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen7} alt={kitchen7} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Coconut Shell Spoons by G...</p>
                                        <p className='cardpara3'>₹390.00-₹540</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen3} alt={kitchen3} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Beco Eco-Friendly Reusabl...</p>
                                        <p className='cardpara3'>₹350.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen4} alt={kitchen4} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Beco Sustainable Bamboo T...</p>
                                        <p className='cardpara3'>₹270.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen5} alt={kitchen5} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Coconut Coir Dish Scrub p...</p>
                                        <p className='cardpara3'>₹299.00-₹599.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        {/* <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={kitchen} alt={kitchen} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>BECO Best Home Care Combo...</p>
                                        <p className='cardpara3'>₹598.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Kitchen;