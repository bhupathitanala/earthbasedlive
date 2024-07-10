/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Carousel2 from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import flagimg from '../assets/flagimg.png'
import mini_slider_3 from '../assets/banner-768.png'
import mini_slider_2 from '../assets/banner-578.png'
import mini_slider_1 from '../assets/banner-425.png'

import ProductImg1_Homepage from '../assets/ProductImg1_Homepage.png';
import ProductImg6_Homepage from '../assets/ProductImg6_Homepage.png';
import ProductImg7_Homepage from '../assets/ProductImg7_Homepage.png';

import insta1 from '../assets/insta/1.jpg';
import insta2 from '../assets/insta/2.jpg';
import insta3 from '../assets/insta/3.jpg';
import insta5 from '../assets/insta/5.jpg';
import insta6 from '../assets/insta/6.jpg';
import insta8 from '../assets/insta/8.jpg';
import insta9 from '../assets/insta/9.jpg';
import kitchen17 from '../assets/kitchen17.png';

import axios from 'axios';

// import sliderimage from '../assets/header_images/slider_image.png'
import sliderimage from '../assets/banner-1800.png'
import cheese_about_lg from '../assets/cheese_about_lg.jpg'

import trophy from '../assets/Cup.gif';
import leafs from '../assets/leaf.gif';
import rabbit from '../assets/rabbit.png';
import artist from '../assets/artist.png';
import paper_bag from '../assets/paper_bag.png';
import save_water from '../assets/save_water.png';
import seed_plant from '../assets/seed_plant.png';
import globe from '../assets/globe.png';
import twenty_k from '../assets/twenty k+.png';
import two_h from '../assets/two h+.png';
import eco from '../assets/eco.png';
import vegan from '../assets/vegan.png';
import alternatives from '../assets/alternatives.png';

/* slick carousel */
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Apicalls, { post_url } from '../Apicalls';
import { useSelector } from 'react-redux';
import ActionAreaCard from './MuiCardnew';
import store from '../store';
import { storeUserError } from '../AuthActions';
import { useCart } from '../stores/context/CartContext';

// shopping cart
import Shoppingcart from './Shoppingcart';

// Loader imports
import Loader from "./../CommonComponents/Loader";

