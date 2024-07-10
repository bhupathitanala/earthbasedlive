import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Nav, Navbar, NavDropdown, Container, Carousel, Row, Col, Card, Modal, } from 'react-bootstrap'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClose, faInfoCircle, faTimesCircle, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button } from 'react-bootstrap';
import Apicalls, { post_url } from "../Apicalls";
import ActionAreaCard from "../Ecommerce/MuiCard";
import Shoppingcart from './Shoppingcart';
// Images

import Nutritionpage_Image5 from '../assets/Nutritionpage_Image5.png'
import Productpage_img1 from '../assets/millet_milk_large.png'
import Productpage_img2 from '../assets/millet_milk_back_large.png'
import Productpage_img3 from '../assets/millet_milk_front_large.png'
import Productpage_img4 from '../assets/millet_milk_wide_large.png'
import Productpage_img5 from '../assets/millet_milk_large.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import product_sec2img from '../assets/product_sec2img.png'
import testimonial_img from '../assets/testimonial_img.png'
import productpage_flower from '../assets/productpage_flower.png'
import Shopping_Img1 from '../assets/Shopping_Img1.png'
import maximize from '../assets/maximize-2.png'
import buycard from '../assets/buycard.png'
import Firstone from './Firstone'
import Footer from './Footer'

import maxmixe from '../assets/maximize-2.png'
import wish_img from '../assets/wish_img.png';
import buyIcon from '../assets/Group 6.png';
import gluten from '../assets/gulten_free.png'
import iconcard2 from '../assets/iconcard2.png';
import iconcard3 from '../assets/iconcard3.png';
import flagimg from '../assets/flagimg.png';
import emptycart from '../assets/empty_cart.webp';
import BuyProduct from '../Categorys/BuyProduct';
import { Rating } from '@mui/material';

import { useNavigate, useNavigation } from 'react-router-dom';
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { FaTimes } from 'react-icons/fa'; // Import the close icon
import './Productcart.css'; // Import CSS for styling

// Loader imports
import Loader from "./../CommonComponents/Loader";

