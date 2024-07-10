import React from "react";
import { Card, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import buycard from '../assets/buycard.png'
import maximize_icon from '../assets/maximize_icon.png'
import dish1 from '../assets/dish1.png'
import dish2 from '../assets/dish2.png'
import dish3 from '../assets/dish3.png'
import dish4 from '../assets/dish4.png'
import dish5 from '../assets/dish5.png'
import dish6 from '../assets/dish6.png'
import dish7 from '../assets/dish7.png'
import dish8 from '../assets/dish8.png'
import dish9 from '../assets/dish9.png'
import dish10 from '../assets/dish10.png'


function Dishwash() {
    return (
        <>
            <section>
                <Container>
                    <Row className="Section1 my-5">
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="Shoppage_Heading1">Dishwash</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="Section1 my-5">
                <Container>
                    <Row>
                        <Col>
                            <DropdownButton className="price_btn ms-3" title="Price">
                                <Dropdown.Item href="#/action-1" className='Shoppage_para2'>₹174.00 - ₹290.00</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" className='Shoppage_para2'>₹290.00 - ₹400.00</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" className='Shoppage_para2'>₹600.00 - ₹600.00</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="Section2">
                <Container fluid>
                    <Row className="d-flex flex-row justify-content-center">
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={dish1} alt={dish1} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Ecotyl Coconut Scrub Pad ...</p>
                                        <p className='cardpara3'>₹240.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={dish2} alt={dish2} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Multipurpose</p>
                                        <p className='cardpara3'>₹599.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={dish8} alt={dish8} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Natural Dishwash ...</p>
                                        <p className='cardpara3'>₹275.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={dish9} alt={dish9} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Natural Dishwash ...</p>
                                        <p className='cardpara3'>₹275.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={dish10} alt={dish10} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Ultimate Kitchen ...</p>
                                        <p className='cardpara3'>₹700.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="d-flex flex-row justify-content-center">
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={dish3} alt={dish3} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Raaso Bestseller Cleaning...</p>
                                        <p className='cardpara3'>₹599.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={dish5} alt={dish5} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Raaso SOVI® Concentrated...</p>
                                        <p className='cardpara3'>₹105.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={dish4} alt={dish4} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Raaso SOVI® Dishwash Liq...</p>
                                        <p className='cardpara3'>₹249.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={dish6} alt={dish6} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Raaso SOVI® Dishwash Liq...</p>
                                        <p className='cardpara3'>₹135.00-₹999.7</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={dish7} alt={dish7} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Raaso SOVI® Multipurpose...</p>
                                        <p className='cardpara3'>₹219.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Dishwash;