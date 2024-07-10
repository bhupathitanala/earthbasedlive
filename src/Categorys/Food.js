import React, { useState } from "react";
import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';

import maximize from '../assets/maximize-2.png';
import buycard from '../assets/buycard.png';
import Cotton_ear from '../assets/Beauty/BECO_Cotton_Ear.jpg';
import tissue from '../assets/Beauty/Beco_Facial_Tissue_Carbox.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import wish_img from '../assets/wish_img.png';

import natural from '../assets/natural.png'
import gmo from '../assets/gmo.png'
import no_presetives from '../assets/no_presettives.png'
import gluten from '../assets/gulten_free.png'

import makhana_salt_pepper_large from '../assets/header_images/makhana_salt_pepper_large.png'
import makhana_salt_pepper_mini from '../assets/header_images/makhana_salt_pepper_mini.png'
import makhana_salt_pepper_single_large from '../assets/header_images/makhana_salt_pepper_single_large.png'
import makhana_salt_pepper_single_mini from '../assets/header_images/makhana_salt_pepper_single_mini.png'
import makhana_salt_pepper_bowl_large from '../assets/header_images/makhana_salt_pepper_bowl_large.png'
import makhana_salt_pepper_bowl_mini from '../assets/header_images/makhana_salt_pepper_bowl_mini.png'
import makhana_salt_pepper_back_large from '../assets/header_images/makhana_salt_pepper_back_large.png'
import makhana_salt_pepper_back_mini from '../assets/header_images/makhana_salt_pepper_back_mini.png'
const products = [

    //Beauty and Bath

    {
        name: "Product 1",
        category: "Baking",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Baking",
        rating: "1",
        brand: "Brand A",
        image: Cotton_ear,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",

        price: "₹159.00",
        text: "BECO Cotton Ear Bud 200 ......."
    },
    {
        name: "Product 1",
        category: "Baking",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        price: "₹159.00",
        text: "Beco Facial Tissue Car  .......",
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
    },
    {
        name: "Product 1",
        category: "Baking",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Baking",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    }, {
        id: 3,
        image: makhana_salt_pepper_large,

        image1: makhana_salt_pepper_large,
        image2: makhana_salt_pepper_single_large,
        image3: makhana_salt_pepper_bowl_large,
        image4: makhana_salt_pepper_back_large,
        image_mini1: makhana_salt_pepper_mini,
        image_mini2: makhana_salt_pepper_single_mini,
        image_mini3: makhana_salt_pepper_bowl_mini,
        image_mini4: makhana_salt_pepper_back_mini,

        name: 'Daily Alternative',
        stars: '⭐⭐⭐⭐⭐ 5/5',
        productname: 'Conscious Foods Makhana...',
        descriptionfull: 'Conscious Foods Makhana – Salt & Pepper 65gm',
        catagerious: 'Health & Wellness, Healthy Diet foods',

        about: 'Found in the miraculous lotus plant, makhana or fox nuts are packed with nutrients and make way for a healthy snack. They are lotus seeds sourced from the beds of ponds or rivers. ',
        about2: ' Once manually harvested, they need to be air-dried and roasted before they can be consumed. To make them as delicious as they are healthy, we flavour these makhanas with the strong flavours of salt and the subtle tinge of pepper. Full of natural ingredients, these makhanas make snacking a non-guilty pleasure!',
        price: '₹149.00',
    },

    {
        name: "Product 1",
        category: "Baking",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Beverages",
        rating: "1",
        brand: "Brand A",
        image: Cotton_ear,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "BECO Cotton Ear Bud 200 ......."
    },
    {
        name: "Product 1",
        category: "Beverages",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Beverages",
        rating: "3",
        brand: "Brand A",
        image: Cotton_ear,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "BECO Cotton Ear Bud 200 ......."
    },
    {
        name: "Product 1",
        category: "Beverages",
        rating: "4",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Baking",
        rating: "5",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Baking",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Baking",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Baking",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Baking",
        rating: "3",
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        brand: "Brand C",
        image: "https://via.placeholder.com/150",
        price: "₹159.00"
    },
    {
        name: "Product 1",
        category: "Baking",
        rating: "4",
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        brand: "Brand D",
        image: "https://via.placeholder.com/150",
        price: "₹159.00"
    },



];

