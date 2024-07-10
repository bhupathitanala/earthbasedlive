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
import Productpreview from "./Productpreview";

// shopping cart
import Shoppingcart from './../Ecommerce/Shoppingcart';

// Loader imports
import Loader from "./../CommonComponents/Loader";

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const user = useSelector((state) => state.user.auth.user)


    let res = window.location.pathname.split('/')[2];
    let res1 = window.location.pathname.split('_')[1];
    let categoryId;
    if(res1 === undefined){
        categoryId = res;
        res1 = 'All';
        
    }else{
        categoryId = res.split('_')[0]
    }
    

    // Sidebar Component
    const [selectedCategory, setSelectedCategory] = useState(categoryId);
    const [selectedSubCategory, setSelectedSubCategory] = useState(res1);
    const [selectedRating, setSelectedRating] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [categories, setCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [finalProducts, setFinalProducts] = useState([])
    const [categoryName, setCategoryName] = useState('')

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
            Apicalls.get('category/' + selectedCategory),
            Apicalls.get('category'),
            Apicalls.get('brands/category/' + selectedCategory)
        ]).then(([subCategoriesData, categoryData, brandsData]) => {
            // console.log(subCategoriesData)
            setCategories(categoryData.data)
            setSubCategories(subCategoriesData.data.subcategories)
            setCategoryName(subCategoriesData.data.categoryName)
            setBrands(brandsData.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    //fliters
    useEffect(() => {
        
        setIsLoading(true);
        Promise.all([
            selectedSubCategory === 'All' ? Apicalls.get('products/mcID/' + selectedCategory) : Apicalls.get('products/scID/' + selectedSubCategory)
        ]).then(([productsData]) => {
            // console.log(productsData.data.products)
            setIsLoading(false);
            setProducts(productsData.data.products)
            setFinalProducts(productsData.data.products)
        }).catch((err) => {
            setIsLoading(false);
            console.log(err)
        })
    }, [selectedSubCategory])

    useEffect(() => {
        let filteredProducts = finalProducts;
        // console.log(filteredProducts)
        // console.log(selectedPrice)
        if (selectedRating !== 'All') {
            filteredProducts = filteredProducts.filter(item => {
                // console.log(item, item.rating, selectedRating, item.rating === selectedRating)
                if (item.rating.toString() === selectedRating) {
                    return item
                }
            })
            // console.log('rating', filteredProducts)
        }
        if (selectedPrice !== 'All') {
            filteredProducts = filteredProducts.filter(item => {
                const price = parseInt(item.price);
                return !isNaN(price) && price < parseInt(selectedPrice);
            });
            
            // console.log('price', filteredProducts)
        }
        if (selectedBrand !== 'All') {
            console.log("brand filtering..")
            console.log(selectedBrand)
            // console.log(filteredProducts)
            filteredProducts = filteredProducts.filter(item => item.brand_id === selectedBrand)
            // console.log('brand', filteredProducts)
        }
        if (selectedBrand === 'All') {
            console.log("All brand filtering..")
           
            filteredProducts = filteredProducts.filter(item => {
                return (parseInt(item.category) === parseInt(selectedCategory));
            });
        }
        // console.log('final', filteredProducts)
        setProducts(filteredProducts)
    }, [selectedRating, selectedPrice, selectedBrand])

    //end filters

    
    const Sidebar = () => {
        return (
            <>
                <div className="col-2 position-sticky vh-100 side_nav d-flex flex-row justify-content-center d-none d-lg-block ">
                    <div className="sidebar-content overflow-y-auto overflow-x-hidden vh-100">
                        <div className="text-center">
                            <div className="col-12">
                                <div>
                                    <label className="form-label"><h4><b>Categories</b></h4></label>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" className={`btn ${selectedSubCategory === "All" ? "btn-secondary" : ""} ${selectedSubCategory === "All" ? "selected" : ""}`} onClick={() => setSelectedSubCategory("All")}>All Sub Categories</a>
                                        </li>
                                        {
                                            subCategories.map(subCategory => {
                                                return <li>
                                                    <a href="#" className={`btn ${parseInt(selectedSubCategory) === subCategory.ID ? "btn-secondary" : ""}`} onClick={() => setSelectedSubCategory(subCategory.ID)}>{subCategory.subCategoryName}</a>
                                                </li>
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 my-5">
                                <label className="form-label"><h4><b>Brand</b></h4></label>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className={`btn ${selectedBrand === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("All")}>All Brands</a>
                                    </li>
                                    {
                                        brands.map(subBrand => {
                                            return <li>
                                                <a href="#" className={`btn ${selectedBrand === subBrand.ID ? "btn-secondary" : ""} ${selectedBrand === subBrand.ID ? "selected" : ""}`} onClick={() => setSelectedBrand(subBrand.ID)}>{subBrand.brandName}</a>
                                            </li>
                                        })
                                    }
                                    
                                </ul>
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


    // start Fliter Component
    const Filter = () => {
        return (
            <>
                <div className="row slider_filter m-2" style={{ width: 'auto' }}>
                    <button className=" btn btn-secondary-2 dropdown-toggle" type="button" style={{background:"#766285",color:"#fff"}} id="dropdownMenuButton-1" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-1">
                        <li>
                            <a href="#" className={`btn ${selectedSubCategory === "All" ? "btn-secondary-2" : ""} ${selectedSubCategory === "All" ? "selected" : ""}`} onClick={() => setSelectedSubCategory("All")}>All Categorys</a>
                        </li>
                        {
                            subCategories.map(subCategory => {
                                return <li>
                                    <a href="#" className={`btn ${parseInt(selectedSubCategory) === subCategory.ID ? "btn-secondary" : ""} ${parseInt(selectedSubCategory) === subCategory.ID ? "selected" : ""}`} onClick={() => setSelectedSubCategory(subCategory.ID)}>{subCategory.subCategoryName}</a>
                                </li>
                            })
                        }
                        
                    </ul>
                    <button class=" btn btn-secondary-2 dropdown-toggle" type="button" id="dropdownMenuButton-2" data-bs-toggle="dropdown" aria-expanded="false" style={{background:"#766285",color:"#fff"}} >
                        Ratings
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-2">
                        <li>
                            <a href="#" className={`btn ${selectedRating === "All" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("All")}>All Ratings</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedRating === "1" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("1")}>⭐</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedRating === "2" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("2")}>⭐⭐</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedRating === "3" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("3")}>⭐⭐⭐ </a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedRating === "4" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("4")}>⭐⭐⭐⭐</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedRating === "5" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("5")}>⭐⭐⭐⭐⭐</a>
                        </li>
                    </ul>
                    <button class=" btn btn-secondary-2 dropdown-toggle" type="button" id="dropdownMenuButton-3" data-bs-toggle="dropdown" aria-expanded="false" style={{background:"#766285",color:"#fff"}}>
                        Brand
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-3">
                        <li>
                            <a href="#" className={`btn ${selectedBrand === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("All")}>All Brands</a>
                        </li>
                        {
                            brands.map(subBrand => {
                                return <li>
                                    <a href="#" className={`btn ${selectedBrand === subBrand.ID ? "btn-secondary" : ""} ${selectedBrand === subBrand.ID ? "selected" : ""}`} onClick={() => setSelectedBrand(subBrand.ID)}>{subBrand.brandName}</a>
                                </li>
                            })
                        }
                        
                    </ul>
                    <button class=" btn btn-secondary-2 dropdown-toggle" type="button" id="dropdownMenuButton-4" data-bs-toggle="dropdown" aria-expanded="false" style={{background:"#766285",color:"#fff"}} >
                        Price
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-4">
                        <li>
                            <a href="#" className={`btn ${selectedPrice === "All" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedPrice("All")}>All Prices</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedPrice === "1000" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedPrice("1000")}>Below 1000</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedPrice === "5000" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedPrice("5000")}>Below 5000</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedPrice === "8000" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedPrice("8000")}>8000</a>
                        </li>
                    </ul>
                </div>


            </>
        )
    }
    // End Filter Compinent

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
        // setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    

    


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
    // console.log(selectedCard)


    return (
        <div className="main-row">
            <Sidebar />
            <>
            <div className="col-12 col-lg-10">
                    <div className="d-none d-lg-block text-center mt-4">
                        <h2 className="Shoppage_Heading1">{categoryName}</h2>
                    </div>
                    <div className="d-block d-lg-none">
                        <div>
                            <h2 className="Shoppage_Heading12 text-center">
                                {categoryName}
                            </h2>
                        </div>
                        <Filter />
                    </div>
                {isLoading ? (
                    <div style={{height: '80vh'}}><Loader /></div>
                ) : (
                    <div className="container my-4">
                        <div className="row ">
                            {products.length === 0 ? (
                                    <div className="card_pro_hei text-center"><h4>No items found</h4></div>
                                ) : (
                                    products.map(product => (
                                        <Col key={product.id} lg={3} md={4} sm={6} xs={6} className="product_cards">
                                            <div className="card_pro_hei">
                                                <ActionAreaCard product={product} addToCart={() => addToCart(product)} handleShowModal={handleOpenModal} addToWishList={addToWishList} setshopshowModal={setshopshowModal} />
                                            </div>
                                        </Col>
                                    ))
                                )}

                        </div>
                    </div>
                )}
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

export default Products