const Productnew = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector((state) => state.user.auth.user)
    //console.log(user, window.location.pathname.split('/')[2])
    const [ratingData, setRatingData] = useState({ rating: 0, photos: [], message: '' })
    const [selectedFiles, setSelectedFiles] = useState([]);
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false)
    const [productPrice, setProductPrice] = useState(1000)
    const [productRatings, setProductRatings] = useState([])
    const [relatedProducts, setRelatedProducts] = useState([])
    const [data, setData] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [product, setProduct] = useState({})
    const [productimagesdata, setProductimagesdata] = useState([])
    const [selectedAttribute, setSelectedAttribute] = useState(null);
    const [quantity, setQuantity] = useState(1);
     // Assuming you have state to keep track of the active image index
    const [activeIndex, setActiveIndex] = useState(0);
    const [showCartPopup, setShowCartPopup] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    // const user = useSelector((state) => state.user.auth.user)

    // const dummyProductData = [
    //     { id: 1, name: 'Product 1', price: 10 },
    //     { id: 2, name: 'Product 2', price: 20 },
    //     { id: 3, name: 'Product 3', price: 30 }
    // ];


    const [shopshowModal, setShopshowModal] = useState(false);

    const toggleModal = () => {
        setShopshowModal(!shopshowModal);
    };

    const handleAddToCart = (product) => {
        // Add product to cart items
        setCartItems(prevItems => [...prevItems, product]);
        // Update state to show cart popup
        setShowCartPopup(true);
    };

    

    const settings_2 = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        className: "center",
        centerMode: true,
        autoplaySpeed: 2000,
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
                const cartProductIds = JSON.parse(localStorage.getItem('cart_product_ids'));
                if (Array.isArray(cartProductIds)) {
                    const { data } = await Apicalls.post(`products/requiredProducts`, { productIds: cartProductIds });
                    setCartItems(data);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }, [user]);

    useEffect(() => {
        fetchCartItems();
    }, [fetchCartItems]);

    // useEffect(() => {
    //     if (user?.ID) {
    //         Promise.all([
    //             Apicalls.get('cart/user/' + user.ID)
    //         ]).then(([productsData]) => {
    //             ////console.log(productsData.data)
    //             setCartItems(productsData.data)
    //         }).catch((err) => {
    //             //console.log(err)
    //         })
    //         localStorage.removeItem('cart_product_ids');
    //     }
    //     else {
    //         if (Array.isArray(JSON.parse(localStorage.getItem('cart_product_ids')))) {
    //             Promise.all([
    //                 Apicalls.post(`products/requiredProducts`, { productIds: JSON.parse(localStorage.getItem('cart_product_ids')) })
    //             ]).then(([data]) => {
    //                 setCartItems(data.data)
    //             }).catch((err) => {
    //                 //console.log(err)
    //             })
    //         }
    //     }
    // }, []);


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

    })

    const [showModal_share, setShowModal_share] = useState(false);
    const [reviewText, setReviewText] = useState('');
    // const [selectedFiles, setSelectedFiles] = useState([]);
    const handleShowModal = (card) => {
        setSelectedCard(card);
        setShowModal(true);
    };
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    };
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
        uploadRating()

        handleModalClose_share();
    };

    function uploadRating() {
        if (user?.ID) {

            if (!ratingData.rating) {
                alert('Please provide a rating');
                return;
            }

            // Prepare the payload
            const formData = new FormData();
            formData.append('rating', ratingData.rating);
            formData.append('productId', product.ID);
            formData.append('userId', user?.ID);

            // Append each selected file to the FormData object
            ratingData.files.forEach(file => {
                formData.append('photos[]', file);
            });

            // Add message to the payload
            formData.append('message', ratingData.message);

            Promise.all(
                [Apicalls.post('product-ratings', formData)]
            ).then(([data]) => {
                setRatingData({ rating: '', photos: [], message: '' })
                //console.log(data)
            }).catch((err) => {
                //console.log(err)
            })
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
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
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
                    initialSlide: 1
                }
            },

        ]

    };
    const [mainImage, setMainImage] = useState(Productpage_img1);
    const [showBuyModal, setShowBuyModal] = useState(false)
    const handleBuyModal = () => {
        setShowBuyModal(false);
    };


    const handleImageClick = (image) => {
        setMainImage(image);
    };
    // const handleImageClick1 = (index) => {
    //     const images = product.productImages;
    //     const clickedImage = images.splice(index, 1)[0];
    //     alert(clickedImage)
    //     // images.unshift(clickedImage);
    //     setProduct({
    //         ...product,
    //         main_img: clickedImage,
    //     });
    // }
    // const handleImageClick1 = (index) => {
    //     const images = [...product.productImages]; // create a copy of the array
    //     const clickedImage = images.splice(index, 1)[0];
    //     setProduct({
    //         ...product,
    //         main_img: clickedImage,
    //     });
    // }
    const handleImageClick1 = (imageUrl, index) => {
        setProduct({
            ...product,
            main_img: imageUrl,
        });
        setActiveIndex(index);
    }
    const [showSecondPara, setShowSecondPara] = useState(false);

    // Function to toggle the visibility of the second paragraph
    const toggleSecondPara = () => {
        setShowSecondPara(!showSecondPara);
    };

    useEffect(() => {
        
        if (window.location.pathname.split('/')[2]) {
            Promise.all([
                Apicalls.get('products/byid/' + window.location.pathname.split('/')[2]),
                Apicalls.get('product-ratings/product/' + window.location.pathname.split('/')[2])
            ]).then(([data, productRatingsData]) => {
                //console.log(data.data);
                setProductPrice(data.data.finalPrice)
                data.data.main_img = post_url + 'productimages/' + data.data?.main_img
                data.data.productImages = data.data.product_images ? JSON.parse(data.data.product_images.replace(/'/g, '"')) : [];
                // data.data.variables = JSON.parse(data.data.variables);
                //data.data.productImages = JSON.parse(product.product_images);
                // setProductimagesdata(JSON.parse(data.data.product_images))
                // //console.log(data.data.featuresData)
                // data.data.featuresData = data.data.featuresData.filter((item) => ![1, 2, 3].includes(item.id))
                // //console.log(data.data.featuresData)
                // data.data.productImages = data.data.main_img ? [data.data.main_img, ...JSON.parse(data.data.productImages)] : JSON.parse(data.data.productImages)
                // data.data.features = JSON.parse(data.data.features)
                // setSelectedCard({ ...data.data, productImages: JSON.stringify(data.data.productImages) })
                setProduct(data.data)
                Promise.all([
                    Apicalls.get('products/category/' + data.data.category)
                ]).then(([relatedProductsData]) => {
                    setRelatedProducts(relatedProductsData.data)
                })
                setProductRatings(productRatingsData.data)
            }).catch((err) => {
                //console.log('internal server error', err)
            }).finally(() => {
                setIsLoading(false);
            })
        }
    }, [window.location.pathname, cartItems]);


    const addToCartItems = (product) => {
        if ( product.is_pan_india_available === 0 && (pincodeVerified === 0 || pincode === '') ) {
            setVerificationResult('Please Verify with Pincode');
            setPincodeVerified(0);
            return false;
        }
        // alert("add")
        //console.log(product.ID)
        // Add product to cart items
        // setCartItems(prevItems => [...prevItems, product]);
        // Update state to show cart popup
        setShowCartPopup(true);
        // Update state to show cart popup
        //setShowCartPopup(true);
        // setIsAddedToCart(true);
        // setTimeout(() => {
        //     setIsAddedToCart(false);
            
        // }, 700);
        if (user?.ID) {
            ////console.log(productID)
            Promise.all([
                Apicalls.post('cart', { userId: user.ID, productId: product.ID, product_type: product.product_type, product_attributes: null, status: 1 })
            ]).then(([data]) => {
                if (Object.keys(data.data).length > 0) {
                    // navigate('/usercart')
                    // data.data = data.data.map((item) => { item.userQuantity = 1; return item })
                    fetchCartItems();
                    // setCartItems(data.data)
                    //console.log('Added to wishlist')
                }
                else {
                    //console.log('internal server error')
                }
            }).catch((err) => {
                //console.log('internal server error')
            })
            localStorage.removeItem('cart_product_ids');
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
                localStorage.setItem('cart_product_ids', JSON.stringify([product.ID]));
            }

            Promise.all([
                Apicalls.post(`products/requiredProducts`, { productIds: JSON.parse(localStorage.getItem('cart_product_ids')) })
            ]).then(([data]) => {
               // data.data = data.data.map((item) => { item.qty = 1; return item })
                // Iterate through the data array
                    data.data.forEach((item) => {
                        // Retrieve the quantity value from session storage
                        const storedQty = localStorage.getItem(`product_${item.ID}_qty`);
                        
                        // If a quantity value is found in session storage, update the item's qty property
                        if (storedQty !== null) {
                            item.qty = parseInt(storedQty); // Convert the stored quantity value to an integer
                        } else {
                            item.qty = 1; // Default to 1 if no quantity value is found in session storage
                        }
                    });
                setCartItems(data.data)
            }).catch((err) => {
                //console.log(err)
            });
            // console.log(localStorage.getItem('cart_product_ids'))
            // if (Array.isArray(JSON.parse(localStorage.getItem('cart_product_ids')))) {
            //     Promise.all([
            //         Apicalls.post(`products/requiredProducts`, { productIds: JSON.parse(localStorage.getItem('cart_product_ids')) })
            //     ]).then(([data]) => {
            //         setCartItems(data.data)
            //     }).catch((err) => {
            //         //console.log(err)
            //     })
            // }
            // navigate('/login')
        }
    }


    //addToBuyCartItems
    const addToBuyCartItems = (product) => {        
        if ( product.is_pan_india_available === 0 && (pincodeVerified === 0 || pincode === '')) {
            setVerificationResult('Please Verify with Pincode');
            setPincodeVerified(0);
            return false;
        }
        // alert("add")
        //console.log(product.ID)
        // Add product to cart items
        // setCartItems(prevItems => [...prevItems, product]);
        // Update state to show cart popup
        setShowCartPopup(true);
        // Update state to show cart popup
        //setShowCartPopup(true);
        // setIsAddedToCart(true);
        // setTimeout(() => {
        //     setIsAddedToCart(false);
            
        // }, 700);
        if (user?.ID) {
            ////console.log(productID)
            Promise.all([
                Apicalls.post('cart/buyitem', { userId: user.ID, productId: product.ID, product_type: product.product_type, product_attributes: null, status: 1 })
            ]).then(([data]) => {
                if (Object.keys(data.data).length > 0) {
                    // navigate('/usercart')
                    // data.data = data.data.map((item) => { item.userQuantity = 1; return item })
                    fetchCartItems();
                    // setCartItems(data.data)
                    //console.log('Added to wishlist')
                }
                else {
                    //console.log('internal server error')
                }
            }).catch((err) => {
                //console.log('internal server error')
            })
            localStorage.removeItem('cart_product_ids');
        }
        
    }


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

    function sendQuery() {
        if (user?.ID) {
            if (question.length > 0) {
                Promise.all([
                    Apicalls.post('queries', { userId: user.ID, question: question, type: 'product', productId: window.location.pathname.split('/')[2] })
                ]).then(([data]) => {
                    if (Object.keys(data.data).length > 0) {
                        setQuestion('')
                        //console.log('Added to query')
                    }
                    else {
                        //console.log('internal server error')
                    }
                }).catch((err) => {
                    //console.log('internal server error')
                })
            }
            else {
                //console.log('enter question')
            }
        }
        else {
            navigate('/login')
        }
    }

   

     // slider vars
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
 
     const [isAddedToCart, setIsAddedToCart] = useState(false);
 
     const maxLength = 12;
     const truncateText = (text, maxLength) => {
         if (text.length <= maxLength) {
             return text;
         } else {
             return text.slice(0, maxLength) + "..."; // Truncate and add ellipsis
         }
     };

    

    const handleAttributeClick = (index) => {
        setSelectedAttribute(index);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    // const handleAddToCart = () => {
    //     // Update state to show cart popup
    //     setShowCartPopup(true);
    // };


    const handleRemoveFromCart = (productId) => {
        // Remove product from cart items
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setShowCartPopup(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // const [quantity, setQuantity] = useState(1);
    const increment = (index, productQty, productID) => {
        cartItems[index].qty += 1
        let qty = cartItems[index].qty
        //console.log(cartItems)
        localStorage.setItem(`product_${productID}_qty`, qty.toString());
        setCartItems([...cartItems])
        if (user?.ID) {
            UpdateQty(qty, productID)
        }
    };

    const decrement = (index, productQty, productID) => {
        if (cartItems[index].qty > 1) {
            cartItems[index].qty -= 1
            let qty = cartItems[index].qty
            //console.log(cartItems)
            localStorage.setItem(`product_${productID}_qty`, qty.toString());
            setCartItems([...cartItems])
            if (user?.ID) {
                UpdateQty(qty, productID)
            }
        }
        
    };

    function UpdateQty(productQty, productID){
        //alert(productQty)
        // Promise.all([
        //     Apicalls.update('product/' + cartItem.cartID)
        // ]).then(([productsData]) => {
        //    // setCartItems(cartItems.filter((cart) => cart.ID !== cartItem.ID))
        // }).catch((err) => {
        //     //console.log(err)
        // })

        Promise.all([
            Apicalls.put('cart/cartupdate/'+productID, { userId: user.ID, productId: productID, productQty: productQty })
        ]).then(([data]) => {
            //console.log(data.data)
            // setCartItems(data.data)
            // if (Object.keys(data.data).length > 0) {
            //     // navigate('/usercart')
            //     data.data = data.data.map((item) => { item.qty = 1; return item })
            //     setCartItems(data.data)
            //     //console.log('Added to wishlist')
            // }
            // else {
            //     //console.log('internal server error')
            // }
        }).catch((err) => {
            //console.log('internal server error')
        })

        
    }

    function deleteCartItem(cartItem) {
        //console.log(cartItem)
        if (user?.ID) {
            Promise.all([
                Apicalls.delete('cart/' + cartItem.cartID)
            ]).then(([productsData]) => {
                setCartItems(cartItems.filter((cart) => cart.ID !== cartItem.ID))
            }).catch((err) => {
                //console.log(err)
            })
        }
        else {
            let cartItemsIds = JSON.parse(localStorage.getItem('cart_product_ids'));
            cartItemsIds = cartItemsIds.filter(id => id !== cartItem.ID)
            localStorage.setItem('cart_product_ids', JSON.stringify(cartItemsIds))
            //console.log(cartItems.filter(item => item.ID !== cartItem.ID))
            setCartItems(cartItems.filter(item => item.ID !== cartItem.ID))
            // Remove the corresponding quantity from session storage
            localStorage.removeItem(`product_${cartItem.ID}_qty`);
        }
    }


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
    // Create a cart item object with product ID, quantity, and attributes
    console.log(item.ID)
    

    // setShowCartPopup(true);
    // setShopshowModal(true);
        

    let cartItem = {};
    // Create a cart item object with required product details
    
    if(item.product_type === 'simple'){
        // cartItem = {
        //     productId: item.ID, // Assuming item.id is the product ID
        //     productTitle: item.title, // Assuming item.title is the product title
        //     productImage: item.main_img.startsWith('/') ? item.main_img.substring(1) : item.main_img, // Remove leading '/' if exists
        //     productType: item.product_type, // Assuming item.main_img is the product main_image
        //     attributes: [], // Assuming item.attributes is the attributes array
        //     image: "", // Assuming item.image is the image URL
        //     price: item.price , // Assuming item.price is the product price
        //     salePrice: item.sale_price, // Assuming item.sale_price is the sale price
        //     quantity: 1, // Assuming item.quantity is the available quantity
        //     sku: item.sku || "", // Assuming item.sku is the product SKU
        // };
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
            others: [],
            vendor_id:item.vendor_id
            
        };
    
    }
    
    
    if (user?.ID) {
        cartItem.userId = user.ID
        Promise.all([
            Apicalls.post('cart/additem', cartItem)
        ]).then(([data]) => {
            setShowCartPopup(true);
            setShopshowModal(true);
            if (Object.keys(data.data).length > 0) {
                //alert("added")
                
                // fetchCartItems();
                //navigate('/usercart')
                console.log('Cart Added Successfully.')
            }
            else {
                console.log('internal server error')
            }
        }).catch((err) => {
            setShowCartPopup(true);
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

            // Store the updated cartItems back to session storage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            
        }
        setShowCartPopup(true);
        setShopshowModal(true);
    }
    

}



    // end









    return(
        <>
        {isLoading ? (
            <div style={{height: '80vh'}}><Loader /></div>
        ) : (
        <div>
        <div className='Productpage_section1 mt-5'>
            <div className='container'>
                <div className='row'>
                <div className='col-lg-1 product_page_min_images'>                        
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
                    <div className="col-lg-5 main_image_position_product_page" style={{ /*background: '#F9F7F0'*/ }}>
                        <div className='d-lg-block  '>
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

                    { /*<div className='d-block d-lg-none mt-2 mb-2'>
                        <div className="row ">
                            
                            <div className='slider-container '>
                                {product.productImages && product.productImages.length > 0 ? (
                                    <React.Fragment>
                                        <div className='row justify-content-center'>
                                            <div className='col-2 d-flex flex-column justify-content-center'>
                                                <button className='carsoul_button_bg6 mx-2' onClick={handlePrevious33}>
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button></div>
                                            <div className='col-8'><Slider ref={sliderRef33} {...sliderSettings33}>
                                                {product.productImages.map((item, index) => (
                                                    <div key={index}>
                                                        <img src={post_url + item} alt={product.title} className='img-fluid pro_img_33' style={{ display: 'block', margin: '0 auto' }} />
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
                                    <div>No images available for this product.</div>
                                )}
                            </div>

                        </div>
                    </div>*/ }


                    {/* modal  */}



                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <h1 className='product_page_heading1'>{product?.title}</h1>
                        <div className='d-lg-block'>
                            <div className='d-flex flex-row'>
                                <p className='produt_page_starts'>{'⭐'.repeat(product.rating)}</p>
                                {/* <p className='ms-2 produt_page_starts'>5/5</p> */}

                            </div>
                            {/* <p className='product_page_price'>₹{product?.price}</p> */}
                            {product?.sale_price > 0 && (product?.price - product?.sale_price!=0) ? 
                                (<del>₹{product?.price}</del>) : '' 
                            }
                            <p className='product_page_price'>₹{(product?.sale_price) }</p>
                        </div>
                        <div className='product_desc_min d-flex flex-row justify-content-between d-block d-lg-none'>
                            <p className='product_page_price'>₹{product?.price}</p>
                            <p className='produt_page_starts me-4'>{'⭐'.repeat(product.rating)}</p>
                            {/* <p className='ms-2 produt_page_starts'>5/5</p> */}

                        </div>
                        {/* <p className='product_page_text'>{product?.quantity} in Stock </p> */}

                        <div className='d-flex' style={{ marginBottom: '10px' }}>
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
                                
                            {/* <p className='increment mt-3' style={{fontWeight:"600"}}>- 1 + </p> */}
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
                                    <br />
                                </div>
                                ) : '' }
                                {/* <button className='buynow_button_product_page' onClick={() => addToCartItems(product.ID)}>Add to cart</button> */}

                                <button type="button" className="buynow_button_product_page" style={{border:"1px solid green",background:"white",color:"green"}} onClick={() => addToCart(product)} disabled={pincodeVerifyDisable.cartButton === 1}>Add to cart</button>
                                    


                                {/* // Cart Popup */}
                                {/* {showCartPopup && (
                                    <div className="cart-popup" style={{ position: "fixed", top: 0, right: 0, width: "300px", height: "100%", background: "rgba(0, 0, 0, 0.5)", zIndex: 999 }}>
                                        <div style={{ background: "white", padding: "20px" }}>
                                            <h2>Your Cart</h2>
                                            <ul>
                                                {cartItems.map(item => (
                                                    <li key={item.id}>
                                                        {item.title} - ${item.price}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )} */}
                               {showCartPopup && 1!=1 && (
    <div className="cart-popup" id="fkcart-modal">
        <div className='fkcart-preview-ui has-zero-state'>
        <Card>
            <Card.Body style={{overflow:"auto"}}>
            <div class="fkcart-slider-header">
			<div class="fkcart-slider-heading fkcart-panel">
    <div class="fkcart-title">Your Cart</div>
    <div class="fkcart-modal-close" onClick={()=>setShowCartPopup(false)} style={{cursor:"pointer"}}>
		<svg width="20" height="20" viewBox="0 0 24 24" class="fkcart-icon-close" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.1518 4.31359L4.22676 4.22676C4.50161 3.9519 4.93172 3.92691 5.2348 4.1518L5.32163 4.22676L12 10.9048L18.6784 4.22676C18.9807 3.92441 19.4709 3.92441 19.7732 4.22676C20.0756 4.5291 20.0756 5.01929 19.7732 5.32163L13.0952 12L19.7732 18.6784C20.0481 18.9532 20.0731 19.3833 19.8482 19.6864L19.7732 19.7732C19.4984 20.0481 19.0683 20.0731 18.7652 19.8482L18.6784 19.7732L12 13.0952L5.32163 19.7732C5.01929 20.0756 4.5291 20.0756 4.22676 19.7732C3.92441 19.4709 3.92441 18.9807 4.22676 18.6784L10.9048 12L4.22676 5.32163C3.9519 5.04678 3.92691 4.61667 4.1518 4.31359L4.22676 4.22676L4.1518 4.31359Z" fill="currentColor"></path>
</svg>    </div>
</div>        

<hr></hr>
</div>
                {/* Check if cartItems is not an array or if it's empty */}
                {!Array.isArray(cartItems) || cartItems.length === 0 ? (
                    <div className='fkcart-slider-body'>
                        <div className="fkcart-zero-state">
                            <div className="fkcart-icon-cart">
                                {/* <img src={emptycart} alt="Empty Cart" /> */}
                                <svg data-icon="icon-checkout" width="56" height="56" viewBox="0 0 24 24" class="fkcart-icon-checkout" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2.71411C2 2.31972 2.31972 2 2.71411 2H3.34019C4.37842 2 4.97454 2.67566 5.31984 3.34917C5.55645 3.8107 5.72685 4.37375 5.86764 4.86133H20.5709C21.5186 4.86133 22.2035 5.7674 21.945 6.67914L19.809 14.2123C19.4606 15.4413 18.3384 16.2896 17.0609 16.2896H9.80665C8.51866 16.2896 7.39 15.4276 7.05095 14.185L6.13344 10.8225C6.12779 10.8073 6.12262 10.7917 6.11795 10.7758L4.64782 5.78023C4.59738 5.61449 4.55096 5.45386 4.50614 5.29878C4.36354 4.80529 4.23716 4.36794 4.04891 4.00075C3.82131 3.55681 3.61232 3.42822 3.34019 3.42822H2.71411C2.31972 3.42822 2 3.1085 2 2.71411ZM7.49529 10.3874L8.4288 13.8091C8.59832 14.4304 9.16266 14.8613 9.80665 14.8613H17.0609C17.6997 14.8613 18.2608 14.4372 18.435 13.8227L20.5709 6.28955H6.28975L7.49529 10.3874ZM12.0017 19.8577C12.0017 21.0408 11.0426 22 9.85941 22C8.67623 22 7.71708 21.0408 7.71708 19.8577C7.71708 18.6745 8.67623 17.7153 9.85941 17.7153C11.0426 17.7153 12.0017 18.6745 12.0017 19.8577ZM10.5735 19.8577C10.5735 19.4633 10.2538 19.1436 9.85941 19.1436C9.46502 19.1436 9.1453 19.4633 9.1453 19.8577C9.1453 20.2521 9.46502 20.5718 9.85941 20.5718C10.2538 20.5718 10.5735 20.2521 10.5735 19.8577ZM19.1429 19.8577C19.1429 21.0408 18.1837 22 17.0005 22C15.8173 22 14.8582 21.0408 14.8582 19.8577C14.8582 18.6745 15.8173 17.7153 17.0005 17.7153C18.1837 17.7153 19.1429 18.6745 19.1429 19.8577ZM17.7146 19.8577C17.7146 19.4633 17.3949 19.1436 17.0005 19.1436C16.6061 19.1436 16.2864 19.4633 16.2864 19.8577C16.2864 20.2521 16.6061 20.5718 17.0005 20.5718C17.3949 20.5718 17.7146 20.2521 17.7146 19.8577Z" fill="currentColor"></path>
</svg>
                            </div>
                            {/* <div className="fkcart-zero-state-title">Your Cart is Empty</div> */}
                            <div className="fkcart-zero-state-text">Fill your cart with amazing items</div>
                            {/* <a href="#" className="fkcart-primary-button fkcart-shop-button fkcart-modal-close">Shop Now</a> */}
                        </div>
                    </div>
                ) : (
                    <>
                        {cartItems.map((item, index) => (
                            <Card key={item.ID} className="mb-0">
                                <Card.Body>
                                    <div className='row'>
                                        <div className="d-flex">{/*align-items-center*/}
                                            <div className='col-2 d-flex flex-column align-items-center'>{/*justify-content-center*/}
                                                <img src={post_url + 'productimages/' + item.main_img} alt={item.title} style={{ width: "50px" }} />
                                            </div>
                                            <div className='col-8 bth_text_div d-flex flex-column justify-content-center'>
                                                <div className='row' style={{marginBottom: "5px"}}>
                                                    <p className='cardpara2'>{item.title}</p>
                                                    <small><lable>vendor:</lable> {item.title}</small>
                                                </div>
                                            {/* </div>
                                            <div className='col-4 d-flex flex-column justify-content-center'> */}
                                                <div className='containerquantity_btn'>
                                                    <button onClick={() => decrement(index, item.qty, item.ID)} className='butt_in_dec butt_in_dec_minus'>-</button>
                                                    <div className='num_quty'>{item.qty}</div>
                                                    <button onClick={() => increment(index, item.qty, item.ID)} className='butt_in_dec butt_in_dec_plus'>+</button>
                                                </div>
                                            </div>
                                            <div className='col-2 d-flex flex-column' style={{textAlign: 'right'}}>{/*justify-content-center*/}
                                                {/* <div className='col-12 col-md-6'> */}
                                                    <p className='cardpara3'>₹{(item.price * item.qty)}</p>
                                                    {/* <i className="bi bi-trash" onClick={() => deleteCartItem(item)} style={{ fontSize: '1em', color: 'red', cursor: "pointer" }}></i> */}
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                        <div className="col-12">
                            <div className='d-flex sub_total_div'>
                                <p className='para_text_checkout'>Sub total</p>
                                <p className='para_text_checkout'>₹{cartItems.reduce((total, item) => total + (item.price * item.qty), 0).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <button className="buynow_button_product_page" onClick={() => {
                                        navigate('/shipping')
                                    }}>Proceed to checkout</button>
                        </div>
                    </>
                )}
            </Card.Body>
        </Card>
    </div>
    </div>
)}






                                
                                {isAddedToCart && (
                                    <div className="alert alert-success  add_to_cart_btn_text" role="alert">
                                        added   successfully!
                                    </div>
                                )}

                                {/* <button className='buynow_button_product_page ' onClick={() => {
                                    if (!user?.ID) {
                                        navigate('/login2/' + product.ID)
                                    }
                                    else {
                                        navigate('/Infopage/' + product.ID)
                                    }
                                }}  >Buy Now</button> */}
                                <button className='buynow_button_product_page ' onClick={() => addToBuyCartItems(product)} disabled={pincodeVerifyDisable.buyButton === 1}>Buy Now</button>



                                
                            </div>
                            { /*<div className='col-6'>

                                <button className='buynow_button_product_page ' onClick={() => {
                                    if (!user?.ID) {
                                        navigate('/login2/' + product.ID)
                                    }
                                    else {
                                        navigate('/Infopage/' + product.ID)
                                    }
                                }}  >Buy Now</button>
                            </div>*/ }

                        </div>
                        {/* <select className='mt-3 dropdown_product_page '  >
                            <option value="option1" className=' '>Delivery Details</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select> */}
                        { /*<center>
                            <div className="mb-2 row   mt-4 text-center   roling_marg    order_div_main "  >
                                <div className='col-md-3 col-lg-4 d-none d-lg-block text_order_div' id='text_order_div' >
                                    <FontAwesomeIcon icon={faBox} />
                                    <h3 className='deliered_time'>Order Now</h3>
                                </div>
                                <div className='col-md-8 col-lg-8  d-none d-lg-block text_delviry_div' id='text_delviry_div' >
                                    <FontAwesomeIcon icon={faTruckFast} />
                                    <h3 className='deliered_time'>Delivered with in 3 - 5 days</h3>
                                </div>
                            </div>
                        
                            <div className="mb-2 d-flex text-center   roling_marg  only_order_for_md_div "  >
                                <div className='  d-none d-md-block d-lg-none me-4 '   >
                                    <FontAwesomeIcon icon={faBox} />
                                    <h3 className='deliered_time'>Order Now</h3>
                                </div>
                                <div className='   d-none d-md-block d-lg-none  '     >
                                    <FontAwesomeIcon icon={faTruckFast} />
                                    <h3 className='deliered_time'>Delivered with in 3 - 5 days</h3>
                                </div>
                            </div>
                        </center>

                        <div className="mb-4   roling_marg  ms-2  row text-center  d-md-none">
                            <div className='col-4 '>
                                <FontAwesomeIcon icon={faBox} />
                                <h3 className='deliered_time'>Order Now</h3>

                            </div>
                            <div className='col-8   ' style={{ marginLeft: '-20px' }}>

                                <FontAwesomeIcon icon={faTruckFast} />
                                <h3 className='deliered_time' >Delivered with in 3 - 5 days</h3>
                            </div>
                        </div>*/ }

                        <div className='row mt-5' style={{ marginTop: '50px'}}>
                            {<div className='col-6'>
                                <p className='category' onClick={() => navigate('/brands/' + product.brand_id)} style={{ margin: '0px' }}>MFG : {product?.brandName}  </p>
                            </div>}
                            <div className='col-6'>
                               <p className='category' style={{ margin: '0px' }}>Category : {product?.categoryName}  </p>
                            </div>
                        </div>
                        
                        <div className="mt-5 row">
                            {product?.featuresData &&
                                product?.featuresData.map((item, index) => {
                                    return <div className='col-3 justify_con'>
                                        <img src={post_url + item.icon} alt={post_url + item.icon} width={50} height={50} />
                                        <p className="mt-3">{item.title}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <div className='Productpage_section2  mt-5'>
            <div className='container '>
                <div className='row   product_page_options'>
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

                                <i className="bi bi-facebook  share_facebook_product"></i>
                                <i className="bi bi-link-45deg  share_link_product"></i>

                                <i className="bi bi-whatsapp  share_whatsapp_product"></i>


                            </div>
                        }
                    </div>
                    <div className='col-3'>
                        <Button className='des_button add_reviews_btn' onClick={handleModalShow}>Add Reviews
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='ms-2 arrow_icon_product_page '>
                                <path d="M7 7L17 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 7V17H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </Button>
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
                                {/* <input className='starts_placement' placeholder='⭐⭐⭐⭐'></input> */}
                                <p className='review_para_text'>Share a video or photo</p>


                                <div className='d-flex flex-row justify-content-between  '>

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
                                        {selectedFiles.map((file, index) => (
                                            <div key={index}>{file.name}</div>
                                        ))}
                                    </div>


                                </div>


                                <p className='review_para_text mt-4 '>Write your review</p>

                                <textarea
                                    value={reviewText}
                                    onChange={handleInputChange_share}
                                    placeholder="What did you like or dislike?"
                                    rows={5}
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
                    <div className='col-3 d-md-none'>
                        <a href='#reviewssection'>       <button className='des_button add_info add_reviews_btn' > Reviews
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='ms-2 arrow_icon_product_page'>
                                <path d="M7 7L17 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 7V17H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button></a>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <a href='#descriptionsection'>        <button className='des_button  addtional_btn add_reviews_btn'>Description
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='ms-2 arrow_icon_product_page'>
                                <path d="M7 7L17 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 7V17H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        </a>

                    </div>
                    <div className='col-3  d-none d-md-block'>
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

        <div className='Productpage_section3 mt-5' id='descriptionsection'>
            <div className='container Productpage_section3_only_white'>
                <div className='row '>
                    {/* <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className='d-flex flex-column align-items-center justify-content-center sing_image_prduct_page_good'>
                            <img src={(product.description_images && JSON.parse(product.description_images).length > 0) ? post_url + JSON.parse(product.description_images)[0] : ''} alt={product_sec2img} className='img-fluid' />
                        </div>
                    </div> */}

                    <div className=' '>
                        {/* <p className='sec2_para'>dolor sit amet consectetu r. Etiam duis eu volutpat eget odio amet fames. Sed velit tempor parturient at. Et lectus elit ultricies leo sit eget vitae enim. Purus id diam viverra est dignissim ipsum ut mattis sagittis. Dignissim duis facilisis sit
                            Sit ac tortor nisl fames fames magna odio. Maecenas ut in eu adipiscing. Placerat euismod malesuada augue tellus nisl in amet dignissim.  </p>
                        <p className='sec2_para'>Amet lorem tellus euismod rutrum tincidunt felis. Cras sapien nulla volutpat quam sem donec tincidunt commodo at. Mattis cursus facilisis sed in egestas. Massa feugiat turpis consectetur lorem ullamcorper fermentum eget arcu neque. Pellentesque libero praesent rhoncus blandit ullamcorper in bibendum. Sit morbi ut at vitae proin euismod.</p>
                        <p className='sec2_para'>Quis egestas ultricies feugiat imperdiet pulvinar nunc in. Urna est pretium sapien eget. Facilisis a penatibus venenatis malesuada mi aenean.</p> */}
                        <div className='disc_full_text' dangerouslySetInnerHTML={{ __html: product.description_desc }} />
                    </div>

                    <div className='col-lg-8 col-md-8 col-sm-12  d-lg-none' id='descriptionshash'>
                        {/* <p className='sec2_para'>dolor sit amet consectetu r. Etiam duis eu volutpat eget odio amet fames. Sed velit tempor parturient at. Et lectus elit ultricies leo sit eget vitae enim. Purus id diam viverra est dignissim ipsum ut mattis sagittis. Dignissim duis facilisis sit
                            Sit ac tortor nisl fames fames magna odio. Maecenas ut in eu adipiscing. Placerat euismod malesuada augue tellus nisl in amet dignissim.  </p>
                        {showSecondPara ? (

                            <p className='sec2_para'>Amet lorem tellus euismod rutrum tincidunt felis. Cras sapien nulla volutpat quam sem donec tincidunt commodo at. Mattis cursus facilisis sed in egestas. Massa feugiat turpis consectetur lorem ullamcorper fermentum eget arcu neque. Pellentesque libero praesent rhoncus blandit ullamcorper in bibendum. Sit morbi ut at vitae proin euismod.
                                <br></br>  <br></br>  Quis egestas ultricies feugiat imperdiet pulvinar nunc in. Urna est pretium sapien eget. Facilisis a penatibus venenatis malesuada mi aenean.</p>
                        ) : null} */}
                        {/* Toggle the visibility of the second paragraph when the "Read More" link is clicked */}
                        {/* <a className='read_more_drop_down' onClick={toggleSecondPara}>{showSecondPara ? 'Read Less' : 'Read More...'}</a> */}

                    </div>
                </div>
            </div>
        </div>



        {/* <div className='container'>
            <div className='card col-6  justify-content-center '>
                <div className="d-flex flex-row justify-content-center mt-5">
                    <button className='ask_button'>Ask Question</button>
                    <img src={Nutritionpage_Image5} alt={Nutritionpage_Image5} className="img-fluid ms-3" />
                </div>
                <div className='col-10 d-flex flex-row justify-content-center mt-5'>
                    <textarea className=' form-control'></textarea>
                </div>
                <div className='mt-4 d-flex flex-row justify-content-center'>
                    <button className='ask_button'>Submit</button>
                </div>
            </div>
        </div> */}


        {/* {user?.ID && <div className='container'>
            <div className='row d-flex flex-row justify-content-center mt-5'>
                <div className='card col-lg-6 col-sm-12'>
                    <div className='d-flex flex-row justify-content-center mt-5'>
                        <button className='ask_button_product'>Ask Question</button>
                        <img src={Nutritionpage_Image5} alt={Nutritionpage_Image5} className="img-fluid ms-3 ask_img_product" />
                    </div>
                    <div className='col-8   qus_div_ms    mt-3'>
                        <div className=' '>
                            <p className='review_para_text'>Q: &nbsp;  Got a Question? Ask Away!</p>
                            <textarea className='form-control text_area_ask' onChange={(e) => setQuestion(e.target.value)}  ></textarea>
                        </div>
                    </div>
                    <div className='m-3 pe-4 d-flex flex-row justify-content-end'>
                        <button className='ask_button_product_page' onClick={() => sendQuery()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        } */}




        <section>
            <div className='container review_section_cared ' id='reviewssection'>
                <div className='row'>


                    <div className='Productpage_section4 mt-5'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h1 className='customer_heading text-center '> Here's what other customers are saying</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-12'>
                                <div className='d-flex justify-content-between posotoo_btn_reviw'>
                                    <button className="p-2 mb-3   second_carsoul_button_bg_product_page_review_left" type="button" onClick={goToPrev77}>
                                        <span className="carousel-control-prev-icon  product_icon_size_page_left" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="p-2 mb-3 second_carsoul_button_bg_product_page_review_right" type="button" onClick={goToNext77}>
                                        <span className="carousel-control-next-icon product_icon_size_page_right" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* React slick slider */}
                    <Slider ref={sliderRef77} {...settings_2} className='reviews_slider_product' style={{ padding: '50px' }}>
                        {productRatings.map((card, index) => (
                            <div key={index} className='col-md-3 reviews_div_padding  '>
                                <div className='card  shadow'>
                                    <div className='card-body  card_product_height_page' style={{ height: '200px' }}>

                                        <div className='d-flex flex-row align-items-center'>
                                            <img src={testimonial_img} alt={testimonial_img} className='img-fluid mb-2' />
                                            <div>
                                                <h1 className='testimonial_heading ms-2'>{card.customer_name}</h1>

                                                <p className='ms-2'>{'⭐'.repeat(card.rating)}</p>
                                            </div>
                                        </div>

                                        <h5 className="testimonial_heading2 mt-2 text-center">{card.review}</h5>
                                        <p className="testimonial_para2 text-center">{card.message} </p>
                                        <div className='d-flex flex-row justify-content-end'>
                                            <img src={productpage_flower} alt={productpage_flower} className='img-fluid product_flower' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </section>





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
                        {relatedProducts.length > 0 && relatedProducts?.map((card, index) => (
                            <div key={index} className='col-md-3'>
                                <div className='card card-body main_div_card_slick shadow'>
                                    <div className='image_border_slick'>
                                        {/* <img src={`${post_url}${card.main_img}`} className='img-fluid img_top_slick' alt={`product-${index}`} /> */}
                                        <img src={post_url + 'productimages/' + card.main_img} className='img-fluid img_top_slick' alt={`product-${index}`} style={{height:"200px",width:"100%"}}/>
                                            
                                        {/* <img src={maximize} className='img-fluid maxmize_img_car_slick' onClick={() => handleShowModal(card)} /> */}
                                        {/* <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' /> */}

                                    </div>
                                    <div className='d-flex card_pad' >
                                        <div>
                                            <p className='cardpara1 cardpara1_slick cardpara_tab_device1'>{card.title}</p>
                                            {/* <p className='cardpara2 cardpara2_slick cardpara_tab_device2'>{truncateText(card.heading, maxLength)}</p> */}
                                        </div>

                                    </div>
                                    <div className='  d-flex flex-row justify-content-between  '>
                                        <div>
                                            <p className='cardpara3 cardpara3_slick cardpara_tab_device3 mt-2'>₹{card.price}</p>
                                        </div>
                                        <div>
                                            <img src={buyIcon} alt="Buy" className='icon_size_cart' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                        {/* {relatedProducts.map(product => (
                            <Col key={relatedProducts.id} lg={3} md={4} sm={6} xs={6} className="product_cards"> 
                                <div className="card_pro_hei">
                                    <ActionAreaCard product={product} addToCart={addToCart} handleShowModal={handleOpenModal} addToWishList={addToWishList} />
                                </div>
                            </Col>
                        ))} */}
                    </Slider>
                </div>
            </div>
        </section>

        {/* {shopshowModal && <Shoppingcart toggleModal={toggleModal} addToCart={addToCart} />} */}
        {shopshowModal && <Shoppingcart toggleModal={toggleModal} />}
        </div>
    )}
    </>
    )
}
export default Productnew