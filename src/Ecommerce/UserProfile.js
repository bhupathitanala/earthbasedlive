import React, { useEffect, useState } from "react";
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
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import Apicalls, {post_url} from "../Apicalls";
import { compose } from "redux";
import { useSelector } from "react-redux";
import store from "../store";
import { storeUserError } from "../AuthActions";
import './Profile.css';
const products = [

    //Beauty and Bath
    {
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

        price: '₹149.00',
    },

    {
        name: "Product 1",
        category: "View_orders",
        rating: "1",
        brand: "Brand A",
        image: Cotton_ear,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",

        price: "₹159.00",
        text: "BECO Cotton Ear Bud 200 ......."
    },
    {
        name: "Product 1",
        category: "View_orders",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        price: "₹159.00",
        text: "Beco Facial Tissue Car  .......",
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
    },
    {
        name: "Product 1",
        category: "View_orders",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },



    {
        name: "Product 1",
        category: "View_orders",
        rating: "5",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "View_orders",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "View_orders",
        rating: "2",
        brand: "Brand B",
        image: tissue,
        productname: "Ecotyl Chia Seeds | Raw | Rich in   ....",
        price: "₹159.00",
        text: "Beco Facial Tissue Car  ......."

    },



];

function UserProfile() {



    const navigate = useNavigate()
        const [orders, setOrders] = useState([])
        const [deliveredorders, setDeliveredOrders] = useState([])
        const user = useSelector((state) => state.user.auth.user)
        // console.log(user.fullName)

        useEffect(() => {
            if (user?.ID) {
                Promise.all([
                    Apicalls.get('order/user/' + user.ID)
                ]).then(([ordersData]) => {
                    //setOrders(ordersData.data)
                    const filteredOrders = ordersData.data.filter(order => order.delivery_status === 'success');
                    setOrders(ordersData.data);
                    setDeliveredOrders(filteredOrders);
                }).catch((err) => {
                    console.log(err)
                })
            }
            else {
                navigate('/login')
            }
        }, [])

        const steps = ['ordered', 'confirmed', 'shipped', 'delivered'];



    // const user = useSelector((state) => state.user.auth.user)



    const Sidebar = () => {
        const [selectedCategory, setSelectedCategory] = useState("View_orders");

        const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            city: "",
            pincode: "",
            state: "",
            saveCardDetails: false
        });


        const handleInputChange = (e) => {
            const { name, value, type, checked } = e.target;
            const inputValue = type === "checkbox" ? checked : value;
            setFormData({
                ...formData,
                [name]: inputValue
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission here
        };


        const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // State to track sidebar expansion

        const handleCategoryChange = (category) => {
            setSelectedCategory(category);
            setIsSidebarExpanded(true); // Expand sidebar when a category is clicked
        };

        const handleBackButtonClick = () => {
            setIsSidebarExpanded(false); // Collapse sidebar when back button is clicked
        };

        const handleLogout = () => {
            localStorage.clear();
            window.location.href='/login';
        }



        return (
            <>
                <div className="col-12 col-md-3   col-lg-3  col-xl-2 position-sticky vh-100 side_nav d-flex flex-row justify-content-center d-none d-md-block " >
                    <div className="sidebar-content overflow-y-auto overflow-x-hidden vh-100">
                        <div className=" ">
                            <div className="col-12">
                                <div className="row">
                                    <label className="form-label">
                                        <div className="col-12 text-center">
                                            <h2><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-circle side_space" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                                </svg></h2>
                                            <p>PROFILE</p>
                                             {
                                                user!= null ? (<h4 className="  "><b>{user.fullName}</b></h4>) : ''
                                             }   
                                        </div>
                                    </label>
                                    <ul className="list-unstyled ms-3">

                                        <li>
                                            <p className={`btn ${selectedCategory === "View_orders" ? "btn-secondary" : ""} ${selectedCategory === "View_orders" ? "selected" : ""}  `} onClick={() => setSelectedCategory("View_orders")}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bag-heart-fill side_space" viewBox="0 0 16 16">
                                                    <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                                </svg>
                                                View Orders</p>
                                        </li>

                                        {/* <li  >
                                            <p className={`btn ${selectedCategory === "Personal_details" ? "btn-secondary" : ""} ${selectedCategory === "Personal_details" ? "selected" : ""}`} onClick={() => setSelectedCategory("Personal_details")}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-circle side_space" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                                </svg>
                                                Personal Details
                                            </p>
                                        </li> */}

                                        

                                        <li>
                                            <button className={`btn ${selectedCategory === "Log_out" ? "btn-secondary" : ""} ${selectedCategory === "Log Out" ? "selected" : ""}    `} onClick={() => handleLogout() }       >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-left side_space" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                                                </svg>

                                                Log Out
                                            </button>
                                        </li>

                                    </ul>
                                </div>




                            </div>

                        </div>
                    </div>

                </div>


                {selectedCategory === "View_orders" && (

                    <ViewOrders />
                )}
                {selectedCategory === "Personal_details" && (
                    <PersonalDetailsmd />
                )}

                {selectedCategory === "Manage_addresses" && (

                    <Addressforlarge />
                )}
                {selectedCategory === "Log_out" && (
                    navigate("/login")
                )}





                <div className="  position-sticky vh-100 side_nav d-flex flex-row justify-content-center d-none">
                    <div className="sidebar-content overflow-y-auto overflow-x-hidden vh-100">
                        {!isSidebarExpanded && ( // Render only if sidebar is collapsed
                            <div className="d-block d-md-none"> {/* Show only on mobile devices */}
                                <div className="sidebar-collapsed">
                                    <ul className="list-unstyled">
                                        <li>
                                            <p className={`btn ${selectedCategory === "View_orders" ? "btn-secondary" : ""} ${selectedCategory === "View_orders" ? "selected" : ""} user_text_size`} onClick={() => handleCategoryChange("View_orders")}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bag-heart-fill side_space" viewBox="0 0 16 16">
                                                    <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                                </svg>
                                                View Orders
                                            </p>
                                        </li>
                                        {/* <li>
                                            <p className={`btn ${selectedCategory === "Personal_details" ? "btn-secondary" : ""} ${selectedCategory === "Personal_details" ? "selected" : ""} user_text_size`} onClick={() => handleCategoryChange("Personal_details")}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-circle side_space" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                                </svg>
                                                Personal Details
                                            </p>
                                        </li>
                                        <li>
                                            <p className={`btn ${selectedCategory === "Manage_addresses" ? "btn-secondary" : ""} ${selectedCategory === "Manage_addresses" ? "selected" : ""} user_text_size`} onClick={() => handleCategoryChange("Manage_addresses")}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pin-map-fill side_space" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z" />
                                                    <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                                                </svg>
                                                Manage Address
                                            </p>
                                        </li> */}
                                        <li>
                                            <p className={`btn ${selectedCategory === "Log_out" ? "btn-secondary" : ""} ${selectedCategory === "Log_out" ? "selected" : ""} user_text_size`} onClick={() => handleCategoryChange("Log_out")}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-left side_space" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                                                </svg>
                                                Log Out
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {isSidebarExpanded && ( // Render expanded sidebar content if sidebar is expanded
                            <div>
                                {/* Your expanded sidebar content here */}
                                {/* Include a back button to return to the main options */}
                                <button className="back-btn  back_button_personal" onClick={handleBackButtonClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left left_arrow_back" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                    </svg>
                                    Back
                                </button>
                                {/* Render different components based on selected category */}
                                {selectedCategory === "View_orders" && <ViewOrdersMd />}
                                {selectedCategory === "Personal_details" && <PersonalDetails />}
                                {selectedCategory === "Manage_addresses" && <Addressformd />}
                                {selectedCategory === "Log_out" && <div>log</div>}
                            </div>
                        )}
                    </div>
                </div>




                <div class="d-block d-md-none mt-3" style={{width:"100%"}}>
                    <ul class="nav nav-tabs nav-justified" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active d-flex text-center" data-bs-toggle="pill" href="#home" style={{ alignItems:"center",justifyContent:"center" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bag-heart-fill side_space" viewBox="0 0 16 16">
                                    <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                </svg>
                                Orders
                            </a>
                        </li>
                        <li class="nav-item" onClick={() => handleLogout()}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-left side_space" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                                </svg>
                                Logout
                            </span>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div id="home" class="container tab-pane active"><br/>
                        <section className=" " style={{ background:"#fff", padding:"20px" }}>
                            <div className='  only_padding_chechkout  '>
                                <h3 className='payment_heading_sm_divice'>Orders</h3><hr/>
                                
                                    <div>
                                        {
                                        orders.length === 0 ? (
                                            <>
                                                <h1 className="text-center" style={{ color:"#39804E" }}>No Orders</h1>
                                            </>
                                        ) : (
                                        orders.map((product, index) => (
                                            <div key={product.id}>
                                            <hr />
                                            <p>Order ID: {product.order_id}</p>
                                            <div style={{ overflowY: 'auto', maxHeight: '400px', overflowX: 'hidden' }}>
                                                <div className='row d-flex justify-content-between' key={product.product_id}>
                                                    <div className='col-3'>
                                                        <img className="img-fluid checlout_page_img" src={post_url + product.product_img} alt={product.product_title} />
                                                    </div>
                                                    <div className='col-9'>
                                                        <p className=''><b>{product.product_title}</b></p>
                                                        <p className='d-flex justify-content-between'>
                                                            <span>₹ {product.product_price}</span>
                                                            <small>Qty: {product.product_qty}</small>
                                                        </p>
                                                        <p className=''>Ordered on {product.day} {product.month} {product.year}
                                                        <br />
                                                        <small>Your item has been {product.delivery_status}</small>
                                                        </p>
                                                    </div>
                                                    {/* <div className='col-2'>
                                                    </div> */}
                                                    {/* <div className='col-2'>
                                                    </div> */}
                                                </div>
                                            </div>

                                            
                                            <ol className="progtrckr" data-progtrckr-steps={steps.length}>
                                                {steps.map((step, index) => (
                                                    <li key={index} className={(index <= steps.indexOf(product.delivery_status) || (index === 0 && product.delivery_status == 'pending')) ? 'progtrckr-done' : 'progtrckr-todo'} style={{ fontSize:"9px" }}>
                                                        {step}
                                                    </li>   
                                                ))}
                                            </ol>
                                            <br />
                                            <br />
                                            </div>
                                        )))}
                                        </div>

                                

                            </div>
                            </section>
                        </div>
                    </div>
                </div>


            </>
        );
    };



    const ViewOrders = () => {
        

        return (
            <>
                <div className="  col-md-8 col-lg-8 col-xl-9 d-none d-md-block ">
                    <section className=" " style={{ background:"#fff", padding:"20px" }}>

                        <div className='  only_padding_chechkout  '>
                            <h3 className='payment_heading_sm_divice'>Orders</h3>
                            
                                <div>
                                    {
                                    orders.length === 0 ? (
                                        <>
                                            <h1 className="text-center" style={{ color:"#39804E" }}>No Orders</h1>
                                        </>
                                    ) : (
                                        orders.map((product, index) => (
                                        <div key={product.id}>
                                        <hr />
                                        <p>Order ID: {product.order_id}</p>
                                        <div style={{ overflowY: 'auto', maxHeight: '400px', overflowX: 'hidden' }}>
                                            <div className='row d-flex justify-content-between' key={product.product_id}>
                                                <div className='col-md-2 col-lg-1'>
                                                    <img className="img-fluid checlout_page_img" src={post_url + product.product_img} alt={product.product_title} />
                                                </div>
                                                <div className='col-md-6 col-lg-5'>
                                                    <p className=''><b>{product.product_title}</b></p>
                                                </div>
                                                <div className='col-md-1 col-lg-1'>
                                                    <p className=''>₹ {product.product_price}
                                                    <br />
                                                    <small>Qty: {product.product_qty}</small>
                                                    </p>
                                                </div>
                                                <div className='col-md-4 col-lg-3 float-end'>
                                                    <p className=''>Ordered on {product.day} {product.month} {product.year}
                                                    <br />
                                                    <small>Your item has been {product.delivery_status}</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <ol className="progtrckr" data-progtrckr-steps={steps.length}>
                                            {steps.map((step, index) => (
                                                <li key={index} className={(index <= steps.indexOf(product.delivery_status) || (index === 0 && product.delivery_status == 'pending')) ? 'progtrckr-done' : 'progtrckr-todo'}>
                                                    {step}
                                                </li>
                                            ))}
                                        </ol>
                                        <br />
                                        <br />
                                        </div>
                                    )))}
                                    </div>

                            

                        </div>
                    </section>
                </div>

            </>
        );
    };
    const ViewOrdersMd = () => {
        const [orders, setOrders] = useState([])
        useEffect(() => {
            if (user?.ID) {
                Promise.all([
                    Apicalls.get('order/user/' + user.ID)
                ]).then(([ordersData]) => {
                    //setOrders(ordersData.data)
                    const filteredOrders = ordersData.data.filter(order => order.delivery_status === 'success');
                    setOrders(ordersData.data);
                    setDeliveredOrders(filteredOrders);
                }).catch((err) => {
                    console.log(err)
                })
            }
            else {
                navigate('/login')
            }
        }, [])
        const steps = ['ordered', 'confirmed', 'shipped', 'delivered'];
        return (
            <>
                <div className="  col-md-8 col-lg-8 col-xl-9 p-2  d-block d-md-none">
                    <section className=" ">

                    <div className='  only_padding_chechkout  '>
                            <h3 className='payment_heading_sm_divice'>Orders</h3>
                            
                                <div>
                                    {orders.map((product, index) => (
                                        <div key={product.id}>
                                        <hr />
                                        <p>Order ID: {product.order_id}</p>
                                        <div style={{ overflowY: 'auto', maxHeight: '400px', overflowX: 'hidden' }}>
                                            <div className='row d-flex justify-content-between' key={product.product_id}>
                                                <div className='col-1 col-md-1 col-lg-1'>
                                                    <img className="img-fluid checlout_page_img" src={post_url + product.product_img} alt={product.product_title} />
                                                </div>
                                                <div className='col-5 col-md-5 col-lg-5'>
                                                    <p className=''><b>{product.product_title}</b></p>
                                                </div>
                                                <div className='col- col-md-1 col-lg-1'>
                                                    <p className=''>₹ {product.product_price}
                                                    <br />
                                                    <small>Qty: {product.product_qty}</small>
                                                    </p>
                                                </div>
                                                <div className='col4 col-md-4 col-lg-3 float-end'>
                                                    <p className=''>Ordered on {product.day} {product.month} {product.year}
                                                    <br />
                                                    <small>Your item has been {product.delivery_status}</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <ol className="progtrckr" data-progtrckr-steps={steps.length}>
                                            {steps.map((step, index) => (
                                                <li key={index} className={(index <= steps.indexOf(product.delivery_status) || (index === 0 && product.delivery_status == 'pending')) ? 'progtrckr-done' : 'progtrckr-todo'}>
                                                    {step}
                                                </li>
                                            ))}
                                        </ol>
                                        <br />
                                        <br />
                                        </div>
                                    ))}
                                    </div>

                            

                        </div>
                    </section>
                </div>




            </>


        );
    };




    const PersonalDetails = () => {

        const [isEditing, setIsEditing] = useState(false);
        const [showSuccessNotification, setShowSuccessNotification] = useState(false);

        const handleEditClick = (event) => {
            event.preventDefault(); // Prevent default form submission behavior
            setIsEditing(true);
            setShowSuccessNotification(false); // Hide success notification when switching to edit mode
        };

        const handleSaveClick = (event) => {
            event.preventDefault(); // Prevent default form submission behavior
            setIsEditing(false);
            setShowSuccessNotification(true); // Show success notification when saving
            // You can also add a setTimeout to hide the notification after a certain period
            setTimeout(() => {
                setShowSuccessNotification(false);
            }, 3000); // Hide after 3 seconds (adjust the time as needed)
        };

        return (
            <>
                <div className="  col-md-8 col-lg-8 col-xl-9 d-md-none">
                    <section className=" ">
                        <form>
                            <div className='container for_height_gg_personal sliver_bg_personal '   >
                                <div className='row nee_to_be_center_personal '>



                                    <div className='col-md-6 center_need_section_personal_one '>
                                        <div className='   full_name_div  '>
                                            <p className='full_name_personal '>   First Name  </p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>


                                        <div className='last_div_personal'>
                                            <p className='full_name_personal'>  Last name   </p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>



                                        <div className='Phone_div_personal '>
                                            <p className='full_name_personal'> Phone *</p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>

                                        <div className='Email_div_personal '>
                                            <p className='full_name_personal'>Email address *</p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>



                                    </div>


                                    <div className='col-md-6 center_need_section_personal_two '>
                                        <div className='city_div_personal '>
                                            <p className='full_name_personal'>House NO., Building., Road., </p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>
                                        <div className='Citye_div_personal '>
                                            <p className='full_name_personal'>City</p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>

                                        <div className='Pincode_div_personal '>
                                            <p className='full_name_personal'>Pincode *</p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>

                                        <div className='State_div_personal '>
                                            <p className='full_name_personal'>State *</p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>


                                    </div>


                                    <div className='row'>
                                        <div className='  text-center'>
                                            {isEditing ? (
                                                <button className='next_btn_info_personal mt-4' onClick={handleSaveClick}>Save</button>
                                            ) : (
                                                <button className='next_btn_info_personal mt-4' onClick={handleEditClick}>Edit</button>
                                            )}
                                            {showSuccessNotification && (
                                                <div className="alert alert-success mt-2" role="alert">
                                                    Saved successfully!
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </section>
                </div>




            </>


        );
    };
    const PersonalDetailsmd = () => {

        const [isEditing, setIsEditing] = useState(false);
        const [showSuccessNotification, setShowSuccessNotification] = useState(false);

        const handleEditClick = (event) => {
            event.preventDefault(); // Prevent default form submission behavior
            setIsEditing(true);
            setShowSuccessNotification(false); // Hide success notification when switching to edit mode
        };

        const handleSaveClick = (event) => {
            event.preventDefault(); // Prevent default form submission behavior
            setIsEditing(false);
            setShowSuccessNotification(true); // Show success notification when saving
            // You can also add a setTimeout to hide the notification after a certain period
            setTimeout(() => {
                setShowSuccessNotification(false);
            }, 3000); // Hide after 3 seconds (adjust the time as needed)
        };

        return (
            <>
                <div className="  col-md-8 col-lg-8 col-xl-9  d-none d-md-block">
                    <section className=" ">
                        <form>
                            <div className='container for_height_gg_personal sliver_bg_personal '   >
                                <div className='row nee_to_be_center_personal '>



                                    <div className='col-md-6 center_need_section_personal_one '>
                                        <div className='   full_name_div  '>
                                            <p className='full_name_personal '>   First Name  </p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>


                                        <div className='last_div_personal'>
                                            <p className='full_name_personal'>  Last name   </p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>



                                        <div className='Phone_div_personal '>
                                            <p className='full_name_personal'> Phone *</p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>

                                        <div className='Email_div_personal '>
                                            <p className='full_name_personal'>Email address *</p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>



                                    </div>


                                    <div className='col-md-6 center_need_section_personal_two '>
                                        <div className='city_div_personal '>
                                            <p className='full_name_personal'>House NO., Building., Road., </p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>
                                        <div className='Citye_div_personal '>
                                            <p className='full_name_personal'>City</p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>

                                        <div className='Pincode_div_personal '>
                                            <p className='full_name_personal'>Pincode *</p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>

                                        <div className='State_div_personal '>
                                            <p className='full_name_personal'>State *</p>
                                            <input className='  info_only_md_ard_input_personal' ></input>
                                        </div>


                                    </div>


                                    <div className='row'>
                                        <div className='  text-center'>
                                            {isEditing ? (
                                                <button className='next_btn_info_personal mt-4' onClick={handleSaveClick}>Save</button>
                                            ) : (
                                                <button className='next_btn_info_personal mt-4' onClick={handleEditClick}>Edit</button>
                                            )}
                                            {showSuccessNotification && (
                                                <div className="alert alert-success mt-2" role="alert">
                                                    Saved successfully!
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </section>
                </div>




            </>


        );
    };




    const Addressforlarge = () => {
        const [isAddress, setIsAddress] = useState(false);
        const [showSuccessNotification, setShowSuccessNotification] = useState(false);

        const handleEditClick = (event) => {
            event.preventDefault();
            setIsAddress(true);
            setShowSuccessNotification(false);
        };

        const handleSaveClick = (event) => {
            event.preventDefault();
            setIsAddress(false);
            setShowSuccessNotification(true);
            setTimeout(() => {
                setShowSuccessNotification(false);
            }, 3000);
        };

        return (
            <>
                <div className="col-md-8 col-lg-8 col-xl-9 d-none d-md-block">
                    <section>
                        <form>


                            <div className='container for_height_gg_personal sliver_bg_personal'>
                                <div className='Set_Address_div '>
                                    <p className='Set_Address'>Set Address</p>
                                    <input className='Set_Address_input_personal' placeholder="Home/Office/Friends/Others" />
                                </div>
                                <div className='row nee_to_be_center_personal'>
                                    <div className='col-md-6 center_need_section_personal_one'>
                                        <div className='full_name_div'>
                                            <p className='full_name_personal'>First Name</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='last_div_personal'>
                                            <p className='full_name_personal'>Last name</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='Phone_div_personal'>
                                            <p className='full_name_personal'>Phone *</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='Email_div_personal'>
                                            <p className='full_name_personal'>Email address *</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                    </div>
                                    <div className='col-md-6 center_need_section_personal_two'>
                                        <div className='city_div_personal'>
                                            <p className='full_name_personal'>House NO., Building., Road.</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='Citye_div_personal'>
                                            <p className='full_name_personal'>City</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='Pincode_div_personal'>
                                            <p className='full_name_personal'>Pincode *</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='State_div_personal'>
                                            <p className='full_name_personal'>State *</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-evenly  mt-5'>
                                        <div className='text-center'>
                                            <div className=" next_btn_info_personal mt-4"  >
                                                Add Address
                                            </div>
                                        </div>

                                        <div className='text-center'>
                                            {isAddress ? (
                                                <button className='next_btn_info_personal mt-4' onClick={handleSaveClick}>Save</button>
                                            ) : (
                                                <button className='next_btn_info_personal mt-4' onClick={handleEditClick}>Edit</button>
                                            )}
                                            {showSuccessNotification && (
                                                <div className="alert alert-success mt-2" role="alert">
                                                    Saved successfully!
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </>
        );
    };
    const Addressformd = () => {
        const [isAddress, setIsAddress] = useState(false);
        const [showSuccessNotification, setShowSuccessNotification] = useState(false);

        const handleEditClick = (event) => {
            event.preventDefault();
            setIsAddress(true);
            setShowSuccessNotification(false);
        };

        const handleSaveClick = (event) => {
            event.preventDefault();
            setIsAddress(false);
            setShowSuccessNotification(true);
            setTimeout(() => {
                setShowSuccessNotification(false);
            }, 3000);
        };

        return (
            <>
                <div className="col-md-8 col-lg-8 col-xl-9 d-md-none">
                    <section>
                        <form>
                            <div className='container for_height_gg_personal sliver_bg_personal'>
                                <div className='Set_Address_div '>
                                    <p className='Set_Address'>Set Address</p>
                                    <input className='Set_Address_input_personal' placeholder="Home/Office/Friends/Others" />
                                </div>
                                <div className='row nee_to_be_center_personal'>
                                    <div className='col-md-6 center_need_section_personal_one'>
                                        <div className='full_name_div'>
                                            <p className='full_name_personal'>First Name</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='last_div_personal'>
                                            <p className='full_name_personal'>Last name</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='Phone_div_personal'>
                                            <p className='full_name_personal'>Phone *</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='Email_div_personal'>
                                            <p className='full_name_personal'>Email address *</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                    </div>
                                    <div className='col-md-6 center_need_section_personal_two'>
                                        <div className='city_div_personal'>
                                            <p className='full_name_personal'>House NO., Building., Road.</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='Citye_div_personal'>
                                            <p className='full_name_personal'>City</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='Pincode_div_personal'>
                                            <p className='full_name_personal'>Pincode *</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                        <div className='State_div_personal'>
                                            <p className='full_name_personal'>State *</p>
                                            <input className='info_only_md_ard_input_personal' />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='d-flex justify-content-evenly  mt-5'>
                                            <div className='text-center'>
                                                <div className=" next_btn_info_personal mt-4"  >
                                                    Add Address
                                                </div>
                                            </div>

                                            <div className='text-center'>
                                                {isAddress ? (
                                                    <button className='next_btn_info_personal mt-4' onClick={handleSaveClick}>Save</button>
                                                ) : (
                                                    <button className='next_btn_info_personal mt-4' onClick={handleEditClick}>Edit</button>
                                                )}
                                                {showSuccessNotification && (
                                                    <div className="alert alert-success mt-2" role="alert">
                                                        Saved successfully!
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </>
        );
    };









    return (
        <div className="col-12">
            <div className="text-center mt-4">


            </div>
            <div className="main-row">

                <Sidebar />



            </div>
        </div>
    );
}

export default UserProfile;