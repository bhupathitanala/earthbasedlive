import React from "react";
import { Card, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import maximize_icon from '../assets/maximize_icon.png'
import buycard from '../assets/buycard.png'
import floor1 from '../assets/floor1.png'
import floor2 from '../assets/floor2.png'
import floor3 from '../assets/floor3.png'
import floor4 from '../assets/floor4.png'
import floor5 from '../assets/floor5.png'
import floor6 from '../assets/floor6.png'
import floor7 from '../assets/floor7.png'
import floor8 from '../assets/floor8.png'
import floor9 from '../assets/floor9.png'

function Floor() {
    return (
        <>

            <section>
                <Container>
                    <Row className="my-5">
                        <Col lg={12} md={12} sm={12} >
                            <h1 className="b">Floor</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="my-5">
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
                                <img src={floor1} alt={floor1} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Antibacterial All...</p>
                                        <p className='cardpara3'>₹599.00</p>
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
                                <img src={floor2} alt={floor2} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Antibacterial All...</p>
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
                                <img src={floor3} alt={floor3} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Antibacterial All...</p>
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
                                <img src={floor9} alt={floor9} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Antibacterial All...</p>
                                        <p className='cardpara3'>₹620.00</p>
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
                                <img src={floor4} alt={floor4} className='img-fluid shopimg p-3' />
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
                    </Row>
                    <Row className="d-flex flex-row justify-content-center">
                        <Col lg={2} md={2} sm={12} className="mb-2 p-2">
                            <Card  style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={floor5} alt={floor5} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Natural Floor Cle...</p>
                                        <p className='cardpara3'>₹310.00</p>
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
                                <img src={floor6} alt={floor6} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Natural Floor Cle...</p>
                                        <p className='cardpara3'>₹300.00</p>
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
                                <img src={floor7} alt={floor7} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Hygenia Natural Floor Cle...</p>
                                        <p className='cardpara3'>₹630.00</p>
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
                                <img src={floor8} alt={floor8} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Cleaning Essentials</p>
                                        <p className='cardpara2'>Raaso SOVI® Vinegar Powe...</p>
                                        <p className='cardpara3'>₹259.00-₹999.00</p>
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

export default Floor;