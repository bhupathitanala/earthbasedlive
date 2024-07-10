import React, { useState, useEffect, useRef } from 'react';
import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';
import Footer from './Footer';
// import '../App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Firstone from './Firstone';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// image

import firstcard from '../assets/Rectangle 13.png'
import cheese_lg from '../assets/cheese_lg.png'
import cheese_back_lg from '../assets/cheese_back_lg.png'
import cheese_about_lg from '../assets/cheese_about_lg.jpg'
import cheese_about_making_lg from '../assets/cheese_about_making_lg.png'
import cheese_mini from '../assets/cheese_mini.png'
import cheese_back_mini from '../assets/cheese_back_mini.png'
import cheese_about_mini from '../assets/cheese_about_mini.jpg'
import cheese_about_making_mini from '../assets/cheese_about_making_mini.png'
import third from '../assets/third.png'
import fourth from '../assets/side_bottle.png'
import fifth from '../assets/fifth.png'
import sixth from '../assets/sixth.png'
import seventh from '../assets/seventh.png'
import buycard from '../assets/Group 6.png'
import maxmixe from '../assets/maximize-2.png'
import mini_penut from '../assets/mini-penutbutter.jpg'
import mini_process from '../assets/mini-penutbutter-process.jpg'
import mini_labbey from '../assets/mini-labbey.jpg'
import mini_back from '../assets/mini-penutbutter-back.jpg'
import penuatbutter from '../assets/penut-butter.jpg'
import penutbutter_back from '../assets/penut-butter-back.jpg'
import penutbuter_process from '../assets/penut-process.jpg'
import penut_labbey from '../assets/labbey.jpg'
import { Repeat } from 'react-bootstrap-icons';
import maximizeIcon from '../assets/maximize-2.png';
import buyIcon from '../assets/Group 6.png';
import flag from '../assets/india-flag-round-circle-icon.webp';
import cod from '../assets/Untitled design (49).png';



const cardInfo = [
  {
    id: 1,
    image: penuatbutter,
    image2: penutbutter_back,
    image3: penutbuter_process,
    image4: penut_labbey,
    image_mini1: mini_penut,
    image_mini2: mini_back,
    image_mini3: mini_process,
    image_mini4: mini_labbey,



    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    stocks: '25 in stock',
    description: 'Peanut Butter Unsweeten d super...',
    descriptionfull: 'Peanut Butter Unsweetend Super Chunky By Zvatra | 200gm',
    catagerious: ' Health & Wellness, Healthy Diet foods',


    about: 'dolor sit amet consectetur. Etiam duis eu volutpat eget odio amet fames. Sed velit tempor parturient at.',
    about2: 'Et lectus elit ultricies seget vitae enim. Purus id diam viverra est dignissim ipsum mattis sagittis. Dignissim duis facilisis sit odio.',
    price: '₹250.00',
  },
  {
    id: 2,
    image: cheese_lg,



    image2: cheese_back_lg,
    image3: cheese_about_lg,
    image4: cheese_about_making_lg,
    image_mini1: cheese_mini,
    image_mini2: cheese_back_mini,
    image_mini3: cheese_about_mini,
    image_mini4: cheese_about_making_mini,



    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'Premium Vegan Cheese Shred...',
    descriptionfull: 'Premium Vegan Cheese Shred by Veclan',
    catagerious: 'Food, Cheese, Dairy alternative',


    about: '(Plant-based, Cholesterol-free, Gluten-free, Zero Trans fat) All Purpose use – Pizza, Pastas, Sandwiches, Tacos, Nachos- 200g',
    about2: '– 100% PLANT BASED (Dairy-free & Gluten-free).',

    price: '₹365.00',
  },
  {
    id: 3,
    image: third,
    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'Alt Co ota  Milk suger free...',
    descriptionfull: 'Alt Co ota drink Milk suger free',
    catagerious: ' Dairy alternative, Food, Mylk',
    price: '₹207.00 – ₹414.00',
  },
  {
    id: 4,
    image: seventh,
    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Cacao & Nut Spread by Maso.....',
    descriptionfull: 'Cacao & Nut Spread by Mason & Co.',
    catagerious: ' Health & Wellness, Healthy Diet foods',

    price: '₹430.00',
  },
  {
    id: 5,
    image: fifth,
    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'Alt Co Almond drink Milk...',
    descriptionfull: 'Alt Co Almond drink Milk',
    catagerious: ' Dairy alternative, Food, Mylk',
    price: '₹207.00 – ₹414.00',
  },
  {
    id: 6,
    image: sixth,
    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Cacao Powder by Mason & Co....',
    descriptionfull: 'Cacao Powder by Mason & Co.',
    catagerious: ' Dairy alternative, Food, Mylk',
    price: '₹695',
  },

  // Add more card information as needed
];
const cardInfoo = [
  {
    id: 7,
    image: fourth,
    title: 'Product 7',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'Description for Product 7',
    price: '₹700.00',
  },
];
const cardInfoz = [
  {
    id: 1,
    image: penuatbutter,
    image2: penutbutter_back,
    image3: penutbuter_process,
    image4: penut_labbey,
    image_mini1: mini_penut,
    image_mini2: mini_back,
    image_mini3: mini_process,
    image_mini4: mini_labbey,



    title: 'Product 1',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    stocks: '25 in stock',
    description: 'Description  1',

    about: 'dolor sit amet consectetur. Etiam duis eu volutpat eget odio amet fames. Sed velit tempor parturient at.',
    about2: 'Et lectus elit ultricies seget vitae enim. Purus id diam viverra est dignissim ipsum mattis sagittis. Dignissim duis facilisis sit odio.',
    price: '₹100.00',
  },
  {
    id: 2,
    image: cheese_lg,
    title: 'Product 2',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'Description   2',
    price: '₹200.00',
  },
  {
    id: 3,
    image: third,
    title: 'Product 3',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'Description  3',
    price: '₹300.00',
  },
  {
    id: 4,
    image: seventh,
    title: 'Product 4',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Description  4',
    price: '₹400.00',
  },
  {
    id: 5,
    image: fifth,
    title: 'Product 5',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'Description   5',
    price: '₹500.00',
  },
  {
    id: 6,
    image: sixth,
    title: 'Product 6',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Description   6',
    price: '₹600.00',
  },

  // Add more card information as needed
];