function Beauty() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedRating, setSelectedRating] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedPrice, setSelectedPrice] = useState("All");

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

    const totalProducts = filteredProducts.length;

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
                                            <a href="#" className={`btn ${selectedCategory === "All" ? "btn-secondary" : ""} ${selectedCategory === "All" ? "selected" : ""}`} onClick={() => setSelectedCategory("All")}>All Categorys</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Baking" ? "btn-secondary" : ""} ${selectedCategory === "Baking" ? "selected" : ""}`} onClick={() => setSelectedCategory("Baking")}>Baking</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Beverages" ? "btn-secondary" : ""} ${selectedCategory === "Beverages" ? "selected" : ""}`} onClick={() => setSelectedCategory("Beverages")}>Beverages</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Chocolates" ? "btn-secondary" : ""} ${selectedCategory === "Chocolates" ? "selected" : ""}`} onClick={() => setSelectedCategory("Chocolates")}>Chocolates</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Dairy_Alternative" ? "btn-secondary" : ""} ${selectedCategory === "Dairy_Alternative" ? "selected" : ""}`} onClick={() => setSelectedCategory("Dairy_Alternative")}>Dairy Alternative</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Dal_pulses" ? "btn-secondary" : ""} ${selectedCategory === "Dal_pulses" ? "selected" : ""}`} onClick={() => setSelectedCategory("Dal_pulses")}>Dal Pulses</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Flour_sooji" ? "btn-secondary" : ""} ${selectedCategory === "Flour_sooji" ? "selected" : ""}`} onClick={() => setSelectedCategory("Flour_sooji")}>Flour & Sooji</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Grocery" ? "btn-secondary" : ""} ${selectedCategory === "Grocery" ? "selected" : ""}`} onClick={() => setSelectedCategory("Grocery")}>Grocery</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Healthy_sweetners" ? "btn-secondary" : ""} ${selectedCategory === "Healthy_sweetners" ? "selected" : ""}`} onClick={() => setSelectedCategory("Healthy_sweetners")}>Healthy Sweetners</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Indian_spices_masalas" ? "btn-secondary" : ""} ${selectedCategory === "Indian_spices_masalas" ? "selected" : ""}`} onClick={() => setSelectedCategory("Indian_spices_masalas")}>Indian Spices Masalas</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Mock_Meat" ? "btn-secondary" : ""} ${selectedCategory === "Mock_Meat" ? "selected" : ""}`} onClick={() => setSelectedCategory("Mock_Meat")}>Mock Meat</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === " Snacks" ? "btn-secondary" : ""} ${selectedCategory === " Snacks" ? "selected" : ""}`} onClick={() => setSelectedCategory(" Snacks")}> Snacks</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === " Oils" ? "btn-secondary" : ""} ${selectedCategory === " Oils" ? "selected" : ""}`} onClick={() => setSelectedCategory(" Oils")}> Oils</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === " Quick_meals" ? "btn-secondary" : ""} ${selectedCategory === " Quick_meals" ? "selected" : ""}`} onClick={() => setSelectedCategory(" Quick_meals")}> Quick Meals</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === " Rice_Grains" ? "btn-secondary" : ""} ${selectedCategory === " Rice_Grains" ? "selected" : ""}`} onClick={() => setSelectedCategory(" Rice_Grains")}> Rice Grains</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "sauces_others" ? "btn-secondary" : ""} ${selectedCategory === "sauces_others" ? "selected" : ""}`} onClick={() => setSelectedCategory("sauces_others")}>Sauces & Others</a>
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
                <div className="col-12 d-block d-lg-none ">
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
                                                        <a href="#" className={`btn ${selectedCategory === "Baking" ? "btn-secondary" : ""} ${selectedCategory === "Baking" ? "selected" : ""}`} onClick={() => setSelectedCategory("Baking")}>Baking</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Beverages" ? "btn-secondary" : ""} ${selectedCategory === "Beverages" ? "selected" : ""}`} onClick={() => setSelectedCategory("Beverages")}>Beverages</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Chocolates" ? "btn-secondary" : ""} ${selectedCategory === "Chocolates" ? "selected" : ""}`} onClick={() => setSelectedCategory("Chocolates")}>Chocolates</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Dairy_Alternative" ? "btn-secondary" : ""} ${selectedCategory === "Dairy_Alternative" ? "selected" : ""}`} onClick={() => setSelectedCategory("Dairy_Alternative")}>Dairy Alternative</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Dal_pulses" ? "btn-secondary" : ""} ${selectedCategory === "Dal_pulses" ? "selected" : ""}`} onClick={() => setSelectedCategory("Dal_pulses")}>Dal Pulses</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Flour_sooji" ? "btn-secondary" : ""} ${selectedCategory === "Flour_sooji" ? "selected" : ""}`} onClick={() => setSelectedCategory("Flour_sooji")}>Flour & Sooji</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Grocery" ? "btn-secondary" : ""} ${selectedCategory === "Grocery" ? "selected" : ""}`} onClick={() => setSelectedCategory("Grocery")}>Grocery</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Healthy_sweetners" ? "btn-secondary" : ""} ${selectedCategory === "Healthy_sweetners" ? "selected" : ""}`} onClick={() => setSelectedCategory("Healthy_sweetners")}>Healthy Sweetners</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Indian_spices_masalas" ? "btn-secondary" : ""} ${selectedCategory === "Indian_spices_masalas" ? "selected" : ""}`} onClick={() => setSelectedCategory("Indian_spices_masalas")}>Indian Spices Masalas</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Mock_Meat" ? "btn-secondary" : ""} ${selectedCategory === "Mock_Meat" ? "selected" : ""}`} onClick={() => setSelectedCategory("Mock_Meat")}>Mock Meat</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === " Snacks" ? "btn-secondary" : ""} ${selectedCategory === " Snacks" ? "selected" : ""}`} onClick={() => setSelectedCategory(" Snacks")}> Snacks</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === " Oils" ? "btn-secondary" : ""} ${selectedCategory === " Oils" ? "selected" : ""}`} onClick={() => setSelectedCategory(" Oils")}> Oils</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === " Quick_meals" ? "btn-secondary" : ""} ${selectedCategory === " Quick_meals" ? "selected" : ""}`} onClick={() => setSelectedCategory(" Quick_meals")}> Quick Meals</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === " Rice_Grains" ? "btn-secondary" : ""} ${selectedCategory === " Rice_Grains" ? "selected" : ""}`} onClick={() => setSelectedCategory(" Rice_Grains")}> Rice Grains</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "sauces_others" ? "btn-secondary" : ""} ${selectedCategory === "sauces_others" ? "selected" : ""}`} onClick={() => setSelectedCategory("sauces_others")}>Sauces & Others</a>
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

                </div >
            </>
        );
    };
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const [mainImage, setMainImage] = useState(null);
    const handleOpenModal = (product) => {
        setSelectedCard(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
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
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
        // Save updated cart to local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };


    const MainContent = () => {
        return (
            <>
                <div className="col-10 d-none d-lg-block">
                    <div className="container my-4">
                        <div className="row">
                            {filteredProducts.map(product => (
                                <div className="col-lg-3 col-md-3 col-sm-12 mb-5 " key={product.name}>
                                    <div className="card" style={{ borderRadius: '20px' }}>
                                        <span class="offers">-39%</span>
                                        <div className="image_border  hover_img">
                                            <img src={product.image} alt={product.name} className='img-fluid shopimg p-3' />
                                            <img src={maximize} alt="Maximize" className='img-fluid maxmize_img_car' onClick={() => handleOpenModal(product)} />
                                            <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />



                                        </div>
                                        <div className="d-flex p-2">
                                            <div className="">
                                                <p className='cardpara1 mt-1  '>{product.name}</p>
                                                <p className='cardpara2   '>{product.productname}</p>
                                                <p className='cardpara3   '>{product.price}</p>
                                            </div>
                                            <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                                                
                                                <img src={buycard} alt={buycard} className='buycard <i class="bi bi-person-fill"></i>' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="col-12 d-block d-lg-none">
                    <div className="container my-4">
                        <div className="row">
                            {filteredProducts.map(product => (
                                <div className="col-6 col-md-4 col-sm-4 mb-5 " key={product.name}>
                                    <div className="card" style={{ borderRadius: '20px' }}>
                                        <span class="offers">-39%</span>
                                        <div className="image_border">
                                            <img src={product.image} alt={product.name} className='img-fluid shopimg  p-3' />
                                            <img src={maximize} alt="Maximize" className='img-fluid maxmize_img_car' onClick={() => handleOpenModal(product)} />
                                            <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish   ' />

                                        </div>
                                        <div className="d-flex p-2">
                                            <div className="">
                                                <p className='cardpara1  cardpara1_slick  '>{product.name}</p>
                                                <p className='cardpara2  cardpara2_slick '>{product.productname}</p>
                                                <p className='cardpara3 cardpara3_slick'>{product.price}</p>
                                            </div>
                                            <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                                            <img src={buycard} alt={buycard} className=' buycard <i class="bi bi-person-fill"></i>' />
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

                                    <img src={mainImage || selectedCard.image} alt={selectedCard.title} className='img-fluid' id="mainImage" />



                                </div>
                                <div className='col-md-2'>
                                    <img src={selectedCard.image_mini1} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick1(selectedCard.image_mini1)} />
                                    <img src={selectedCard.image_mini2} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick2(selectedCard.image_mini2)} />
                                    <img src={selectedCard.image_mini3} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick3(selectedCard.image_mini3)} />
                                    <img src={selectedCard.image_mini4} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick4(selectedCard.image_mini4)} />
                                </div>




                                <div className='col-md-5 col-xs-12' style={{ overflowY: 'auto', maxHeight: '400px' }}>
                                    <h6 className='pop_up_cardhead'>{selectedCard.descriptionfull}</h6>
                                    <p >{selectedCard.stars}</p>
                                    <p className="deals_para">{selectedCard.price}</p>
                                    <p className="deals_para1">{selectedCard.stocks}</p>

                                    <div className="button-group row " style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
                                        <Button className='col-5' onClick={() => addToCart(selectedCard)} style={{ border: "1px solid green", backgroundColor: "white", color: "green" }}>Add to cart</Button>
                                        <Button className='col-5 ' variant="success" >Buy Now</Button>
                                    </div>

                                    <select name="cars" className="form-control mt-5">
                                        <option value="Delivery Details">Delivery Details</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>

                                    <div className='col-12 mt-4'>
                                        <div className="mt-5 row">
                                            <div className='col-3 justify_con'>
                                                <img src={natural} alt={natural} />
                                                <p className="mt-4">Natural & Organic</p>
                                            </div>
                                            <div className='col-3 justify_con'>
                                                <img src={gmo} alt={gmo} />
                                                <br />
                                                <p className="mt-4">NON  <br></br> GMO</p>
                                            </div>
                                            <div className='col-3  justify_con'>
                                                <img src={no_presetives} alt={no_presetives} />
                                                <p className="mt-4" >No Added   Preservatives</p>
                                            </div>
                                            <div className='col-3 justify_con'>
                                                <img src={gluten} alt={gluten} />
                                                <p className="mt-4">Gluten Free</p>
                                            </div>
                                        </div>
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
        );
    };


    return (
        <div className="col-12">
            <div className="text-center mt-4">
                <div className="d-none d-lg-block">
                    <h2 className="Shoppage_Heading1">Food</h2>
                </div>
                <div className="d-block d-lg-none">
                    <h2 className="Shoppage_Heading12">Food <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                            <div style={{ color: '#Ad9688' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-filter-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                    <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                                </svg>
                            </div>

                        </button></h2>
                </div>

            </div>
            <div className="main-row">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

export default Beauty;