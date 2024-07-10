import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import dealsoftheday from '../assets/deals_of_the_day.png'

import natural from "../assets/natural.png"; // Adjust the path accordingly

function Carman() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Row>
            <Col xs={12} md={6} lg={4}>
              <img src={dealsoftheday} alt={dealsoftheday} />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <h6>5 in 1 Seed Mix 200G by Nourish You</h6>
              <p>⭐⭐⭐⭐⭐ 5/5</p>
              <p className="deals_para">₹229.00</p>
              <p className="deals_para1">25 in stock</p>
              <Row className="mb-4">
                <Col xs={6}>
                  <Button style={{ border: '1px solid green', backgroundColor: 'white', color: 'green' }}>Add to cart</Button>
                </Col>
                <Col xs={6}>
                  <Button variant="success">Buy Now</Button>
                </Col>
              </Row>
              <select name="cars" style={{ height: '10%', width: '80%' }}>
                <option value="Delivery Details" className="delivery-option">
                  Delivery Details
                </option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <p>dolor sit amet consectetur. Etiam duis eu volutpat eget odio amet fames. Sed velit tempor parturient at.</p>
              <p className="mb-5">Et lectus elit ultricies seget vitae enim. Purus id diam viverra est dignissim ipsum mattis sagittis. Dignissim duis facilisis sit odio.</p>
              <hr className="m-auto" style={{ border: 'none', height: '2px', width: '150px', backgroundColor: '#509264' }} />
              <Row className="mt-5">
                <Col xs={3}>
                  <img src={natural} alt={natural} />
                  <p className="mt-4">natural & Organic</p>
                </Col>
                <Col xs={3}>
                  <img src={natural} alt={natural} />
                  <br />
                  <p className="mt-4">natural & Organic</p>
                </Col>
                <Col xs={3}>
                  <img src={natural} alt={natural} />
                  <p className="mt-4">natural & Organic</p>
                </Col>
                <Col xs={3}>
                  <img src={natural} alt={natural} />
                  <p className="mt-4">natural & Organic</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="carousel-item">
          {/* Content for second carousel item */}
        </div>
        <div className="carousel-item">
          {/* Content for third carousel item */}
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carman;