function TopPicks() {

  const handleShowModal = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const ProductCarousel = ({ cardInfoz }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleShowModal = (card) => {
      setSelectedCard(card);
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

  };

  const Carousel = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleShowPopup = (cardId) => {
      const card = cardInfo.find((card) => card.id === cardId);
      setSelectedCard(card);
      setShowPopup(true);
    };

    const handleClosePopup = () => {
      setShowPopup(false);
    };
  };


  const handleMiniImageClick = (imageSrc) => {
    setSelectedCard({
      ...selectedCard,
      image: penut_labbey,

      // Update the image source of the selected card
    });
  };


  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const handleClosePopup = () => setShowPopup(false);
  const handleShowPopup = (cardId) => {
    const card = cardInfo.find((card) => card.id === cardId);
    setSelectedCard(card);
    setShowPopup(true);
  };

  const handleShowPopupo = (cardId) => {
    const card = cardInfoo.find((card) => card.id === cardId);
    setSelectedCard(card);
    setShowPopup(true);
  };


  const carouselRef1 = useRef(null);

  const goToPrev1 = () => {
    if (carouselRef1.current) {
      carouselRef1.current.prev();
    }
  };


  const goToNext1 = () => {
    if (carouselRef1.current) {
      carouselRef1.current.next();
    }
  };

  useEffect(() => {
    const minPerSlide = 4;
    const carouselItems = document.querySelectorAll('.carousel .carousel-item');

    carouselItems.forEach((carouselItem) => {
      let next = carouselItem.nextElementSibling;

      if (!next) {
        next = carouselItem.parentNode.firstElementChild;
      }

      const firstChildClone = next.firstElementChild.cloneNode(true);
      carouselItem.appendChild(firstChildClone);

      for (let i = 0; i < minPerSlide - 1; i++) {
        next = next.nextElementSibling || carouselItem.parentNode.firstElementChild;
        const childClone = next.firstElementChild.cloneNode(true);
        carouselItem.appendChild(childClone);
      }
    });
  }, []);

  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>


            <div className='col-6 hello'> <h6>Hottest Products Now</h6>
            </div>
            <div className='col-6 d-flex flex-row justify-content-end'>
              <button class=" p-2  mb-3 mr-1 second_carsoul_button_bg " type="button" data-bs-target="#myCarousel2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="  ms-5 p-2    mb-3 second_carsoul_button_bg" type="button" data-bs-target="#myCarousel2" data-bs-slide="next">
                <span class="carousel-control-next-icon " aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>



            <div id="myCarousel2" class="carousel slide   " data-bs-ride="carousel"  >

              <div class="carousel-inner w-100   ">

                <div class="carousel-item active">
                  <div class="col-md-3">
                    <div class="card card-body   main_div_card shadow" >

                      <img src={firstcard} className='p-3' />
                      <img src={maxmixe} className=' img-fluid  maxmize_img_car ' />
                      <div className='row mt-5'>
                        <div className='col-4'>
                          <img src={flag} alt={flag} className=' img-fluid    ' />
                        </div>
                        <div className='col-4'>
                          <img src={flag} alt={flag} className=' img-fluid    ' />
                        </div>
                        <div className='col-4'>
                          <img src={flag} alt={flag} className=' img-fluid    ' />
                        </div>

                      </div>
                      <div className='d-flex mt-5 p-2'>

                        <div>
                          <p className='cardpara1'>Daily Alternative </p>
                          <p className='cardpara2'>Millet Milk Original by N....</p>
                          <p className='cardpara3'>₹11.00 – ₹290.00</p>
                        </div>
                        <div className='mt-5'>
                          <img src={buycard} alt={buycard} />


                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="carousel-item ">
                  <div class="col-md-3   "  >
                    <div class="card card-body main_div_card  shadow " >

                      <div className='d-flex'>
                        <div className='col-9'>
                          <img src={cheese_lg} className='p-3 img-fluid' style={{ height: '300px', width: '500px' }} />
                          <img src={maxmixe} className=' img-fluid  maxmize_img_car ' />
                        </div>
                        <div className='col-3 mt-3'>

                          <img src={flag} alt={flag} className='mb-5' style={{ height: '50px', width: '50px' }} />

                          <svg xmlns="http://www.w3.org/2000/svg" width="73" height="70" fill="currentColor" class="bi bi-truck mb-5" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                          </svg>

                          <img src={cod} alt={flag} className='mb-3 mt-3' style={{ height: '70px', width: '73px' }} />

                        </div>
                      </div>

                      <div className='d-flex mt-5 p-2'>                        <div>
                        <p className='cardpara1'>Daily Alternative </p>
                        <p className='cardpara2'>Millet Milk Original by N....</p>
                        <p className='cardpara3'>₹21.00 – ₹290.00</p>
                      </div>
                        <div className='mt-5'>
                          <img src={buycard} alt={buycard} />
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="col-md-3">
                    <div class="card card-body main_div_card  shadow " >

                      {/* <h6 className='pan_india ms-3' style={{ writingMode: 'vertical-rl' }}>Pan India</h6> */}
                      <marquee className='pan_india ms-3 mt-3 ' behavior="scroll" direction="right">
                        <h6>Pan India</h6>
                      </marquee>
                      <div className='row'>
                        <div className='col-2'>
                          <h5 className='pan_india ms-2 mt-1' style={{ writingMode: 'vertical-rl' }}>Cash on Delivery</h5>
                        </div>
                        <div className='col-10'>
                          <img src={third} className='' style={{ height: '180px' }} />
                          <img src={maxmixe} className=' img-fluid  maxmize_img_car ' />
                        </div>
                      </div>
                      {/* <img src={third} className='p-3' />
                      <img src={maxmixe} className=' img-fluid  maxmize_img_car ' /> */}
                      {/* <h6 className='pan_india ms-3 mt-3 '>Free Shipping</h6> */}
                      <marquee className='pan_india ms-3 mt-3 ' behavior="scroll" direction="left">
                        <h6>Free Shipping</h6>
                      </marquee>
                      <div className='d-flex mt-5 p-2'>                        <div>
                        <p className='cardpara1'>Daily Alternative </p>
                        <p className='cardpara2'>Millet Milk Original by N....</p>
                        <p className='cardpara3'>₹21.00 – ₹290.00</p>
                      </div>
                        <div className='mt-5'>
                          <img src={buycard} alt={buycard} />
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

                <div class="carousel-item ">
                  <div class="col-md-3   "  >
                    <div class="card card-body main_div_card  shadow " >


                      <img src={fifth} className='p-3' />
                      <img src={maxmixe} className=' img-fluid  maxmize_img_car ' />
                      <div className='d-flex mt-5 p-2'>                        <div>
                        <p className='cardpara1'>Daily Alternative </p>
                        <p className='cardpara2'>Millet Milk Original by N....</p>
                        <p className='cardpara3'>₹21.00-₹290.00</p>
                      </div>
                        <div className='mt-5'>
                          <img src={buycard} alt={buycard} />
                        </div>
                      </div>


                    </div>
                  </div>
                </div>


                <div class="carousel-item ">
                  <div class="col-md-3   "  >
                    <div class="card card-body main_div_card  shadow " >


                      <img src={sixth} className='p-3' />
                      <img src={maxmixe} className=' img-fluid  maxmize_img_car ' />
                      <div className='d-flex mt-5 p-2'>                        <div>
                        <p className='cardpara1'>Daily Alternative </p>
                        <p className='cardpara2'>Millet Milk Original by N....</p>
                        <p className='cardpara3'>₹31.00 – ₹290.00</p>
                      </div>
                        <div className='mt-5'>
                          <img src={buycard} alt={buycard} />
                        </div>
                      </div>


                    </div>
                  </div>
                </div>


                <div class="carousel-item ">
                  <div class="col-md-3   "  >
                    <div class="card card-body main_div_card  shadow " >


                      <img src={seventh} className='p-3' />
                      <img src={maxmixe} className=' img-fluid  maxmize_img_car  ' />
                      <div className='d-flex mt-5 p-2'>                        <div>
                        <p className='cardpara1'>Daily Alternative </p>
                        <p className='cardpara2'>Millet Milk Original by N....</p>
                        <p className='cardpara3'>₹31.00 – ₹290.00</p>
                      </div>
                        <div className='mt-5'>
                          <img src={buycard} alt={buycard} />
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default TopPicks;

