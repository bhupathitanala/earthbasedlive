import React, { useEffect, useState, useRef } from "react";
import Apicalls, { post_url } from "../Apicalls";
import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';
import ActionAreaCard from "../Ecommerce/MuiCardtest";
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

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const user = useSelector((state) => state.user.auth.user)
    console.log(user, window.location.pathname.split('/')[2])

    useEffect(() => {
        Promise.all([
            Apicalls.get('products/productsbycategory/' + window.location.pathname.split('/')[2])
        ]).then(([productsData]) => {
            setProducts(productsData.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])



    // Sidebar Component
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedSubCategory, setSelectedSubCategory] = useState("All");
    const [selectedRating, setSelectedRating] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [categories, setCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [categoryName, setCategoryName] = useState('')
    useEffect(() => {
        Promise.all([
            Apicalls.get('category/' + window.location.pathname.split('/')[2]),
            Apicalls.get('category'),
            Apicalls.get('brands')
        ]).then(([subCategoriesData, categoryData, brandsData]) => {
            console.log(subCategoriesData)
            setCategories(categoryData.data)
            setSubCategories(subCategoriesData.data.subcategories)
            setCategoryName(subCategoriesData.data.categoryName)
            setBrands(brandsData.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const sliderRef33 = useRef(null);

    const handleNext33 = () => {
        sliderRef33.current.slickNext();
    };

    const handlePrevious33 = () => {
        sliderRef33.current.slickPrev();
    };

    const sliderSettings33 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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

    const Sidebar = () => {
        return (
            <>
                <div className="col-2 position-sticky vh-100 side_nav d-flex flex-row justify-content-center d-none d-lg-block ">
                    <div className="sidebar-content overflow-y-auto overflow-x-hidden vh-100">
                        <div className="text-center">
                            <div className="col-12">
                                <div>
                                    <label className="form-label"><h4><b>Categorys</b></h4></label>
                                    <ul className="list-unstyled">
                                        <li key={0}>
                                            <a href="#" className={`btn ${selectedSubCategory === "All" ? "btn-secondary" : ""} ${selectedSubCategory === "All" ? "selected" : ""}`} onClick={() => setSelectedSubCategory("All")}>All Categorys</a>
                                        </li>
                                        {
                                            subCategories.map((subCategory,i) => {
                                                return <li key={i+1}>
                                                    <a href="#" className={`btn ${selectedSubCategory === subCategory.ID ? "btn-secondary" : ""} ${selectedSubCategory === subCategory.ID ? "selected" : ""}`} onClick={() => setSelectedSubCategory(subCategory.ID)}>{subCategory.subCategoryName}</a>
                                                </li>
                                            })
                                        }
                                        
                                    </ul>
                                </div>




                            </div>
                            <div className="col-12 my-5">
                                <label className="form-label"><h4><b>Rating</b></h4></label>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("All")}>All Ratings</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "1" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("1")}>⭐</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "2" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("2")}>⭐⭐</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "3" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("3")}>⭐⭐⭐ </a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "4" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("4")}>⭐⭐⭐⭐</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "5" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("5")}>⭐⭐⭐⭐⭐</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 my-5">
                                <label className="form-label"><h4><b>Brand</b></h4></label>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className={`btn ${selectedBrand === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("All")}>All Brands</a>
                                    </li>
                                    {
                                        brands.map(subCategory => {
                                            return <li>
                                                <a href="#" className={`btn ${selectedCategory === subCategory.ID ? "btn-secondary" : ""} ${selectedCategory === subCategory.ID ? "selected" : ""}`} onClick={() => setSelectedBrand(subCategory.ID)}>{subCategory.brandName}</a>
                                            </li>
                                        })
                                    }
                                    
                                </ul>
                            </div>
                            <div className="col-12 my-5">
                                <label className="form-label"><h4><b>Price</b></h4></label>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className={`btn ${selectedPrice === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("All")}>All Prices</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedPrice === "1000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("1000")}>Below 1000</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedPrice === "5000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("5000")}>Below 5000</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedPrice === "8000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("8000")}>8000</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                
            </>
        );
    };
    // End Sidebar Component

    //Add to Cart
    const addToCart = (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
        // Save updated cart to local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const [showModal, setShowModal] = useState(false);
    const [showBuyModal, setShowBuyModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();

    const [mainImage, setMainImage] = useState(null);
    const handleOpenModal = (product) => {
        setSelectedCard({ ...product });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleBuyModal = () => {
        setShowBuyModal(false);
    };

    const handleImageClick = (index) => {
        // const images = JSON.parse(selectedCard.productImages);
        // const clickedImage = images.splice(index, 1)[0];
        // images.unshift(clickedImage);
        // setSelectedCard({
        //     ...selectedCard,
        //     productImages: JSON.stringify(images),
        // });
    }


    const addToWishList = (product) => {
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
    console.log(selectedCard)


    return (
        <div className="main-row">
            <Sidebar />
            <>
            <div className="col-12 col-lg-10">
                <div className="container my-4">
                    <div className="row">
                        {products.map(product => (
                            <Col key={product.id} lg={3} md={4} sm={6} xs={6} className="product_cards"> {/* Set sm={6} for small screens */}
                                <div className="card_pro_hei">
                                    <ActionAreaCard product={product} addToCart={()=>addToCart(product.id)} handleShowModal={handleOpenModal} addToWishList={addToWishList} />
                                </div>
                            </Col>
                            
                        ))}
                    </div>
                </div>
            </div>

            {/* product preview */}
            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedCard && selectedCard.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {selectedCard && (
                                <div className="maximized-card row">
                                    <div className='d-none d-lg-flex col-lg-5'>

                                        <img src={post_url + 'productimages/' + selectedCard.main_img} alt={selectedCard.title} className='img-fluid' id="mainImage" />
                                        {/* <img src={selectedCard.image} alt={selectedCard.title} className='img-fluid' id="mainImage" /> */}


                                    </div>
                                    {/* <div className='col-sm-12 col-lg-2 d-none d-lg-flex d-felx flex-column justify-content-around'>
                                        {
                                            JSON.parse(selectedCard?.product_images).map((item, index) => {
                                                if (index !== 0) {
                                                    return <img src={post_url + 'productimages/' + item} alt={selectedCard?.title} className='img-fluid' width={100} height={300} onClick={() => handleImageClick(index)} />
                                                }
                                            })
                                        }
                                        
                                    </div> */}



                                    <div className='d-block d-lg-none mt-2 mb-2'>
                                        <div className="row ">
                                            <div className='slider-container'>
                                                {selectedCard.productImages && selectedCard.productImages.length > 0 ? (
                                                    <React.Fragment>
                                                        <Slider2 ref={sliderRef33} {...sliderSettings33}>
                                                            {JSON.parse(selectedCard.productImages).map((item, index) => (
                                                                <div key={index}>
                                                                    <img src={post_url + item} alt={selectedCard.title} className='img-fluid pro_img_33' />
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


                                    <div className='col-md-12 col-xs-12 col-lg-5' style={{ overflowY: 'auto', maxHeight: '400px' }}>
                                        <h6 className='pop_up_cardhead'>{selectedCard.title}</h6>
                                        <p >{selectedCard.stars}</p>
                                        <p className="deals_para">₹ {selectedCard.price}</p>
                                        <p className="deals_para1">{selectedCard.quantity} in stock hurry up</p>
                                        {/* <p className="deals_para1">{selectedCard.rating} Rating</p> */}
                                        <p className="deals_para1">{'⭐'.repeat(selectedCard.rating)}</p>
                                        <div className="button-group row" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
                                            <Button className='col-5' onClick={() => addToCartItems(selectedCard)} style={{ border: "1px solid green", backgroundColor: "white", color: "green" }}>Add to cart</Button>
                                            <Button className='col-5 ' variant="success" onClick={() => {
                                                navigate('/buyproduct/' + selectedCard.ID)
                                            }} >Buy Now</Button>
                                        </div>


                                        {/* <select name="cars" className="form-control mt-5">
                                            <option value="Delivery Details">Delivery Details</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select> */}
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
                                            {selectedCard?.features?.includes('1') && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Pan India</span>
                                                <img src={flagimg}
                                                    alt="Pan India" class="shipping-icon" width={50} height={50} />
                                            </div>}
                                            {selectedCard?.features?.includes('1') && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Above ₹1500</span>
                                                <img src={iconcard3}
                                                    alt="Free Shipping" class="shipping-icon" width={50} height={50} />
                                            </div>}
                                            {selectedCard?.features?.includes('1') && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Cash On Delivery</span>
                                                <img src={iconcard2} alt="COD"
                                                    class="shipping-icon" width={50} height={50} />
                                            </div>}
                                        </div>
                                        <div className='col-12 mt-3'>
                                            {/* <div className="mt-5 row">
                                                {
                                                    selectedCard?.featuresData.filter(item => ![1, 2, 3].includes(item.id)).map((item, index) => {
                                                        return <div className='col-3 justify_con'>
                                                            <img src={post_url + item.icon} alt={post_url + item.icon} width={100} height={70} />
                                                            <p className="mt-4">{item.title}</p>
                                                        </div>
                                                    })
                                                }
                                            </div> */}
                                            <hr className="m-auto" style={{ border: "none", height: "2px", width: "150px", backgroundColor: "#509264" }} />

                                            <p className="mt-4" style={{ overflowWrap: 'anywhere' }}>{selectedCard.description}</p>
                                            <p className="mb-5">{selectedCard.about2}</p>

                                        </div>
                                    </div>






                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>




            </>
        </div>
    )
}

export default Products