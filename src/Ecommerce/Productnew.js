import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Nav, Navbar, NavDropdown, Container, Carousel, Row, Col, Card, Modal, } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClose, faInfoCircle, faTimesCircle, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';
import Apicalls, { post_url } from "../Apicalls";
import ActionAreaCard from "../Ecommerce/MuiCardnew";
import Shoppingcart from './Shoppingcart';
import { ReactImageMagnify } from 'react-image-magnifiers';

// Images
import testimonial_img from '../assets/testimonial_img.png'
import productpage_flower from '../assets/productpage_flower.png'

import buyIcon from '../assets/Group 6.png';
import iconcard2 from '../assets/iconcard2.png';
import iconcard3 from '../assets/iconcard3.png';
import flagimg from '../assets/flagimg.png';
import { Rating } from '@mui/material';

import { useNavigate, useNavigation } from 'react-router-dom';
import { useSelector } from "react-redux";
import Slider from "react-slick";
import './Productcart.css'; // Import CSS for styling

// Loader imports
import Loader from "./../CommonComponents/Loader";
import { useCart } from '../stores/context/CartContext.jsx';
import WhatsappShareButton from './WhatsappShareButton.js';
import FacebookShareBtn from './FacebookShareButton.js';

const Productnew = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [isRelatedProductsLoading, setIsRelatedProductsLoading] = useState(true);
    const user = useSelector((state) => state.user.auth.user)
    //console.log(user, window.location.pathname.split('/')[2])
    const [ratingData, setRatingData] = useState({ rating: 0, photos: [], message: '' })
    const [selectedFiles, setSelectedFiles] = useState([]);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false)
    const [productPrice, setProductPrice] = useState(1000)
    const [productRatings, setProductRatings] = useState([])
    const [relatedProducts, setRelatedProducts] = useState([])
    const [product, setProduct] = useState({})
     // Assuming you have state to keep track of the active image index
    const [activeIndex, setActiveIndex] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    // const user = useSelector((state) => state.user.auth.user)
    const [shopshowModal, setShopshowModal] = useState(false);
    const body = document.body;
    const { badgeCount, incrementBadgeCount } = useCart();

    useEffect(() => {
        if (shopshowModal === true) {
            body.classList.add('no-scroll');
            const handleKeyDown = (event) => {
                if (event.key === 'Escape') {
                    setShopshowModal(false);
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
        setShopshowModal(!shopshowModal);
    };
    
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (item) => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

  const handleGuestLogin = () => {
    let item = product;
    let cartItem = {};
        // Create a cart item object with required product details
        
        if(item.product_type === 'simple'){
            cartItem = {
                productId: item.ID, // Assuming item.id is the product ID
                productTitle: item.title, // Assuming item.title is the product title
                productImage: item.main_img.startsWith('/') ? item.main_img.substring(1) : item.main_img, // Remove leading '/' if exists
                productType: item.product_type, // Assuming item.main_img is the product main_image
                attributes: [], // Assuming item.attributes is the attributes array
                image: "", // Assuming item.image is the image URL
                price: item.price , // Assuming item.price is the product price
                salePrice: item.sale_price, // Assuming item.sale_price is the sale price
                quantity: 1, // Assuming item.quantity is the available quantity
                sku: item.sku || "", // Assuming item.sku is the product SKU
                cod_charges: item.cod_charges || "", // Assuming item.cod_charges is the COD charges
                shipping_charges: item.shipping_charges || 0, // Assuming item.shipping_charges is the shipping charges
                others: "",
                vendor_id:item.vendor_id,
                vendorName:item.vendorName
            };
        }
        
        localStorage.setItem('buycartItems', JSON.stringify([cartItem]));
        // alert("Redirecting to guest login page...");
        // Add logic for redirecting to guest login page
        window.location.href='/gcheckout'
        closeModal();
  };

  const handleRegularLogin = () => {
    // alert("Redirecting to regular login page...");
    // Add logic for redirecting to regular login page
    window.location.href='/pcheckout'
    closeModal();
  };

    const settings_2 = {
        dots: true,
        infinite: true,
        speed: 1000,
        // centerMode: true,
        // className: "center",
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
                    slidesToShow: 2,
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

    const fetchCartItems = useCallback(async () => {
        try {
            if (user?.ID) {
                const { data } = await Apicalls.get('cart/user/' + user.ID);
                setCartItems(data);
                localStorage.removeItem('cart_product_ids');
            } else {
                // Get existing cart items from session storage or initialize as empty array
                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

                // Check if cartItem with the same productId and attributes exists in the existing cartItems
                const existingCartItem = cartItems.find(item => 
                    item.productId === cartItem.productId && JSON.stringify(item.attributes) === JSON.stringify(cartItem.attributes)
                );

                // If existingCartItem is not undefined, a matching item exists, so do not add it again
                if (!existingCartItem) {
                    // Add the new cartItem to the cartItems array
                    cartItems.push(cartItem);
                    setCartItems(cartItems)

                    // Store the updated cartItems back to session storage
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    
                }
            }
        } catch (error) {
            console.error(error);
        }
    }, [user]);

    useEffect(() => {
        fetchCartItems();
    }, [fetchCartItems]);

    useEffect(() => {
        const currentSlide = document.getElementsByClassName('slick-center slick-current')[0];
        if (currentSlide) {
            const slideHeight = currentSlide.offsetHeight + 0;
            const elementWithAppendedHeight = currentSlide.getElementsByClassName('col-md-3 reviews_div_padding')[0];
            //console.log(elementWithAppendedHeight)
            if (elementWithAppendedHeight) {
                elementWithAppendedHeight.firstChild.style = `height: ${slideHeight}px;`;
                elementWithAppendedHeight.style = `padding: 0px 10px 0px 10px; width: 100%; display: inline-block;`;
            }
        }
    });

    const [showModal_share, setShowModal_share] = useState(false);
    const [reviewText, setReviewText] = useState('');
    
    const handleModalClose_share = () => setShowModal_share(false);
    const handleModalShow = () => setShowModal_share(true);

    const handleInputChange_share = (event) => {
        setReviewText(event.target.value);
        setRatingData({ ...ratingData, message: event.target.value })
    };

    const handleFileSelect = (event) => {
        // const files = Array.from(event.target.files);
        // setSelectedFiles(files);
        const files = event.target.files;
        //console.log(files)
        // setSelectedFiles(files);
        // Convert FileList to array and update ratingData state with selected files
        setRatingData(prevState => ({
            ...prevState,
            files: Array.from(files)
        }));
    };


    const handleSubmit_share = () => {
        // Handle submitting the review (you can add your logic here)
        //console.log("Review submitted:", reviewText);
        // Close the modal
        uploadRating();
    };

    function uploadRating() {
        if (user?.ID) {

            if (!ratingData.rating) {
                // alert('Please provide a rating');
                toast.error("Please provide a rating");
                return;
            }

            if (ratingData.message.trim().length <= 0) {
                // alert('Please provide a rating');
                toast.error("Please provide review");
                return;
            }

            // Prepare the payload
            const formData = new FormData();
            formData.append('rating', ratingData.rating);
            formData.append('productId', product.ID);
            formData.append('product_id', product.product_id);
            formData.append('userId', user?.ID);
            formData.append('customerName', user?.fullName);

            // Append each selected file to the FormData object
            // ratingData.files.forEach(file => {
            //     formData.append('photos[]', file);
            // });

            // Add message to the payload
            formData.append('message', ratingData.message);

            Promise.all(
                [Apicalls.post('product-ratings', formData)]
            ).then(([data]) => {
                toast.success("Thank You for Your Review!");
                Promise.all([
                    Apicalls.get('product-ratings/product/' + window.location.pathname.split('/')[2])
                ]).then(([productRatingsData]) => {
                    setProductRatings(productRatingsData.data)
                });
            }).catch((err) => {
                toast.error(err.response.data.message);
            }).finally(() => {
                setRatingData({ rating: '', photos: [], message: '' })
                handleModalClose_share();
            });
        }
        else {
            navigate('/login')
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };
    const handleImageClick1 = (imageUrl, index) => {
        setProduct({
            ...product,
            main_img: imageUrl,
        });
        setActiveIndex(index);
    }

    useEffect(() => {
        if (window.location.pathname.split('/')[2]) {
            Promise.all([
                Apicalls.get('products/byid/' + window.location.pathname.split('/')[2]),
                Apicalls.get('product-ratings/product/' + window.location.pathname.split('/')[2])
            ]).then(([data, productRatingsData]) => {
                // console.log(data.data);
                setProductPrice(data.data.finalPrice)
                data.data.main_img = post_url + 'productimages/' + data.data?.main_img
                data.data.productImages = data.data.product_images ? JSON.parse(data.data.product_images.replace(/'/g, '"')) : [];
                setProduct(data.data)
                setProductRatings(productRatingsData.data)
                Promise.all([
                    Apicalls.get('products/relatedproducts/' + data.data.category)
                ]).then(([relatedProductsData]) => {
                    setRelatedProducts(relatedProductsData.data)
                }).finally(() => {
                    setIsRelatedProductsLoading(false);
                })
            }).catch((err) => {
                //console.log('internal server error', err)
            }).finally(() => {
                setIsLoading(false);
            })
        }
    }, [window.location.pathname, cartItems]);

    const [showShareOptions, setShowShareOptions] = useState(false);

    const toggleShareOptions = () => {
        setShowShareOptions(!showShareOptions);
    };

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

    const sliderRef77 = useRef(null);

    const goToPrev77 = () => {
        if (sliderRef77.current) {
            sliderRef77.current.slickPrev();
        }
    };

    const goToNext77 = () => {
        if (sliderRef77.current) {
            sliderRef77.current.slickNext();
        }
    };

    const [question, setQuestion] = useState({ question: '' })

    // slider vars
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

    // for single product image        
    const sliderSettings34 = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
 
    const [isAddedToCart, setIsAddedToCart] = useState(false);
 
    const maxLength = 12;
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength) + "..."; // Truncate and add ellipsis
        }
    };

    // Define a state to hold the input pincode
    const [pincode, setPincode] = useState('');
    const [pincodeVerifyDisable, setPincodeVerifyDisable] = useState({cartButton: 0, buyButton: 0});
    // Define a state to hold the verification result
    const [verificationResult, setVerificationResult] = useState('1');
    const [pincodeVerified, setPincodeVerified] = useState(0);

    // Function to handle pincode input change
    const handlePincodeChange = (event) => {
        setPincode(event.target.value);
    };

    // Function to handle pincode verification
    const handleVerifyPincode = () => {
        setVerificationResult('1');
        setTimeout(function() {
            // Define a list of valid pincodes
            const validPincodes = product.pincodes.split(","); // Add your valid pincodes here

            // Check if the input pincode is in the list of valid pincodes
            if (validPincodes.includes(pincode)) {
            setVerificationResult('Pincode is valid!');
            setPincodeVerified(1);
            setPincodeVerifyDisable({ cartButton: 0, buyButton: 0 });
            } else {
            setVerificationResult('Pincode is invalid!');
            setPincodeVerified(2);
            setPincodeVerifyDisable({ cartButton: 1, buyButton: 1 });
            }
        }, 500);
    };

    // Function to add item to cart
    function addToCart(item) {
        // console.log(item)
        incrementBadgeCount()
        // if pincode verification is have
        if ( product.is_pan_india_available === 0 && (pincodeVerified === 0 || pincode === '') ) {
            setVerificationResult('Please Verify with Pincode');
            setPincodeVerified(0);
            return false;
        }

        let cartItem = {};
        // Create a cart item object with required product details
        
        if(item.product_type === 'simple'){
            cartItem = {
                productId: item.ID, // Assuming item.id is the product ID
                productTitle: item.title, // Assuming item.title is the product title
                productImage: item.main_img.startsWith('/') ? item.main_img.substring(1) : item.main_img, // Remove leading '/' if exists
                productType: item.product_type, // Assuming item.main_img is the product main_image
                attributes: [], // Assuming item.attributes is the attributes array
                image: "", // Assuming item.image is the image URL
                price: item.price , // Assuming item.price is the product price
                salePrice: item.sale_price, // Assuming item.sale_price is the sale price
                quantity: 1, // Assuming item.quantity is the available quantity
                sku: item.sku || "", // Assuming item.sku is the product SKU
                cod_charges: item.cod_charges || "", // Assuming item.cod_charges is the COD charges
                shipping_charges: item.shipping_charges || 0, // Assuming item.shipping_charges is the shipping charges
                others: "",
                vendor_id:item.vendor_id,
                vendorName:item.vendorName
            };
        }
        
        if (user?.ID) {
            cartItem.userId = user.ID
            Promise.all([
                Apicalls.post('cart/additem', cartItem)
            ]).then(([data]) => {
                setShopshowModal(true);
                if (Object.keys(data.data).length > 0) {
                    console.log('Cart Added Successfully.')
                }
                else {
                    console.log('internal server error')
                }
            }).catch((err) => {
                setShopshowModal(true);
                console.log('internal server error')
            })
            localStorage.removeItem('cartItems');
        }else{
            // Get existing cart items from session storage or initialize as empty array
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            // Check if cartItem with the same productId and attributes exists in the existing cartItems
            const existingCartItem = cartItems.find(item => 
                item.productId === cartItem.productId && JSON.stringify(item.attributes) === JSON.stringify(cartItem.attributes)
            );

            // If existingCartItem is not undefined, a matching item exists, so do not add it again
            if (!existingCartItem) {
                // Add the new cartItem to the cartItems array
                cartItems.push(cartItem);
                setCartItems(cartItems)

                // Store the updated cartItems back to session storage
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                
            }
            setShopshowModal(true);
        }
    }


        // Function to add item to cart
        function addToBuyCartItems(item) {
            // if pincode verification is have
            if ( product.is_pan_india_available === 0 && (pincodeVerified === 0 || pincode === '') ) {
                setVerificationResult('Please Verify with Pincode');
                setPincodeVerified(0);
                return false;
            }
    
            let cartItem = {};
            // Create a cart item object with required product details
            
            if(item.product_type === 'simple'){
                cartItem = {
                    productId: item.ID, // Assuming item.id is the product ID
                    productTitle: item.title, // Assuming item.title is the product title
                    productImage: item.main_img.startsWith('/') ? item.main_img.substring(1) : item.main_img, // Remove leading '/' if exists
                    productType: item.product_type, // Assuming item.main_img is the product main_image
                    attributes: [], // Assuming item.attributes is the attributes array
                    image: "", // Assuming item.image is the image URL
                    price: item.price , // Assuming item.price is the product price
                    salePrice: item.sale_price, // Assuming item.sale_price is the sale price
                    quantity: 1, // Assuming item.quantity is the available quantity
                    sku: item.sku || "", // Assuming item.sku is the product SKU
                    cod_charges: item.cod_charges || "", // Assuming item.cod_charges is the COD charges
                    shipping_charges: item.shipping_charges || 0, // Assuming item.shipping_charges is the shipping charges                
                    others: [],
                    vendor_id:item.vendor_id,
                    vendorName:item.vendorName
                };
            }
            
            if (user?.ID) {
                cartItem.userId = user.ID
                Promise.all([
                    Apicalls.post('cart/addbuyitem', cartItem)
                ]).then(([data]) => {
                    //setShopshowModal(true);
                    if (Object.keys(data.data).length > 0) {
                        console.log('Cart Added Successfully.')
                        window.location.href='/bcheckout/'+item.ID
                    }
                    else {
                        console.log('internal server error')
                    }
                }).catch((err) => {
                    // setShopshowModal(true);
                    console.log('internal server error')
                })
                //localStorage.removeItem('cartItems');
            }else{
                window.location.href='/login';
                
            }
        }
    
        // end

    // end
    
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(window.location.href);
    }, []);
    const whatsappproduct = {
        // image:post_url + 'productimages/' + product.productImages[0],
        title:product.title,
        link:url,
        description:product.description_short
    }

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(url)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };
    


    const monthAbbreviations = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const handleMinutes = (date) => {
        // Assuming the given date is in YYYY-MM-DD format
        let givenDate = new Date(date); // Replace 'YYYY-MM-DD' with your actual date
        let minutes = givenDate.getMinutes();
        let amOrPm = givenDate.getHours() >= 12 ? 'pm' : 'am';
        let hours12 = (givenDate.getHours() % 12) || 12; // Convert 0 to 12
        return hours12.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ' ' + amOrPm;
    }

    const convertToIST = (isoString) => {
        const date = new Date(isoString);
      
        // Define options for formatting with India time zone
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: 'Asia/Kolkata'
        };
      
        // Format the date
        const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
      
        // Adjust the format to match "26/01/2024 10:50 AM"
        const [day, month, year, time, period] = formattedDate.match(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2}) ([AP]M)/).slice(1, 7);
        return `${day}/${month}/${year} ${time}:${period} ${period}`;
      };
    
    return(
        <>
        {isLoading ? (
            <div style={{height: '80vh'}}><Loader /></div>
        ) : (
        <div>

            

        <div className='Productpage_section1 mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-1 d-none d-lg-block product_page_min_images'>
                        {product.productImages && product.productImages.map((image, index) => (
                            <div className={`d-lg-block imageicons ${activeIndex === index ? 'active' : ''}`} key={index}> 
                                <img 
                                    src={`${post_url +'productimages/'+ image}`} 
                                    alt={product?.title} 
                                    className='img-fluid' 
                                    onMouseOver={() => handleImageClick1(post_url + 'productimages/' + image, index)} 
                                />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-5 d-none d-lg-block main_image_position_product_page" style={{ /*background: '#F9F7F0'*/ }}>
                        <div className='d-lg-block'>
                            {/* <img src={mainImage} alt={mainImage} className='img-fluid' /> */}
                            {/* {post_url + 'productimages/' + product?.main_img} */}
                            {/* {product.main_img} */}
                            <img src={product?.main_img}
                                alt={product?.title} className='img-fluid ' id="mainImage"
                                onMouseOver={() => setIsHovered(true)}
                                onMouseOut={() => setIsHovered(false)}
                            />
                        </div>
                    </div>

                    {/* Mobile view 1  */}
                    <div className='d-block d-lg-none mt-2 mb-2'>
                        <div className="row">                            
                            <div className='slider-container'>
                                {product.productImages && product.productImages.length > 0 ? (
                                    <React.Fragment>
                                        <div className='row justify-content-center'>
                                            <div className='col-2 d-flex flex-column justify-content-center'>
                                                <button className='carsoul_button_bg6 mx-2' onClick={handlePrevious33}>
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button></div>
                                            <div className='col-8'><Slider ref={sliderRef33} {...(product.productImages.length > 1 ? sliderSettings33 : sliderSettings34)}>
                                                {product.productImages.map((item, index) => (
                                                    <div key={index}>
                                                        <img src={post_url +'productimages/'+ item} alt={product.title} className='img-fluid pro_img_33' style={{ display: 'block', margin: '0 auto' }} />
                                                    </div>
                                                ))}
                                            </Slider></div>
                                            <div className='col-2 d-flex flex-column justify-content-center'><button className='carsoul_button_bg6 mx-2' onClick={handleNext33}>
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button></div>
                                        </div>
                                    </React.Fragment>
                                ) : (
                                    <div className='row justify-content-center'>
                                        <div className='col-8'>
                                            <Slider ref={sliderRef33} {...sliderSettings34}>
                                                <div>
                                                    <img src={product?.main_img} alt={product.title} className='img-fluid pro_img_33' style={{ display: 'block', margin: '0 auto' }} />
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                    {/* modal  */}
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <h1 className='product_page_heading1'>{product?.title}</h1>
                        <div className='d-lg-block'>
                            <div className='d-flex flex-row'>
                                <p className='produt_page_starts'>{'⭐'.repeat(product.rating)}</p>
                                {/* <p className='ms-2 produt_page_starts'>5/5</p> */}
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className=''>
                                    {product?.sale_price > 0 && (product?.price - product?.sale_price!=0) ? 
                                        (<del>₹{product?.price}</del>) : '' 
                                    }
                                    <p className='product_page_price'>₹{(product?.sale_price)}</p>
                                </div>

                                <div className='d-flex align-items-center d-block d-lg-none' style={{ marginRight: '20px' }}>
                                    {product?.is_pan_india_available==1 && <div className="shipping-icon-wrapper" style={{ marginRight: '20px' }}>
                                        <span className="icon-text" style={{ fontSize: '12px' }}>Pan India</span>
                                        <img src={flagimg}
                                            alt="Pan India" className="shipping-icon" width={40} height={40} />
                                    </div>}
                                    {product?.is_cod_available==1 && <div className="shipping-icon-wrapper" style={{ marginRight: '20px' }}>
                                        <span className="icon-text" style={{ fontSize: '12px' }}>Cash On Delivery</span>
                                        <img src={iconcard3}
                                            alt="Free Shipping" className="shipping-icon" width={40} height={40} />
                                    </div>}
                                    {product?.features?.includes('3') && <div className="shipping-icon-wrapper" style={{ marginRight: '20px' }}>
                                        <span className="icon-text" style={{ fontSize: '12px' }}>Above ₹1500</span>
                                        <img src={iconcard2} alt="COD"
                                            className="shipping-icon" width={40} height={40} />
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className='d-flex d-none d-lg-block' style={{ marginBottom: '10px' }}>
                            {product?.is_pan_india_available==1 && <div className="shipping-icon-wrapper" style={{ marginRight: '20px' }}>
                                <span className="icon-text" style={{ fontSize: '12px' }}>Pan India</span>
                                <img src={flagimg}
                                    alt="Pan India" className="shipping-icon" width={40} height={40} />
                            </div>}
                            {product?.is_cod_available==1 && <div className="shipping-icon-wrapper" style={{ marginRight: '20px' }}>
                                <span className="icon-text" style={{ fontSize: '12px' }}>Cash On Delivery</span>
                                <img src={iconcard3}
                                    alt="Free Shipping" className="shipping-icon" width={40} height={40} />
                            </div>}
                            {product?.features?.includes('3') && <div className="shipping-icon-wrapper" style={{ marginRight: '20px' }}>
                                <span className="icon-text" style={{ fontSize: '12px' }}>Above ₹1500</span>
                                <img src={iconcard2} alt="COD"
                                    className="shipping-icon" width={40} height={40} />
                            </div>}
                        </div>

                        {product.quantityTypes && (Object.keys(JSON.parse(product.quantityTypes)).length > 0) && <div className='row'>
                            {/* <p className='product_page_text' style={{ color: 'black' }}>Pack {product?.quantity} </p> */}
                            <div className='col-12 d-flex flex-row justify-content-start mb-3'>
                                {
                                    product.quantityTypes && Object.keys(JSON.parse(product.quantityTypes)).map((key) => {
                                        if (key !== 'default') {
                                            return <button className='add_to_card_button_produvt_page2'>
                                                {key}
                                            </button>
                                        }
                                    })
                                }
                            </div>
                            <div className='col-12 d-flex flex-row justify-content-start'>
                                {
                                    product.quantityTypes && Object.entries(JSON.parse(product.quantityTypes)).map(([key, value]) => {
                                        return value.map((item) => {
                                            return <button className='add_to_card_button_produvt_page2' onClick={() => setProductPrice(Number(item.price) + Number(item.price * (product.gst / 100)))}>
                                                {item.type}
                                            </button>
                                        })
                                    })
                                }
                                <p className='product_page_price2'>₹{productPrice}</p>
                            </div>
                        </div>}
                        
                        <div className='d-flex flex-row justify-content-start'>
                            <div className='col-12'>
                                {product?.is_pan_india_available === 0 ? (
                                <div className=''>
                                    <p className='full_name'>Check Pincode Availability</p>
                                    {/* <input className='  info_only_md_ard_input' ></input> */}
                                    <input
                                        type="text"
                                        placeholder="Enter pincode"
                                        value={pincode}
                                        onChange={handlePincodeChange}
                                        style={{border: "none", padding: "8px", marginRight: '8px', borderRadius: "4px"}}
                                    />
                                    <button type="button" className='buynow_button_product_page' onClick={handleVerifyPincode}>Verify</button>
                                    <p style={{margin: "5px 0 10px 0", visibility: verificationResult === '1' ? 'hidden' : 'visible' }}><label className={pincodeVerified === 0 ? 'text-danger' : pincodeVerified === 2 ? 'text-danger' : 'text-success'}><FontAwesomeIcon icon={pincodeVerified === 0 ? faInfoCircle : pincodeVerified === 2 ? faTimesCircle : faCheckCircle} /> {verificationResult}</label></p>
                                    {/* <br /> */}
                                </div>
                                ) : '' }
                                <button type="button" className="buynow_button_product_page" style={{border:"1px solid green",background:"white",color:"green",outline:'0'}} onClick={() => addToCart(product)} disabled={pincodeVerifyDisable.cartButton === 1}>Add to cart</button>
                                {isAddedToCart && (
                                    <div className="alert alert-success  add_to_cart_btn_text" role="alert">
                                        added   successfully!
                                    </div>
                                )}
                                {
                                    user?.ID ? (
                                    <button className='buynow_button_product_page' disabled={pincodeVerifyDisable.buyButton === 1} onClick={() => addToBuyCartItems(product)}>Buy Now</button>
                                    
                                )
                                : 
                                (
                                    <button className='buynow_button_product_page' disabled={pincodeVerifyDisable.buyButton === 1} onClick={() =>  openModal(product)}>Buy Now</button>
                                ) 
                                }   
                            </div>
                        </div>

                        <div className='row mt-4'>
                            {<div className='col-6'>
                                <p className='category' onClick={() => navigate('/brands/' + product.brand_id)} style={{ margin: '0px' }}>MFG : {product?.brandName}  </p>
                            </div>}
                            <div className='col-6'>
                               <p className='category' style={{ margin: '0px' }}>Category : {product?.categoryName}  </p>
                            </div>
                        </div>
                        
                        {product?.featuresData &&
                            product?.featuresData.map((item, index) => {
                                return (<div className="mt-5 row"><div className='col-3 justify_con'>
                                    <img src={post_url + item.icon} alt={post_url + item.icon} width={50} height={50} />
                                    <p className="mt-3">{item.title}</p>
                                </div></div>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
        {/* post_url + 'productimages/'+ product.productImages[0] */}
        
        
        <div className='Productpage_section2 mt-5 mb-5'>
            <div className='container'>
                <div className='row product_page_options'>
                    <div className='col-3'>
                        <button className='share_button ' onClick={toggleShareOptions}>Share
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='ms-2 share_logo_product_page'>
                                <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.59 13.51L15.42 17.49" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.41 6.51001L8.59 10.49" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        {showShareOptions &&
                            <div id="shareOptions" className='d-flex flex-row justify-content-between'>
                                {/* <i className="bi bi-facebook  share_facebook_product"></i> */}
                                <FacebookShareBtn url={url} quote={product.title} hashtag={'#EarthBased'} />
                                {copied === false ? <i className="bi bi-link-45deg  share_link_product" onClick={handleCopy}></i> : <small>Copied!!</small>}
                                <WhatsappShareButton  product={whatsappproduct}/>
                            </div>
                        }
                    </div>
                    {/* <div className='col-3 d-md-none'>
                        <a href='#reviewssection'>       <button className='des_button add_info add_reviews_btn' > Reviews
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='ms-2 arrow_icon_product_page'>
                                <path d="M7 7L17 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 7V17H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button></a>
                    </div> */}
                    <div className='col-3'>
                        <a href='#descriptionsection'>        <button className='des_button  addtional_btn add_reviews_btn'>Description
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='ms-2 arrow_icon_product_page'>
                                <path d="M7 7L17 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 7V17H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        </a>
                    </div>
                    <div className='col-3'>
                        <a href='#reviewssection'>  <button className='des_button reviws_btn add_reviews_btn'>Reviews
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='ms-2 arrow_icon_product_page'>
                                <path d="M7 7L17 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 7V17H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button></a>
                    </div>
                </div>
            </div>
        </div>

        <div className='Productpage_section3 mt-4' id='descriptionsection'>
            <div className='container'>
                <div className='col-md-12 Productpage_section3_only_white'>
                    <div className='disc_full_text' dangerouslySetInnerHTML={{ __html: product.description_desc }} />
                </div>
            </div>
        </div>

        <section>
            <div className='container review_section_cared ' id='reviewssection'>
                <div className='row'>
                    <div className='Productpage_section4 mt-5'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h1 className='customer_heading text-center'> Here's what other customers are saying</h1>
                                    <div className='col-lg-2 col-md-3 col-sm-4 col-6' style={{ margin: '0 auto' }}>
                                        <Button className='des_button add_reviews_btn' onClick={handleModalShow} style={{ width: '100%', backgroundColor: '#4A8E5A', color: '#fff', margin: '0' }}>Post a Review</Button>
                                        <Modal show={showModal_share} onHide={handleModalClose_share}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Add Review</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <p className='review_para_text'>How Would you rate it?</p>
                                                <Rating
                                                    name="simple-controlled"
                                                    value={ratingData.rating}
                                                    onChange={(event, newValue) => {
                                                        setRatingData({ ...ratingData, rating: newValue });
                                                    }}
                                                />

                                                {/* <p className='review_para_text'>Share a video or photo</p>
                                                <div className='d-flex flex-row justify-content-between'>
                                                    <div>
                                                        <input
                                                            type="file"
                                                            id="fileInput"
                                                            multiple
                                                            style={{ display: 'none' }}
                                                            onChange={handleFileSelect}
                                                        />

                                                        <button className='file_btn_class' onClick={() => document.getElementById('fileInput').click()}>
                                                            Choose a file
                                                        </button>
                                                        {/* Display selected files */}
                                                        {/* {selectedFiles.map((file, index) => (
                                                            <div key={index}>{file.name}</div>
                                                        ))}
                                                    </div>
                                                </div> */}

                                                <p className='review_para_text mt-4'>Write your review (Max. 100 Characters)</p>
                                                <textarea
                                                    value={reviewText}
                                                    onChange={handleInputChange_share}
                                                    placeholder="What did you like or dislike?"
                                                    rows={5}
                                                    maxLength={100}
                                                    className="form-control"
                                                />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleModalClose_share}>
                                                    Close
                                                </Button>
                                                <Button className='submit_button_review' onClick={handleSubmit_share}>
                                                    Submit Review
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* React slick slider */}
                    { productRatings.length > 2 ? (
                    <Slider ref={sliderRef77} {...settings_2} className='reviews_slider_product' style={{ padding: '50px' }}>
                        {productRatings.map((card, index) => (
                            <div key={index} className='col-md-3 reviews_div_padding'>
                                <div className='card  shadow'>
                                    <div className='card-body  card_product_height_page'>

                                        <div className='d-flex flex-row align-items-center justify-content-center'>
                                            {/* <img src={testimonial_img} alt={testimonial_img} className='img-fluid mb-2' /> */}
                                            <div>
                                                <h1 className='testimonial_heading ms-2'>{card.customer_name}</h1>

                                                <p className='text-center'>{'⭐'.repeat(card.rating)}</p>

                                            </div>
                                        </div>

                                        {/* <h5 className="testimonial_heading2 mt-2 text-center">{card.review}</h5> */}
                                        <p className=" text-center">{card.review} </p>
                                        {/* <div className='d-flex flex-row justify-content-end'>
                                            <img src={productpage_flower} alt={productpage_flower} className='img-fluid product_flower' />
                                        </div> */}
                                        <p>
                                            
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </Slider>
                    ) : productRatings.length > 0 ? (
                        <div className='reviews_product d-flex align-items-center justify-content-center' style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                        {productRatings.map((card, index) => (
                                <div key={index} className='col-lg-3 col-md-4 col-sm-6 col-12 reviews_div_padding'>
                                    <div className='card  shadow'>
                                        <div className='card-body  card_product_height_page'>

                                            <div className='d-flex flex-row align-items-center justify-content-center'>
                                                {/* <img src={testimonial_img} alt={testimonial_img} className='img-fluid mb-2' /> */}
                                                <div>
                                                    <h1 className='testimonial_heading ms-2'>{card.customer_name}</h1>

                                                    <p className='text-center'>{'⭐'.repeat(card.rating)}</p>
                                                </div>
                                            </div>

                                            {/* <h5 className="testimonial_heading2 mt-2 text-center">{card.review}</h5> */}
                                            <p className=" text-center">{card.review} </p>
                                            {/* <div className='d-flex flex-row justify-content-end'>
                                                <img src={productpage_flower} alt={productpage_flower} className='img-fluid product_flower' />
                                            </div> */}
                                            <p>
                                                {/* {monthAbbreviations[date.getMonth()]} {date.getDate()}, {date.getFullYear()} */}
                                            </p>
                                            <p className='text-center'>{convertToIST(card.date)}</p>

                                        </div>

                                    </div>
                                </div>
                            )
                        )}
                        </div>
                    ) : (
                        <h3 className='text-center mt-5'>Be the first to review this product.</h3>
                    )}

                </div>
            </div>
        </section>

        {isRelatedProductsLoading ? (
            <div style={{height: '20vh'}}><Loader /></div>
        ) :
        relatedProducts.length > 0 && (
        <section>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-8 added_div  hello'> <h6>Related Products</h6> </div>

                    <div className='col-4 arrow_div d-flex flex-row justify-content-end '>
                        <button className="p-2 mb-3 mr-1 second_carsoul_button_bg_product_page_left" style={{ background: '#00000080' }} type="button" onClick={goToPrev}>
                            <span className="carousel-control-prev-icon  product_icon_size_page_left" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="ms-5 p-2 mb-3 second_carsoul_button_bg_product_page_right" type="button" style={{ background: '#00000080' }} onClick={goToNext}>
                            <span className="carousel-control-next-icon product_icon_size_page_right" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    {/* React slick slider */}
                    <Slider ref={sliderRef} {...settings} className='reviews_slider_product' >
                        {relatedProducts.length > 0 && relatedProducts?.map((product, index) => (
                            <Col key={product.id} lg={3} md={4} sm={6} xs={6} className="product_cards padding_only_recently_cards">
                                <div className="card_pro_hei">
                                    <ActionAreaCard product={product} addToCart={() => { () => {} }} handleShowModal={() => {}} addToWishList={() => {}} setshopshowModal={setShopshowModal} />
                                </div>
                            </Col>
                        ))}

                    </Slider>
                </div>
            </div>
        </section>
        )}

        {shopshowModal && <Shoppingcart toggleModal={toggleModal} />}
        </div>
    )}
        <Toaster position="top-center" />


        {isOpen && (
            <div className="modal fkcart">
            <div className="modal-content col-12 col-sm-4 col-md-2 col-lg-2" style={{border: "2px solid #BCE3C9",borderRadius: "20px", width:"auto"}}>
                <div className='modal-body'>
                    {/* <span className="close" onClick={closeModal}>&times;</span> */}
                    <p><h3>Select your login option</h3></p>
                    <div>
                        <button className='btn btn-success' onClick={handleGuestLogin} style={{width:"90%",padding:"10px",margin:"10px"}}>Guest Login</button>
                    </div>
                    <div>
                        <button className='btn btn-primary' onClick={handleRegularLogin} style={{width:"90%",padding:"10px",margin:"10px"}}>Login</button>
                    </div>
                    
                </div>
            </div>
            </div>
        )}
        

    </>
    )
}
export default Productnew