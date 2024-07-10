import React, { useState, useEffect, useRef } from 'react'
import { Nav, Navbar, NavDropdown, Container, Carousel, Row, Col, Card, Modal, } from 'react-bootstrap'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button } from 'react-bootstrap';
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
import BuyProduct from '../Categorys/BuyProduct';
import { useNavigate } from 'react-router-dom';

import Slider from "react-slick";



import Mince_large from '../assets/header_images/Mince_large.png'
import Mince_mini from '../assets/header_images/Mince_mini.png'
import mince_open_large from '../assets/header_images/mince_open_large.png'
import mince_open_mini from '../assets/header_images/mince_open_mini.png'
import mince_coock_large from '../assets/header_images/mince_coock_large.png'
import mince_coock_mini from '../assets/header_images/mince_coock_mini.png'
import Mince_back_large from '../assets/header_images/Mince_back_large.png'
import Mince_back_mini from '../assets/header_images/Mince_back_mini.png'


import millet_milk_front_large from '../assets/header_images/millet_milk_front_large.png'
import millet_milk_front_mini from '../assets/header_images/millet_milk_front_mini.png'
import millet_milk_large from '../assets/header_images/millet_milk_large.png'
import millet_milk_mini from '../assets/header_images/millet_milk_mini.png'
import millet_milk_wide_large from '../assets/header_images/millet_milk_wide_large.png'
import millet_milk_wide_mini from '../assets/header_images/millet_milk_wide_mini.png'
import millet_milk_back_large from '../assets/header_images/millet_milk_back_large.png'
import millet_milk_back_mini from '../assets/header_images/millet_milk_back_mini.png'


import makhana_salt_pepper_large from '../assets/header_images/makhana_salt_pepper_large.png'
import makhana_salt_pepper_mini from '../assets/header_images/makhana_salt_pepper_mini.png'
import makhana_salt_pepper_single_large from '../assets/header_images/makhana_salt_pepper_single_large.png'
import makhana_salt_pepper_single_mini from '../assets/header_images/makhana_salt_pepper_single_mini.png'
import makhana_salt_pepper_bowl_large from '../assets/header_images/makhana_salt_pepper_bowl_large.png'
import makhana_salt_pepper_bowl_mini from '../assets/header_images/makhana_salt_pepper_bowl_mini.png'
import makhana_salt_pepper_back_large from '../assets/header_images/makhana_salt_pepper_back_large.png'
import makhana_salt_pepper_back_mini from '../assets/header_images/makhana_salt_pepper_back_mini.png'

import Flax_Seeds_both_large from '../assets/header_images/Flax-Seeds_both_large.png'
import Flax_Seeds_both_mini from '../assets/header_images/Flax-Seeds_both_mini.png'
import Flax_Seeds_large from '../assets/header_images/Flax-Seeds_large.png'
import Flax_Seeds_mini from '../assets/header_images/Flax-Seeds_mini.png'
import Flax_Seeds_back_large from '../assets/header_images/Flax-Seeds_back_large.png'
import Flax_Seeds_back_mini from '../assets/header_images/Flax-Seeds_back_mini.png'
import flax_seeds_cup_large from '../assets/header_images/flax_seeds_cup_large.png'
import flax_seeds_cub_mini from '../assets/header_images/flax_seeds_cub_mini.png'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import Apicalls, { post_url } from "../Apicalls";
import { useSelector } from 'react-redux';
import sample3 from '../assets/sample3.jpg'
import sample1 from '../assets/sample1.png'
import { Rating } from '@mui/material';
import { compose } from 'redux';
import ActionAreaCard from "../Ecommerce/MuiCard";


