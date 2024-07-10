import React, { useEffect, useState } from "react";
import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';

import maximize from '../assets/maximize-2.png';
import buycard from '../assets/buycard.png';
import Cotton_ear from '../assets/Beauty/BECO_Cotton_Ear.jpg';
import tissue from '../assets/Beauty/Beco_Facial_Tissue_Carbox.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import wish_img from '../assets/wish_img.png';
import { useNavigate } from 'react-router-dom';
import third from '../assets/third.png'
import maxmixe from '../assets/maximize-2.png'

import natural from '../assets/natural.png'
import gmo from '../assets/gmo.png'
import no_presetives from '../assets/no_presettives.png'
import gluten from '../assets/gulten_free.png'
import iconcard2 from '../assets/iconcard2.png';
import iconcard3 from '../assets/iconcard3.png';
import flagimg from '../assets/flagimg.png';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
import BuyProduct from "../Categorys/BuyProduct";
import ActionAreaCard from "./MuiCard";

function Wishlist() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedSubCategory, setSelectedSubCategory] = useState("All");
    const [selectedRating, setSelectedRating] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [subCategories, setSubCategories] = useState([])
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const user = useSelector((state) => state.user.auth.user)
    console.log(user)

    useEffect(() => {
        if (!user?.ID) {
            if (Array.isArray(JSON.parse(localStorage.getItem('wishlist_product_ids')))) {
                Promise.all([
                    Apicalls.post(`products/requiredProducts`, { productIds: JSON.parse(localStorage.getItem('wishlist_product_ids')) })
                ]).then(([data]) => {
                    setProducts(data.data)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
        else {
            Promise.all([
                Apicalls.get('category/' + window.location.pathname.split('/')[2]),
                Apicalls.get('category')
            ]).then(([subCategoriesData, categoryData]) => {
                console.log(subCategoriesData)
                setSubCategories(subCategoriesData.data.subcategories)
                setCategories(categoryData.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [])

    useEffect(() => {
        if (user?.ID) {
            Promise.all([
                Apicalls.get('wishlist/user/' + user.ID)
            ]).then(([productsData]) => {
                setProducts(productsData.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [selectedSubCategory])

    // const filteredProducts = products.filter(product => {
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
    const filteredProducts = products.filter(product => {
        if (
            selectedCategory === "All" &&
            selectedRating === "All" &&
            selectedBrand === "All" &&
            selectedPrice === "All"
        ) {
            return true;
        } else {
            return (
                (selectedCategory === "All" || product.category === selectedCategory) &&
                (selectedRating === "All" || product.rating === selectedRating) &&
                (selectedBrand === "All" || product.brand === selectedBrand) &&
                (selectedPrice === "All" || product.price === selectedPrice)
            );
        }
    });

    console.log(filteredProducts)

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
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "All" ? "btn-secondary" : ""} ${selectedCategory === "All" ? "selected" : ""}`}>Wishlist</a>
                                        </li>
                                        {/* <li>
                                            <a href="#" className={`btn ${selectedCategory === "Beauty_bath" ? "btn-secondary" : ""} ${selectedCategory === "Beauty_bath" ? "selected" : ""}`} onClick={() => setSelectedCategory("Beauty_bath")}>Beauty & Bath</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Essential_oils" ? "btn-secondary" : ""} ${selectedCategory === "Essential_oils" ? "selected" : ""}`} onClick={() => setSelectedCategory("Essential_oils")}>Essential Oils</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Eye_care" ? "btn-secondary" : ""} ${selectedCategory === "Eye_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Eye_care")}>Eye Care</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Hair_care" ? "btn-secondary" : ""} ${selectedCategory === "Hair_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Hair_care")}>Hair Care</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Lip_care" ? "btn-secondary" : ""} ${selectedCategory === "Lip_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Lip_care")}>Lip Care</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Perfumes" ? "btn-secondary" : ""} ${selectedCategory === "Perfumes" ? "selected" : ""}`} onClick={() => setSelectedCategory("Perfumes")}>Perfumes</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Makeup" ? "btn-secondary" : ""} ${selectedCategory === "Makeup" ? "selected" : ""}`} onClick={() => setSelectedCategory("Makeup")}>Makeup</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Skin_care" ? "btn-secondary" : ""} ${selectedCategory === "Skin_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Skin_care")}>Skin Care</a>
                                        </li> */}
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
                                    <li>
                                        <a href="#" className={`btn ${selectedBrand === "Brand A" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand A")}>Brand A</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedBrand === "Brand B" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand B")}>Brand B</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedBrand === "Brand C" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand C")}>Brand C</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedBrand === "Brand D" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand D")}>Brand D</a>
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
                                        <a href="#" className={`btn ${selectedPrice === "5000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("5000")}>Above 5000</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedPrice === "8000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("8000")}>8000</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="col-12 d-block d-lg-none ">
                    <div className="sidebar-content ">
                        <div className="text-center">
                            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{ width: '250px' }}>
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Filters</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div className="text-center">
                                        <div className="col-12">
                                            <div>
                                                <label className="form-label"><h4><b>Categorys</b></h4></label>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "All" ? "btn-secondary" : ""} ${selectedCategory === "All" ? "selected" : ""}`} onClick={() => setSelectedCategory("All")}>All Categorys</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Beauty_bath" ? "btn-secondary" : ""} ${selectedCategory === "Beauty_bath" ? "selected" : ""}`} onClick={() => setSelectedCategory("Beauty_bath")}>Beauty & Bath</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Essential_oils" ? "btn-secondary" : ""} ${selectedCategory === "Essential_oils" ? "selected" : ""}`} onClick={() => setSelectedCategory("Essential_oils")}>Essential Oils</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Eye_care" ? "btn-secondary" : ""} ${selectedCategory === "Eye_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Eye_care")}>Eye Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Hair_care" ? "btn-secondary" : ""} ${selectedCategory === "Hair_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Hair_care")}>Hair Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Lip_care" ? "btn-secondary" : ""} ${selectedCategory === "Lip_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Lip_care")}>Lip Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Perfumes" ? "btn-secondary" : ""} ${selectedCategory === "Perfumes" ? "selected" : ""}`} onClick={() => setSelectedCategory("Perfumes")}>Perfumes</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Makeup" ? "btn-secondary" : ""} ${selectedCategory === "Makeup" ? "selected" : ""}`} onClick={() => setSelectedCategory("Makeup")}>Makeup</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Skin_care" ? "btn-secondary" : ""} ${selectedCategory === "Skin_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Skin_care")}>Skin Care</a>
                                                    </li>
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
                                                <li>
                                                    <a href="#" className={`btn ${selectedBrand === "Brand A" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand A")}>Brand A</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedBrand === "Brand B" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand B")}>Brand B</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedBrand === "Brand C" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand C")}>Brand C</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedBrand === "Brand D" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand D")}>Brand D</a>
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
                                                    <a href="#" className={`btn ${selectedPrice === "5000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("5000")}>Above 5000</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedPrice === "8000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("8000")}>8000</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div > */}
                {/* <div className="col-12 d-block d-lg-none">
                    <Navbar>
                        <div>
                            <label className="form-label"><h4><b>Categorys</b></h4></label>
                            <ul className="list-unstyled">
                                <Nav.Link>
                                    <Nav.Link href="#" className={`btn ${selectedCategory === "All" ? "btn-secondary" : ""} ${selectedCategory === "All" ? "selected" : ""}`} onClick={() => setSelectedCategory("All")}>All Categorys</Nav.Link>
                                </Nav.Link>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Beauty_bath" ? "btn-secondary" : ""} ${selectedCategory === "Beauty_bath" ? "selected" : ""}`} onClick={() => setSelectedCategory("Beauty_bath")}>Beauty & Bath</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Essential_oils" ? "btn-secondary" : ""} ${selectedCategory === "Essential_oils" ? "selected" : ""}`} onClick={() => setSelectedCategory("Essential_oils")}>Essential Oils</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Eye_care" ? "btn-secondary" : ""} ${selectedCategory === "Eye_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Eye_care")}>Eye Care</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Hair_care" ? "btn-secondary" : ""} ${selectedCategory === "Hair_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Hair_care")}>Hair Care</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Lip_care" ? "btn-secondary" : ""} ${selectedCategory === "Lip_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Lip_care")}>Lip Care</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Perfumes" ? "btn-secondary" : ""} ${selectedCategory === "Perfumes" ? "selected" : ""}`} onClick={() => setSelectedCategory("Perfumes")}>Perfumes</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Makeup" ? "btn-secondary" : ""} ${selectedCategory === "Makeup" ? "selected" : ""}`} onClick={() => setSelectedCategory("Makeup")}>Makeup</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Skin_care" ? "btn-secondary" : ""} ${selectedCategory === "Skin_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Skin_care")}>Skin Care</a>
                                </li>
                            </ul>
                        </div>
                    </Navbar>
                </div> */}
            </>
        );
    };

    const Filter = () => {
        return (
            <>
                <div className="row slider_filter m-2" style={{ width: 'auto' }}>
                    <button class=" btn btn-secondary-2 dropdown-toggle" type="button" id="dropdownMenuButton-1" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-1">
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "All" ? "btn-secondary-2" : ""} ${selectedCategory === "All" ? "selected" : ""}`} onClick={() => setSelectedCategory("All")}>All Categorys</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Beauty_bath" ? "btn-secondary-2" : ""} ${selectedCategory === "Beauty_bath" ? "selected" : ""}`} onClick={() => setSelectedCategory("Beauty_bath")}>Beauty & Bath</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Essential_oils" ? "btn-secondary-2" : ""} ${selectedCategory === "Essential_oils" ? "selected" : ""}`} onClick={() => setSelectedCategory("Essential_oils")}>Essential Oils</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Eye_care" ? "btn-secondary-2" : ""} ${selectedCategory === "Eye_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Eye_care")}>Eye Care</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Hair_care" ? "btn-secondary-2" : ""} ${selectedCategory === "Hair_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Hair_care")}>Hair Care</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Lip_care" ? "btn-secondary-2" : ""} ${selectedCategory === "Lip_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Lip_care")}>Lip Care</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Perfumes" ? "btn-secondary-2" : ""} ${selectedCategory === "Perfumes" ? "selected" : ""}`} onClick={() => setSelectedCategory("Perfumes")}>Perfumes</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Makeup" ? "btn-secondary-2" : ""} ${selectedCategory === "Makeup" ? "selected" : ""}`} onClick={() => setSelectedCategory("Makeup")}>Makeup</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Skin_care" ? "btn-secondary-2" : ""} ${selectedCategory === "Skin_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Skin_care")}>Skin Care</a>
                        </li>
                    </ul>
                    <button class=" btn btn-secondary-2 dropdown-toggle" type="button" id="dropdownMenuButton-2" data-bs-toggle="dropdown" aria-expanded="false">
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
                    <button class=" btn btn-secondary-2 dropdown-toggle" type="button" id="dropdownMenuButton-3" data-bs-toggle="dropdown" aria-expanded="false">
                        Brand
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-3">
                        <li>
                            <a href="#" className={`btn ${selectedBrand === "All" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedBrand("All")}>All Brands</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedBrand === "Brand A" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedBrand("Brand A")}>Brand A</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedBrand === "Brand B" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedBrand("Brand B")}>Brand B</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedBrand === "Brand C" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedBrand("Brand C")}>Brand C</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedBrand === "Brand D" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedBrand("Brand D")}>Brand D</a>
                        </li>
                    </ul>
                    <button class=" btn btn-secondary-2 dropdown-toggle" type="button" id="dropdownMenuButton-4" data-bs-toggle="dropdown" aria-expanded="false">
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
                            <a href="#" className={`btn ${selectedPrice === "5000" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedPrice("5000")}>Above 5000</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedPrice === "8000" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedPrice("8000")}>8000</a>
                        </li>
                    </ul>
                </div>


            </>
        )
    }
    const [showModal, setShowModal] = useState(false);
    const [showBuyModal, setShowBuyModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();

    const [mainImage, setMainImage] = useState(null);
    const handleOpenModal = (product) => {
        setSelectedCard(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleBuyModal = () => {
        setShowBuyModal(false);
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

    console.log(selectedCard)

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
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
        // Save updated cart to local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    useEffect(() => {
        if (window.history.state === 'buyproduct' && !showBuyModal) {
            setShowBuyModal(true)
        }
    }, [window.history.state])

    function deleteFromWishlist(product) {
        if (user?.ID) {
            Promise.all([
                Apicalls.delete('wishlist/' + product.ID)
            ]).then(([productsData]) => {
                setProducts(products.filter((cart) => cart.ID !== product.ID))
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            let cartItemsIds = JSON.parse(localStorage.getItem('wishlist_product_ids'));
            cartItemsIds = cartItemsIds.filter(id => id !== product.ID)
            localStorage.setItem('wishlist_product_ids', JSON.stringify(cartItemsIds))
            setProducts(products.filter(item => item.ID !== product.ID))
        }
    }

    return (
        <div className="col-12">
            <div className="text-center mt-4">
                <div className="d-none d-lg-block">
                    <h2 className="Shoppage_Heading1">Wishlist</h2>
                </div>
                <div className="d-block d-lg-none">
                    <div>
                        <h2 className="Shoppage_Heading12">
                            Wishlist
                            {/* <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                                <div style={{ color: '#Ad9688' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-filter-square" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                </div>

                            </button> */}
                        </h2>
                    </div>
                    <Filter />
                </div>
            </div>
            <div className="main-row">
                <Sidebar />
                <>
                    <div className="col-10 d-none d-lg-block">
                        <div className="container my-4">
                            <div className="row">
                                {filteredProducts.map(product => (
                                    <div className="col-lg-3 col-md-3 col-sm-12 mb-5 " key={product.name}>
                                        <ActionAreaCard product={product} handleShowModal={handleOpenModal} addToWishList={() => { deleteFromWishlist(product) }} />
                                    </div>
                                    // <div className="col-lg-3 col-md-3 col-sm-12 mb-5 " key={product.name}>
                                    //     <div className="card" style={{ borderRadius: '20px' }}>
                                    //         <span class="offers">-{product.discount}%</span>
                                    //         <div className="image_border  hover_img">
                                    //             <img src={post_url + JSON.parse(product.productImages)[0]} alt={product.name} className='img-fluid shopimg p-3' />
                                    // {/* <img src={product.image} alt={product.name} className='img-fluid shopimg p-3' /> */ }
                                    // // <img src={maximize} alt="Maximize" className='img-fluid maxmize_img_car' onClick={() => handleOpenModal(product)} />
                                    // {/* <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' style={{ cursor: 'pointer' }} onClick={() => addToWishList(product.ID)} /> */ }



                                    //         </div>
                                    //         <div className="d-flex p-2">
                                    //             <div className="">
                                    //                 <p className='cardpara1 mt-1'>{product.title}</p>
                                    //                 <div class="shipping-icons1 mb-2">
                                    //                     {JSON.parse(product.features).includes('panIndia') && <div class="shipping-icon-wrapper">
                                    //                         <span className="icon-text">Pan India</span>
                                    //                         <img src={flagimg}
                                    //                             alt="Pan India" class="shipping-icon" width={50} height={50} />
                                    //                     </div>}
                                    //                     {JSON.parse(product.features).includes('COD') && <div class="shipping-icon-wrapper">
                                    //                         <span className="icon-text">Cash On Delivery</span>
                                    //                         <img src={iconcard3}
                                    //                             alt="Free Shipping" class="shipping-icon" width={50} height={50} />
                                    //                     </div>}
                                    //                     {JSON.parse(product.features).includes('freeDelivery') && <div class="shipping-icon-wrapper">
                                    //                         <span className="icon-text">Above ₹1500</span>
                                    //                         <img src={iconcard2} alt="COD"
                                    //                             class="shipping-icon" width={50} height={50} />
                                    //                     </div>}
                                    //                 </div>
                                    //                 <p className='cardpara2'>{product.heading}</p>
                                    //                 <p className='cardpara3'>{product.price}</p>
                                    //                 <p className="cardpara4" style={{ float: 'right' }}>
                                    //                     <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                    //                 </p>
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="col-12 d-block d-lg-none">
                        <div className="container my-4">
                            <div className="row">
                                {filteredProducts.map(product => (
                                    <div className="col-6 col-md-3 col-sm-3 mb-5 " key={product.name}>
                                        <div className="card" style={{ borderRadius: '20px' }}>
                                            <span class="offers">-{product.discount}%</span>
                                            <div className="image_border">
                                                <img src={product.image} alt={product.name} className='img-fluid shopimg p-3' />
                                                <img src={maximize} alt="Maximize" className='img-fluid maxmize_img_car' onClick={() => handleOpenModal(product)} />
                                                {/* <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' style={{ cursor: 'pointer' }} onClick={() => addToWishList(product.ID)} /> */}

                                            </div>
                                            <div className="d-flex p-2">
                                                <div className="">
                                                    <p className='cardpara1 mt-3'>{product.title}</p>
                                                    <div class="shipping-icons1 mb-2" style={{ width: '100%' }}>
                                                        {JSON.parse(product.features).includes('panIndia') && <div class="shipping-icon-wrapper">
                                                            <span className="icon-text">Pan India</span>
                                                            <img src={flagimg}
                                                                alt="Pan India" class="shipping-icon" width={50} height={50} />
                                                        </div>}
                                                        {JSON.parse(product.features).includes('freeDelivery') && <div class="shipping-icon-wrapper">
                                                            <span className="icon-text">Above ₹1500</span>
                                                            <img src={iconcard3}
                                                                alt="Free Shipping" class="shipping-icon" width={50} height={50} />
                                                        </div>}
                                                        {JSON.parse(product.features).includes('COD') && <div class="shipping-icon-wrapper">
                                                            <span className="icon-text">Cash On Delivery</span>
                                                            <img src={iconcard2} alt="COD"
                                                                class="shipping-icon" width={50} height={50} />
                                                        </div>}
                                                    </div>
                                                    <p className='cardpara2'>{product.heading}</p>
                                                    <p className='cardpara3'>{product.price}</p>
                                                    <p className="cardpara3" style={{ float: 'right' }}>
                                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    <Modal show={showModal} onHide={handleCloseModal} size="xl">
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedCard && selectedCard.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {selectedCard && (
                                <div className="maximized-card row">
                                    <div className='col-md-5 col-xs-12'>

                                        <img src={post_url + JSON.parse(selectedCard.productImages)[0]} alt={selectedCard.title} className='img-fluid' id="mainImage" />
                                        {/* <img src={selectedCard.image} alt={selectedCard.title} className='img-fluid' id="mainImage" /> */}


                                    </div>
                                    <div className='col-md-2'>
                                        {
                                            JSON.parse(selectedCard.productImages).map((item, index) => {
                                                if (index !== 0) {
                                                    return <img src={post_url + JSON.parse(selectedCard.productImages)[index]} alt={selectedCard.title} className='img-fluid' onClick={() => handleImageClick(index)} />
                                                }
                                            })
                                        }
                                        {/* <img src={post_url + JSON.parse(selectedCard.productImages)[1]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick1(selectedCard.image_mini1)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[2]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick2(selectedCard.image_mini2)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[3]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick3(selectedCard.image_mini3)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[4]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick4(selectedCard.image_mini4)} /> */}
                                    </div>




                                    <div className='col-md-5 col-xs-12' style={{ overflowY: 'auto', maxHeight: '400px' }}>
                                        <h6 className='pop_up_cardhead'>{selectedCard.descriptionfull}</h6>
                                        <p >{selectedCard.stars}</p>
                                        <p className="deals_para">{selectedCard.price}</p>
                                        <p className="deals_para1">{selectedCard.quantity} in stock hurry up</p>

                                        <div className="button-group row " style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
                                            <Button className='col-5' onClick={() => addToCart(selectedCard)} style={{ border: "1px solid green", backgroundColor: "white", color: "green" }}>Add to cart</Button>
                                            <Button className='col-5 ' variant="success" onClick={() => {
                                                if (!user.ID) {
                                                    navigate('/login', { state: 'buyproduct' })
                                                }
                                                setShowBuyModal(true)
                                            }} >Buy Now</Button>
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
                                        {/* <select name="cars" className="form-control mt-5">
                                            <option value="Delivery Details">Delivery Details</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <br />
                                        <br /> */}

                                        <div class="shipping-icons1 mb-2">
                                            {selectedCard?.features?.includes('1') && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Pan India</span>
                                                <img src={flagimg}
                                                    alt="Pan India" class="shipping-icon" width={50} height={50} />
                                            </div>}
                                            {selectedCard?.features?.includes('2') && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Above ₹1500</span>
                                                <img src={iconcard3}
                                                    alt="Free Shipping" class="shipping-icon" width={50} height={50} />
                                            </div>}
                                            {selectedCard?.features?.includes('3') && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Cash On Delivery</span>
                                                <img src={iconcard2} alt="COD"
                                                    class="shipping-icon" width={50} height={50} />
                                            </div>}
                                        </div>
                                        <div className='col-12 mt-4'>

                                            <hr className="m-auto" style={{ border: "none", height: "2px", width: "150px", backgroundColor: "#509264" }} />

                                            <p className="mt-4">{selectedCard.about}</p>
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
                <BuyProduct showModal={showBuyModal} handleBuyModal={handleBuyModal} selectedCard={selectedCard} />
            </div>
        </div >
    );
}

export default Wishlist;