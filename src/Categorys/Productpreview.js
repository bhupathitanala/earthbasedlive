import React, { useEffect, useState, useRef } from "react";
import Apicalls, { post_url } from "../Apicalls";
import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';
import ActionAreaCard from "../Ecommerce/MuiCardnew";
import { useNavigate, useNavigation } from 'react-router-dom';
import { useSelector } from "react-redux";
import Slider2 from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
// import ActionAreaCard from "../Ecommerce/MuiCard";
// import Slider2 from "react-slick";
import iconcard2 from '../assets/iconcard2.png';
import iconcard3 from '../assets/iconcard3.png';
import flagimg from '../assets/flagimg.png';

const Productpreview = ({selectedProduct}) => {
    console.log(selectedProduct);

    // selectedProduct.productImages = selectedProduct?.product_images;
    //console.log(productImages)
    const user = useSelector((state) => state.user.auth.user)
    const [activeIndex, setActiveIndex] = useState(0);
    const [mainimage, setMainImage] = useState(post_url + 'productimages/' + selectedProduct.main_img);
    const navigate = useNavigate();

    

    const sliderSettings33 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const sliderRef33 = useRef(null);

    const handleNext33 = () => {
        sliderRef33.current.slickNext();
    };

    const handlePrevious33 = () => {
        sliderRef33.current.slickPrev();
    };

    const addToCartItems = (product) => {
        if (user?.ID) {
            Promise.all([
                Apicalls.post('cart', { userId: user.ID, productId: product.ID, status: 1 })
            ]).then(([data]) => {
                if (Object.keys(data.data).length > 0) {
                    navigate('/usercart')
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
    }

    const handleImageClick1 = (imageUrl, index) => {
        // setProduct({
        //     ...selectedProduct,
        //     main_img: imageUrl,
        // });
        setMainImage(imageUrl)
        setActiveIndex(index);
    }

    return (
        <>
            {/* product preview */}
            
                            {selectedProduct && (
                                <div className="maximized-card row">
                                    <div className='col-lg-1 product_page_min_images'>                        
                                        {selectedProduct.product_images && JSON.parse(selectedProduct.product_images).map((image, index) => (
                                            <div className={`d-lg-block imageicons ${activeIndex === index ? 'active' : ''}`} key={index}> 
                                                <img 
                                                    src={`${post_url}productimages/${image}`} 
                                                    alt={selectedProduct.title} 
                                                    className='img-fluid' 
                                                    onMouseOver={() => handleImageClick1(`${post_url}productimages/${image}`, index)} 
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='d-none d-lg-flex col-lg-5'>
                                        <img src={mainimage} alt={selectedProduct.title} className='img-fluid' id="mainImage" />
                                    </div>
                                    <div className='d-block d-lg-none mt-2 mb-2'>
                                        <div className="row ">
                                            <div className='slider-container'>
                                                {selectedProduct.product_images && selectedProduct.product_images.length > 0 ? (
                                                    <React.Fragment>
                                                        <Slider2 ref={sliderRef33} {...sliderSettings33}>
                                                            {JSON.parse(selectedProduct.product_images).map((item, index) => (
                                                                <div key={index}>
                                                                    <img src={post_url + item} alt={selectedProduct.title} className='img-fluid pro_img_33' />
                                                                </div>
                                                            ))}
                                                        </Slider2>
                                                        <div className='text-center'>
                                                            <button className='carsoul_button_bg4 mx-2' onClick={handlePrevious33}><span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                <span class="visually-hidden">Previous</span></button>
                                                            <button className='carsoul_button_bg4 mx-2' onClick={handleNext33}><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>
                                                        </div>
                                                    </React.Fragment>
                                                ) : (
                                                    <div>No images available for this product.</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-md-12 col-xs-12 col-lg-6'>
                                        <h6 className='pop_up_cardhead'>{selectedProduct.description_short}</h6>
                                        <p >{selectedProduct.stars}</p>
                                        <p className="deals_para">₹ {selectedProduct.price}</p>
                                        <p className="deals_para1">{selectedProduct.quantity} in stock hurry up</p>
                                        {/* <p className="deals_para1">{selectedProduct.rating} Rating</p> */}
                                        <p className="deals_para1">{'⭐'.repeat(selectedProduct.rating)}</p>
                                        <div className="button-group row" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
                                            <Button className='col-5' style={{ border: "1px solid green", backgroundColor: "white", color: "green" }}>Add to cart</Button>
                                            <Button className='col-5 ' variant="success" >Buy Now</Button>
                                        </div>


                                        
                                        <center>
                                            <div className="mb-2 row ms-2 mt-4 text-center   roling_marg     " style={{ width: '100%' }}>
                                                <div className='col-4 d-none d-md-block' style={{ padding: 0 }}>
                                                    <FontAwesomeIcon icon={faBox} />
                                                    <h3 className='deliered_time'>Order Now</h3>
                                                </div>
                                                <div className='col-8  d-none d-md-block ' style={{ padding: 0, marginLeft: '0px' }}>
                                                    <FontAwesomeIcon icon={faTruckFast} />
                                                    <h3 className='deliered_time'>Delivered with in 3 - 5 days</h3>
                                                </div>
                                            </div>
                                        </center>
                                        <div className="mb-4   roling_marg   row text-center  d-md-none">
                                            <div className='col-4 '>
                                                <FontAwesomeIcon icon={faBox} />
                                                <h3 className='deliered_time'>Order Now</h3>

                                            </div>
                                            <div className='col-8   ' style={{ marginLeft: '-20px' }}>

                                                <FontAwesomeIcon icon={faTruckFast} />
                                                <h3 className='deliered_time'>Delivered with in 3 - 5 days</h3>
                                            </div>
                                        </div>

                                        <div class="shipping-icons1 d-flex flex-row justify-content-around">
                                            {selectedProduct?.is_pan_india_available === 1 && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Pan India</span>
                                                <img src={flagimg}
                                                    alt="Pan India" class="shipping-icon" width={50} height={50} />
                                            </div>}
                                            {selectedProduct?.features?.includes('1') && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Above ₹1500</span>
                                                <img src={iconcard3}
                                                    alt="Free Shipping" class="shipping-icon" width={50} height={50} />
                                            </div>}
                                            {selectedProduct?.is_cod_available === 1 && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Cash On Delivery</span>
                                                <img src={iconcard2} alt="COD"
                                                    class="shipping-icon" width={50} height={50} />
                                            </div>}
                                        </div>
                                        <div className='col-12 mt-3'>
                                            {/* <div className="mt-5 row">
                                                {
                                                    selectedProduct?.featuresData.filter(item => ![1, 2, 3].includes(item.id)).map((item, index) => {
                                                        return <div className='col-3 justify_con'>
                                                            <img src={post_url + item.icon} alt={post_url + item.icon} width={100} height={70} />
                                                            <p className="mt-4">{item.title}</p>
                                                        </div>
                                                    })
                                                }
                                            </div> */}
                                            <hr className="m-auto" style={{ border: "none", height: "2px", width: "150px", backgroundColor: "#509264" }} />

                                            <p className="mt-4" style={{ overflowWrap: 'anywhere' }}>{selectedProduct.description}</p>
                                            <p className="mb-5">{selectedProduct.about2}</p>

                                        </div>
                                    </div>
                                </div>
                            )}
                        




            </>
    )
}

export default Productpreview