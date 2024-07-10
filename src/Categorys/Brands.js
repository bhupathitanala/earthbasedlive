import React, { useEffect, useState, useRef } from "react";
import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';

import maximize from '../assets/maximize-2.png';
import buycard from '../assets/buycard.png';
import Cotton_ear from '../assets/Beauty/BECO_Cotton_Ear.jpg';
import tissue from '../assets/Beauty/Beco_Facial_Tissue_Carbox.webp';

import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import wish_img from '../assets/wish_img.png';
import Carousel2 from "react-multi-carousel"
import { useNavigate, useNavigation } from 'react-router-dom';
import third from '../assets/third.png'
import maxmixe from '../assets/maximize-2.png'

import natural from '../assets/natural.png'
import gmo from '../assets/gmo.png'
import no_presetives from '../assets/no_presettives.png'
import gluten from '../assets/gulten_free.png'
import iconcard2 from '../assets/iconcard2.png';
import iconcard3 from '../assets/iconcard3.png';
import flagimg from '../assets/flagimg.png';

import makhana_salt_pepper_large from '../assets/header_images/makhana_salt_pepper_large.png'
import makhana_salt_pepper_mini from '../assets/header_images/makhana_salt_pepper_mini.png'
import makhana_salt_pepper_single_large from '../assets/header_images/makhana_salt_pepper_single_large.png'
import makhana_salt_pepper_single_mini from '../assets/header_images/makhana_salt_pepper_single_mini.png'
import makhana_salt_pepper_bowl_large from '../assets/header_images/makhana_salt_pepper_bowl_large.png'
import makhana_salt_pepper_bowl_mini from '../assets/header_images/makhana_salt_pepper_bowl_mini.png'
import makhana_salt_pepper_back_large from '../assets/header_images/makhana_salt_pepper_back_large.png'
import makhana_salt_pepper_back_mini from '../assets/header_images/makhana_salt_pepper_back_mini.png'
import Dropdown from 'react-bootstrap/Dropdown';
import Apicalls, { post_url } from "../Apicalls";
import { useSelector } from "react-redux";
import BuyProduct from "./BuyProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import ActionAreaCard from "../Ecommerce/MuiCardnew";
import Slider2 from "react-slick";
import Productpreview from "./Productpreview";
// shopping cart
import Shoppingcart from './../Ecommerce/Shoppingcart';

// Loader imports
import Loader from "./../CommonComponents/Loader";


function Brands() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedSubCategory, setSelectedSubCategory] = useState("All");
    const [selectedRating, setSelectedRating] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState(window.location.pathname.split('/')[2]);
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [subCategories, setSubCategories] = useState([])
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])
    const [finalProducts, setFinalProducts] = useState([])
    const [categoryName, setCategoryName] = useState('')
    const [brandName, setBrandName] = useState('')
    const user = useSelector((state) => state.user.auth.user)
    console.log(user, window.location.pathname.split('/')[2])
    const [cartItems, setCartItems] = useState([]);

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

    useEffect(() => {
        Promise.all([
            Apicalls.get('brands')
        ]).then(([brandsData]) => {
            setBrands(brandsData.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        Promise.all([
            Apicalls.get('products/brands/' + window.location.pathname.split('/')[2])
        ]).then(([productsData]) => {
            setProducts(productsData.data)
            setFinalProducts(productsData.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [selectedSubCategory])

    useEffect(() => {
        let filteredProducts = finalProducts;
        console.log(filteredProducts)
        console.log(selectedBrand)
        if (selectedRating !== 'All') {
            filteredProducts = filteredProducts.filter(item => {
                // console.log(item, item.rating, selectedRating, item.rating === selectedRating)
                if (item.rating.toString() === selectedRating) {
                    return item
                }
            })
            console.log('rating', filteredProducts)
        }
        if (selectedPrice !== 'All') {
            filteredProducts = filteredProducts.filter(item => {
                const price = parseInt(item.price);
                return !isNaN(price) && price < parseInt(selectedPrice);
            });
            
            console.log('price', filteredProducts)
        }
        if (selectedBrand !== 'All') {
            console.log("brand filtering..")
            // console.log(selectedBrand)
            filteredProducts = filteredProducts.filter(item => parseInt(item.brand_id) === parseInt(selectedBrand))
            // console.log('brand', filteredProducts)
        }
        console.log('final', filteredProducts)
        setProducts(filteredProducts)
    }, [selectedRating, selectedPrice, selectedBrand])

    // const products = products.filter(product => {
    //     if (
    //         selectedCategory === "All" &&
    //         selectedRating === "All" &&
    //         selectedBrand === "All" &&
    //         selectedPrice === "All"
    //     ) {
    //         return true;
    //     } else {
    //         return (
    //             (selectedCategory === "All" || product.category === selectedCategory) &&
    //             (selectedRating === "All" || product.rating === selectedRating) &&
    //             (selectedBrand === "All" || product.brand === selectedBrand) &&
    //             (selectedPrice === "All" || product.price === selectedPrice)
    //         );
    //     }
    // });
    const totalProducts = products.length;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

    const Sidebar = () => {
        return (
            <>
                <div className="col-2 position-sticky vh-100 side_nav d-flex flex-row justify-content-center d-none d-lg-block ">
                    <div className="sidebar-content overflow-y-auto overflow-x-hidden vh-100">
                        <div className="text-center">
                            {/* <div className="col-12">
                                <label className="form-label"><h4><b>Brand</b></h4></label>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className={`btn ${selectedBrand === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("All")}>All Brands</a>
                                    </li>
                                    {
                                        brands.map(ele => {
                                            return <li>
                                                <a href="#" className={`btn ${parseInt(selectedBrand) === parseInt(ele.ID) ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand(ele.ID)}>{ele.brandName}</a>
                                            </li>
                                        })
                                    }
                                    
                                </ul>
                            </div> */}
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
                                    {/* <ActionAreaCard product={product} addToCart={()=>addToCart(product.id)} handleShowModal={handleOpenModal} addToWishList={addToWishList} /> */}
                                    <ActionAreaCard product={product} addToCart={() => addToCart(product)} handleShowModal={handleOpenModal} addToWishList={addToWishList} setshopshowModal={setshopshowModal} />
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
                <Productpreview selectedProduct={selectedCard} />
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
            </>
            {shopshowModal && <Shoppingcart toggleModal={toggleModal} />}
        </div>
    )
}


export default Brands;