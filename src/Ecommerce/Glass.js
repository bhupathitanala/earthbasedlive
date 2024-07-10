import React from "react";
import { Card, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import maximize_icon from '../assets/maximize_icon.png'
import buycard from '../assets/buycard.png'
import glass1 from '../assets/glass1.png'
import glass2 from '../assets/glass2.png'
import glass3 from '../assets/glass3.png'


function Glass()
{
    return(
        <>
        <section>
            <Container>
                <Row className="my-5">
                    <Col lg={12} md={12} sm={12}>
                    <h1 className="Shoppage_Heading1">Glass Cleaners</h1>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col>
                    <DropdownButton className="price_btn" title="Price">
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
                            <Card  style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={glass1} alt={glass1} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Glass Cleaner ...</p>
                                        <p className='cardpara3'>₹275.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card  style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={glass2} alt={glass2} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Raaso SOVI® Vinegar Powe...</p>
                                        <p className='cardpara3'>₹149.00-₹499.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card  style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={glass3} alt={glass3} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Raaso SOVI® Vinegar Powe...</p>
                                        <p className='cardpara3'>₹149.00-₹499.00</p>
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
export default Glass;