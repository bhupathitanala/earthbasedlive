import React from 'react'
import { Col, Container, Row, Dropdown, DropdownButton, Card } from 'react-bootstrap';
import './Style.css'
import buycard from '../assets/buycard.png'
import maximize_icon from '../assets/maximize_icon.png'
import green1 from '../assets/green1.png'
import green2 from '../assets/green2.png'
import green3 from '../assets/green3.png'
import green4 from '../assets/green4.png'
import green5 from '../assets/green5.png'
import green6 from '../assets/green6.png'
import green7 from '../assets/green7.png'
import green8 from '../assets/green8.png'

function Greeen_packaging() {
    return (
        <>
            <section>
                <div>
                    <Container className='Section1 my-5'>
                        <Row>
                            <Col lg={12} md={12} sm={12} >
                                <h1 className='Shoppage_Heading1'>Green Packaging</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section>
                <div className='m-5'>
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
                </div>
            </section>

            <section>
                <Container fluid>
                    <Row className='d-flex flex-row justify-content-center'>
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={green1} alt={green1} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Green Packaging</p>
                                        <p className='cardpara2'>Ecosattva GreenFill Void ...</p>
                                        <p className='cardpara3'>₹1,400.00</p>
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
                                <img src={green2} alt={green2} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Green Packaging</p>
                                        <p className='cardpara2'>Ecosattva GreenWrap Eco- ...</p>
                                        <p className='cardpara3'>₹1,350.00-₹4,220.00</p>
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
                                <img src={green3} alt={green3} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Green Packaging</p>
                                        <p className='cardpara2'>Ecosattva GreenWrap Roll ...</p>
                                        <p className='cardpara3'>₹2,000.00</p>
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
                                <img src={green4} alt={green4} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Green Packaging</p>
                                        <p className='cardpara2'>Ecosattva Self Adhesive E...</p>
                                        <p className='cardpara3'>₹754.00</p>
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
                                <img src={green5} alt={green5} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Green Packaging</p>
                                        <p className='cardpara2'>Ecosattva Universal Green...</p>
                                        <p className='cardpara3'>₹8,000.00</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center mt-4 ms-2'>
                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='d-flex flex-row justify-content-center'>
                        <Col lg={2} md={2} sm={12} className='mb-2 p-2'>
                            <Card style={{ borderRadius: '20px' }}>
                                <span class="offers">-39%</span>
                                <img src={green6} alt={green6} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Green Packaging</p>
                                        <p className='cardpara2'>Ecosattva Water Activated...</p>
                                        <p className='cardpara3'>₹600.00</p>
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
                                <img src={green7} alt={green7} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Green Packaging</p>
                                        <p className='cardpara2'>Ecosattva Water Activated...</p>
                                        <p className='cardpara3'>₹1,200.00</p>
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
                                <img src={green8} alt={green8} className='img-fluid shopimg p-3' />
                                <div className="d-flex flex-row justify-content-end ">
                                    <img src={maximize_icon} alt={maximize_icon} className='img-fluid maximize_icon position-absolute' />
                                </div>
                                <div className='d-flex p-2'>
                                    <div className="">
                                        <p className='cardpara1 mt-3'>Green Packaging</p>
                                        <p className='cardpara2'>Ecosattva Water Activated...</p>
                                        <p className='cardpara3'>₹2,000.00</p>
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
export default Greeen_packaging;