export default function Product() {




    const user = useSelector((state) => state.user.auth.user)
    console.log(user, window.location.pathname.split('/')[2])
    const [ratingData, setRatingData] = useState({ rating: 0, photos: [], message: '' })
    const [selectedFiles, setSelectedFiles] = useState([]);
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false)
    const [productPrice, setProductPrice] = useState(1000)
    const [productRatings, setProductRatings] = useState([])
    const [relatedProducts, setRelatedProducts] = useState([])

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
                console.log(data)
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            navigate('/login')
        }
    }


    // function handleFileSelect(event) {
    //     const files = event.target.files;
    //     setSelectedFiles(files);
    //     // Convert FileList to array and update ratingData state with selected files
    //     setRatingData(prevState => ({
    //         ...prevState,
    //         files: Array.from(files)
    //     }));
    // }

    useEffect(() => {
        const minPerSlide = 3;
        const carouselItems = document.querySelectorAll('.carousel .carousel-item');

        carouselItems.forEach((carouselItem) => {
            let next = carouselItem.nextElementSibling;

            if (!next) {
                next = carouselItem.parentNode.firstElementChild;
            }

            const firstChildClone = next.firstElementChild.cloneNode(true);
            carouselItem.appendChild(firstChildClone);

            for (let i = 0; i < minPerSlide - 1; i++) {
                next = next.nextElementSibling || carouselItem.parentNode.firstElementChild;
                const childClone = next.firstElementChild.cloneNode(true);
                carouselItem.appendChild(childClone);
            }
        });
    }, []);

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
                        console.log('Added to query')
                    }
                    else {
                        console.log('internal server error')
                    }
                }).catch((err) => {
                    console.log('internal server error')
                })
            }
            else {
                console.log('enter question')
            }
        }
        else {
            navigate('/login')
        }
    }

    console.log(sliderRef77.current?.innerHTML)

    const handleShowModal = (card) => {
        setSelectedCard(card);
        setShowModal(true);
    };
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const [product, setProduct] = useState({})
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


    const [selectedCard, setSelectedCard] = useState(null);
    const carouselimgs = [
        {
            id: 1,
            image: Mince_large,


            image1: Mince_large,
            image2: mince_open_large,
            image3: mince_coock_large,
            image4: Mince_back_large,
            image_mini1: Mince_mini,
            image_mini2: mince_open_mini,
            image_mini3: mince_coock_mini,
            image_mini4: Mince_back_mini,



            title: 'Daily Alternative',
            stars: '⭐⭐⭐⭐ 4/5',
            stocks: '20 in stock',
            description: 'Mince back jpeg 1 scaledmince...',
            descriptionfull: 'Mince back jpeg 1 scaledmince1mince Seaspire’s Gill-t Free Mince (200 gms) (Available only in Selective Location)',
            catagerious: 'Food, Mock meat',


            about: 'A versatile plant-based seafood mince that can be added to all your favorite seafood dishes, from fish tacos, salads, and patés to sushi.',
            about2: '– Water, Textured Pea Protein (18%), Textured Rice Protein (4%), Rice Protein Powder (2%), Edible Sunflower Oil, Salt, Psyllium Husk, Algal Extracts.',

            price: '₹375.00',
        },
        {
            id: 2,
            image: millet_milk_front_large,

            image1: millet_milk_front_large,
            image2: millet_milk_large,
            image3: millet_milk_wide_large,
            image4: millet_milk_back_large,
            image_mini1: millet_milk_front_mini,
            image_mini2: millet_milk_mini,
            image_mini3: millet_milk_wide_mini,
            image_mini4: millet_milk_back_mini,



            title: 'Daily Alternative',
            stars: '⭐⭐⭐⭐⭐ 5/5',
            stocks: '25 in stock',
            description: 'Millet Milk Original by Nourish...',
            descriptionfull: 'Millet Milk Original by Nourish You.',
            catagerious: ' Dairy alternative, Food, Mylk',


            about: 'Nourish You Millet Mlk is a vegan mlk made from a blissful blend of homegrown millets (ragi, jowar, bajra) and oats. The millets power our mlk with a healthy dose of nutrition, and the oats add a rich creamy texture.',
            about2: 'The Barista edition is crafted to be a part of your sacred coffee and chai rituals, without taking away any of the taste. This nourishing vegan mlk is an ideal companion in your health journey, as it is free from refined sugar, lactose, soy, gluten, artificial flavors and preservatives.',
            price: '₹174.00 – ₹290.00',
        },
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

            title: 'Daily Alternative',
            stars: '⭐⭐⭐⭐⭐ 5/5',
            description: 'Conscious Foods Makhana...',
            descriptionfull: 'Conscious Foods Makhana – Salt & Pepper 65gm',
            catagerious: 'Health & Wellness, Healthy Diet foods',

            about: 'Found in the miraculous lotus plant, makhana or fox nuts are packed with nutrients and make way for a healthy snack. They are lotus seeds sourced from the beds of ponds or rivers. ',
            about2: ' Once manually harvested, they need to be air-dried and roasted before they can be consumed. To make them as delicious as they are healthy, we flavour these makhanas with the strong flavours of salt and the subtle tinge of pepper. Full of natural ingredients, these makhanas make snacking a non-guilty pleasure!',
            price: '₹149.00',
        },
        {
            id: 4,
            image: Flax_Seeds_both_large,
            image1: Flax_Seeds_both_large,
            image2: Flax_Seeds_large,
            image3: Flax_Seeds_back_large,
            image4: flax_seeds_cup_large,

            image_mini1: Flax_Seeds_both_mini,
            image_mini2: Flax_Seeds_mini,
            image_mini3: Flax_Seeds_back_mini,
            image_mini4: flax_seeds_cub_mini,
            title: 'Daily Alternative',
            stars: '⭐⭐⭐⭐ 4/5',
            description: 'Conscious Food Flax Seeds....',
            descriptionfull: ' Conscious Food Flax Seeds | Pack of 2 | 200g',
            catagerious: ' Health & Wellness, Healthy Diet foods',


            about: 'Flax seeds are famous for their omega-3 fatty acid (alpha-linolenic acid) content, which help in reducing cholesterol and blood pressure. They’re rich in antioxidants which help eliminate toxins and reduce the chances of cardiovascular disease and cancer. The seeds are an excellent source of fibre, beneficial for intestinal health. Do not crush and store, since its natural oils will spoil within a few days.',
            about2: 'Vegetarian source of omega 3 fatty acids, essential for our bodies, cell health, nerve transmission, and brain health.',


            price: '₹138.00',
        },
        {
            id: 5,
            image: Mince_large,


            image1: Mince_large,
            image2: mince_open_large,
            image3: mince_coock_large,
            image4: Mince_back_large,
            image_mini1: Mince_mini,
            image_mini2: mince_open_mini,
            image_mini3: mince_coock_mini,
            image_mini4: Mince_back_mini,



            title: 'Daily Alternative',
            stars: '⭐⭐⭐⭐ 4/5',
            stocks: '20 in stock',
            description: 'Mince back jpeg 1 scaledmince...',
            descriptionfull: 'Mince back jpeg 1 scaledmince1mince Seaspire’s Gill-t Free Mince (200 gms) (Available only in Selective Location)',
            catagerious: 'Food, Mock meat',


            about: 'A versatile plant-based seafood mince that can be added to all your favorite seafood dishes, from fish tacos, salads, and patés to sushi.',
            about2: '– Water, Textured Pea Protein (18%), Textured Rice Protein (4%), Rice Protein Powder (2%), Edible Sunflower Oil, Salt, Psyllium Husk, Algal Extracts.',

            price: '₹375.00',
        },
        {
            id: 6,
            image: millet_milk_front_large,

            image1: millet_milk_front_large,
            image2: millet_milk_large,
            image3: millet_milk_wide_large,
            image4: millet_milk_back_large,
            image_mini1: millet_milk_front_mini,
            image_mini2: millet_milk_mini,
            image_mini3: millet_milk_wide_mini,
            image_mini4: millet_milk_back_mini,



            title: 'Daily Alternative',
            stars: '⭐⭐⭐⭐⭐ 5/5',
            stocks: '25 in stock',
            description: 'Millet Milk Original by Nourish...',
            descriptionfull: 'Millet Milk Original by Nourish You.',
            catagerious: ' Dairy alternative, Food, Mylk',


            about: 'Nourish You Millet Mlk is a vegan mlk made from a blissful blend of homegrown millets (ragi, jowar, bajra) and oats. The millets power our mlk with a healthy dose of nutrition, and the oats add a rich creamy texture.',
            about2: 'The Barista edition is crafted to be a part of your sacred coffee and chai rituals, without taking away any of the taste. This nourishing vegan mlk is an ideal companion in your health journey, as it is free from refined sugar, lactose, soy, gluten, artificial flavors and preservatives.',
            price: '₹174.00 – ₹290.00',
        },
        {
            id: 7,
            image: makhana_salt_pepper_large,

            image1: makhana_salt_pepper_large,
            image2: makhana_salt_pepper_single_large,
            image3: makhana_salt_pepper_bowl_large,
            image4: makhana_salt_pepper_back_large,
            image_mini1: makhana_salt_pepper_mini,
            image_mini2: makhana_salt_pepper_single_mini,
            image_mini3: makhana_salt_pepper_bowl_mini,
            image_mini4: makhana_salt_pepper_back_mini,

            title: 'Daily Alternative',
            stars: '⭐⭐⭐⭐⭐ 5/5',
            description: 'Conscious Foods Makhana...',
            descriptionfull: 'Conscious Foods Makhana – Salt & Pepper 65gm',
            catagerious: 'Health & Wellness, Healthy Diet foods',

            about: 'Found in the miraculous lotus plant, makhana or fox nuts are packed with nutrients and make way for a healthy snack. They are lotus seeds sourced from the beds of ponds or rivers. ',
            about2: ' Once manually harvested, they need to be air-dried and roasted before they can be consumed. To make them as delicious as they are healthy, we flavour these makhanas with the strong flavours of salt and the subtle tinge of pepper. Full of natural ingredients, these makhanas make snacking a non-guilty pleasure!',
            price: '₹149.00',
        },
        {
            id: 8,
            image: Flax_Seeds_both_large,
            image1: Flax_Seeds_both_large,
            image2: Flax_Seeds_large,
            image3: Flax_Seeds_back_large,
            image4: flax_seeds_cup_large,

            image_mini1: Flax_Seeds_both_mini,
            image_mini2: Flax_Seeds_mini,
            image_mini3: Flax_Seeds_back_mini,
            image_mini4: flax_seeds_cub_mini,
            title: 'Daily Alternative',
            stars: '⭐⭐⭐⭐ 4/5',
            description: 'Conscious Food Flax Seeds....',
            descriptionfull: ' Conscious Food Flax Seeds | Pack of 2 | 200g',
            catagerious: ' Health & Wellness, Healthy Diet foods',


            about: 'Flax seeds are famous for their omega-3 fatty acid (alpha-linolenic acid) content, which help in reducing cholesterol and blood pressure. They’re rich in antioxidants which help eliminate toxins and reduce the chances of cardiovascular disease and cancer. The seeds are an excellent source of fibre, beneficial for intestinal health. Do not crush and store, since its natural oils will spoil within a few days.',
            about2: 'Vegetarian source of omega 3 fatty acids, essential for our bodies, cell health, nerve transmission, and brain health.',


            price: '₹138.00',
        },

    ]


    const Revews_carsouls = [
        {
            id: 1,
            title: 'Ram',
            content: 'It was a very good Product',
            descriptionfull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque',

        },
        {
            id: 2,
            title: 'Ram',
            content: 'It was a very good Product',
            descriptionfull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque',

        },
        {
            id: 3,
            title: 'Ram',
            content: 'It was a very good Product',
            descriptionfull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque',

        },
        {
            id: 4,
            title: 'Ram',
            content: 'It was a very good Product',
            descriptionfull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque',

        },
        {
            id: 5,
            title: 'Ram',
            content: 'It was a very good Product',
            descriptionfull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque',

        },
        {
            id: 6,
            title: 'Ram',
            content: 'It was a very good Product',
            descriptionfull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque',

        },
        {
            id: 7,
            title: 'Ram',
            content: 'It was a very good Product',
            descriptionfull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque',

        },
        {
            id: 8,
            title: 'Ram',
            content: 'It was a very good Product',
            descriptionfull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque',

        },
        {
            id: 9,
            title: 'Ram',
            content: 'It was a very good Product',
            descriptionfull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque',

        },
        {
            id: 10,
            title: 'Ram',
            content: 'It was a very good Product',
            descriptionfull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque',

        },
    ]
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

    console.log(product)
    useEffect(() => {
        const currentSlide = document.getElementsByClassName('slick-center slick-current')[0];
        if (currentSlide) {
            const slideHeight = currentSlide.offsetHeight + 0;
            const elementWithAppendedHeight = currentSlide.getElementsByClassName('col-md-3 reviews_div_padding')[0];
            console.log(elementWithAppendedHeight)
            if (elementWithAppendedHeight) {
                elementWithAppendedHeight.firstChild.style = `height: ${slideHeight}px;`;
                elementWithAppendedHeight.style = `padding: 0px 10px 0px 10px; width: 100%; display: inline-block;`;
            }
        }

    })

    const [showModal_share, setShowModal_share] = useState(false);
    const [reviewText, setReviewText] = useState('');
    // const [selectedFiles, setSelectedFiles] = useState([]);

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
        console.log(files)
        // setSelectedFiles(files);
        // Convert FileList to array and update ratingData state with selected files
        setRatingData(prevState => ({
            ...prevState,
            files: Array.from(files)
        }));
    };


    const handleSubmit_share = () => {
        // Handle submitting the review (you can add your logic here)
        console.log("Review submitted:", reviewText);
        // Close the modal
        uploadRating()

        handleModalClose_share();
    };

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
    const handleImageClick1 = (index) => {
        const images = product.productImages;
        const clickedImage = images.splice(index, 1)[0];
        images.unshift(clickedImage);
        setProduct({
            ...product,
            productImages: images,
        });
    }
    const [showSecondPara, setShowSecondPara] = useState(false);

    // Function to toggle the visibility of the second paragraph
    const toggleSecondPara = () => {
        setShowSecondPara(!showSecondPara);
    };
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/newspost');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        if (window.location.pathname.split('/')[2]) {
            Promise.all([
                Apicalls.get('products/' + window.location.pathname.split('/')[2]),
                Apicalls.get('product-ratings/product/' + window.location.pathname.split('/')[2])
            ]).then(([data, productRatingsData]) => {
                console.log(data.data)
                setProductPrice(data.data.finalPrice)
                console.log(data.data.featuresData)
                data.data.featuresData = data.data.featuresData.filter((item) => ![1, 2, 3].includes(item.id))
                console.log(data.data.featuresData)
                data.data.productImages = data.data.main_img ? [data.data.main_img, ...JSON.parse(data.data.productImages)] : JSON.parse(data.data.productImages)
                data.data.features = JSON.parse(data.data.features)
                setSelectedCard({ ...data.data, productImages: JSON.stringify(data.data.productImages) })
                setProduct(data.data)
                Promise.all([
                    Apicalls.get('products/mcID/' + data.data.mcID)
                ]).then(([relatedProductsData]) => {
                    setRelatedProducts(relatedProductsData.data)
                })
                setProductRatings(productRatingsData.data)
            }).catch((err) => {
                console.log('internal server error', err)
            })
        }
    }, [window.location.pathname]);



    const addToCartItems = (productID) => {

        setIsAddedToCart(true);
        setTimeout(() => {
            setIsAddedToCart(false);
        }, 700);
        if (user?.ID) {
            //console.log(productID)
            Promise.all([
                Apicalls.post('cart', { userId: user.ID, productId: productID, status: 1 })
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
            // navigate('/login')
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


    return (
        <>





            <div className='Productpage_section1 mt-5'>
                <div className='container'>
                    <div className='row'>

                        <div className="col-lg-5 main_image_position_product_page  " style={{ background: '#F9F7F0' }}>
                            <div className='d-none d-lg-block  '>
                                {/* <img src={mainImage} alt={mainImage} className='img-fluid' /> */}
                                <img src={post_url + product['productImages']?.[0]}
                                    alt={product?.title} className='img-fluid ' id="mainImage"
                                    onMouseOver={() => setIsHovered(true)}
                                    onMouseOut={() => setIsHovered(false)}
                                />
                            </div>
                        </div>

                        <div className='col-lg-2 product_page_min_images'>
                            {
                                product?.productImages?.map((item, index) => {
                                    if (index !== 0) {
                                        return <div className='d-none d-lg-block'> <img src={post_url + product?.productImages?.[index]} alt={product?.title} className='img-fluid only_image_padding_need' onClick={() => handleImageClick1(index)} /></div>
                                    }
                                })
                            }
                            {/* <div className='d-none d-lg-block'>
                                <img src={Productpage_img2} alt={Productpage_img2} className='img-fluid mt-3 product_page_min_img' style={{ background: '#F9F7F0' }} onClick={() => handleImageClick(Productpage_img2)} />
                                </div>
                                <div className='d-none d-lg-block'>
                                <img src={Productpage_img3} alt={Productpage_img3} className='img-fluid mt-3 product_page_min_img' onClick={() => handleImageClick(Productpage_img3)} />
                            </div>
                            <div className='d-none d-lg-block'>
                                <img src={Productpage_img4} alt={Productpage_img4} className='img-fluid mt-3 product_page_min_img' onClick={() => handleImageClick(Productpage_img4)} />
                                </div>
                                <div className='d-none d-lg-block'>
                                <img src={Productpage_img5} alt={Productpage_img5} className='img-fluid mt-3 product_page_min_img' onClick={() => handleImageClick(Productpage_img5)} />
                            </div> */}
                        </div>


                        {/* Mobile view 1  */}

                        <div className='d-block d-lg-none mt-2 mb-2'>
                            <div className="row ">
                                {/* {(!product.productImages || product.productImages.length === 0) ? (
                                    <div>No images available for this product.</div>
                                ) : (
                                    <React.Fragment>
                                        <div className="col-md-12 col-sm-12" style={{ background: '#F9F7F0' }}>
                                            <img src={post_url + product.productImages[currentImageIndex]} alt={product.title} className='img-fluid' id="mainImage" />
                                        </div>
                                        <div className="row col-md-12 col-sm-12" style={{ background: '#F9F7F0' }}>
                                            {product.productImages.map((item, index) => (
                                                <div className='col-3' key={index}>
                                                    <div>
                                                        <img
                                                            src={post_url + item}
                                                            alt={product.title}
                                                            className='img-fluid mt-3 product_page_min_img'
                                                            style={{ background: '#F9F7F0', cursor: 'pointer' }}
                                                            onClick={() => setCurrentImageIndex(index)}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <button onClick={handlePrevious} disabled={currentImageIndex === 0}>Previous</button>
                                            <button onClick={handleNext} disabled={currentImageIndex === product.productImages.length - 1}>Next</button>
                                        </div>
                                    </React.Fragment>
                                )} */}
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
                        </div>


                        {/* modal  */}



                        <div className='col-lg-5 col-md-12 col-sm-12'>
                            <h1 className='product_page_heading1'>{product?.heading}</h1>
                            <div className='d-none d-lg-block'>
                                <div className='d-flex flex-row'>
                                    <p className='produt_page_starts'>{'⭐'.repeat(product.rating)}</p>
                                    {/* <p className='ms-2 produt_page_starts'>5/5</p> */}

                                </div>
                                {/* <p className='product_page_price'>₹{product?.price}</p> */}
                                
                                <del>₹{product?.price}</del>
                                <p className='product_page_price'>₹{(product?.price - product?.discount) }</p>
                            </div>
                            <div className='product_desc_min d-flex flex-row justify-content-between d-block d-lg-none'>
                                <p className='product_page_price'>₹{product?.price}</p>
                                <p className='produt_page_starts me-4'>{'⭐'.repeat(product.rating)}</p>
                                {/* <p className='ms-2 produt_page_starts'>5/5</p> */}

                            </div>
                            <p className='product_page_text'>{product?.quantity} in Stock </p>
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
                            <div className='row mt-2'>
                                {<div className='col-6'>
                                    <p className='category' onClick={() => navigate('/brands/' + product.brandID)} style={{ margin: '0px' }}>MFG : {product?.brandName}  </p>
                                </div>}
                                <div className='col-6'>
                                    {/* <p className='category' style={{ margin: '0px' }}>SKU : {product?.title}  </p> */}
                                    <p className='category' style={{ margin: '0px' }}>Category : {product?.title}  </p>
                                </div>
                            </div>
                            <div className='d-flex flex-row justify-content-start mt-3'>
                                {/* <p className='increment mt-3' style={{fontWeight:"600"}}>- 1 + </p> */}
                                <div className='col-6'>
                                    <button className='add_to_card_button_produvt_page' onClick={() => addToCartItems(product.ID)}>Add To Cart</button>
                                    {isAddedToCart && (
                                        <div className="alert alert-success  add_to_cart_btn_text" role="alert">
                                            added   successfully!
                                        </div>
                                    )}
                                </div>
                                <div className='col-6'>

                                    <button className='buynow_button_product_page ' onClick={() => {
                                        if (!user?.ID) {
                                            navigate('/login2/' + product.ID)
                                        }
                                        else {
                                            navigate('/Infopage/' + product.ID)
                                        }
                                    }}  >Buy Now</button>
                                </div>

                            </div>
                            {/* <select className='mt-3 dropdown_product_page '  >
                                <option value="option1" className=' '>Delivery Details</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select> */}
                            <center>
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
                            </center>
                            <center>
                                <div className="mb-2 d-flex   mt-4 text-center   roling_marg  only_order_for_md_div "  >
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
                            </div>
                            <br />
                            <br />
                            <div className='d-flex flex-row justify-content-evenly'>
                                {product?.features?.includes('1') && <div className="shipping-icon-wrapper" style={{ marginLeft: '20px' }}>
                                    <span className="icon-text">Pan India</span>
                                    <img src={flagimg}
                                        alt="Pan India" className="shipping-icon" width={50} height={50} />
                                </div>}
                                {product?.features?.includes('2') && <div className="shipping-icon-wrapper" style={{ marginLeft: '20px' }}>
                                    <span className="icon-text">Cash On Delivery</span>
                                    <img src={iconcard3}
                                        alt="Free Shipping" className="shipping-icon" width={50} height={50} />
                                </div>}
                                {product?.features?.includes('3') && <div className="shipping-icon-wrapper" style={{ marginLeft: '20px' }}>
                                    <span className="icon-text">Above ₹1500</span>
                                    <img src={iconcard2} alt="COD"
                                        className="shipping-icon" width={50} height={50} />
                                </div>}
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


            {user?.ID && <div className='container'>
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
            }




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
                                                    <h1 className='testimonial_heading ms-2'>{card.customerName}</h1>

                                                    <p className='ms-2'>{'⭐'.repeat(card.rating)}</p>
                                                </div>
                                            </div>

                                            <h5 className="testimonial_heading2 mt-2 text-center">{card.content}</h5>
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
                            {relatedProducts.map((card, index) => (
                                <div key={index} className='col-md-3'>
                                    <div className='card card-body main_div_card_slick shadow'>
                                        <div className='image_border_slick'>
                                            <img src={`${post_url}${card.main_img}`} className='img-fluid img_top_slick' alt={`product-${index}`} />
                                            <img src={maximize} className='img-fluid maxmize_img_car_slick' onClick={() => handleShowModal(card)} />
                                            <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />

                                        </div>
                                        <div className='d-flex card_pad' >
                                            <div>
                                                <p className='cardpara1 cardpara1_slick cardpara_tab_device1'>{card.title}</p>
                                                <p className='cardpara2 cardpara2_slick cardpara_tab_device2'>{truncateText(card.heading, maxLength)}</p>
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


        </>
    )
}