function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCategoryCarouselVisible, setIsCategoryCarouselVisible] = useState(false);
  const { addToCart, cardInfo } = useCart()
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(post_url + 'newspost');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleShowModal = (card) => {
    console.log(card);
    if (typeof card.productImages === 'undefined') {
      card.productImages = JSON.stringify([card.main_img]);
    } else {
      card.productImages = JSON.stringify([card.main_img, ...JSON.parse(card.productImages)]);
    }
    setSelectedCard(card);
    setShowModal(true);
  };

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const ProductCarousel = ({ hottestProducts }) => {
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
      const card = topPicks.find((card) => card.id === cardId);
      setSelectedCard(card);
      setShowPopup(true);
    };

    const handleClosePopup = () => {
      setShowPopup(false);
    };
  };


  const handleMiniImageClick1 = (imageSrc) => {
    setSelectedCard({
      ...selectedCard,
      image: selectedCard.image1,
    });
  };
  const handleMiniImageClick2 = (imageSrc) => {
    setSelectedCard({
      ...selectedCard,
      image: selectedCard.image2,
    });
  };
  const handleMiniImageClick3 = (imageSrc) => {
    setSelectedCard({
      ...selectedCard,
      image: selectedCard.image3,
    });
  };
  const handleMiniImageClick4 = (imageSrc) => {
    setSelectedCard({
      ...selectedCard,
      image: selectedCard.image4,
    });
  };




  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [subCategories, setSubCategories] = useState([])
  const [categories, setCategories] = useState([])
  const [banners, setBanners] = useState([])

  // console.log(selectedCard)

  const handleClosePopup = () => setShowPopup(false);


  const handleShowPopupo = (cardId) => {
    const card = topPicksInfo.find((card) => card.id === cardId);
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
    const minPerSlide = 6;
    const carouselItems = document.querySelectorAll('.carousel .carousel-item');

    carouselItems.forEach((carouselItem) => {
      let next = carouselItem.nextElementSibling;

      if (!next) {
        next = carouselItem.parentNode.firstElementChild;
      }

      const firstChildClone = next.firstElementChild.cloneNode(true);
      carouselItem.appendChild(firstChildClone);

      for (let i = 1; i < minPerSlide; i++) { // Start from 1 to avoid duplicating the first item
        next = next.nextElementSibling || carouselItem.parentNode.firstElementChild;
        const childClone = next.firstElementChild.cloneNode(true);
        carouselItem.appendChild(childClone);
      }
    });
  }, []);
  // const [cartItems, setCartItems] = useState([]);
  const user = useSelector((state) => state.user.auth.user)
  const navigate = useNavigate()

  const addToCartItems = (product) => {
    // const updatedCart = [...cartItems, product];
    // setCartItems(updatedCart);
    // // Save updated cart to local storage
    // localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    addToCart(product)
    if (user?.ID) {
      Promise.all([
        Apicalls.post('cart', { userId: user.ID, productId: product.ID, status: 1 })
      ]).then(([data]) => {
        if (Object.keys(data.data).length > 0) {
          console.log('Added to clart')
        }
        else {
          console.log('internal server error')
        }
      }).catch((err) => {
        console.log('internal server error')
      })
    }
    else {
      if (localStorage.getItem('cart_product_ids')) {
        var cartProductIds = JSON.parse(localStorage.getItem('cart_product_ids'));
        if (Array.isArray(cartProductIds)) {
          cartProductIds.push(product.ID)
          cartProductIds = Array.from(new Set(cartProductIds));
          localStorage.setItem('cart_product_ids', JSON.stringify(cartProductIds));
        }
        else {
          localStorage.setItem('cart_product_ids', JSON.stringify([product.ID]));
        }
      }
      else {
        localStorage.setItem('cart_product_ids', JSON.stringify([product.ID]))
      }
    }
  };


  function addToWishList(product) {
    if (user?.ID) {
      Promise.all([
        Apicalls.post('wishlist', { userId: user?.ID, productId: product.ID, status: 1 })
      ]).then(([data]) => {
        if (Object.keys(data.data).length > 0) {
          console.log('Added to wishlist')
        }
        else {
          console.log('internal server error')
        }
      }).catch((err) => {
        console.log('internal server error')
      })
    }
    else {
      if (localStorage.getItem('wishlist_product_ids')) {
        var cartProductIds = JSON.parse(localStorage.getItem('wishlist_product_ids'));
        if (Array.isArray(cartProductIds)) {
          cartProductIds.push(product.ID)
          cartProductIds = Array.from(new Set(cartProductIds));
          localStorage.setItem('wishlist_product_ids', JSON.stringify(cartProductIds));
        }
        else {
          localStorage.setItem('wishlist_product_ids', JSON.stringify([product.ID]));
        }
      }
      else {
        localStorage.setItem('wishlist_product_ids', JSON.stringify([product.ID]))
      }
    }
  };


  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 1200, min: 992 },
  //     items: 4
  //   },
  //   tablet: {
  //     breakpoint: { max: 992, min: 769 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 768, min: 0 },
  //     items: 2
  //   }
  // };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 991 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 991, min: 767 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 320 },
      items: 2,
    },
    minimobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
    },
  };

  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 992, min: 769 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2
    }
  };


  /* react slick functions for recently added*/
  const sliderRef = useRef(null);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const sliderRef33 = useRef(null);

  const goToPrev33 = () => {
    if (sliderRef33.current) {
      sliderRef33.current.slickPrev();
    }
  };

  const goToNext33 = () => {
    if (sliderRef33.current) {
      sliderRef33.current.slickNext();
    }
  };

  const sliderRef99 = useRef(null);

  const goToPrev99 = () => {
    if (sliderRef99.current) {
      sliderRef99.current.slickPrev();
    }
  };

  const goToNext99 = () => {
    if (sliderRef99.current) {
      sliderRef99.current.slickNext();
    }
  };




  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          height: '100%',
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          height: '100%',
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          height: '100%',
          initialSlide: 1
        }
      },

    ]

  };

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]

  };
  const settings33 = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 1
    //     }
    //   },

    // ]

  };

  const generateResponsiveSettings = (numSlides) => {
    return [
      {
        breakpoint: 1250,
        breakpoint: 1250,
        settings: {
          slidesToShow: numSlides,
          slidesToScroll: 1,
          slidesToShow: numSlides,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, numSlides), // Show 4 slides at 1024px
          slidesToScroll: 1,
          initialSlide: Math.min(1, numSlides - 1), // Ensure initialSlide is within the range of available slides
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, numSlides), // Show 4 slides at 1024px
          slidesToScroll: 1,
          initialSlide: Math.min(1, numSlides - 1), // Ensure initialSlide is within the range of available slides
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(4, numSlides), // Show 4 slides in tablet view
          slidesToScroll: 1,
          initialSlide: Math.min(1, numSlides - 1), // Ensure initialSlide is within the range of available slides
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: Math.min(3, numSlides),
          slidesToScroll: 1,
          // initialSlide: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: Math.min(2, numSlides),
          slidesToScroll: 1,
          initialSlide: Math.min(1, numSlides - 1) // Ensure initialSlide is within the range of available slides
        }
      },
    ];
  };


  const [settings2, setSettings2] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default to 5 slides
    slidesToScroll: 1,
    responsive: generateResponsiveSettings(5) // Generate settings for default 5 slides
  });

  useEffect(() => {
    // Determine the number of slides to show based on the length of categories
    const numSlides = categories.length > 5 ? 5 : categories.length;

    // Update slidesToShow and responsive settings
    setSettings2(prevSettings => ({
      ...prevSettings,
      slidesToShow: numSlides,
      responsive: generateResponsiveSettings(numSlides)
    }));
  }, [categories]);

  const [shopshowModal, setshopshowModal] = useState(false);
  const body = document.body;

  useEffect(() => {
      if (shopshowModal === true) {
          body.classList.add('no-scroll');
          const handleKeyDown = (event) => {
              if (event.key === 'Escape') {
                  setshopshowModal(false);
              }
          };
          document.addEventListener('keydown', handleKeyDown);
          return () => {
              document.removeEventListener('keydown', handleKeyDown);
          };
      } else {
          body.classList.remove('no-scroll');
      }
  }, [shopshowModal]);

  const toggleModal = () => {
      setshopshowModal(!shopshowModal);
  };

  const [topPicksData, setTopPicksData] = useState([])
  const [LuxuryMeetsSustainabilityData, setLuxuryMeetsSustainabilityData] = useState([])
  const [SustainableClothingData, setSustainableClothingData] = useState([])
  const [EcoFriendlygiftingData, setEcoFriendlygiftingData] = useState([])
  const [HealthySnacksData, setHealthySnacksData] = useState([])
  const [HomeEssentialsData, setHomeEssentialsData] = useState([])
  const [BestsellersData, setBestsellersData] = useState([])
  const [recentlyAddedData, setRecentlyAddedData] = useState([])
  const [blogsData, setBlogsData] = useState([])
  const [keyFactsData, setKeyFactsData] = useState([])
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    Promise.all([
      Apicalls.get('sub-category'),
      Apicalls.get('category'),
      Apicalls.get('products/toppicks/1'),
      Apicalls.get('products/LuxuryMeetsSustainability/1'),
      Apicalls.get('products/SustainableClothing/1'),
      Apicalls.get('products/EcoFriendlygifting/1'),
      Apicalls.get('products/HealthySnacks/1'),
      Apicalls.get('products/HomeEssentials/1'),
      Apicalls.get('products/Bestsellers/1'),
      Apicalls.get('products/recentlyadded/1'),
      Apicalls.get('products/banners/1'),
      Apicalls.get('product-ratings'),
    ]).then(([subCategoriesData, categoryData, topPicksDataInfo, LuxuryMeetsSustainabilityData, SustainableClothingData, EcoFriendlygiftingData, HealthySnacksData, HomeEssentialsData, BestsellersData, recentlyaddedData, bannersData, ratingsData]) => {
      setSubCategories(subCategoriesData.data)
      setCategories(categoryData.data)
      setBanners(bannersData.data)
      topPicksDataInfo.data = topPicksDataInfo.data.filter((data, index) => index < 8)
      setTopPicksData(topPicksDataInfo.data)
      setLuxuryMeetsSustainabilityData(LuxuryMeetsSustainabilityData.data)
      setSustainableClothingData(SustainableClothingData.data)
      setEcoFriendlygiftingData(EcoFriendlygiftingData.data)
      setHealthySnacksData(HealthySnacksData.data)
      setHomeEssentialsData(HomeEssentialsData.data)
      setBestsellersData(BestsellersData.data)
      setRecentlyAddedData(recentlyaddedData.data)
      setRatings(ratingsData.data)
      let slideLenght = categoryData.data.length < 5 ? categoryData.data.length : 5
      // setSettings2({ ...settings2, slidesToShow: slideLenght, slidesToScroll: slideLenght })
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsCategoryCarouselVisible(true);
      }, 100);
    })
  }, [])

  /* react slick functions for first carousel*/

  const sliderRef2 = useRef(null);
  const handleShowPopup = (cardId) => {
    const card = topPicksData.find((card) => card.ID === cardId);
    setSelectedCard(card);
    setShowPopup(true);
  };

  const goToPrev2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickPrev();
    }
  };

  const goToNext2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickNext();
    }
  };

  const settings4 = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: false,
    // autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef4 = useRef(null);

  const goToPrev4 = () => {
    if (sliderRef4.current) {
      sliderRef4.current.slickPrev();
    }
  };

  const goToNext4 = () => {
    if (sliderRef4.current) {
      sliderRef4.current.slickNext();
    }
  };

  const settings5 = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef5 = useRef(null);

  const goToPrev5 = () => {
    if (sliderRef5.current) {
      sliderRef5.current.slickPrev();
    }
  };

  const goToNext5 = () => {
    if (sliderRef5.current) {
      sliderRef5.current.slickNext();
    }
  };

  const handleImageClick = (index) => {
    const images = JSON.parse(selectedCard.productImages);
    const clickedImage = images.splice(index, 1)[0];
    images.unshift(clickedImage);
    setSelectedCard({
      ...selectedCard,
      productImages: JSON.stringify(images),
    });
  }

  const MAX_HEADING_LENGTH = 12;
  const MAX_HEADING_LENGTH_DESKTOP = 22;

  const [cartItems, setCartItems] = useState([]);

  // Define your addToCart function here

  const addToShoppingCart = (item) => {
    // Logic for adding item to cart
    setCartItems([...cartItems, item]);
  };

  return (

    <>

      <div className='d-none d-md-block'>
        <img src={sliderimage} alt={sliderimage} style={{ maxWidth: '100%', height: 'auto' }} className='img-fuild' />
      </div>

      <div className=' mini_slider_3 d-md-none'>
        <img src={mini_slider_3} alt={mini_slider_3} style={{ maxWidth: '100%', height: 'auto' }} className='img-fuild' />
      </div>

      <div className=' mini_slider_2 d-md-none'>
        <img src={mini_slider_2} alt={mini_slider_2} style={{ maxWidth: '100%', height: 'auto' }} className='img-fuild' />
      </div>

      <div className=' mini_slider_1 d-md-none'>
        <img src={mini_slider_1} alt={mini_slider_1} style={{ maxWidth: '100%', height: 'auto' }} className='img-fuild' />
      </div>




      {isLoading ? (
        <div style={{ height: '60vh' }}><Loader /></div>
      ) : (
        <div>
          {isCategoryCarouselVisible ? (
          <div id="myCarousel" className="carousel slide container space_for_that" data-bs-ride="carousel" style={{position: 'relative'}}>
            <button className='carsoul_button_bg6 mx-2 carousel_button_left' onClick={goToPrev2} style={{position: 'absolute', left:'-20px', top: '65px'}}>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <div className="carousel-inner w-100  container ">
              <Slider ref={sliderRef2} {...settings2}  >
                {
                  categories.map(category => {
                    return <div class="col-md-3-ra">
                      <div className='d-sm-block' onClick={() => navigate('/products/' + category.ID)} style={{ textDecoration: 'none' }} >
                        <div class="card card-body bordl" >
                          <img class="img-fluid image_lala" src={`${post_url + 'categoryimages/' + category.img_url}`} />
                          <h4 className='heding_carsoul'>{category.categoryName}</h4>
                        </div>
                      </div>
                    </div>
                  })
                }
              </Slider>
            </div>
            <button className='carsoul_button_bg6 mx-2 carousel_button_right' onClick={goToNext2} style={{position: 'absolute', right: '-20px', top: '65px'}}>
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          ) : '' }

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Your Cart</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              {cardInfo.length > 0 ? (
                cardInfo.map(item => (
                  <div key={item.id}>

                    <div className='row roling_marg' >

                      <div className='col-5'>
                        <img src={post_url + item.main_img} className='p-3 img-fluid  ' />
                      </div>
                      <div className='col-5   d-flex flex-column justify-content-center'>
                        <p className='cardpara2'>{item.description}</p>
                        <p className='cardpara3'>{item.quantity} &nbsp; &nbsp; x  &nbsp; &nbsp; {item.price}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
          </div>

          {/* <section className="mt-5">
            <div className='hello d-block d-lg-block'>
              <div className='container'>
                <h6 className=''>Top Picks of the Day</h6>
              </div>
              <div className='container'>
                <div className='row justify-content-center'>
                  {topPicksData?.length > 0 && topPicksData?.map((card, index) => (
                    <Col key={card.id} lg={3} md={4} sm={6} xs={9} className='mb-3'>
                      <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                    </Col>
                  ))}
                </div>
              </div>
            </div>
          </section> */}

          {/* <section className="mt-5">
            <div className='hello d-block d-lg-block'>
              <div className='container'>
                <h6 className=''>Top Picks of the Day</h6>
                <div className='row justify-content-center home_page_product_row'>
                  <Carousel2 responsive={responsive}>
                    {topPicksData?.length > 0 && topPicksData?.map((card, index) => (
                      <Col key={card.id} className='home_page_product_card'>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} setshopshowModal={setshopshowModal} />
                      </Col>
                    ))}
                  </Carousel2>
                </div>
              </div>
            </div>
          </section> */}
          <section className="mt-5">
            <div className='hello d-block d-lg-block'>
              <div className='container'>
                <h6>Top Picks of the Day</h6>
                <div className='row justify-content-center home_page_product_row toppick' id="">
                  {topPicksData?.length > 0 ? (
                    <Carousel2 responsive={responsive}>
                      {topPicksData.map((card, index) => (
                        <Col key={card.id} className='home_page_product_card'>
                          <ActionAreaCard
                            key={card.id}
                            product={card}
                            addToCart={addToCartItems}
                            handleShowModal={handleShowModal}
                            addToWishList={addToWishList}
                            setshopshowModal={setshopshowModal}
                          />
                        </Col>
                      ))}
                    </Carousel2>
                  ) : (
                    <p>No top picks available</p>
                  )}
                </div>
              </div>
            </div>
          </section>


          <section className="mt-5">
            <div className='hello d-block d-lg-block'>
              <div className='container'>
                <h6 className=''>Dairy Alternatives</h6>
                <div className='row justify-content-center home_page_product_row'>
                  <Carousel2 responsive={responsive}>
                    {LuxuryMeetsSustainabilityData?.length > 0 && LuxuryMeetsSustainabilityData?.map((card, index) => (
                      <Col key={card.id} className='home_page_product_card'>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} setshopshowModal={setshopshowModal} />
                      </Col>
                    ))}
                  </Carousel2>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5">
            <div className='hello d-block d-lg-block'>
              <div className='container'>
                <h6 className=''>Sustainable Clothing</h6>
                <div className='row justify-content-center home_page_product_row'>
                  <Carousel2 responsive={responsive}>
                    {SustainableClothingData?.length > 0 && SustainableClothingData?.map((card, index) => (
                      <Col key={card.id} className='home_page_product_card'>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} setshopshowModal={setshopshowModal} />
                      </Col>
                    ))}
                  </Carousel2>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5">
            <div className='hello d-block d-lg-block'>
              <div className='container'>
                <h6 className=''>Eco-Friendly gifting</h6>
                <div className='row justify-content-center home_page_product_row'>
                  <Carousel2 responsive={responsive}>
                    {EcoFriendlygiftingData?.length > 0 && EcoFriendlygiftingData?.map((card, index) => (
                      <Col key={card.id} className='home_page_product_card'>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} setshopshowModal={setshopshowModal} />
                      </Col>
                    ))}
                  </Carousel2>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5">
            <div className='hello d-block d-lg-block'>
              <div className='container'>
                <h6 className=''>Healthy Snacks</h6>
                <div className='row justify-content-center home_page_product_row'>
                  <Carousel2 responsive={responsive}>
                    {HealthySnacksData?.length > 0 && HealthySnacksData?.map((card, index) => (
                      <Col key={card.id} className='home_page_product_card'>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} setshopshowModal={setshopshowModal} />
                      </Col>
                    ))}
                  </Carousel2>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5">
            <div className='hello d-block d-lg-block'>
              <div className='container'>
                <h6 className=''>Home Essentials</h6>
                <div className='row justify-content-center home_page_product_row'>
                  <Carousel2 responsive={responsive}>
                    {HomeEssentialsData?.length > 0 && HomeEssentialsData?.map((card, index) => (
                      <Col key={card.id} className='home_page_product_card'>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} setshopshowModal={setshopshowModal} />
                      </Col>
                    ))}
                  </Carousel2>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5">
            <div className='hello d-block d-lg-block'>
              <div className='container'>
                <h6 className=''>Bestsellers</h6>
                <div className='row justify-content-center home_page_product_row'>
                  <Carousel2 responsive={responsive}>
                    {BestsellersData?.length > 0 && BestsellersData?.map((card, index) => (
                      <Col key={card.id} className='home_page_product_card'>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} setshopshowModal={setshopshowModal} />
                      </Col>
                    ))}
                  </Carousel2>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5">
            <div className='hello d-block d-lg-block'>
              <div className='container'>
                <h6 className=''>Recently Added</h6>
                <div className='row justify-content-center home_page_product_row'>
                  <Carousel2 responsive={responsive}>
                    {recentlyAddedData?.length > 0 && recentlyAddedData?.map((card, index) => (
                      <Col key={card.id} className='home_page_product_card'>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} setshopshowModal={setshopshowModal} />
                      </Col>
                    ))}
                  </Carousel2>
                </div>
              </div>
            </div>
          </section>

        </div>
      )}

      {/* reviews   */}
      <section className='reviews_home_page_section'>
        <div className='container mt-5'>
          <div className='coustmers_text'>
            <h3> Let our customers speak for us</h3>
          </div>
          <div className='row roling_marg mt-4 home_review_slider'>


            <Slider ref={sliderRef} {...settings3}>
              {/* {
                ratings.map((item) => {

                  return <div class=" reviw_div px-2">
                    <p className='reviw_stars'>{'⭐'.repeat(item.rating)}</p>
                    <p className='reviw_main_line'>{item.message}</p>
                    <p className='reviw_name'>{item.firstName ?? item.customerName}</p>
                  </div>
                })
              } */}
              <div class=" reviw_div px-2">
                <p className='reviw_stars'>⭐⭐⭐⭐⭐</p>
                {/* <p className='reviw_tag_line'>Super cute and comfy</p> */}
                <p className='reviw_main_line'>Had an issue with my order, but customer support resolved it professionally. Truly the best!</p>
                <p className='reviw_name'>Santosh</p>
              </div>

              <div class=" reviw_div px-2">
                <p className='reviw_stars'>⭐⭐⭐⭐⭐</p>
                <p className='reviw_main_line'>return and replacements are good... No fuss, no hassle.</p>
                <p className='reviw_name'>Amritha Jaiswal</p>
              </div>

              <div class=" reviw_div px-2">
                <p className='reviw_stars'>⭐⭐⭐⭐⭐</p>
                <p className='reviw_main_line'>Thanks to Nutritionist Talk and I am at my better version now.</p>
                <p className='reviw_name'>Dhruv</p>
              </div>

              <div class=" reviw_div px-2">
                <p className='reviw_stars'>⭐⭐⭐⭐⭐</p>
                <p className='reviw_main_line'>Giving speeches of sustainability is very easy in GenZ world, but getting your hands in the muds and soil is what is required for making a change. Kudos to EarthBased</p>
                <p className='reviw_name'>Rithvik</p>
              </div>

              <div class=" reviw_div px-2">
                <p className='reviw_stars'>⭐⭐⭐⭐⭐</p>
                <p className='reviw_main_line'>This is genuinely the best oat milk. Goes well with chai, coffee and smoothies. Would definitely recommend this</p>
                <p className='reviw_name'>Jahnavi</p>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className='mt-5'  >
        <div className=' maaq_con_two nav_green_box p-2'>
          <div class="marquee">

            <div>
              <img src={twenty_k} alt={twenty_k} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; 20,000+ Eco-Friendly Products
              &nbsp; |  &nbsp;
              <img src={two_h} alt={two_h} className='img-fluid ' style={{ width: 20, height: 20 }} /> 200+ Sustainable Brands
              &nbsp;  |  &nbsp;
              <img src={flagimg} alt={flagimg} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; Supporting Indian Brands & Artisans
              |  &nbsp;

              <img src={alternatives} alt={alternatives} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; Curated Green Alternatives
              | &nbsp;
              <img src={vegan} alt={vegan} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp;   100% Vegan & Cruelty-Free Selection
              &nbsp; | &nbsp;
              <img src={eco} alt={eco} className='img-fluid ' style={{ width: 20, height: 20 }} />  &nbsp; Eco-Friendly, Biodegradable Shipping
              &nbsp;
              <img src={twenty_k} alt={twenty_k} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; 20,000+ Eco-Friendly Products
              &nbsp; |  &nbsp;
              <img src={two_h} alt={two_h} className='img-fluid ' style={{ width: 20, height: 20 }} /> 200+ Sustainable Brands
              &nbsp;  |  &nbsp;
              <img src={flagimg} alt={flagimg} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; Supporting Indian Brands & Artisans
              |  &nbsp;

              <img src={alternatives} alt={alternatives} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; Curated Green Alternatives
              | &nbsp;
              <img src={vegan} alt={vegan} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp;   100% Vegan & Cruelty-Free Selection
              &nbsp; | &nbsp;
              <img src={eco} alt={eco} className='img-fluid ' style={{ width: 20, height: 20 }} />  &nbsp; Eco-Friendly, Biodegradable Shipping
              &nbsp;


            </div>


          </div>

        </div>
      </section>



      {/* <section>

        <div className='container'>

          <h1 className='text-center mt-4 sustabinable_head'>How is EarthBased keeping the promises made?</h1>
          <div className='row roling_marg'>
            <div className='col-sm-12 col-md-6 col-lg-6 text-center'>
              <img src={trophy} alt={trophy} className=' img-fluid' style={{ borderRadius: '20px' }} />
              <h2 style={{ color: '#766285' }}>Transparent Sourcing and Accountability.</h2>
              <p className='smaller_text'> EarthBased maintains transparency in product sourcing and manufacturing. We communicate openly about product origins, ingredients, and eco-friendly practices. Regular supplier audits ensure adherence to sustainability and cruelty-free standards.</p>
            </div>
            <div className=' col-sm-12 col-md-6 col-lg-6 text-center'>
              <img src={leafs} alt={trophy} className=' img-fluid' style={{ borderRadius: '20px' }} />
              <h2 style={{ color: '#766285' }}>Continuous Improvement.</h2>
              <p className='smaller_text mt-5'>EarthBased is dedicated to ongoing innovation. We seek eco-friendly solutions, from packaging to ingredient sourcing, to minimize environmental impact. Our commitment to wellness, sustainability, and cruelty-free living remains unwavering.</p>
            </div>

          </div>
        </div>


      </section> */}

      <section>

        <div className='container d-none d-md-block'>

          <h1 className='text-center my-5 sustabinable_head_two'>Impact created when you Choose EarthBased</h1>
          <div className='row    roling_marg     d-flex flex-row justify-content-center'>
            <div className='col-6 col-md-4 text-center'>

              <img src={save_water} alt={save_water} className='p-3 img-fluid' />

              <p className='smaller_text'>
                Reduced Carbon Footprint: Choosing vegan products lowers resource consumption and greenhouse gas emissions, minimizing environmental impact.</p>
            </div>
            <div className='col-6 col-md-4 text-center'>
              <img src={paper_bag} alt={paper_bag} className='p-3 img-fluid' />

              <p className='smaller_text'>Conservation of Natural Resources: Opting for vegan items preserves land, water, and energy resources, safeguarding ecosystems and biodiversity.</p>
            </div>
            <div className='col-6 col-md-4 text-center'>

              <img src={seed_plant} alt={seed_plant} className='p-3 img-fluid' />

              <p className='smaller_text'>
                Water Conservation: Shopping vegan saves water, contributing to water security and reducing strain on freshwater sources.</p>
            </div>
            <div className='col-6 col-md-4 text-center'>


              <img src={globe} alt={globe} className='p-3 img-fluid' />

              <p className='smaller_text'>
                Reduced Pollution: Vegan products lessen pollution levels, resulting in cleaner air, water, and soil for all.</p>
            </div>
            <div className='col-6 col-md-4 text-center'>

              <img src={rabbit} alt={rabbit} className='p-3 img-fluid' />


              <p className='smaller_text'>
                Promotion of Ethical Treatment of Animals: Supporting vegan choices advocates for animal welfare and eliminates animal exploitation.</p>
            </div>
            <div className='col-6 col-md-4 text-center'>

              <img src={artist} alt={artist} className='p-3 img-fluid' />


              <p className='smaller_text'>Improvement of Public Health: Vegan diets support healthier living, reducing risks of chronic diseases and improving overall well-being.</p>
            </div>
          </div>
        </div>



        <div className='  d-md-none mt-5 blog_slider5'>
          <h1 className='text-center my-5 sustabinable_head_two'>Impact created when you Choose EarthBased</h1>

          <div class=" w-100  container ">
            <Slider ref={sliderRef5} {...settings5} >

              <div className=' mini_image_sastiabne_sizes'>

                <img src={save_water} alt={save_water} className='p-3  img-fluid     ' />
                <p>Reduced Carbon Footprint: Choosing vegan products lowers resource consumption and greenhouse gas emissions, minimizing environmental impact.</p>

              </div>


              <div className=' mini_image_sastiabne_sizes'>

                <img src={paper_bag} alt={paper_bag} className='p-3 img-fluid' />
                <p>Conservation of Natural Resources: Opting for vegan items preserves land, water, and energy resources, safeguarding ecosystems and biodiversity.</p>

              </div>

              <div className=' mini_image_sastiabne_sizes'>

                <img src={seed_plant} alt={seed_plant} className='p-3 img-fluid' />
                <p>Water Conservation: Shopping vegan saves water, contributing to water security and reducing strain on freshwater sources.</p>

              </div>


              <div className=' mini_image_sastiabne_sizes'>

                <img src={globe} alt={globe} className='p-3 img-fluid' />
                <p>Reduced Pollution: Vegan products lessen pollution levels, resulting in cleaner air, water, and soil for all.</p>

              </div>

              <div className=' mini_image_sastiabne_sizes'>
                <img src={rabbit} alt={rabbit} className='p-3 img-fluid' />
                <p>Promotion of Ethical Treatment of Animals: Supporting vegan choices advocates for animal welfare and eliminates animal exploitation.</p>

              </div>


              <div className=' mini_image_sastiabne_sizes'>

                <img src={artist} alt={artist} className='p-3 img-fluid' />
                <p>Improvement of Public Health: Vegan diets support healthier living, reducing risks of chronic diseases and improving overall well-being.</p>

              </div>


            </Slider>
          </div>

          <div className='text-center'>
            <button class="carsoul_button_bg_left_5 mx-2" type="button" onClick={goToPrev5}>
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carsoul_button_bg_right_5 mx-2" type="button" onClick={goToNext5}>
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>




      </section>
      {/* featured in section */}


      {/* on instagram   */}
      <section section >
        <div className='container mt-4'>
          <h3 className='text-center sustabinable_head'>on instagram @EarthBased.store</h3>
          <div className='row     roling_marg    img_row_jhkuh  '>
            <div className='col-4 col-lg-2 mt-4'>
              <a href='https://www.instagram.com/reel/C7a4BigSReg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>
                <img src={insta1} alt={insta1} className='img-fluid insta_img' />
              </a>
            </div>
            <div className='col-4  col-lg-2 mt-4'>
             <a href='https://www.instagram.com/reel/C7MVaa1yefh/?igsh=MTMwMzFrOXNqaHp1ZA==' target='_blank'> 
                <img src={insta2} alt={insta2} className='img-fluid insta_img' />
              </a>
            </div>
            <div className='col-4 col-lg-2  mt-4'>
            <a href='https://www.instagram.com/reel/C6Aft7aSjM1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>
                <img src={insta3} alt={insta3} className='img-fluid insta_img' />
              </a>
            </div>
            <div className='col-4 col-lg-2 d-none d-md-block  mt-4'>
              <a href='https://www.instagram.com/reel/C5yJSLcyVS0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>
                <img src={insta5} alt={insta5} className='img-fluid insta_img' />
              </a>
            </div>
            <div className='col-4 col-lg-2 d-none d-md-block    mt-4'>
              <a href='https://www.instagram.com/reel/C7IpDgESzWx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>
                <img src={insta6} alt={insta6} className='img-fluid insta_img' />
              </a>
            </div>
            <div className='col-4 col-lg-2  d-none d-md-block   mt-4'>
              <a href='https://www.instagram.com/reel/C6xov45yR19/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>
                <img src={insta8} alt={insta8} className='img-fluid insta_img' />
              </a>
            </div>
            {/* <div className='col-4 col-lg-2  d-none d-md-block   mt-4'>
              <img src={insta9} alt={insta9} className='img-fluid insta_img' />
            </div> */}
          </div>
        </div>
      </section>

      <section>
        <div className='col-lg-12 col-md-12 col-sm-12 mt-5'>
          <div className='d-flex flex-row justify-content-center '><button className='keyfact_button Getintouch hover_bg'><a href='/contact' style={{ textDecoration: 'none', color: 'white' }}>get in touch</a></button></div>
        </div>
      </section>


      <section>

      </section>


      {shopshowModal && <Shoppingcart toggleModal={toggleModal} />}

    </>
  )
}

export default Header;