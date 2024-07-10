/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import buycard from '../assets/Group 6.png';
import keyfacticon from '../assets/key_fact_fourth_icon.png';
import dealsoftheday from '../assets/deals_of_the_day.png';
import wish_img from '../assets/wish_img.png';
import maximizeIcon from '../assets/maximize-2.png';
import mini_penut from '../assets/mini-penutbutter.jpg'
import mini_process from '../assets/mini-penutbutter-process.jpg'
import mini_labbey from '../assets/mini-labbey.jpg'
import mini_back from '../assets/mini-penutbutter-back.jpg'
import penuatbutter from '../assets/penut-butter.jpg'
import penutbutter_back from '../assets/penut-butter-back.jpg'
import penutbuter_process from '../assets/penut-process.jpg'
import penut_mix from '../assets/header_images/penut_mix.jpg'
import Carousel2 from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import iconcard2 from '../assets/iconcard2.png';
import iconcard3 from '../assets/iconcard3.png';
import flagimg from '../assets/flagimg.png'
import mini_slider_3 from '../assets/mini_slider_3.png'
import mini_slider_2 from '../assets/mini_slider_2.png'
import mini_slider_1 from '../assets/mini_slider_1.png'


import ProductImg1_Homepage from '../assets/ProductImg1_Homepage.png';
import ProductImg2_Homepage from '../assets/ProductImg2_Homepage.png';
import ProductImg3_Homepage from '../assets/ProductImg3_Homepage.png';
import ProductImg4_Homepage from '../assets/ProductImg4_Homepage.png';
import ProductImg5_Homepage from '../assets/ProductImg5_Homepage.png';
import ProductImg6_Homepage from '../assets/ProductImg6_Homepage.png';
import ProductImg7_Homepage from '../assets/ProductImg7_Homepage.png';
import ProductImg8_Homepage from '../assets/ProductImg8_Homepage.png';
import ProductImg9_Homepage from '../assets/ProductImg9_Homepage.png';
import LargeProductImg_Homepage from '../assets/LargeProductImg_Homepage.png';

import example_bloag_2 from '../assets/example_bloag_2.png';
import example_bloag_1 from '../assets/example_bloag_1.png';
import coffee_mocha_front_bg_large from '../assets/coffee_mocha_front_bg_large.png';
import kitchen17 from '../assets/kitchen17.png';
import { Repeat } from 'react-bootstrap-icons';


import buyIcon from '../assets/Group 6.png';
import axios from 'axios';
import { Link } from 'react-router-dom';


// image

import natural from '../assets/natural.png'
import gmo from '../assets/gmo.png'
import no_presetives from '../assets/no_presettives.png'
import gluten from '../assets/gulten_free.png'

// import sliderimage from '../assets/header_images/slider_image.png'
// import sliderimage from '../assets/slider_image2.png'
// import sliderimage from '../assets/banner-1800.svg'




import foodsamllimageicon from '../assets/Food.png'
import beautysamllimageicon from '../assets/Beauty.png.png'
import babycaresamllimageicon from '../assets/Baby-Care.png.png'
import dairysamllimageicon from '../assets/Dairy.bak_.png.png'
import energysamllimageicon from '../assets/energy_nutrition.png'
import bevaragessamllimageicon from '../assets/Bevarages.png'
import toliteriessamllimageicon from '../assets/toiletries.png'


import cheese_lg from '../assets/cheese_lg.png'
import cheese_back_lg from '../assets/cheese_back_lg.png'
import cheese_about_lg from '../assets/cheese_about_lg.jpg'
import cheese_about_making_lg from '../assets/cheese_about_making_lg.png'
import cheese_mini from '../assets/cheese_mini.png'
import cheese_back_mini from '../assets/cheese_back_mini.png'
import cheese_about_mini from '../assets/cheese_about_mini.jpg'
import cheese_about_making_mini from '../assets/cheese_about_making_mini.png'


import ota_milk_front from '../assets/header_images/ota_milk_front.png'
import back_ota_milk from '../assets/header_images/back_ota_milk.jpg'
import left_ota_milk from '../assets/header_images/left_ota_milk.jpg'
import right_ota_milk from '../assets/header_images/right_ota_milk.jpg'
import mini_ota_milk_front from '../assets/header_images/mini_ota_milk_front.jpg'
import mini_back_ota_milk from '../assets/header_images/mini_back_ota_milk.jpg'
import mini_left_ota_milk from '../assets/header_images/mini_left_ota_milk.jpg'
import mini_right_ota_milk from '../assets/header_images/mini_right_ota_milk.jpg'


import cacao_large from '../assets/header_images/cacao_large.jpg'
import cacao_large_back from '../assets/header_images/cacao_large_back.png'
import cacao_large_front from '../assets/header_images/cacao_large_front.webp'
import cacao_mini from '../assets/header_images/cacao_mini.jpg'
import cacao_mini_back from '../assets/header_images/cacao_mini_back.png'
import cacao_mini_front from '../assets/header_images/cacao_mini_front.webp'


import almond_drink_large from '../assets/header_images/almond_drink_large.png'
import almond_half_large from '../assets/header_images/almond_half_large.png'
import almond_left_large from '../assets/header_images/almond_left_large.png'
import almond_sleep_large from '../assets/header_images/almond_sleep_large.png'
import almond_drink_mini from '../assets/header_images/almond_drink_mini.png'
import almond_half_mini from '../assets/header_images/almond_half_mini.png'
import almond_left_mini from '../assets/header_images/almond_left_mini.png'
import almond_sleep_mini from '../assets/header_images/almond_sleep_mini.png'


import cacao_powder_large from '../assets/header_images/cacao_powder_large.png'
import cacao_powder_back_large from '../assets/header_images/cacao_powder_back_large.png'
import cacao_powder_mini from '../assets/header_images/cacao_powder_mini.png'
import cacao_powder_back_mini from '../assets/header_images/cacao_powder_back_mini.png'


import conscious_food_oil_both_large from '../assets/header_images/conscious_food_oil_both_large.png'
import conscious_food_oil_back_large from '../assets/header_images/conscious_food_oil_back_large.png'
import conscious_food_oil_large from '../assets/header_images/conscious_food_oil_large.png'
import conscious_food_oil_both_mini from '../assets/header_images/conscious_food_oil_both_mini.png'
import conscious_food_oil_back_mini from '../assets/header_images/conscious_food_oil_back_mini.png'
import conscious_food_oil_mini from '../assets/header_images/conscious_food_oil_mini.png'


import Flax_Seeds_both_large from '../assets/header_images/Flax-Seeds_both_large.png'
import Flax_Seeds_both_mini from '../assets/header_images/Flax-Seeds_both_mini.png'
import Flax_Seeds_large from '../assets/header_images/Flax-Seeds_large.png'
import Flax_Seeds_mini from '../assets/header_images/Flax-Seeds_mini.png'
import Flax_Seeds_back_large from '../assets/header_images/Flax-Seeds_back_large.png'
import Flax_Seeds_back_mini from '../assets/header_images/Flax-Seeds_back_mini.png'
import flax_seeds_cup_large from '../assets/header_images/flax_seeds_cup_large.png'
import flax_seeds_cub_mini from '../assets/header_images/flax_seeds_cub_mini.png'


import Nugget_large from '../assets/header_images/Nugget_large.png'
import Nugget_mini from '../assets/header_images/Nugget_mini.png'
import Nugget_Back_large from '../assets/header_images/Nugget_Back_large.png'
import Nugget_Back_mini from '../assets/header_images/Nugget_Back_mini.png'
import naguet_open_plate_large from '../assets/header_images/naguet_open_plate_large.png'
import naguet_open_plate_mini from '../assets/header_images/naguet_open_plate_mini.png'
import naguet_open_large from '../assets/header_images/naguet_open_large.png'
import naguet_open_mini from '../assets/header_images/naguet_open_mini.png'


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
import Avacodo_Print_T_shir_pant_Night_Dress_sitting_front_large from '../assets/clothing_&_mixed/Avacodo_Print_T_shir_pant_Night_Dress__sitting_front_large.png'
import Avacodo_Print_T_shir_pant_Night_Dress_back_large from '../assets/clothing_&_mixed/Avacodo_Print_T_shir_pant_Night_Dress__back_large.png'
import Avacodo_Print_T_shir_pant_Night_Dress_sitting_large from '../assets/clothing_&_mixed/Avacodo_Print_T_shir_pant_Night_Dress__back_large.png'
import Avacodo_Print_T_shir_pant_Night_Dress_large from '../assets/clothing_&_mixed/Avacodo_Print_T_shir_pant_Night_Dress_large.png'


import DEEP_BLUE_TENCEL_SHIRT_front_large from '../assets/clothing_&_mixed/DEEP_BLUE_TENCEL_SHIRT_front_large.png'
import DEEP_BLUE_TENCEL_SHIRT_back_large from '../assets/clothing_&_mixed/DEEP_BLUE_TENCEL_SHIRT_back_large.png'
import DEEP_BLUE_TENCEL_SHIRT_folding_large from '../assets/clothing_&_mixed/DEEP_BLUE_TENCEL_SHIRT_folding_large.png'
import DEEP_BLUE_TENCEL_SHIRT_front_siting_large from '../assets/clothing_&_mixed/DEEP_BLUE_TENCEL_SHIRT_front_siting_large.png'



import Co_ordsetinHemp_front_large from '../assets/clothing_&_mixed/Co_ordsetinHemp_front_large.png'
import Co_ordsetinHemp_sit_left_front_brown_large from '../assets/clothing_&_mixed/Co_ordsetinHemp_sit_left_front_brown_large.png'
import Co_ordsetinHemp_sit_left_front_large from '../assets/clothing_&_mixed/Co_ordsetinHemp_sit_left_front_large.png'
import Co_ordsetinHemp_sit_right_front_large from '../assets/clothing_&_mixed/Co_ordsetinHemp_sit_right_front_large.png'


import Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_front_large from '../assets/clothing_&_mixed/Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_front_large.png'
import Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_back_large from '../assets/clothing_&_mixed/Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_back_large.png'
import Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_full_large from '../assets/clothing_&_mixed/Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_full_large.png'
import Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_side_large from '../assets/clothing_&_mixed/Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_side_large.png'


import HEMP_LOUNGE_SHORTS_FOR_MEN_side_closeup_large from '../assets/clothing_&_mixed/HEMP_LOUNGE_SHORTS_FOR_MEN_side_closeup_large.png'
import HEMP_LOUNGE_SHORTS_FOR_MEN_front_closeup_large from '../assets/clothing_&_mixed/HEMP_LOUNGE_SHORTS_FOR_MEN_front_closeup_large.png'
import HEMP_LOUNGE_SHORTS_FOR_MEN_front_large from '../assets/clothing_&_mixed/HEMP_LOUNGE_SHORTS_FOR_MEN_front_large.png'


import HempHigh_waisttrousers_front_large from '../assets/clothing_&_mixed/HempHigh_waisttrousers_front_large.png'
import HempHigh_waisttrousers_fron_side_large from '../assets/clothing_&_mixed/HempHigh_waisttrousers_fron_side_large.png'
import HempHigh_waisttrousers_fron_leg_large from '../assets/clothing_&_mixed/HempHigh_waisttrousers_fron_leg_large.png'

import MAGIC_large from '../assets/clothing_&_mixed/MAGIC_large.png'
import MAGIC_browen_large from '../assets/clothing_&_mixed/MAGIC_browen_large.png'
import MAGIC_blue_zip_large from '../assets/clothing_&_mixed/MAGIC_blue_zip_large.png'
import MAGIC_browen_zip_large from '../assets/clothing_&_mixed/MAGIC_browen_zip_large.png'


import Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_large from '../assets/clothing_&_mixed/Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_large.png'
import Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_side_looks_large from '../assets/clothing_&_mixed/Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_side_large.png'
import Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_side_large from '../assets/clothing_&_mixed/Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_side_large.png'
import Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_sitting_large from '../assets/clothing_&_mixed/Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_sitting_large.png'


import OVERLAY_IN_ORANGE_FABRIC_front_large from '../assets/clothing_&_mixed/OVERLAY_IN_ORANGE_FABRIC_front_large.png';
import OVERLAY_IN_ORANGE_FABRIC_front_side_large from '../assets/clothing_&_mixed/OVERLAY_IN_ORANGE_FABRIC_front_side_large.png';
import OVERLAY_IN_ORANGE_FABRIC_front_sitting_large from '../assets/clothing_&_mixed/OVERLAY_IN_ORANGE_FABRIC_front_sitting_large.png';
import OVERLAY_IN_ORANGE_FABRIC_front_stand_large from '../assets/clothing_&_mixed/OVERLAY_IN_ORANGE_FABRIC_front_stand_large.png';

import Cannaking_Pain_Stop_front_large from '../assets/clothing_&_mixed/Cannaking_Pain_Stop_front_large.png';
import Cannaking_Pain_Stop_front_bg_none_large from '../assets/clothing_&_mixed/Cannaking_Pain_Stop_front__bg_none_large.png';
import Cannaking_Pain_Stop_front_disc_large from '../assets/clothing_&_mixed/Cannaking_Pain_Stop_front__disc_large.png';
import Cannaking_Pain_Stop_front_ingridents_large from '../assets/clothing_&_mixed/Cannaking_Pain_Stop_front_ingridents_large.png';

import Conscious_food_Super_Oats_Chilla_front_large from '../assets/clothing_&_mixed/Conscious_food_Super_Oats_Chilla_front_large.png';
import Conscious_food_Super_Oats_Chilla_long_large from '../assets/clothing_&_mixed/Conscious_food_Super_Oats_Chilla_long_large.png';
import Conscious_food_Super_Oats_Chilla_front_all_large from '../assets/clothing_&_mixed/Conscious_food_Super_Oats_Chilla_front_all_large.png';
import Conscious_food_Super_Oats_Chilla_disc_large from '../assets/clothing_&_mixed/Conscious_food_Super_Oats_Chilla_disc_large.png';

import Ecosattva_Water_Activated_Tape_Table_Top_Manual_full_large from '../assets/clothing_&_mixed/Ecosattva_Water_Activated_Tape_Table_Top_Manual_full_large.png';
import Ecosattva_Water_Activated_Tape_Table_Top_Manual_close_large from '../assets/clothing_&_mixed/Ecosattva_Water_Activated_Tape_Table_Top_Manual_close_large.png';
import Ecosattva_Water_Activated_Tape_Table_Top_Manual_front_large from '../assets/clothing_&_mixed/Ecosattva_Water_Activated_Tape_Table_Top_Manual_front_large.png';
import Ecosattva_Water_Activated_Tape_Table_Top_Manual_top_large from '../assets/clothing_&_mixed/Ecosattva_Water_Activated_Tape_Table_Top_Manual_top_large.png';

import Jackfruit_Lucknowi_Keema_Curry_front_large from '../assets/clothing_&_mixed/Jackfruit_Lucknowi_Keema_Curry_front_large.png';
import Jackfruit_Lucknowi_Keema_Curry_full_large from '../assets/clothing_&_mixed/Jackfruit_Lucknowi_Keema_Curry_full_large.png';
import Jackfruit_Lucknowi_Keema_Curry_coock_large from '../assets/clothing_&_mixed/Jackfruit_Lucknowi_Keema_Curry_coock_large.png';
import Jackfruit_Lucknowi_Keema_Curry_dics_large from '../assets/clothing_&_mixed/Jackfruit_Lucknowi_Keema_Curry_dics_large.png';

import MIMACO_BODY_BUTTER_Combo_large from '../assets/clothing_&_mixed/MIMACO_BODY_BUTTER_Combo_large.png';
import MIMACO_BODY_BUTTER_Combo_flavoures_large from '../assets/clothing_&_mixed/MIMACO_BODY_BUTTER_Combo_flavoures_large.png';
import MIMACO_BODY_BUTTER_Combo_staires_large from '../assets/clothing_&_mixed/MIMACO_BODY_BUTTER_Combo_staires_large.png';

import Raaso_Bestseller_Cleaning_cobo_front_large from '../assets/clothing_&_mixed/Raaso_Bestseller_Cleaning_cobo_front_large.png';
import Raaso_Bestseller_Cleaning_one_front_large from '../assets/clothing_&_mixed/Raaso_Bestseller_Cleaning_one_front_large.png';
import Raaso_Bestseller_Cleaning_one_mope_large from '../assets/clothing_&_mixed/Raaso_Bestseller_Cleaning_one_mope_large.png';
import Raaso_Bestseller_Cleaning_two_front_large from '../assets/clothing_&_mixed/Raaso_Bestseller_Cleaning_two_front_large.png';

import Vegan_Protein_Powder_watermelon_front_large from '../assets/clothing_&_mixed/Vegan_Protein_Powder_watermelon_front_large.png';
import Vegan_Protein_Powder_watermelon_back_protin_large from '../assets/clothing_&_mixed/Vegan_Protein_Powder_watermelon_back_protin_large.png';
import Vegan_Protein_Powder_watermelon_back_large from '../assets/clothing_&_mixed/Vegan_Protein_Powder_watermelon_back_large.png';
import Vegan_Protein_Powder_watermelon_back_full_large from '../assets/clothing_&_mixed/Vegan_Protein_Powder_watermelon_back_full_large.png';
import trophy from '../assets/Cup.gif';
import leafs from '../assets/leaf.gif';
import rabbit from '../assets/rabbit.png';
import artist from '../assets/artist.png';
import paper_bag from '../assets/paper_bag.png';
import save_water from '../assets/save_water.png';
import seed_plant from '../assets/seed_plant.png';
import globe from '../assets/globe.png';
import twenty_k from '../assets/twenty k+.png';
import two_h from '../assets/two h+.png';
import eco from '../assets/eco.png';
import vegan from '../assets/vegan.png';
import alternatives from '../assets/alternatives.png';
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import logo7 from '../assets/logo7.png'
import logo8 from '../assets/logo8.png'

/* slick carousel */
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Apicalls, { post_url } from '../Apicalls';
import { useSelector } from 'react-redux';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import ActionAreaCard from './MuiCard';
import store from '../store';
import { storeUserError } from '../AuthActions';
import { useCart } from '../stores/context/CartContext';

function RenderCard({ card, index, handleShowModal, addToCartset, MAX_HEADING_LENGTH_DESKTOP }) {
  return <div key={index} className='col-md-3'>
    <div className='card card-body main_div_card shadow' style={{ height: '100%' }}>
      <div className='image_border'>
        <img src={post_url + JSON.parse(card.productImages)[0]} className='p-3 img-fluid' alt={`product - ${index}`} />
        <img src={maximizeIcon} className='img-fluid maxmize_img_car' onClick={() => handleShowModal(card)} />
        <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />
      </div>
      <div className="container">
        <div className="row roling_margd-flex flex-row justify-content-center">
          {(card.featuresData.filter(item => item.id === 1).length > 0) && <div className='col-3'>
            <img src={flagimg} alt={hottestProducts.image7} className='img-fluid ' />
          </div>}
          {(card.featuresData.filter(item => item.id === 2).length > 0) && <div className='col-3'>
            <img src={iconcard3} alt={hottestProducts.image5} className='img-fluid ' />
          </div>}
          {(card.featuresData.filter(item => item.id === 3).length > 0) && <div className='col-3'>
            <img src={iconcard2} alt={hottestProducts.image6} className='img-fluid ' />
          </div>}
        </div>
      </div>
      <div className='d-flex p-2'>
        <div style={{ width: '80%' }}>
          <p className='cardpara1'>{card.title}</p>
          <p className='cardpara2'>
            {card.heading.length > MAX_HEADING_LENGTH_DESKTOP ? `${card.heading.substring(0, MAX_HEADING_LENGTH_DESKTOP)}...` : card.heading}
          </p>
          <p className='cardpara3'>₹{card.price}</p>
        </div>
        <div className='buy_card_aligiment ' style={{ float: 'right' }}>
          <a onClick={() => addToCartset(card)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={buycard} alt={buycard} className='buy_btn <i class="bi bi-person-fill"></i>' /></a>

        </div>
      </div>
    </div>
  </div>
}

const topPicks = [
  {
    id: 1,
    image: penuatbutter,

    image1: penuatbutter,
    image2: penutbutter_back,
    image3: penutbuter_process,
    image4: penut_mix,
    image_mini1: mini_penut,
    image_mini2: mini_back,
    image_mini3: mini_process,
    image_mini4: mini_labbey,



    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    stocks: '25 in stock',
    description: 'Peanut Butter Unsweeten ...',
    descriptionfull: 'Peanut Butter Unsweetend Super Chunky By Zvatra | 200gm',
    catagerious: ' Health & Wellness, Healthy Diet foods',


    about: '– Zvatra Peanut Butter Combo Pack of 5 Flavors: Chocolate, Smooth, Chunky, Unsweetened Smooth, Spicy Chilli Garlic Flavor (200 gm Each)',
    about2: '– PREMIUM ROASTED PEANUTS: This healthy peanut butter is made with high-quality roasted peanuts. Peanuts serve as an excellent source of protein, Vitamin E, & other essential micronutrients',
    price: '₹250.00',
  },
  {
    id: 2,
    image: cheese_lg,


    image1: cheese_lg,
    image2: cheese_back_lg,
    image3: cheese_about_lg,
    image4: cheese_about_making_lg,
    image_mini1: cheese_mini,
    image_mini2: cheese_back_mini,
    image_mini3: cheese_about_mini,
    image_mini4: cheese_about_making_mini,



    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'Premium Vegan Cheese Shred...',
    descriptionfull: 'Premium Vegan Cheese Shred by Veclan',
    catagerious: 'Food, Cheese, Dairy alternative',


    about: '(Plant-based, Cholesterol-free, Gluten-free, Zero Trans fat) All Purpose use – Pizza, Pastas, Sandwiches, Tacos, Nachos- 200g',
    about2: '– 100% PLANT BASED (Dairy-free & Gluten-free).',

    price: '₹365.00',
  },
  {
    id: 3,
    image: ota_milk_front,

    image1: ota_milk_front,
    image2: back_ota_milk,
    image3: left_ota_milk,
    image4: right_ota_milk,
    image_mini1: mini_ota_milk_front,
    image_mini2: mini_back_ota_milk,
    image_mini3: mini_left_ota_milk,
    image_mini4: mini_right_ota_milk,

    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'Alt Co ota  Milk suger free...',
    descriptionfull: 'Alt Co ota drink Milk suger free',
    catagerious: ' Dairy alternative, Food, Mylk',

    about: 'Alt Co Presents plant-based milk is made from the highest quality natural ingredients sourced from around the world. It contains zero preservatives & helps in reducing cholesterol the natural and delicious taste of the rich & light Alt Co plant-based milk will make you fall in love with it,',
    about2: ' The real taste of heavenly oats is in your hands Only Alt Co plant-based milk is a great choice for people trying to contain their dairy consumption as it is lactose & preservatives free and is a healthier substitute to your regular dairy milk.',
    price: '₹207.00 ',
  },
  {
    id: 4,
    image: cacao_large,
    image1: cacao_large,
    image2: cacao_large_front,
    image3: cacao_large,
    image4: cacao_large_back,

    image_mini1: cacao_mini,
    image_mini2: cacao_mini_front,
    image_mini3: cacao_mini,
    image_mini4: cacao_mini_back,

    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Cacao & Nut Spread by.....',
    descriptionfull: 'Cacao & Nut Spread by Mason & Co.',
    catagerious: ' Health & Wellness, Healthy Diet foods',
    about: ' Smooth & rich dark chocolate and nut spread. made with India’s finest single-origin organic cacao. Spread this on toast and pancakes or pair it with banana and apples.',
    about2: ' Features:– Organic Cacao.– Vegan.– Dairy & soy free– Contains Nut',

    price: '₹430.00',
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


  // Add more card information as needed
];
const topPicksInfo = [
  {
    id: 7,
    image: LargeProductImg_Homepage,


    image1: conscious_food_oil_both_large,
    image2: conscious_food_oil_back_large,
    image3: conscious_food_oil_large,
    image4: conscious_food_oil_both_large,

    image_mini1: conscious_food_oil_both_mini,
    image_mini2: conscious_food_oil_back_mini,
    image_mini3: conscious_food_oil_mini,
    image_mini4: conscious_food_oil_both_mini,
    title: 'Product 7',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'Conscious Food Mustard Oil....',
    descriptionfull: 'Conscious Food Mustard Oil',
    catagerious: ' Dairy alternative, Food, Mylk',


    about: '– This Mustard Oil is cold pressed without the addition of chemicals and without destroying its nutrient content.',
    about2: ' It is rich in vitamin E and minerals like selenium and has antibacterial and antifungal properties that help the body fight against infections.',


    price: '₹700.00',
  },
];
const hottestProducts = [
  {
    id: 1,
    image: Flax_Seeds_both_large,
    image1: Flax_Seeds_both_large,
    image2: Flax_Seeds_large,
    image3: Flax_Seeds_back_large,
    image4: flax_seeds_cup_large,

    image5: flagimg,
    image6: iconcard2,
    image7: iconcard3,

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
    id: 2,
    image: Nugget_large,
    image1: Nugget_large,
    image2: Nugget_Back_large,
    image3: naguet_open_plate_large,
    image4: naguet_open_large,

    image5: flagimg,
    image6: iconcard2,
    image7: iconcard3,

    image_mini1: Nugget_mini,
    image_mini2: Nugget_Back_mini,
    image_mini3: naguet_open_plate_mini,
    image_mini4: naguet_open_mini,
    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Nugget Back jpeg scaledf2fis....',
    descriptionfull: 'Nugget Back jpeg scaledf2fish less fingers Seaspire’s fish-less fingers (200 gms) (Available only in Selective Location)',
    catagerious: ' Food, Mock meatk',


    about: 'Made with Pea & Rice Protein | 100% Plant-based Crispy on the outside, tender on the inside, these nuggets are the ultimate fish-less snack.',
    about2: ' Water, Textured Pea Protein (18%), Textured Rice Protein (4%), Rice Protein Powder (2%), Edible Sunflower Oil, Salt, Psyllium Husk, Algal Extracts.',


    price: '₹695',
  },
  {
    id: 3,
    image: cheese_lg,


    image1: cheese_lg,
    image2: cheese_back_lg,
    image3: cheese_about_lg,
    image4: cheese_about_making_lg,

    image5: flagimg,
    image6: iconcard2,
    image7: iconcard3,

    image_mini1: cheese_mini,
    image_mini2: cheese_back_mini,
    image_mini3: cheese_about_mini,
    image_mini4: cheese_about_making_mini,



    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'Premium Vegan Cheese Shred...',
    descriptionfull: 'Premium Vegan Cheese Shred by Veclan',
    catagerious: 'Food, Cheese, Dairy alternative',


    about: '(Plant-based, Cholesterol-free, Gluten-free, Zero Trans fat) All Purpose use – Pizza, Pastas, Sandwiches, Tacos, Nachos- 200g',
    about2: '– 100% PLANT BASED (Dairy-free & Gluten-free).',

    price: '₹365.00',
  },
  {
    id: 4,
    image: penuatbutter,

    image1: penuatbutter,
    image2: penutbutter_back,
    image3: penutbuter_process,
    image4: penut_mix,

    image5: flagimg,
    image6: iconcard2,
    image7: iconcard3,

    image_mini1: mini_penut,
    image_mini2: mini_back,
    image_mini3: mini_process,
    image_mini4: mini_labbey,



    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    stocks: '25 in stock',
    description: 'Peanut Butter Unsweetend...',
    descriptionfull: 'Peanut Butter Unsweetend Super Chunky By Zvatra | 200gm',
    catagerious: ' Health & Wellness, Healthy Diet foods',


    about: '– Zvatra Peanut Butter Combo Pack of 5 Flavors: Chocolate, Smooth, Chunky, Unsweetened Smooth, Spicy Chilli Garlic Flavor (200 gm Each)',
    about2: '– PREMIUM ROASTED PEANUTS: This healthy peanut butter is made with high-quality roasted peanuts. Peanuts serve as an excellent source of protein, Vitamin E, & other essential micronutrients',
    price: '₹250.00',
  },
  {
    id: 5,
    image: almond_drink_large,
    image1: almond_drink_large,
    image2: almond_half_large,
    image3: almond_left_large,
    image4: almond_sleep_large,

    image5: flagimg,
    image6: iconcard2,
    image7: iconcard3,

    image_mini1: almond_drink_mini,
    image_mini2: almond_half_mini,
    image_mini3: almond_left_mini,
    image_mini4: almond_sleep_mini,
    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'Alt Co Almond drink Milk......',
    descriptionfull: 'Alt Co Almond drink Milk',
    catagerious: ' Dairy alternative, Food, Mylk',

    about: 'Alt Co presents plant-based milk made from the highest quality natural ingredients sourced from around the world. It contains zero preservatives and helps in reducing cholesterol. The natural and delicious taste of the rich and light Alt Co plant-based milk will make you fall in love with it. The real taste of heavenly almonds is in your hands, it serves as a healthier substitute for your regular dairy milk.',
    about2: 'Completely Vegan, Soya Free, Lactose-Free, No Preservatives and Guilt Free Good source of Calcium, Vitamin D, B1 , B2, and B12',



    price: '₹207.00 – ₹414.00',
  },
  {
    id: 6,
    image: cacao_powder_large,
    image1: cacao_powder_large,
    image2: cacao_powder_back_large,
    image3: cacao_powder_large,
    image4: cacao_powder_back_large,

    image5: flagimg,
    image6: iconcard2,
    image7: iconcard3,

    image_mini1: cacao_powder_mini,
    image_mini2: cacao_powder_back_mini,
    image_mini3: cacao_powder_mini,
    image_mini4: cacao_powder_back_mini,
    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Cacao Powder by Mason & Co....',
    descriptionfull: 'Cacao Powder by Mason & Co.',
    catagerious: ' Dairy alternative, Food, Mylk',


    about: 'Mason & Co. cacao powder is made entirely from organic cacao beans sourced from farmers in Southern India.',
    about2: ' This powder has a higher percentage of cacao butter for a lush and well rounded flavour. While most commercial cacao powders undergo a chemical alkalising process to darken the colour and alter the taste, ours in completely natural.',


    price: '₹695',
  },
  {
    id: 7,
    image: ota_milk_front,

    image1: ota_milk_front,
    image2: back_ota_milk,
    image3: left_ota_milk,
    image4: right_ota_milk,

    image5: flagimg,
    image6: iconcard2,
    image7: iconcard3,

    image_mini1: mini_ota_milk_front,
    image_mini2: mini_back_ota_milk,
    image_mini3: mini_left_ota_milk,
    image_mini4: mini_right_ota_milk,

    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'Alt Co ota  Milk suger free...',
    descriptionfull: 'Alt Co ota drink Milk suger free',
    catagerious: ' Dairy alternative, Food, Mylk',

    about: 'Alt Co Presents plant-based milk is made from the highest quality natural ingredients sourced from around the world. It contains zero preservatives & helps in reducing cholesterol the natural and delicious taste of the rich & light Alt Co plant-based milk will make you fall in love with it,',
    about2: ' The real taste of heavenly oats is in your hands Only Alt Co plant-based milk is a great choice for people trying to contain their dairy consumption as it is lactose & preservatives free and is a healthier substitute to your regular dairy milk.',
    price: '₹207.00 – ₹414.00',
  },
  {
    id: 8,
    image: cacao_large,
    image1: cacao_large,
    image2: back_ota_milk,
    image3: cacao_large_back,
    image4: cacao_large_front,

    image5: flagimg,
    image6: iconcard2,
    image7: iconcard3,

    image_mini1: cacao_mini,
    image_mini2: cacao_mini_front,
    image_mini3: cacao_mini,
    image_mini4: cacao_mini_back,

    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Cacao & Nut Spread by.....',
    descriptionfull: 'Cacao & Nut Spread by Mason & Co.',
    catagerious: ' Health & Wellness, Healthy Diet foods',
    about: ' Smooth & rich dark chocolate and nut spread. made with India’s finest single-origin organic cacao. Spread this on toast and pancakes or pair it with banana and apples.',
    about2: ' Features:– Organic Cacao.– Vegan.– Dairy & soy free– Contains Nut',

    price: '₹430.00',
  },





  // Add more card information as needed
];

const ecoFriendly = [

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
    image: almond_drink_large,
    image1: almond_drink_large,
    image2: almond_half_large,
    image3: almond_left_large,
    image4: almond_sleep_large,

    image_mini1: almond_drink_mini,
    image_mini2: almond_half_mini,
    image_mini3: almond_left_mini,
    image_mini4: almond_sleep_mini,
    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'Alt Co Almond drink Milk...',
    descriptionfull: 'Alt Co Almond drink Milk',
    catagerious: ' Dairy alternative, Food, Mylk',

    about: 'Alt Co presents plant-based milk made from the highest quality natural ingredients sourced from around the world. It contains zero preservatives and helps in reducing cholesterol. The natural and delicious taste of the rich and light Alt Co plant-based milk will make you fall in love with it. The real taste of heavenly almonds is in your hands, it serves as a healthier substitute for your regular dairy milk.',
    about2: 'Completely Vegan, Soya Free, Lactose-Free, No Preservatives and Guilt Free Good source of Calcium, Vitamin D, B1 , B2, and B12',



    price: '₹207.00 ',
  },
  {
    id: 6,
    image: cacao_powder_large,
    image1: cacao_powder_large,
    image2: cacao_powder_back_large,
    image3: cacao_powder_large,
    image4: cacao_powder_back_large,

    image_mini1: cacao_powder_mini,
    image_mini2: cacao_powder_back_mini,
    image_mini3: cacao_powder_mini,
    image_mini4: cacao_powder_back_mini,
    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Cacao Powder by Mason....',
    descriptionfull: 'Cacao Powder by Mason & Co.',
    catagerious: ' Dairy alternative, Food, Mylk',


    about: 'Mason & Co. cacao powder is made entirely from organic cacao beans sourced from farmers in Southern India.',
    about2: ' This powder has a higher percentage of cacao butter for a lush and well rounded flavour. While most commercial cacao powders undergo a chemical alkalising process to darken the colour and alter the taste, ours in completely natural.',


    price: '₹695',
  },
  {
    id: 7,
    image: penuatbutter,

    image1: penuatbutter,
    image2: penutbutter_back,
    image3: penutbuter_process,
    image4: penut_mix,

    image5: flagimg,
    image6: iconcard2,
    image7: iconcard3,

    image_mini1: mini_penut,
    image_mini2: mini_back,
    image_mini3: mini_process,
    image_mini4: mini_labbey,



    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    stocks: '25 in stock',
    description: 'Peanut Butter Unsweetend...',
    descriptionfull: 'Peanut Butter Unsweetend Super Chunky By Zvatra | 200gm',
    catagerious: ' Health & Wellness, Healthy Diet foods',


    about: '– Zvatra Peanut Butter Combo Pack of 5 Flavors: Chocolate, Smooth, Chunky, Unsweetened Smooth, Spicy Chilli Garlic Flavor (200 gm Each)',
    about2: '– PREMIUM ROASTED PEANUTS: This healthy peanut butter is made with high-quality roasted peanuts. Peanuts serve as an excellent source of protein, Vitamin E, & other essential micronutrients',
    price: '₹250.00',
  },
  {
    id: 8,
    image: cacao_large,
    image1: cacao_large,
    image2: back_ota_milk,
    image3: cacao_large_back,
    image4: cacao_large_front,

    image5: flagimg,
    image6: iconcard2,
    image7: iconcard3,

    image_mini1: cacao_mini,
    image_mini2: cacao_mini_front,
    image_mini3: cacao_mini,
    image_mini4: cacao_mini_back,

    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Cacao & Nut Spread by.....',
    descriptionfull: 'Cacao & Nut Spread by Mason & Co.',
    catagerious: ' Health & Wellness, Healthy Diet foods',
    about: ' Smooth & rich dark chocolate and nut spread. made with India’s finest single-origin organic cacao. Spread this on toast and pancakes or pair it with banana and apples.',
    about2: ' Features:– Organic Cacao.– Vegan.– Dairy & soy free– Contains Nut',

    price: '₹430.00',
  },
  // Add more card information as needed
];

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
const clothingCard = [

  {
    id: 1,
    image: Avacodo_Print_T_shir_pant_Night_Dress_sitting_front_large,
    image1: Avacodo_Print_T_shir_pant_Night_Dress_sitting_front_large,
    image2: Avacodo_Print_T_shir_pant_Night_Dress_back_large,
    image3: Avacodo_Print_T_shir_pant_Night_Dress_sitting_large,
    image4: Avacodo_Print_T_shir_pant_Night_Dress_large,
    image_mini1: Avacodo_Print_T_shir_pant_Night_Dress_sitting_front_large,
    image_mini2: Avacodo_Print_T_shir_pant_Night_Dress_back_large,
    image_mini3: Avacodo_Print_T_shir_pant_Night_Dress_sitting_large,
    image_mini4: Avacodo_Print_T_shir_pant_Night_Dress_large,



    title: 'By Fabric',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'Avocado Print T-shirt & Pant Night Dress in Lettuce Green',
    descriptionfull: 'Avocado Print T-shirt & Pant Night Dress in Lettuce Green',
    catagerious: ': By Fabric, Clothing, Loungewear, Tencel, Women`s Clothing',


    about: 'Experience nightwear like never before with our revolutionary fabric designed for unparalleled comfort and performance. Crafted with care, our nightwear offers:',
    about2: 'Breathable Fabric: Stay cool and comfortable throughout the night.',

    price: '₹1,199.00',
  },
  {
    id: 2,
    image: DEEP_BLUE_TENCEL_SHIRT_front_large,

    image1: DEEP_BLUE_TENCEL_SHIRT_front_large,
    image2: DEEP_BLUE_TENCEL_SHIRT_back_large,
    image3: DEEP_BLUE_TENCEL_SHIRT_folding_large,
    image4: DEEP_BLUE_TENCEL_SHIRT_front_siting_large,
    image_mini1: DEEP_BLUE_TENCEL_SHIRT_front_large,
    image_mini2: DEEP_BLUE_TENCEL_SHIRT_back_large,
    image_mini3: DEEP_BLUE_TENCEL_SHIRT_folding_large,
    image_mini4: DEEP_BLUE_TENCEL_SHIRT_front_siting_large,




    title: 'By Fabric',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'DEEP BLUE TENCEL™ SHIRT mens clothing',
    descriptionfull: 'DEEP BLUE TENCEL™ SHIRT',
    catagerious: ': By Fabric, Clothing, Loungewear, Tencel, Women`s Clothing',


    about: '– This Mandarin-collared shirt in Deep Blue colour, with contrast piping on the collar, is made using fabric that has 60% Tencel™ and 40% Cotton-Linen mix composition. This shirt would be a blessing in summer.',
    about2: 'Fabric : – Tencel™ fabric is derived from wood collected from sustainably-managed forests and is of botanic origin. The fabric is strong yet smooth, certified safe, unfavourable for bacterial growth, gentle on the skin, and biodegradable.',

    price: '  ₹4,000.00',
  },
  {
    id: 3,
    image: Co_ordsetinHemp_front_large,

    image1: Co_ordsetinHemp_front_large,
    image2: Co_ordsetinHemp_sit_left_front_brown_large,
    image3: Co_ordsetinHemp_sit_left_front_large,
    image4: Co_ordsetinHemp_sit_right_front_large,
    image_mini1: Co_ordsetinHemp_front_large,
    image_mini2: Co_ordsetinHemp_sit_left_front_brown_large,
    image_mini3: Co_ordsetinHemp_sit_left_front_large,
    image_mini4: Co_ordsetinHemp_sit_right_front_large,


    title: 'By Fabric',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'Avocado Print T-shirt & Pant Night Dress in Lettuce Green',
    descriptionfull: 'Avocado Print T-shirt & Pant Night Dress in Lettuce Green',
    catagerious: ': By Fabric, Clothing, Loungewear, Tencel, Women`s Clothing',


    about: 'Experience nightwear like never before with our revolutionary fabric designed for unparalleled comfort and performance. Crafted with care, our nightwear offers:',
    about2: 'Breathable Fabric: Stay cool and comfortable throughout the night.',

    price: '₹1,199.00',
  },
  {
    id: 4,
    image: Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_front_large,
    image1: Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_back_large,
    image2: Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_full_large,
    image3: Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_full_large,
    image4: Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_side_large,

    image_mini1: Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_front_large,
    image_mini2: Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_back_large,
    image_mini3: Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_full_large,
    image_mini4: Dyed_Mens_Round_Neck_Lemon_Yellow_Shirt_side_large,

    title: 'By Fabric',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'Organic Cotton & Naturally Dyed Mens Round Neck Lemon Yellow Shirt by Livbio    ',
    descriptionfull: 'Organic Cotton & Naturally Dyed Mens Round Neck Lemon Yellow Shirt by Livbio    ',
    catagerious: ': By Fabric, Clothing, Men`s Clothing, Organic Cotton, Shirt and Kurtas',


    about: 'Breathe easy in this organic cotton shirt that’s naturally dyed from the petals of marigold flowers. Crafted from 100% eco-friendly cotton, this shirt is skin-friendly, breathable and just as comfortable as it is stylish. The round neck and simple silhouette make this a perfect office essential, one you’ll reach for again and again thanks to its effortless appeal. ',
    about2: 'Whether you pair it with chinos for work or jeans on the weekend, this naturally dyed yellow number brings a pop of sunny color to your wardrobe while remaining versatile enough for any occasion. Made with care by artisans using traditional techniques, this shirt is sustainably sourced and ethically produced – giving you stylish basics that feel good inside and out.',

    price: '₹1,499.00',
  },
  {
    id: 5,
    image: HEMP_LOUNGE_SHORTS_FOR_MEN_side_closeup_large,


    image1: HEMP_LOUNGE_SHORTS_FOR_MEN_side_closeup_large,
    image2: HEMP_LOUNGE_SHORTS_FOR_MEN_front_closeup_large,
    image3: HEMP_LOUNGE_SHORTS_FOR_MEN_front_large,
    image4: HEMP_LOUNGE_SHORTS_FOR_MEN_front_closeup_large,
    image_mini1: HEMP_LOUNGE_SHORTS_FOR_MEN_side_closeup_large,
    image_mini2: HEMP_LOUNGE_SHORTS_FOR_MEN_front_closeup_large,
    image_mini3: HEMP_LOUNGE_SHORTS_FOR_MEN_front_large,
    image_mini4: HEMP_LOUNGE_SHORTS_FOR_MEN_front_closeup_large,




    title: 'By Fabric',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'HEMP LOUNGE SHORTS FOR MEN',
    descriptionfull: 'HEMP LOUNGE SHORTS FOR MEN',
    catagerious: 'By Fabric, Clothing, Men`s Clothing, Organic Hemp, Trousers and shorts',


    about: 'Kick back and feel the chill with our Lounge Shorts in Hemp. Featuring a relaxed fit and drawstring, the shorts also have many (four) pockets for all your essentials.',
    about2: 'Perfect for lounging around the house or running errands in style. The ultimate in comfort and convenience, all in one quirky package.',

    price: '₹3,850.00',
  },
  {
    id: 6,
    image: HempHigh_waisttrousers_front_large,

    image1: HempHigh_waisttrousers_front_large,
    image2: HempHigh_waisttrousers_fron_side_large,
    image3: HempHigh_waisttrousers_fron_leg_large,
    image4: HempHigh_waisttrousers_front_large,
    image_mini1: HempHigh_waisttrousers_front_large,
    image_mini2: HempHigh_waisttrousers_fron_side_large,
    image_mini3: HempHigh_waisttrousers_fron_leg_large,
    image_mini4: HempHigh_waisttrousers_front_large,




    title: 'By Fabric',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'Avocado Print T-shirt & Pant Night Dress in Lettuce Green',
    descriptionfull: 'Avocado Print T-shirt & Pant Night Dress in Lettuce Green',
    catagerious: ': By Fabric, Clothing, Loungewear, Tencel, Women`s Clothing',


    about: 'Experience nightwear like never before with our revolutionary fabric designed for unparalleled comfort and performance. Crafted with care, our nightwear offers:',
    about2: 'Breathable Fabric: Stay cool and comfortable throughout the night.',

    price: '₹1,199.00',
  },
  {
    id: 7,
    image: MAGIC_large,

    image1: MAGIC_large,
    image2: MAGIC_browen_large,
    image3: MAGIC_blue_zip_large,
    image4: MAGIC_browen_zip_large,
    image_mini1: MAGIC_large,
    image_mini2: MAGIC_browen_large,
    image_mini3: MAGIC_blue_zip_large,
    image_mini4: MAGIC_browen_zip_large,


    title: 'By Fabric',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: '‘MAGIC’ SHACKET IN AYURVEDIC COTTON',
    descriptionfull: '‘MAGIC’ SHACKET IN AYURVEDIC COTTON',
    catagerious: 'By Fabric, Clothing, Men`s Clothing, Organic Cotton, Shackets and Blazers',


    about: '– We call this ‘Magic’ Shacket due to many reasons. The fabric’s colour ranges from Powder Blue to Ash, depending on the amount of light falling on it. It looks matte at times, and at times, it has a sheen. The fabric has been treated with various Ayurvedic Herbs, which makes it amazingly soft, and gives it its unique colour',
    about2: '– The fabric is 98% organic cotton with 2% Lycra. Hence, it stretches incredibly and hugs the body just like you’d like it to.',

    price: ' ₹6,500.00'

  },
  {
    id: 8,
    image: Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_large,
    image1: Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_large,
    image2: Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_side_looks_large,
    image3: Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_side_large,
    image4: Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_sitting_large,

    image_mini1: Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_large,
    image_mini2: Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_side_looks_large,
    image_mini3: Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_front_side_large,
    image_mini4: Organic_Cotton_Ajrakh_Handblock_Printed_Shirtdress_sitting_large,

    title: 'By Fabric',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'Organic Cotton Ajrakh Handblock-Printed Shirtdress',
    descriptionfull: 'Organic Cotton Ajrakh Handblock-Printed Shirtdress',
    catagerious: 'By Fabric, Clothing, Dresses and shirt dresses, Organic Cotton, Women`s Clothing',


    about: '– Introducing our Organic Cotton Ajrakh Handblock-Printed Shirtdress. Handcrafted with traditional Ajrakh printing and made from sustainable trims, this midi dress features a spread collar, pleated cuffs, and a flattering flared silhouette.',
    about2: 'If you’re looking for a summer staple, your search ends here. Experience the perfect blend of elegance, comfort, and timeless style with this versatile piece. And, it has pockets!',

    price: '₹3,699.00',
  },
  // Add more card information as needed
];


const sustainableCard = [

  {
    id: 1,
    image: Cannaking_Pain_Stop_front_large,


    image1: Cannaking_Pain_Stop_front_large,
    image2: Cannaking_Pain_Stop_front_bg_none_large,
    image3: Cannaking_Pain_Stop_front_disc_large,
    image4: Cannaking_Pain_Stop_front_ingridents_large,
    image_mini1: Cannaking_Pain_Stop_front_large,
    image_mini2: Cannaking_Pain_Stop_front_bg_none_large,
    image_mini3: Cannaking_Pain_Stop_front_disc_large,
    image_mini4: Cannaking_Pain_Stop_front_ingridents_large,



    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'Cannaking Pain Stop Spray, 50ml: For Ultimate Pain Relief',
    descriptionfull: 'Cannaking Pain Stop Spray, 50ml: For Ultimate Pain Relief',
    catagerious: 'Health & Wellness, Medicine, Pain Relief',


    about: '– Specially formulated with the powerful benefits of Full Spectrum Vijaya Extract & Magnesium oils along with potent blends of botanical herbs, Pain Stop Spray is Your Ultimate Pain Relief Solution. It is a revolutionary topical solution designed to provide quick and effective relief from various types of pain. ',
    about2: 'It combines the power of traditional botanical oils with the therapeutic properties of hemp seed oil to address discomfort and promote overall well-being.– Say goodbye to pain and discomfort with our Pain Stop Spray.',

    price: '₹1,499.00',
  },
  {
    id: 2,
    image: Conscious_food_Super_Oats_Chilla_front_large,

    image1: Conscious_food_Super_Oats_Chilla_front_large,
    image2: Conscious_food_Super_Oats_Chilla_long_large,
    image3: Conscious_food_Super_Oats_Chilla_front_all_large,
    image4: Conscious_food_Super_Oats_Chilla_disc_large,
    image_mini1: Conscious_food_Super_Oats_Chilla_front_large,
    image_mini2: Conscious_food_Super_Oats_Chilla_long_large,
    image_mini3: Conscious_food_Super_Oats_Chilla_front_all_large,
    image_mini4: Conscious_food_Super_Oats_Chilla_disc_large,



    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    stocks: '25 in stock',
    description: 'Conscious food Super Oats Chilla 200gm',
    descriptionfull: 'Conscious food Super Oats Chilla 200gm',
    catagerious: ' Baby care, Immunity booster',


    // about: 'Nourish You Millet Mlk is a vegan mlk made from a blissful blend of homegrown millets (ragi, jowar, bajra) and oats. The millets power our mlk with a healthy dose of nutrition, and the oats add a rich creamy texture.',
    // about2: 'The Barista edition is crafted to be a part of your sacred coffee and chai rituals, without taking away any of the taste. This nourishing vegan mlk is an ideal companion in your health journey, as it is free from refined sugar, lactose, soy, gluten, artificial flavors and preservatives.',
    price: '₹150.00',
  },
  {
    id: 3,
    image: OVERLAY_IN_ORANGE_FABRIC_front_large,

    image1: OVERLAY_IN_ORANGE_FABRIC_front_large,
    image2: OVERLAY_IN_ORANGE_FABRIC_front_side_large,
    image3: OVERLAY_IN_ORANGE_FABRIC_front_sitting_large,
    image4: OVERLAY_IN_ORANGE_FABRIC_front_stand_large,
    image_mini1: OVERLAY_IN_ORANGE_FABRIC_front_large,
    image_mini2: OVERLAY_IN_ORANGE_FABRIC_front_side_large,
    image_mini3: OVERLAY_IN_ORANGE_FABRIC_front_sitting_large,
    image_mini4: OVERLAY_IN_ORANGE_FABRIC_front_stand_large,

    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'OVERLAY IN ORANGE FABRIC',
    descriptionfull: 'OVERLAY IN ORANGE FABRIC',
    catagerious: 'By Fabric, Clothing, Loungewear, Organic Cotton, Women`s Clothing',

    about: '– Elevate your summer wardrobe with our Lapel-Collared Overlay in Organic Orange Fabric. Made from Orange fibre, this sleeveless piece features a lapel collar and functional pockets for added functionality. Perfect for any summer ensemble, it will give you a stylish look with ease.',
    about2: 'Fabric : – Orange Fibre fabric is an innovative and sustainable textile crafted from citrus by-products. Extracted from discarded orange peels, it transforms waste into fashion. With a silky texture, it’s not only environmentally conscious but also offers a unique blend of style and eco-friendly ethos, redefining fashion with citrus-infused elegance.',
    price: '₹2,100.00',
  },
  {
    id: 4,
    image: Ecosattva_Water_Activated_Tape_Table_Top_Manual_full_large,
    image1: Ecosattva_Water_Activated_Tape_Table_Top_Manual_full_large,
    image2: Ecosattva_Water_Activated_Tape_Table_Top_Manual_close_large,
    image3: Ecosattva_Water_Activated_Tape_Table_Top_Manual_front_large,
    image4: Ecosattva_Water_Activated_Tape_Table_Top_Manual_top_large,

    image_mini1: Ecosattva_Water_Activated_Tape_Table_Top_Manual_full_large,
    image_mini2: Ecosattva_Water_Activated_Tape_Table_Top_Manual_close_large,
    image_mini3: Ecosattva_Water_Activated_Tape_Table_Top_Manual_front_large,
    image_mini4: Ecosattva_Water_Activated_Tape_Table_Top_Manual_top_large,
    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Ecosattva Water Activated Tape Table-Top Manual Dispenser, Simple to Use, Pull and Tear Dispenser',
    descriptionfull: 'Ecosattva Water Activated Tape Table-Top Manual Dispenser, Simple to Use, Pull and Tear Dispenser',
    catagerious: 'Green Packaging',


    about: 'Our Water Activated Tape Dispenser is the best solution for faster and easier packaging. When using Water Activated/ Gummed Tape, water has to be applied manually with a brush or sponge to activate its adhesive. The dispenser speeds up this process. It is a simple to use, pull and tear dispenser. The dispenser can be used with both 48mm and 72mm tapes.',
    about2: 'It has a roller with water storage. When you use the dispenser the roller applies water on the tape, eliminating manual efforts and improving operation speed. With the help of the water roller, the correct amount of water is applied throughout the tape increasing packaging efficiency.',


    price: ' ₹2,000.00',
  },
  {
    id: 5,
    image: Jackfruit_Lucknowi_Keema_Curry_front_large,


    image1: Jackfruit_Lucknowi_Keema_Curry_front_large,
    image2: Jackfruit_Lucknowi_Keema_Curry_full_large,
    image3: Jackfruit_Lucknowi_Keema_Curry_coock_large,
    image4: Jackfruit_Lucknowi_Keema_Curry_dics_large,
    image_mini1: Jackfruit_Lucknowi_Keema_Curry_front_large,
    image_mini2: Jackfruit_Lucknowi_Keema_Curry_full_large,
    image_mini3: Jackfruit_Lucknowi_Keema_Curry_coock_large,
    image_mini4: Jackfruit_Lucknowi_Keema_Curry_dics_large,



    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    stocks: '20 in stock',
    description: 'Jackfruit Lucknowi Keema Curry(Pack Of 2) by Kathalfy',
    descriptionfull: 'Jackfruit Lucknowi Keema Curry(Pack Of 2) by Kathalfy',
    catagerious: 'Food, Mock meat',


    about: 'Kathalfy’s Jackfruit Lucknowi Keema is our chef’s special product to take you to the lanes of the food paradise of India, Lucknow. ',
    about2: 'The rich aroma and delectable taste of the keema is a delightful treat for the taste buds. The keema is plant-based with 100% natural ingredients only, a rich combination of different cultures coming together with the traditional spices and raw jackfruit.',

    price: '₹398.00',
  },
  {
    id: 6,
    image: MIMACO_BODY_BUTTER_Combo_large,

    image1: MIMACO_BODY_BUTTER_Combo_large,
    image2: MIMACO_BODY_BUTTER_Combo_flavoures_large,
    image3: MIMACO_BODY_BUTTER_Combo_staires_large,
    image4: MIMACO_BODY_BUTTER_Combo_large,
    image_mini1: MIMACO_BODY_BUTTER_Combo_large,
    image_mini2: MIMACO_BODY_BUTTER_Combo_flavoures_large,
    image_mini3: MIMACO_BODY_BUTTER_Combo_staires_large,
    image_mini4: MIMACO_BODY_BUTTER_Combo_large,



    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    stocks: '25 in stock',
    description: 'MIMACO BODY BUTTER- Combo set of 3',
    descriptionfull: 'MIMACO BODY BUTTER- Combo set of 3',
    catagerious: 'Beauty, Cream & Lotions, Skin Care',


    about: '– 1 STRAWBERRY SORBET BODY BUTTER – 100g – 1 SUNDAE SPRINKLE BODY BUTTER – 100g – 1 MANGO MARBLE BODY BUTTER – 100g',
    about2: '– Sold by Mimaco and fulfilled by EarthBased.',
    price: '₹1,099.00',
  },
  {
    id: 7,
    image: Raaso_Bestseller_Cleaning_cobo_front_large,

    image1: Raaso_Bestseller_Cleaning_cobo_front_large,
    image2: Raaso_Bestseller_Cleaning_one_front_large,
    image3: Raaso_Bestseller_Cleaning_one_mope_large,
    image4: Raaso_Bestseller_Cleaning_two_front_large,
    image_mini1: Raaso_Bestseller_Cleaning_cobo_front_large,
    image_mini2: Raaso_Bestseller_Cleaning_one_front_large,
    image_mini3: Raaso_Bestseller_Cleaning_one_mope_large,
    image_mini4: Raaso_Bestseller_Cleaning_two_front_large,

    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐⭐ 5/5',
    description: 'Raaso Bestseller Cleaning Kit – SOVI® Floor Cleaner, SOVI® Dishwash Liquid, SOVI® Glass Cleaner, TYDIBOWL® Toilet Cleaner, Pack of 4',
    descriptionfull: 'Raaso Bestseller Cleaning Kit – SOVI® Floor Cleaner, SOVI® Dishwash Liquid, SOVI® Glass Cleaner, TYDIBOWL® Toilet Cleaner, Pack of 4',
    catagerious: 'Cleaning Essentials, DishWash',

    about: 'Bestseller Cleaning Kit – SOVI® Floor Cleaner 500 ml, SOVI® Dishwash Liquid 500 ml, SOVI® Glass Cleaner 500 ml, TYDIBOWL® Toilet Cleaner 650 ml, Pack of 4',
    about2: ' SOVI® Vinegar & Salt Powered Floor Cleaner is a proprietary cleaning formula made of a powerful yet natural cleaning agent – Vinegar that breaks down dirt and grime on the floors while disinfecting them naturally. A groundbreaking & potent formulation, SOVI® cleanses, disinfects and deodorizes all types of floors with equal ease.',
    price: ' ₹599.00',
  },
  {
    id: 8,
    image: Vegan_Protein_Powder_watermelon_front_large,
    image1: Vegan_Protein_Powder_watermelon_front_large,
    image2: Vegan_Protein_Powder_watermelon_back_protin_large,
    image3: Vegan_Protein_Powder_watermelon_back_large,
    image4: Vegan_Protein_Powder_watermelon_back_full_large,

    image_mini1: Vegan_Protein_Powder_watermelon_front_large,
    image_mini2: Vegan_Protein_Powder_watermelon_back_protin_large,
    image_mini3: Vegan_Protein_Powder_watermelon_back_large,
    image_mini4: Vegan_Protein_Powder_watermelon_back_full_large,
    title: 'Daily Alternative',
    stars: '⭐⭐⭐⭐ 4/5',
    description: 'Vegan Protein Powder (Watermelon) by Veplants',
    descriptionfull: 'Vegan Protein Powder (Watermelon) by Veplants',
    catagerious: 'Health & Wellness, Protein powder',


    about: 'Fuel your body with the goodness of nature with our Veplants Power Vegan Protein Powder. Made from premium quality plant-based ingredients, this protein powder is designed to support your active lifestyle and provide you with the nutrients you need for optimal performance and recovery.',
    about2: 'Plant-Based Protein: Our vegan protein powder is derived from a blend of pea protein, brown rice protein, and hemp protein, offering a complete amino acid profile to support muscle growth and repair.',


    price: '₹1,200.00',
  },
  // Add more card information as needed
];

const MAX_DESCRIPTION_LENGTH_DESKTOP = 25;
const MAX_DESCRIPTION_LENGTH_MOBILE = 16;

carouselimgs.forEach(product => {
  const maxDescriptionLength = window.innerWidth > 768 ? MAX_DESCRIPTION_LENGTH_DESKTOP : MAX_DESCRIPTION_LENGTH_MOBILE;
  if (product.description.length > maxDescriptionLength) {
    product.description = product.description.substring(0, maxDescriptionLength) + '...';
  }
});

topPicks.forEach(product => {
  const maxDescriptionLength = window.innerWidth > 768 ? MAX_DESCRIPTION_LENGTH_DESKTOP : MAX_DESCRIPTION_LENGTH_MOBILE;
  if (product.description.length > maxDescriptionLength) {
    product.description = product.description.substring(0, maxDescriptionLength) + '...';
  }
});
topPicksInfo.forEach(product => {
  const maxDescriptionLength = window.innerWidth > 768 ? MAX_DESCRIPTION_LENGTH_DESKTOP : MAX_DESCRIPTION_LENGTH_MOBILE;
  if (product.description.length > maxDescriptionLength) {
    product.description = product.description.substring(0, maxDescriptionLength) + '...';
  }
});
hottestProducts.forEach(product => {
  const maxDescriptionLength = window.innerWidth > 768 ? MAX_DESCRIPTION_LENGTH_DESKTOP : MAX_DESCRIPTION_LENGTH_MOBILE;
  if (product.description.length > maxDescriptionLength) {
    product.description = product.description.substring(0, maxDescriptionLength) + '...';
  }
});
ecoFriendly.forEach(product => {
  const maxDescriptionLength = window.innerWidth > 768 ? MAX_DESCRIPTION_LENGTH_DESKTOP : MAX_DESCRIPTION_LENGTH_MOBILE;
  if (product.description.length > maxDescriptionLength) {
    product.description = product.description.substring(0, maxDescriptionLength) + '...';
  }
});
sustainableCard.forEach(product => {
  const maxDescriptionLength = window.innerWidth > 768 ? MAX_DESCRIPTION_LENGTH_DESKTOP : MAX_DESCRIPTION_LENGTH_MOBILE;
  if (product.description.length > maxDescriptionLength) {
    product.description = product.description.substring(0, maxDescriptionLength) + '...';
  }
});
clothingCard.forEach(product => {
  const maxDescriptionLength = window.innerWidth > 768 ? MAX_DESCRIPTION_LENGTH_DESKTOP : MAX_DESCRIPTION_LENGTH_MOBILE;
  if (product.description.length > maxDescriptionLength) {
    product.description = product.description.substring(0, maxDescriptionLength) + '...';
  }
});

function Header() {
  const [showSecondPara, setShowSecondPara] = useState(false);
  const { addToCart, cardInfo } = useCart()

  // Function to toggle the visibility of the second paragraph
  const toggleSecondPara = () => {
    setShowSecondPara(!showSecondPara);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(post_url + 'newspost');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const itemsToRender = data.item && data.item.length > 0 ? data.item : [];

  //  console.log(itemsToRender,"itemsToRender")
  console.log(data, "data")

  const handleShowModal = (card) => {
    console.log(card)
    card.productImages = JSON.stringify([card.main_img, ...JSON.parse(card.productImages)])
    setSelectedCard(card);
    setShowModal(true);
  };

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

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

  const Carousel = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleShowPopup = (cardId) => {
      const card = topPicks.find((card) => card.id === cardId);
      setSelectedCard(card);
      setShowPopup(true);
    };

    const handleClosePopup = () => {
      setShowPopup(false);
    };
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




  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [subCategories, setSubCategories] = useState([])
  const [categories, setCategories] = useState([])
  const [banners, setBanners] = useState([])

  console.log(selectedCard)

  const handleClosePopup = () => setShowPopup(false);


  const handleShowPopupo = (cardId) => {
    const card = topPicksInfo.find((card) => card.id === cardId);
    setSelectedCard(card);
    setShowPopup(true);
  };
  const carouselRef1 = useRef(null);

  const goToPrev1 = () => {
    if (carouselRef1.current) {
      carouselRef1.current.prev();
    }
  };


  const goToNext1 = () => {
    if (carouselRef1.current) {
      carouselRef1.current.next();
    }
  };



  useEffect(() => {
    const minPerSlide = 6;
    const carouselItems = document.querySelectorAll('.carousel .carousel-item');

    carouselItems.forEach((carouselItem) => {
      let next = carouselItem.nextElementSibling;

      if (!next) {
        next = carouselItem.parentNode.firstElementChild;
      }

      const firstChildClone = next.firstElementChild.cloneNode(true);
      carouselItem.appendChild(firstChildClone);

      for (let i = 1; i < minPerSlide; i++) { // Start from 1 to avoid duplicating the first item
        next = next.nextElementSibling || carouselItem.parentNode.firstElementChild;
        const childClone = next.firstElementChild.cloneNode(true);
        carouselItem.appendChild(childClone);
      }
    });
  }, []);

  const [cartItemsset, setCartItemsset] = useState([]);

  // const addToCartset = (product) => {
  // setCartItems(prevItems => {
  //   // Check if product is already in the cart
  //   const exists = prevItems.find(item => item.ID === product.ID);
  //   if (exists) {
  //     // Increment quantity if product exists
  //     return prevItems.map(item =>
  //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //     );
  //   }
  //   // Add new product to cart
  //   return [...prevItems, { ...product, quantity: 1 }];
  // });
  // };


  // const [cartItems, setCartItems] = useState([]);
  const user = useSelector((state) => state.user.auth.user)
  const navigate = useNavigate()

  const addToCartItems = (product) => {
    // const updatedCart = [...cartItems, product];
    // setCartItems(updatedCart);
    // // Save updated cart to local storage
    // localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    addToCart(product)
    if (user?.ID) {
      Promise.all([
        Apicalls.post('cart', { userId: user.ID, productId: product.ID, status: 1 })
      ]).then(([data]) => {
        if (Object.keys(data.data).length > 0) {
          console.log('Added to clart')
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
  };


  function addToWishList(product) {
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


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 992, min: 769 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2
    }
  };

  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 992, min: 769 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2
    }
  };


  /* react slick functions for recently added*/


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

  const sliderRef33 = useRef(null);

  const goToPrev33 = () => {
    if (sliderRef33.current) {
      sliderRef33.current.slickPrev();
    }
  };

  const goToNext33 = () => {
    if (sliderRef33.current) {
      sliderRef33.current.slickNext();
    }
  };

  const sliderRef99 = useRef(null);

  const goToPrev99 = () => {
    if (sliderRef99.current) {
      sliderRef99.current.slickPrev();
    }
  };

  const goToNext99 = () => {
    if (sliderRef99.current) {
      sliderRef99.current.slickNext();
    }
  };




  const settings = {
    dots: true,
    infinite: false,
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
          height: '100%',
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          height: '100%',
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
          height: '100%',
          initialSlide: 1
        }
      },

    ]

  };

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
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
          slidesToShow: 3,
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
  const settings33 = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 1
    //     }
    //   },

    // ]

  };

  const generateResponsiveSettings = (numSlides) => {
    return [
      {
        breakpoint: 1250,
        breakpoint: 1250,
        settings: {
          slidesToShow: numSlides,
          slidesToScroll: 1,
          slidesToShow: numSlides,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, numSlides), // Show 4 slides at 1024px
          slidesToScroll: 1,
          initialSlide: Math.min(1, numSlides - 1), // Ensure initialSlide is within the range of available slides
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, numSlides), // Show 4 slides at 1024px
          slidesToScroll: 1,
          initialSlide: Math.min(1, numSlides - 1), // Ensure initialSlide is within the range of available slides
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(4, numSlides), // Show 4 slides in tablet view
          slidesToScroll: 1,
          initialSlide: Math.min(1, numSlides - 1), // Ensure initialSlide is within the range of available slides
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: Math.min(3, numSlides),
          slidesToScroll: 1,
          // initialSlide: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: Math.min(2, numSlides),
          slidesToScroll: 1,
          initialSlide: Math.min(1, numSlides - 1) // Ensure initialSlide is within the range of available slides
        }
      },
    ];
  };


  const [settings2, setSettings2] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default to 5 slides
    slidesToScroll: 1,
    responsive: generateResponsiveSettings(5) // Generate settings for default 5 slides
  });

  useEffect(() => {
    // Determine the number of slides to show based on the length of categories
    const numSlides = categories.length > 5 ? 5 : categories.length;

    // Update slidesToShow and responsive settings
    setSettings2(prevSettings => ({
      ...prevSettings,
      slidesToShow: numSlides,
      responsive: generateResponsiveSettings(numSlides)
    }));
  }, [categories]);



  const [topPicksData, setTopPicksData] = useState([])
  const [hottestProductsData, setHottestProductsData] = useState([])
  const [ecoFriendlyData, setEcoFriendlyData] = useState([])
  const [dealsOfTheDayData, setDealsOfTheDayData] = useState([])
  const [clothingData, setClothingData] = useState([])
  const [blogsData, setBlogsData] = useState([])
  const [keyFactsData, setKeyFactsData] = useState([])
  const [ratings, setRatings] = useState([])
  const [recentlyAddedData, setRecentlyAddedData] = useState([])
  const [sustainableAndEcoFriendlyData, setSustainableAndEcoFriendlyData] = useState([])

  useEffect(() => {
    Promise.all([
      Apicalls.get('sub-category'),
      Apicalls.get('category'),
      Apicalls.get('products/toppicks/1'),
      Apicalls.get('products/hotproducts/1'),
      Apicalls.get('products/ecofrnddeals/1'),
      Apicalls.get('products/deals_of_the_day/1'),
      Apicalls.get('products/clothing/1'),
      Apicalls.get('products/banners/1'),
      Apicalls.get('products/sustanable_and_ecofrndly/1'),
      Apicalls.get('blogs'),
      Apicalls.get('keyfacts'),
      Apicalls.get('products/recentlyadded/1'),
      Apicalls.get('product-ratings'),
    ]).then(([subCategoriesData, categoryData, topPicksDataInfo, hotproductsDealsData, ecoFriendlyDealsData, dealsOfTheDayDealsData, clothingData, bannersData, sustainableAndEcoFriendlyDealsData, blogsData, keyfactsData, recentlyaddedData, ratingsData]) => {
      setSubCategories(subCategoriesData.data)
      setCategories(categoryData.data)
      setBanners(bannersData.data)
      topPicksDataInfo.data = topPicksDataInfo.data.filter((data, index) => index < 8)
      setTopPicksData(topPicksDataInfo.data)
      setHottestProductsData(hotproductsDealsData.data)
      setEcoFriendlyData(ecoFriendlyDealsData.data)
      setDealsOfTheDayData(dealsOfTheDayDealsData.data)
      setClothingData(clothingData.data)
      setBlogsData(blogsData.data)
      setSustainableAndEcoFriendlyData(sustainableAndEcoFriendlyDealsData.data)
      setKeyFactsData(keyfactsData.data)
      setRatings(ratingsData.data)
      setRecentlyAddedData(recentlyaddedData.data)
      let slideLenght = categoryData.data.length < 5 ? categoryData.data.length : 5
      // setSettings2({ ...settings2, slidesToShow: slideLenght, slidesToScroll: slideLenght })
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  /* react slick functions for first carousel*/

  const sliderRef2 = useRef(null);
  const handleShowPopup = (cardId) => {
    const card = topPicksData.find((card) => card.ID === cardId);
    setSelectedCard(card);
    setShowPopup(true);
  };

  const goToPrev2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickPrev();
    }
  };

  const goToNext2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickNext();
    }
  };

  const settings4 = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: false,
    // autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef4 = useRef(null);

  const goToPrev4 = () => {
    if (sliderRef4.current) {
      sliderRef4.current.slickPrev();
    }
  };

  const goToNext4 = () => {
    if (sliderRef4.current) {
      sliderRef4.current.slickNext();
    }
  };

  const settings5 = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef5 = useRef(null);

  const goToPrev5 = () => {
    if (sliderRef5.current) {
      sliderRef5.current.slickPrev();
    }
  };

  const goToNext5 = () => {
    if (sliderRef5.current) {
      sliderRef5.current.slickNext();
    }
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


  console.log(categories)

  const MAX_HEADING_LENGTH = 12;
  const MAX_HEADING_LENGTH_DESKTOP = 22;

  return (

    <>

      <div className='d-none d-md-block'>
        <img src={sliderimage} alt={sliderimage} style={{ maxWidth: '100%', height: 'auto' }} className='img-fuild' />
      </div>

      <div className=' mini_slider_3 d-md-none'>
        <img src={mini_slider_3} alt={mini_slider_3} style={{ maxWidth: '100%', height: '200px' }} className='img-fuild' />
      </div>

      <div className=' mini_slider_2 d-md-none'>
        <img src={mini_slider_2} alt={mini_slider_2} style={{ maxWidth: '100%', height: '200px' }} className='img-fuild' />
      </div>

      <div className=' mini_slider_1 d-md-none'>
        <img src={mini_slider_1} alt={mini_slider_1} style={{ maxWidth: '100%', height: '200px' }} className='img-fuild' />
      </div>







      <div id="myCarousel" className="carousel slide container space_for_that" data-bs-ride="carousel"  >
        <div className="carousel-inner w-100  container ">

          <Slider ref={sliderRef2} {...settings2}  >
            {
              categories.map(category => {
                return <div class="col-md-3-ra lala ">
                  <div onClick={() => navigate('/products/' + category.ID)} style={{ textDecoration: 'none' }} >
                    <div class="card card-body bordl  " >
                      <img class="img-fluid image_lala" src={post_url + category.img_url} />
                      <h4 className='heding_carsoul'>{category.categoryName}</h4>
                    </div>
                  </div>
                </div>
              })
            }
            {/* <div class="col-md-3-ra lala " >
              <a href="/food" style={{ textDecoration: 'none' }} >
                <div class="card card-body bordl  " >
                  <img class="img-fluid image_lala" src={foodsamllimageicon} />
                  <h4 className='heding_carsoul'>Food</h4>
                </div>
              </a>
            </div>
            <div class="  col-md-3-ra lala "  >
              <a href="/beauty" style={{ textDecoration: 'none' }} >
                <div class="card card-body bordl  " >
                  <img class="img-fluid image_lala" src={beautysamllimageicon} />
                  <h4 className='heding_carsoul'>Beauty</h4>
                </div>
              </a>
            </div>
            <div class="col-md-3-ra lala "  >
              <a href="/babycare" style={{ textDecoration: 'none' }} >
                <div class="card card-body bordl  " >
                  <img class="img-fluid image_lala" src={babycaresamllimageicon} />
                  <h4 className='heding_carsoul'>Baby Care</h4>
                </div>
              </a>
            </div>
            <div class="col-md-3-ra lala "  >
              <a href="/food" style={{ textDecoration: 'none' }} >
                <div class="card card-body bordl  " >
                  <img class="img-fluid image_lala" src={dairysamllimageicon} />
                  <h4 className='heding_carsoul'>Dairy Alternatives</h4>
                </div>
              </a>
            </div>
            <div class="col-md-3-ra lala "  >
              <a href="/food" style={{ textDecoration: 'none' }} >
                <div class="card card-body bordl  " >
                  <img class="img-fluid image_lala" src={energysamllimageicon} />
                  <h4 className='heding_carsoul'>Fitness & Nutrition</h4>
                </div>
              </a>
            </div>
            <div class="col-md-3-ra lala "  >
              <a href="/food" style={{ textDecoration: 'none' }} >
                <div class="card card-body bordl  " >
                  <img class="img-fluid image_lala" src={bevaragessamllimageicon} />
                  <h4 className='heding_carsoul'>Beverages</h4>
                </div>
              </a>
            </div>
            <div class="col-md-3-ra lala "  >
              <a href="/cleaning" style={{ textDecoration: 'none' }} >
                <div class="card card-body bordl  " >
                  <img class="img-fluid image_lala" src={toliteriessamllimageicon} />
                  <h4 className='heding_carsoul'>Toileteries</h4>
                </div>
              </a>
            </div> */}
          </Slider>
        </div>

        {/* <button class="carousel-control-prev carsoul_button_bg d-block d-lg-none" type="button" onClick={goToPrev2}>
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next carsoul_button_bg d-block d-lg-none" type="button" onClick={goToNext2}>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}


      </div>
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Your Cart</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {cardInfo.length > 0 ? (
            cardInfo.map(item => (
              <div key={item.id}>

                <div className='row roling_marg' >

                  <div className='col-5'>
                    <img src={post_url + item.main_img} className='p-3 img-fluid  ' />
                  </div>
                  <div className='col-5   d-flex flex-column justify-content-center'>
                    <p className='cardpara2'>{item.description}</p>
                    <p className='cardpara3'>{item.quantity} &nbsp; &nbsp; x  &nbsp; &nbsp; {item.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>

      {/* Top picks of the Day  */}

      <div className='hello d-none d-lg-block'>
        <div className='container'    >
          <h6 className='mt-5'>Top Picks of the Day</h6>
        </div>
        <div className='container'>

          <div className='hello'>
            <div className='row roling_marg d-flex flex-row justify-content-between'>
              <div className='col-md-9' >
                <div className='row roling_marg'>
                  {topPicksData.map((card, index) => (
                    <Col key={card.id} lg={3} md={4} sm={12} className='mb-5'>
                      <div style={{ height: '420px' }}>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                      </div>
                    </Col>
                    // <RenderCard card={card} index={index} handleShowModal={handleShowModal} addToCartset={addToCartset} MAX_HEADING_LENGTH_DESKTOP={MAX_HEADING_LENGTH_DESKTOP} />
                    // <Col key={card.id} lg={3} md={4} sm={12} className='mb-5'>
                    //   <Card className="shadow" style={{ borderRadius: '20px', height: '100%' }} >
                    //     <div className='  image_border'>
                    //       <img src={card.image} className='p-3 img-fluid  ' />
                    //       {/* <img src={post_url + JSON.parse(card.productImages)[0]} className='p-3 img-fluid  ' /> */}
                    //       <a onClick={() => handleShowPopup(card.ID)}>
                    //         <img src={maximizeIcon} className='img-fluid maxmize_img max-sec1' />

                    //       </a>
                    //       <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />
                    //     </div>

                    //     <div className="container">
                    //       <div className="row roling_margd-flex flex-row justify-content-center">
                    // {/* {(card.featuresData.filter(item => item.id === 1).length > 0) && <div className='col-3'>
                    //   <img src={flagimg} alt={hottestProducts.image7} className='img-fluid ' />
                    // </div>}
                    // {(card.featuresData.filter(item => item.id === 2).length > 0) && <div className='col-3'>
                    //   <img src={iconcard3} alt={hottestProducts.image5} className='img-fluid ' />
                    // </div>}
                    // {(card.featuresData.filter(item => item.id === 2).length > 0) && <div className='col-3'>
                    //   <img src={iconcard2} alt={hottestProducts.image6} className='img-fluid ' />
                    // </div>} */}
                    //   </div>
                    // </div>

                    // <div className='d-flex p-2'>
                    //   <div style={{ width: '80%' }}>
                    //     <p className='cardpara1'>{card.title}</p>
                    //     <p className='cardpara2'>
                    //       {card.title.length > MAX_HEADING_LENGTH_DESKTOP ? `${card.heading.substring(0, MAX_HEADING_LENGTH_DESKTOP)}...` : card.heading}
                    //     </p>
                    //     <p className='cardpara3'>₹{card.price}</p>
                    //   </div>
                    //   <div className='buy_card_aligiment ' style={{ float: 'right' }}>
                    //     <a onClick={() => addToCartset(card)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={buycard} alt={buycard} className='buy_btn <i class="bi bi-person-fill"></i>' /></a>

                    //   </div>
                    // </div>





                    //   </Card>
                    // </Col>
                  ))}
                  {/* {topPicks.map((card) => (
                    <Col key={card.id} lg={3} md={4} sm={12} className='mb-5'>
                      <Card className="shadow" style={{ borderRadius: '20px', height: '100%' }} >
                        <div className='  image_border'>
                          <img src={card.image} className='p-3 img-fluid  ' />
                          <a onClick={() => handleShowPopup(card.id)}>
                            <img src={maximizeIcon} className='img-fluid maxmize_img max-sec1' />

                          </a>
                          <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />
                        </div>

                        <div className='d-flex p-2'>
                          <div>
                            <p className='cardpara1'>{card.title}</p>
                            <p className='cardpara2'>{card.description}</p>
                            <p className='cardpara3'>{card.price}</p>
                          </div>
                          <div className='buy_card_aligiment '>
                            <a onClick={() => addToCartset(card)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={buycard} alt={buycard} className='buy_btn <i class="bi bi-person-fill"></i>' /></a>

                          </div>
                        </div>
                      </Card>
                    </Col>
                  ))} */}


                </div>

              </div>
              {banners.map((cardo, index) => {
                if (index === 0) {
                  return <div key={cardo.id} className='mb-5 col-md-3 col-12'>
                    <Card className="shadow" style={{ borderRadius: '20px', height: '100%' }}>
                      <div className='image_border'>
                        <img src={`${post_url}/${cardo.main_img}`} className='p-3 pt-1  first_card_last_img img-fluid' height={'600px'} />
                        <a onClick={() => handleShowModal(cardo)}>
                          <img src={maximizeIcon} className='img-fluid maxmize_img max-last-img' />
                        </a>
                        <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />
                        <div className='d-flex flex-row jsutify-content-center p-2'>
                          <div>
                            <p className='cardpara4'>{cardo.discount}% off Any Products</p>
                            <div className="d-flex flex-row justify-content-center mb-4" >
                              <Button variant="success" className='mt-3 shopnow' style={{ borderRadius: '50px' }}><a href='/food' style={{ textDecoration: 'none', color: 'white' }}>Shop Now</a></Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                }
              })}

            </div>

          </div>
        </div>



        <Modal show={showPopup} onHide={handleClosePopup} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Maximized View</Modal.Title>
          </Modal.Header>




          <Modal.Body>
            {selectedCard && (
              <div className="maximized-card row roling_marg">
                <div className='col-md-5 col-xs-12'>

                  <img src={post_url + JSON.parse(selectedCard.productImages)[0]} alt={selectedCard.title} className='img-fluid' id="mainImage" />
                  {/* <img src={mainImage || selectedCard.image} alt={selectedCard.title} className='img-fluid' id="mainImage" /> */}



                </div>
                <div className='col-md-2'>
                  {
                    JSON.parse(selectedCard.productImages).map((item, index) => {
                      if (index !== 0) {
                        return <img src={post_url + JSON.parse(selectedCard.productImages)[index]} alt={selectedCard.title} className='img-fluid' onClick={() => handleImageClick(index)} />
                      }
                    })
                  }
                  {/* <img src={selectedCard.image_mini1} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick1(selectedCard.image_mini1)} />
                  <img src={selectedCard.image_mini2} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick2(selectedCard.image_mini2)} />
                  <img src={selectedCard.image_mini3} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick3(selectedCard.image_mini3)} />
                  <img src={selectedCard.image_mini4} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick4(selectedCard.image_mini4)} /> */}
                </div>




                <div className='col-md-5 col-xs-12' style={{ overflowY: 'auto', maxHeight: '400px' }}>
                  <div>
                    <h3 className='pop_up_descriptionfull'>{selectedCard.descriptionfull}</h3>
                    <p >{selectedCard.stars}</p>
                    <p className="deals_para">₹{selectedCard.price}</p>
                    <p className="deals_para1">{selectedCard.stocks}</p>
                    <p className="catagerious_para1">Category:  <span className='catagerious_para_in'> {selectedCard.catagerious}</span></p>
                  </div>

                  <div className="mb-4 row roling_marg">
                    <div className='col-6'>

                      <button className='add_cart_deals_of_the_day' onClick={() => addToCartItems(selectedCard)}  >Add to cart</button>

                    </div>
                    <div className='col-6'>
                      <button className='buy_now_deals_of_the_day' onClick={() => {
                        // if (!user?.ID) {
                        //   navigate('/login2/' + selectedCard.ID)
                        // }
                        // else {
                        //   navigate('/Infopage/' + selectedCard.ID)
                        // }
                      }}></button>
                    </div>
                  </div>

                  {/* <select className='form-control  mt-4'>
                    <option value="Delivery Details" className="delivery-option">
                      Delivery Details
                    </option>
                    <option value="saab">Home</option>
                    <option value="opel">Office</option>
                    <option value="audi">Other</option>
                  </select> */}

                  <div className='col-12 mt-4'>
                    <div className="mt-5 row roling_marg">
                      {(selectedCard.featuresData.filter(item => ![1, 2, 3].includes(item.id))).map((item) => {
                        return <div className='col-3 justify_con'>
                          <img src={post_url + item.icon} alt={post_url + item.icon} />
                          <p className="mt-4">{item.title}</p>
                        </div>
                      })}
                      {/* {JSON.parse(selectedCard?.features)?.includes('natural&organic') && <div className='col-3 justify_con'>
                        <img src={natural} alt={natural} />
                        <p className="mt-4">Natural & Organic</p>
                      </div>
                      }
                      {JSON.parse(selectedCard?.features)?.includes('natural&organic') && <div className='col-3 justify_con'>
                        <img src={gmo} alt={gmo} />
                        <br />
                        <p className="mt-4">NON  <br></br> GMO</p>
                      </div>}
                      {JSON.parse(selectedCard?.features)?.includes('natural&organic') && <div className='col-3  justify_con'>
                        <img src={no_presetives} alt={no_presetives} />
                        <p className="mt-4" >No Added   Preservatives</p>
                      </div>}
                      {JSON.parse(selectedCard?.features)?.includes('natural&organic') && <div className='col-3 justify_con'>
                        <img src={gluten} alt={gluten} />
                        <p className="mt-4">Gluten Free</p>
                      </div>} */}
                    </div>
                    <hr className="m-auto" style={{ border: "none", height: "2px", width: "150px", backgroundColor: "#509264" }} />

                    <p className="mt-4">{selectedCard.about}</p>
                    {/* <p className="mb-5">{selectedCard.about2}</p> */}

                  </div>
                </div>






              </div>
            )}
          </Modal.Body>



          <Modal.Footer>
            <Button variant="secondary" onClick={handleClosePopup}>Close</Button>
          </Modal.Footer>
        </Modal>


      </div>
      <div className='hello top_pick_minus_space d-block d-lg-none'>
        <div className='container'    >
          <h6 className='only_sm_heaiding_h6 '>Top Picks of the Day</h6>
        </div>
        <div className='container'    >

          <div className='hello'>
            <div className=' d-flex flex-row justify-content-between'>
              <div className='overflow-x-auto' >
                <div className='row roling_marg'>
                  <Carousel2 responsive={responsive}>
                    {topPicksData.map((card) => (
                      <Col key={card.id} lg={3} md={10} sm={12} className='mb-5'>
                        <div style={{ height: '420px' }}>
                          <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                        </div>
                      </Col>
                    ))}
                    {/* {topPicks.map((card) => (
                      <Col key={card.id} md={12} xs={12} className='mb-5' style={{ height: '100%' }}>
                        <div className='card card-body main_div_card_slick shadow' style={{ borderRadius: '20px', height: "94%" }}  >
                          <div className='  image_border_slick'>
                            <img src={card.image} className='  img-fluid img_top_slick ' />
                            <a onClick={() => handleShowPopup(card.id)}>
                              <img src={maximizeIcon} className='img-fluid maxmize_img_car_slick max-sec1' />
                            </a>
                            <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />
                          </div>

                          <div className='d-flex p-2'>
                            <div>
                              <p className='cardpara1  cardpara1_slick'>{card.title}</p>
                              <p className='cardpara2 cardpara2_slick'>{card.description}</p>
                              <p className='cardpara3 cardpara3_slick' >{card.price}</p>
                            </div>
                            <div className='buy_card_aligiment ' style={{ marginTop: '45px' }}>
                              <a onClick={() => addToCartset(card)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><img src={buycard} alt={buycard} className='buy_btn' /></a>

                            </div>
                          </div>
                        </div>
                      </Col>
                    ))} */}
                  </Carousel2>
                </div>

              </div>
            </div>

          </div>
        </div>



        <Modal show={showPopup} onHide={handleClosePopup} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Maximized View</Modal.Title>
          </Modal.Header>




          <Modal.Body>
            {selectedCard && (
              <div className="maximized-card row roling_marg">
                <div className='col-md-5 col-xs-12'>

                  {/* <img src={post_url + JSON.parse(selectedCard.productImages)[0]} alt={selectedCard.title} className='img-fluid' id="mainImage" /> */}
                  {/* <img src={mainImage || selectedCard.image} alt={selectedCard.title} className='img-fluid' id="mainImage" /> */}
                  <img src={post_url + JSON.parse(selectedCard.productImages)[0]} alt={selectedCard.title} className='img-fluid' id="mainImage" />
                </div>

                <div className='col-md-2 min_ing_contt'>
                  {
                    JSON.parse(selectedCard.productImages).map((item, index) => {
                      if (index !== 0) {
                        return <img src={post_url + JSON.parse(selectedCard.productImages)[index]} alt={selectedCard.title} className='img-fluid' onClick={() => handleImageClick(index)} />
                      }
                    })
                  }
                  {/* <img src={selectedCard.image_mini1} alt={selectedCard.title} className='img-fluid mini_img_size' onClick={() => handleMiniImageClick1(selectedCard.image_mini1)} />
                  <img src={selectedCard.image_mini2} alt={selectedCard.title} className='img-fluid  mini_img_size' onClick={() => handleMiniImageClick2(selectedCard.image_mini2)} />
                  <img src={selectedCard.image_mini3} alt={selectedCard.title} className='img-fluid mini_img_size' onClick={() => handleMiniImageClick3(selectedCard.image_mini3)} />
                  <img src={selectedCard.image_mini4} alt={selectedCard.title} className='img-fluid mini_img_size' onClick={() => handleMiniImageClick4(selectedCard.image_mini4)} /> */}
                </div>




                <div className='col-md-5 col-xs-12' style={{ overflowY: 'auto', maxHeight: '400px' }}>
                  <div>
                    <h3 className='pop_up_descriptionfull'>{selectedCard.descriptionfull}</h3>
                    <p >{selectedCard.stars}</p>
                    <p className="deals_para">₹{selectedCard.price}</p>
                    <p className="deals_para1">{selectedCard.quantity}</p>
                    <p className="catagerious_para1">Category:  <span className='catagerious_para_in'> {selectedCard.title}</span></p>
                  </div>

                  <div className="mb-4 row roling_marg">
                    <div className='col-6'>

                      <button className='add_cart_deals_of_the_day' onClick={() => addToCartItems(selectedCard)}  >Add to cart</button>

                    </div>
                    <div className='col-6'>
                      <button className='buy_now_deals_of_the_day' onClick={() => {
                        if (!user?.ID) {
                          navigate('/login2/' + selectedCard.ID)
                        }
                        else {
                          navigate('/Infopage/' + selectedCard.ID)
                        }
                      }}>Buy Now</button>
                    </div>
                  </div>

                  {/* <select className='form-control  mt-4'>
                    <option value="Delivery Details" className="delivery-option">
                      Delivery Details
                    </option>
                    <option value="saab">Home</option>
                    <option value="opel">Office</option>
                    <option value="audi">Other</option>
                  </select> */}
                  <center>
                    <div className="mb-4 row  text-center   roling_marg     " style={{ width: '100%', marginTop: '20px' }}>
                      <div className='col-4 d-none d-md-block' style={{ padding: 0 }}>
                        <FontAwesomeIcon icon={faBox} />
                        <h3 className='deliered_time'>Order Now</h3>
                      </div>
                      <div className='col-8  d-none d-md-block ' style={{ padding: 0, marginLeft: '-35px' }}>
                        <FontAwesomeIcon icon={faTruckFast} />
                        <h3 className='deliered_time'>Delivered with in 3 - 5 days</h3>
                      </div>
                    </div>
                  </center>

                  <div className='col-12 mt-4'>
                    <div className="mt-5 row roling_marg">
                      {(selectedCard.featuresData.filter(item => ![1, 2, 3].includes(item.id))).map((item) => {
                        return <div className='col-3 justify_con'>
                          <img src={post_url + item.icon} alt={post_url + item.icon} />
                          <p className="mt-4">{item.title}</p>
                        </div>
                      })}
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
            <Button variant="secondary" onClick={handleClosePopup}>Close</Button>
          </Modal.Footer>
        </Modal>


      </div >





      {/* Ending Top picks of the Day  */}


      <section section className='' >
        <div className='container d-none d-lg-block'>
          <div className='row roling_marg'>
            <div className='col-6 hello'>
              <h6>Hottest Products Now</h6>
            </div>
            <div className='container'>
              <div className='row roling_marg'>
                {hottestProductsData.map((card, index) => (
                  <Col key={card.id} lg={3} md={4} sm={12} className='mb-5'>
                    <div style={{ height: '420px' }}>
                      <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                    </div>
                  </Col>
                  // <div key={index} className='col-md-3'>
                  //   <div className='card card-body main_div_card shadow'>
                  //     <div className='  image_border'>
                  //       <img src={JSON.parse(card.productImages)[0]} className='p-3 img-fluid' />
                  //       <img src={maximizeIcon} className='img-fluid maxmize_img_car' onClick={() => handleShowModal(card)} />
                  //       <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />
                  //     </div>
                  //     <div className="container">
                  //       <div className="row roling_margd-flex flex-row justify-content-center">
                  //         {(card.featuresData.filter(item => item.id === 1).length > 0) && <div className='col-3'>
                  //           <img src={flagimg} alt={hottestProducts.image7} className='img-fluid ' />
                  //         </div>}
                  //         {(card.featuresData.filter(item => item.id === 2).length > 0) && <div className='col-3'>
                  //           <img src={iconcard3} alt={hottestProducts.image5} className='img-fluid ' />
                  //         </div>}
                  //         {(card.featuresData.filter(item => item.id === 2).length > 0) && <div className='col-3'>
                  //           <img src={iconcard2} alt={hottestProducts.image6} className='img-fluid ' />
                  //         </div>}
                  //       </div>
                  //     </div>

                  //     <div className='d-flex p-2'>
                  //       <div style={{ width: '80%' }}>
                  //         <p className='cardpara1'>{card.title}</p>
                  //         <p className='cardpara2'>
                  //           {card.heading.length > MAX_HEADING_LENGTH_DESKTOP ? `${card.heading.substring(0, MAX_HEADING_LENGTH_DESKTOP)}...` : card.heading}
                  //         </p>
                  //         <p className='cardpara3'>₹{card.price}</p>
                  //       </div>
                  //       
                  //     </div>
                  //   </div>
                  // </div>
                ))}
                {/* {hottestProducts.map((card, index) => (
                  <div key={index} className='col-md-3'>
                    <div className='card card-body main_div_card shadow'>
                      <div className='  image_border'>
                        <img src={card.image} className='p-3 img-fluid' />
                        <img src={maximizeIcon} className='img-fluid maxmize_img_car' onClick={() => handleShowModal(card)} />
                        <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />
                      </div>
                      <div className="container">
                        <div className="row roling_margd-flex flex-row justify-content-center">
                          <div className='col-3'>
                            <img src={card.image5} alt={hottestProducts.image5} className='img-fluid ' />
                          </div>
                          <div className='col-3'>
                            <img src={card.image6} alt={hottestProducts.image6} className='img-fluid ' />
                          </div>
                          <div className='col-3'>
                            <img src={card.image7} alt={hottestProducts.image7} className='img-fluid ' />
                          </div>
                        </div>
                      </div>
                      <div className='d-flex   p-2'>
                        <div >

                        <p className='cardpara1'>{card.title}</p>
                          <p className='cardpara2'>{card.description}</p>
                          <p className='cardpara3'>{card.price}</p>
                        </div>
                        <div className=' buy_icon_card'>
                          <a href='#' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={buycard} alt={buycard} className='buy_btn' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>


          </div>
          {/* <div className='d-flex flex-row justify-content-end mt-3'>
            <a href='/shopping'><button style={{ backgroundColor: '#347247', color: 'white', width: '150px', height: '40px', borderRadius: '5px', border: 'none' }}>See more   <i class="bi bi-arrow-right"></i></button></a>
          </div> */}
        </div>
        <div className='container  margin_top_for_hottest_product hotext_product_div_margin d-block d-lg-none'>
          <div className='row    roling_marg    '>
            <div className='col-12 hello_hottest'>
              <h6 className='only_sm_heaiding_h6 hottest_tag_text_size'>Hottest Products Now</h6>
            </div>
            <div className='container'>
              <div className='row  roling_marg'>
                <Carousel2 responsive={responsive}>
                  {hottestProductsData.map((card, index) => (
                    <Col key={card.id} lg={3} md={10} sm={12} className='mb-5'>
                      <div className="card_pro_hei">
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                      </div>
                    </Col>
                  ))}
                  {/* {hottestProducts.map((card, index) => (
                    <div key={index} className='col-md-12 col-sm-12' style={{ height: '100%' }}>
                      <div className='card card-body main_div_card_slick shadow' style={{ height: '94%' }}>
                        <div className='  image_border_slick'>
                          <img src={card.image} alt={card.image} className=' img-fluid img_top_slick' />
                          <img src={maximizeIcon} className='img-fluid maxmize_img_car_slick' alt={maximizeIcon} onClick={() => handleShowModal(card)} />
                          <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />

                        </div>
                        <div className="container  d-none d-lg-block">
                          <div className="row    roling_marg     d-flex flex-row justify-content-center">
                            <div className='col-3'>
                              <img src={card.image5} alt={hottestProducts.image5} className=' img-fluid' />
                            </div>
                            <div className='col-3'>
                              <img src={card.image6} alt={hottestProducts.image6} className='   img-fluid' />
                            </div>
                            <div className='col-3'>
                              <img src={card.image7} alt={hottestProducts.image7} className='   img-fluid' />
                            </div>
                          </div>

                        </div>
                        <div className="container  d-none d-md-block d-lg-none">
                          <div className="row    roling_marg     d-flex flex-row justify-content-center">
                            <div className='col-3'>
                              <img src={card.image5} alt={hottestProducts.image5} className=' three_min_img_md' />
                            </div>
                            <div className='col-3'>
                              <img src={card.image6} alt={hottestProducts.image6} className='  three_min_img_md' />
                            </div>
                            <div className='col-3'>
                              <img src={card.image7} alt={hottestProducts.image7} className=' three_min_img_md' />
                            </div>
                          </div>

                        </div>
                        <div className="container  d-block d-md-none">

                          <div className="row    roling_marg     d-flex flex-row justify-content-center  ">
                            <div className='col-3'>
                              <img src={card.image5} alt={hottestProducts.image5} className='  three_min_img_md' />
                            </div>
                            <div className='col-3'>
                              <img src={card.image6} alt={hottestProducts.image6} className='   three_min_img_md' />
                            </div>
                            <div className='col-3'>
                              <img src={card.image7} alt={hottestProducts.image7} className='    three_min_img_md' />
                            </div>
                          </div>
                        </div>




                        <div className='d-flex  card_pad'>
                          <div >
                            <p className='cardpara1 cardpara1_slick'>{card.title}</p>
                            <p className='cardpara2 cardpara2_slick'>{card.description}</p>
                            <p className='cardpara3 cardpara3_slick'>{card.price}</p>
                          </div>
                          <div className=' buy_icon_card' style={{ marginTop: '45px' }}>
                            <a href='#' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={buycard} alt={buycard} className='buy_btn icon_size_cart' /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))} */}
                </Carousel2>
              </div>
            </div>


          </div>
          {/* <div className='d-flex flex-row justify-content-end mt-3'>
            <a href='/shopping'><button style={{ backgroundColor: '#347247', color: 'white', width: '150px', height: '40px', borderRadius: '5px', border: 'none' }}>See more<i class="bi bi-arrow-right"></i></button></a>
          </div> */}
        </div>


        {/* Modal for displaying selected card details */}

        <Modal show={showModal} onHide={handleCloseModal} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{selectedCard && selectedCard.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedCard && (
              <div className="maximized-card row">
                <div className='col-md-12 col-xs-12 col-lg-5'>

                  <img src={post_url + JSON.parse(selectedCard.productImages)[0]} alt={selectedCard.title} className='img-fluid' id="mainImage" />
                  {/* <img src={selectedCard.image} alt={selectedCard.title} className='img-fluid' id="mainImage" /> */}


                </div>
                <div className='col-sm-12 col-lg-2 d-none d-lg-flex d-felx flex-column justify-content-around'>
                  {
                    JSON.parse(selectedCard.productImages).map((item, index) => {
                      if (index !== 0) {
                        return <img src={post_url + item} alt={selectedCard.title} className='img-fluid' width={100} height={300} onClick={() => handleImageClick(index)} />
                      }
                    })
                  }
                  {/* <img src={post_url + JSON.parse(selectedCard.productImages)[1]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick1(selectedCard.image_mini1)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[2]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick2(selectedCard.image_mini2)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[3]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick3(selectedCard.image_mini3)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[4]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick4(selectedCard.image_mini4)} /> */}
                </div>

                <div className='col-sm-12 col-md-12  d-flex d-lg-none justify-content-around '>
                  {
                    JSON.parse(selectedCard.productImages).map((item, index) => {
                      if (index !== 0) {
                        return <img src={post_url + item} alt={selectedCard.title} className='img-fluid' width={75} height={300} onClick={() => handleImageClick(index)} />
                      }
                    })
                  }
                  {/* <img src={post_url + JSON.parse(selectedCard.productImages)[1]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick1(selectedCard.image_mini1)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[2]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick2(selectedCard.image_mini2)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[3]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick3(selectedCard.image_mini3)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[4]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick4(selectedCard.image_mini4)} /> */}
                </div>




                <div className='col-md-12 col-xs-12 col-lg-5' style={{ overflowY: 'auto', maxHeight: '400px' }}>
                  <h6 className='pop_up_cardhead'>{selectedCard.heading}</h6>
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
                    <div className="mt-5 row">
                      {
                        selectedCard.featuresData.filter(item => ![1, 2, 3].includes(item.id)).map((item, index) => {
                          return <div className='col-3 justify_con'>
                            <img src={post_url + item.icon} alt={post_url + item.icon} width={100} height={70} />
                            <p className="mt-4">{item.title}</p>
                          </div>
                        })
                      }
                    </div>
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
      </section >



      <section className='vegan_margin_height'>
        <div className='container d-block d-lg-none'>
          <div className='row    roling_marg    '>
            <div className='col-12 hello'>
              <h6 className='only_sm_heaiding_h6'>Vegan Deals</h6>
            </div>
            <div className='container'>
              <div className='row    roling_marg    '>
                <Carousel2 responsive={responsive}>
                  {ecoFriendlyData.map((card, index) => (
                    <Col key={card.id} lg={3} md={10} sm={12} className='mb-5'>
                      <div style={{ height: '420px' }}>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                      </div>
                    </Col>
                  ))}
                  {/* {ecoFriendly.map((card, index) => (
                    <div key={index} className='col-md-12' style={{ height: '100%' }}>
                      <div className='card card-body main_div_card_slick shadow' style={{ height: '94%' }}>
                        <div className='image_border_slick'>
                          <img src={card.image} className='img-fluid img_top_slick' alt={`product-${index}`} />
                          <img src={maximizeIcon} className='img-fluid maxmize_img_car_slick' onClick={() => handleShowModal(card)} />
                          <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />

                        </div>
                        <div className='d-flex card_pad'>
                          <div>
                            <p className='cardpara1 cardpara1_slick'>{card.title}</p>
                            <p className='cardpara2  cardpara2_slick'>{card.description}</p>
                            <p className='cardpara3 cardpara3_slick'>{card.price}</p>
                          </div>
                          <div className=' buy_icon_card' style={{ marginTop: '45px' }}>
                            <img src={buyIcon} alt="Buy" className='icon_size_cart buy_btn' />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))} */}
                </Carousel2>
              </div>
            </div>
          </div>
        </div>
        <div className='container d-none d-lg-block'>
          <div className='row    roling_marg    '>
            <div className='col-6 hello'>
              <h6>Vegan Deals</h6>
            </div>
            <div className='container '>
              <div className='row    roling_marg    '>
                {ecoFriendlyData.map((card, index) => (
                  <Col key={card.id} lg={3} md={4} sm={12} className='mb-5'>
                    <div style={{ height: '420px' }}>
                      <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                    </div>
                  </Col>
                ))}
                {/* {ecoFriendly.map((card, index) => (
                  <div key={index} className='col-md-3'>
                    <div className='card card-body main_div_card shadow'>
                      <div className='image_border'>
                        <img src={card.image} className='p-3 img-fluid' alt={`product - ${index}`} />
                        <img src={maximizeIcon} className='img-fluid maxmize_img_car' onClick={() => handleShowModal(card)} />
                        <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />

                      </div>
                      <div className='d-flex p-2'>
                        <div>
                          <p className='cardpara1'>{card.title}</p>
                          <p className='cardpara2'>{card.description}</p>
                          <p className='cardpara3'>{card.price}</p>
                        </div>
                        <div className=' buy_icon_card'>
                          <img src={buyIcon} alt="Buy" className='buy_btn' />
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' deals_of_the_day'>
        {dealsOfTheDayData.length > 0 && <div className='container'>
          <div className="hello col-12">
            <h6 className='only_sm_heaiding_h6 '>Deals Of the Day</h6>
          </div>
          <Slider ref={sliderRef33} {...settings33} className='slider33'>
            <div className='row    roling_marg     mt-3 flex-container' style={{ width: '100%', display: 'block' }}>

              <div className='col-md-4 col-5'>
                <img src={(post_url + dealsOfTheDayData[0]?.main_img)} alt={dealsOfTheDayData.length > 0 && (post_url + dealsOfTheDayData[0]?.main_img)} className='img-fluid' />

              </div>

              <div className='col-md-4 col-7'>
                <h6 className='pop_up_cardhead'>{(dealsOfTheDayData[0]?.heading)}</h6>
                <p className='star_size'>{'⭐'.repeat(dealsOfTheDayData[0].rating)} {dealsOfTheDayData[0].rating}/5</p>
                <p className="deals_para">₹{dealsOfTheDayData[0].price}</p>
                <p className="deals_para1">{dealsOfTheDayData[0].quantity} in stock</p>
                <div className="mb-4 row    roling_marg    ">
                  <div className='col-6'>
                    <button onClick={() => addToCartItems(dealsOfTheDayData[0])} className='add_cart_deals_of_the_day' >Add to cart</button>
                  </div>
                  <div className='col-6'>
                    <button className='buy_now_deals_of_the_day' onClick={() => {
                      if (!user?.ID) {
                        navigate('/login2/' + dealsOfTheDayData[0].ID)
                      }
                      else {
                        navigate('/Infopage/' + dealsOfTheDayData[0].ID)
                      }
                    }}>Buy Now</button>
                  </div>
                </div>
                {/* <select className='details_deals_of_the_day mt-4 shine_the_tect'>
                <option value="Delivery Details" className="delivery-option">
                  Delivery Details
                </option>
                <option value="saab">Order now</option>
                <option value="opel"><span className='shine_the_tect'>Delivered Within 3 to 4 days</span> </option>
           
              </select> */}
                <center>
                  <div className="mb-4 row  text-center   roling_marg     " style={{ width: '100%' }}>
                    <div className='col-4 d-none d-md-block' style={{ padding: 0 }}>
                      <FontAwesomeIcon icon={faBox} />
                      <h3 className='deliered_time'>Order Now</h3>
                    </div>
                    <div className='col-8  d-none d-md-block ' style={{ padding: 0, marginLeft: '-35px' }}>
                      <FontAwesomeIcon icon={faTruckFast} />
                      <h3 className='deliered_time'>Delivered with in 3 - 5 days</h3>
                    </div>
                  </div>
                </center>
              </div>
              {/* <div className="col-12 col-md-4  mb-4 roling_marg  ms-3   row text-center  d-md-none">
              <div className='col-4'>
                <FontAwesomeIcon icon={faBox} />
                <h3 className='deliered_time'>Order Now</h3>

              </div>
              <div className='col-8   ' style={{ marginLeft: '-20px' }}>

                <FontAwesomeIcon icon={faTruckFast} />
                <h3 className='deliered_time'>Delivered with in 3 - 5 days</h3>
              </div>
            </div> */}
              <div className='col-md-4 col-12'>
                <div className="d-none d-md-block">
                  <p >{dealsOfTheDayData[0].description}</p>
                  {/* <p className="mb-5">Et lectus elit ultricies seget vitae enim. Purus id diam viverra est dignissim ipsum mattis sagittis. Dignissim duis facilisis sit odio.</p> */}
                </div>

                <hr className="m-auto hr_line" style={{ border: "none", height: "2px", width: "150px", backgroundColor: "#509264" }} />
                <div className="mt-5 roling_marg row">
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


                <div className="d-md-none">
                  <p>{dealsOfTheDayData[0].description}</p>
                </div>
              </div>

            </div>
          </Slider>
        </div>
        }
      </section>


      <section>
        <div className='container'>
          <div className='row    roling_marg    '>


            <div className='col-8 added_div  hello'> <h6 className='only_for_resectly'>Recently Added</h6> </div>

            <div className='col-4 arrow_div d-flex flex-row justify-content-end   d-md-flex'>
              <button className="pt-1 pe-2  second_carsoul_button_bg_left" style={{ background: '#00000080' }} type="button" onClick={goToPrev99}>
                <span className="carousel-control-prev-icon left_btn_recently" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className=" ms-5 pt-1 ps-2 second_carsoul_button_bg_right" style={{ background: '#00000080' }} type="button" onClick={goToNext99}>
                <span className="carousel-control-next-icon right_btn_recently" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>


            {/* React slick slider */}

          </div>
          <Slider ref={sliderRef99} {...settings}>
            {recentlyAddedData.map((card, index) => (
              <Col key={card.id} lg={3} md={4} sm={12} className='mb-5 padding_only_recently_cards'>
                <div style={{ height: '420px' }}>
                  <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                </div>
              </Col>
            ))}
            {/* {carouselimgs.map((card, index) => (
                <div key={index} className='col-md-3'>
                  <div className='card card-body main_div_card_slick shadow'>
                    <div className='image_border_slick'>
                      <img src={card.image} className='img-fluid img_top_slick' alt={`product-${index}`} />
                      <img src={maximizeIcon} className='img-fluid maxmize_img_car_slick' onClick={() => handleShowModal(card)} />
                      <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />

                    </div>
                    <div className='d-flex card_pad'>
                      <div>
                        <p className='cardpara1 cardpara1_slick '>{card.title}</p>
                        <p className='cardpara2 cardpara2_slick'>{card.description}</p>
                        <p className='cardpara3 cardpara3_slick'>{card.price}</p>
                      </div>
                      <div className=' buy_icon_card' style={{ marginTop: '45px' }}>
                        <img src={buyIcon} alt="Buy" className='buy_btn icon_size_cart' />
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}
          </Slider>
        </div>
      </section>


      {/* Clothing */}

      <section className='clothing_section_only_in_md'>
        <div className='container d-block d-lg-none'>
          <div className='row    roling_marg    '>
            <div className='col-12 hello'>
              <h6 className='only_sm_heaiding_h6'>Clothing</h6>
            </div>
            <div className='container'>
              <div className='row    roling_marg    '>
                <Carousel2 responsive={responsive2}>
                  {clothingData.map((card, index) => (
                    <Col key={card.id} lg={3} md={10} sm={12} className='mb-5'>
                      <div style={{ height: '420px' }}>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                      </div>
                    </Col>
                  ))}
                  {/* {clothingCard.map((card, index) => (
                    <div key={index} className='col-md-12' style={{ height: '100%' }}>
                      <div className='card card-body main_div_card_slick shadow' style={{ height: '94%' }}>
                        <div className='image_border_slick'>
                          <img src={card.image} className='img-fluid img_top_slick' alt={`product - ${index}`} />
                          <img src={maximizeIcon} className='img-fluid maxmize_img_car_slick' onClick={() => handleShowModal(card)} />
                          <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />

                        </div>
                        <div className='d-flex card_pad'>
                          <div>
                            <p className='cardpara1 cardpara1_slick'>{card.title}</p>
                            <p className='cardpara2  cardpara2_slick'>{card.description}</p>
                            <p className='cardpara3 cardpara3_slick'>{card.price}</p>
                          </div>
                          <div className=' buy_icon_card' style={{ marginTop: '45px' }}>
                            <img src={buyIcon} alt="Buy" className=' buy_btn icon_size_cart' />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))} */}
                </Carousel2>
              </div>
            </div>
          </div>
        </div>
        <div className='container d-none d-lg-block'>
          <div className='row    roling_marg    '>
            <div className='mt-4 col-6 hello'>
              <h6>Clothing</h6>
            </div>
            <div className='container '>
              <div className='row    roling_marg    '>
                {clothingData.map((card, index) => (
                  <Col key={card.id} lg={3} md={4} sm={12} className='mb-5'>
                    <div style={{ height: '420px' }}>
                      <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                    </div>
                  </Col>
                ))}
                {/* {clothingCard.map((card, index) => (
                  <div key={index} className='col-md-3'>
                    <div className='card card-body main_div_card shadow' style={{ height: '94%' }}>
                      <div className='image_border'>
                        <img src={card.image} className='p-3 img-fluid' alt={`product - ${index}`} />
                        <img src={maximizeIcon} className='img-fluid maxmize_img_car' onClick={() => handleShowModal(card)} />
                        <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />

                      </div>
                      <div className='d-flex p-2'>
                        <div>
                          <p className='cardpara1'>{card.title}</p>
                          <p className='cardpara2'>{card.description}</p>
                          <p className='cardpara3'>{card.price}</p>
                        </div>
                        <div className=' buy_icon_card'>
                          <img src={buyIcon} alt="Buy" className='buy_btn' />
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* sustainable and eco-friendly gifting */}

      <section>
        <div className='container d-block d-lg-none'>
          <div className='row    roling_marg    '>
            <div className='col-12  hello_eco'>
              <h6 className='only_sm_heaiding_h6'>sustainable & eco-friendly gifting</h6>
            </div>
            <div className='container'>
              <div className='row    roling_marg    '>
                <Carousel2 responsive={responsive}>
                  {sustainableAndEcoFriendlyData.map((card, index) => (
                    <Col key={card.id} lg={3} md={10} sm={12} className='mb-5'>
                      <div style={{ height: '420px' }}>
                        <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                      </div>
                    </Col>
                  ))}
                  {/* {sustainableCard.map((card, index) => (
                    <div key={index} className='col-md-12' style={{ height: '100%' }}>
                      <div className='card card-body main_div_card_slick shadow' style={{ height: '94%' }}>
                        <div className='image_border_slick'>
                          <img src={card.image} className='img-fluid img_top_slick' alt={`product - ${index}`} />
                          <img src={maximizeIcon} className='img-fluid maxmize_img_car_slick' onClick={() => handleShowModal(card)} />
                          <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />

                        </div>
                        <div className='d-flex card_pad'>
                          <div>
                            <p className='cardpara1 cardpara1_slick'>{card.title}</p>
                            <p className='cardpara2  cardpara2_slick'>{card.description}</p>
                            <p className='cardpara3 cardpara3_slick'>{card.price}</p>
                          </div>
                          <div className=' buy_icon_card' style={{ marginTop: '45px' }}>
                            <img src={buyIcon} alt="Buy" className='buy_btn icon_size_cart' />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))} */}
                </Carousel2>
              </div>
            </div>
          </div>
        </div>


        <div className='container d-none d-lg-block'>
          <div className='row    roling_marg    '>
            <div className='mt-4 col-12 hello'>
              <h6 className='' >sustainable and eco-friendly gifting</h6>
            </div>
            <div className='container '>
              <div className='row    roling_marg    '>
                {sustainableAndEcoFriendlyData.map((card, index) => (
                  <Col key={card.id} lg={3} md={4} sm={12} className='mb-5'>
                    <div style={{ height: '420px' }}>
                      <ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
                    </div>
                  </Col>
                ))}
                {/* {sustainableCard.map((card, index) => (
                  <div key={index} className='col-md-3'>
                    <div className='card card-body main_div_card shadow' style={{ height: '94%' }}>
                      <div className='image_border'>
                        <img src={card.image} className='p-3 img-fluid' alt={`product - ${index}`} />
                        <img src={maximizeIcon} alt={{ maximizeIcon }} className='img-fluid maxmize_img_car' onClick={() => handleShowModal(card)} />
                        <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' />

                      </div>
                      <div className='d-flex p-2'>
                        <div>
                          <p className='cardpara1'>{card.title}</p>
                          <p className='cardpara2'>{card.description}</p>
                          <p className='cardpara3'>{card.price}</p>
                        </div>
                        <div className=' buy_icon_card'>
                          <img src={buyIcon} alt="Buy" className='buy_btn' />
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>


      </section>


      {/* reviews   */}
      <section className='reviews_home_page_section'>
        <div className='container mt-5'>
          <div className='coustmers_text'>
            <h3> Let our customers speak for us</h3>
            <p className='coustmers_rating'>< strong> Rated 4.95</strong> </p>
            {/* <p className='coustmers_stars'> <strong> ⭐⭐⭐⭐⭐</strong> </p> */}
          </div>
          <div className='row roling_marg mt-4 home_review_slider'>


            <Slider ref={sliderRef} {...settings3}>
              {
                ratings.map((item) => {

                  return <div class=" reviw_div px-2">

                    <p className='reviw_stars'>{'⭐'.repeat(item.rating)}</p>

                    {/* <p className='reviw_tag_line'>Super cute and comfy
                    </p> */}
                    <p className='reviw_main_line'>{item.message}
                    </p>
                    <p className='reviw_name'>{item.firstName ?? item.customerName}
                    </p>

                  </div>
                })
              }
              {/* <div class=" reviw_div px-2">

                <p className='reviw_stars'>⭐⭐⭐⭐⭐</p>

                <p className='reviw_tag_line'>Super cute and comfy
                </p>
                <p className='reviw_main_line'>This is my best purchase ever. These have become my go-to flats and I love the minimal yet classy pattern. I’ve got my hands on some amazing eco-friendly products on Suspire and for most of them the quality has been great, including this one.
                </p>
                <p className='reviw_name'>Ananya Bhatia
                </p>

              </div>
              <div class=" reviw_div px-2">


                <p className='reviw_stars'>⭐⭐⭐⭐⭐</p>

                <p className='reviw_tag_line'>Super cute and comfy
                </p>
                <p className='reviw_main_line'>This is my best purchase ever. These have become my go-to flats and I love the minimal yet classy pattern. I’ve got my hands on some amazing eco-friendly products on Suspire and for most of them the quality has been great, including this one.
                </p>
                <p className='reviw_name'>Ananya Bhatia
                </p>

              </div>
              <div class=" reviw_div px-2">

                <p className='reviw_stars'>⭐⭐⭐⭐⭐</p>

                <p className='reviw_tag_line'>Super cute and comfy
                </p>
                <p className='reviw_main_line'>This is my best purchase ever. These have become my go-to flats and I love the minimal yet classy pattern. I’ve got my hands on some amazing eco-friendly products on Suspire and for most of them the quality has been great, including this one.
                </p>
                <p className='reviw_name'>Ananya Bhatia
                </p>

              </div>
              <div class=" reviw_div px-2">

                <p className='reviw_stars'>⭐⭐⭐⭐⭐</p>

                <p className='reviw_tag_line'>Super cute and comfy
                </p>
                <p className='reviw_main_line'>This is my best purchase ever. These have become my go-to flats and I love the minimal yet classy pattern. I’ve got my hands on some amazing eco-friendly products on Suspire and for most of them the quality has been great, including this one.
                </p>
                <p className='reviw_name'>Ananya Bhatia
                </p>

              </div> */}

            </Slider>
          </div>
        </div>
      </section>

      <section className='mt-5'  >
        <div className=' maaq_con_two nav_green_box p-2'>
          <div class="marquee">

            <div>
              <img src={twenty_k} alt={twenty_k} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; 20,000+ Eco-Friendly Products
              &nbsp; |  &nbsp;
              <img src={two_h} alt={two_h} className='img-fluid ' style={{ width: 20, height: 20 }} /> 200+ Sustainable Brands
              &nbsp;  |  &nbsp;
              <img src={flagimg} alt={flagimg} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; Supporting Indian Brands & Artisans
              |  &nbsp;

              <img src={alternatives} alt={alternatives} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; Curated Green Alternatives
              | &nbsp;
              <img src={vegan} alt={vegan} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp;   100% Vegan & Cruelty-Free Selection
              &nbsp; | &nbsp;
              <img src={eco} alt={eco} className='img-fluid ' style={{ width: 20, height: 20 }} />  &nbsp; Eco-Friendly, Biodegradable Shipping
              &nbsp;
              <img src={twenty_k} alt={twenty_k} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; 20,000+ Eco-Friendly Products
              &nbsp; |  &nbsp;
              <img src={two_h} alt={two_h} className='img-fluid ' style={{ width: 20, height: 20 }} /> 200+ Sustainable Brands
              &nbsp;  |  &nbsp;
              <img src={flagimg} alt={flagimg} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; Supporting Indian Brands & Artisans
              |  &nbsp;

              <img src={alternatives} alt={alternatives} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; Curated Green Alternatives
              | &nbsp;
              <img src={vegan} alt={vegan} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp;   100% Vegan & Cruelty-Free Selection
              &nbsp; | &nbsp;
              <img src={eco} alt={eco} className='img-fluid ' style={{ width: 20, height: 20 }} />  &nbsp; Eco-Friendly, Biodegradable Shipping
              &nbsp;


            </div>


          </div>

        </div>
      </section>



      <section>

        <div className='container'>

          <h1 className='text-center mt-4 sustabinable_head'>  How is EarthBased keeping the promises made?</h1>
          <div className='row     roling_marg    ' >
            <div className=' col-sm-12 col-md-6 col-lg-6 text-center'>

              <img src={trophy} alt={trophy} className=' img-fluid' style={{ borderRadius: '20px' }} />
              <h2 style={{ color: '#766285' }}>Transparent Sourcing and Accountability.</h2>
              <p className='smaller_text'> EarthBased maintains transparency in product sourcing and manufacturing. We communicate openly about product origins, ingredients, and eco-friendly practices. Regular supplier audits ensure adherence to sustainability and cruelty-free standards.</p>
            </div>
            <div className=' col-sm-12 col-md-6 col-lg-6 text-center'>
              <img src={leafs} alt={trophy} className=' img-fluid' style={{ borderRadius: '20px' }} />
              <h2 style={{ color: '#766285' }}>Continuous Improvement.</h2>
              <p className='smaller_text mt-5'>EarthBased is dedicated to ongoing innovation. We seek eco-friendly solutions, from packaging to ingredient sourcing, to minimize environmental impact. Our commitment to wellness, sustainability, and cruelty-free living remains unwavering.</p>
            </div>

          </div>
        </div>


      </section>

      <section>

        <div className='container d-none d-md-block'>

          <h1 className='text-center my-5 sustabinable_head_two'>Impact created when you Choose EarthBased</h1>
          <div className='row    roling_marg     d-flex flex-row justify-content-center'>
            <div className='col-6 col-md-4 text-center'>

              <img src={save_water} alt={save_water} className='p-3 img-fluid' />

              <p className='smaller_text'>
                Reduced Carbon Footprint: Choosing vegan products lowers resource consumption and greenhouse gas emissions, minimizing environmental impact.</p>
            </div>
            <div className='col-6 col-md-4 text-center'>
              <img src={paper_bag} alt={paper_bag} className='p-3 img-fluid' />

              <p className='smaller_text'>Conservation of Natural Resources: Opting for vegan items preserves land, water, and energy resources, safeguarding ecosystems and biodiversity.</p>
            </div>
            <div className='col-6 col-md-4 text-center'>

              <img src={seed_plant} alt={seed_plant} className='p-3 img-fluid' />

              <p className='smaller_text'>
                Water Conservation: Shopping vegan saves water, contributing to water security and reducing strain on freshwater sources.</p>
            </div>
            <div className='col-6 col-md-4 text-center'>


              <img src={globe} alt={globe} className='p-3 img-fluid' />

              <p className='smaller_text'>
                Reduced Pollution: Vegan products lessen pollution levels, resulting in cleaner air, water, and soil for all.</p>
            </div>
            <div className='col-6 col-md-4 text-center'>

              <img src={rabbit} alt={rabbit} className='p-3 img-fluid' />


              <p className='smaller_text'>
                Promotion of Ethical Treatment of Animals: Supporting vegan choices advocates for animal welfare and eliminates animal exploitation.</p>
            </div>
            <div className='col-6 col-md-4 text-center'>

              <img src={artist} alt={artist} className='p-3 img-fluid' />


              <p className='smaller_text'>Improvement of Public Health: Vegan diets support healthier living, reducing risks of chronic diseases and improving overall well-being.</p>
            </div>
          </div>
        </div>



        <div className='  d-md-none mt-5 blog_slider5'>
          <h1 className='text-center my-5 sustabinable_head_two'>Impact created when you Choose EarthBased</h1>

          <div class=" w-100  container ">
            <Slider ref={sliderRef5} {...settings5} >

              <div className=' mini_image_sastiabne_sizes'>

                <img src={save_water} alt={save_water} className='p-3  img-fluid     ' />
                <p>Reduced Carbon Footprint: Choosing vegan products lowers resource consumption and greenhouse gas emissions, minimizing environmental impact.</p>

              </div>


              <div className=' mini_image_sastiabne_sizes'>

                <img src={paper_bag} alt={paper_bag} className='p-3 img-fluid' />
                <p>Conservation of Natural Resources: Opting for vegan items preserves land, water, and energy resources, safeguarding ecosystems and biodiversity.</p>

              </div>

              <div className=' mini_image_sastiabne_sizes'>

                <img src={seed_plant} alt={seed_plant} className='p-3 img-fluid' />
                <p>Water Conservation: Shopping vegan saves water, contributing to water security and reducing strain on freshwater sources.</p>

              </div>


              <div className=' mini_image_sastiabne_sizes'>

                <img src={globe} alt={globe} className='p-3 img-fluid' />
                <p>Reduced Pollution: Vegan products lessen pollution levels, resulting in cleaner air, water, and soil for all.</p>

              </div>

              <div className=' mini_image_sastiabne_sizes'>
                <img src={rabbit} alt={rabbit} className='p-3 img-fluid' />
                <p>Promotion of Ethical Treatment of Animals: Supporting vegan choices advocates for animal welfare and eliminates animal exploitation.</p>

              </div>


              <div className=' mini_image_sastiabne_sizes'>

                <img src={artist} alt={artist} className='p-3 img-fluid' />
                <p>Improvement of Public Health: Vegan diets support healthier living, reducing risks of chronic diseases and improving overall well-being.</p>

              </div>


            </Slider>
          </div>

          <div className='text-center'>
            <button class="carsoul_button_bg_left_5 mx-2" type="button" onClick={goToPrev5}>
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carsoul_button_bg_right_5 mx-2" type="button" onClick={goToNext5}>
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>




      </section>
      {/* featured in section */}
      {/* <section>
        <div className='maaq_con_three2 py-5'>
          <h2 className='text-center mb-5 featuredin'><b>Featured in</b></h2>
          <div className=' maaq_con_three nav_green_box_2 '>
            <div class="marquee_2">

              <div>
                <img src={logo1} alt={logo1} className='img-fluid ' style={{ width: 250, height: 60 }} /> &nbsp;
                &nbsp;  &nbsp;
                <img src={logo2} alt={logo2} className='img-fluid ' style={{ width: 350, height: 60 }} />  &nbsp; &nbsp;
                <img src={logo3} alt={logo3} className='img-fluid ' style={{ width: 300, height: 60 }} /> &nbsp; &nbsp;  &nbsp;
                <img src={logo4} alt={logo4} className='img-fluid ' style={{ width: 60, height: 60 }} /> &nbsp;    &nbsp;
                <img src={logo5} alt={logo5} className='img-fluid ' style={{ width: 150, height: 60 }} /> &nbsp;   &nbsp;
                <img src={logo7} alt={logo7} className='img-fluid ' style={{ width: 100, height: 60 }} /> &nbsp;   &nbsp;  &nbsp;
                <img src={logo8} alt={logo8} className='img-fluid ' style={{ width: 100, height: 60 }} />  &nbsp;&nbsp;
                <img src={logo1} alt={logo1} className='img-fluid ' style={{ width: 250, height: 60 }} /> &nbsp;
                &nbsp;  &nbsp;
                <img src={logo2} alt={logo2} className='img-fluid ' style={{ width: 350, height: 60 }} />  &nbsp; &nbsp;
                <img src={logo3} alt={logo3} className='img-fluid ' style={{ width: 300, height: 60 }} /> &nbsp; &nbsp;  &nbsp;
                <img src={logo4} alt={logo4} className='img-fluid ' style={{ width: 60, height: 60 }} /> &nbsp;    &nbsp;
                <img src={logo5} alt={logo5} className='img-fluid ' style={{ width: 150, height: 60 }} /> &nbsp;   &nbsp;
                <img src={logo7} alt={logo7} className='img-fluid ' style={{ width: 100, height: 60 }} /> &nbsp;   &nbsp;  &nbsp;
                <img src={logo8} alt={logo8} className='img-fluid ' style={{ width: 100, height: 60 }} />  &nbsp;&nbsp;
                <img src={logo1} alt={logo1} className='img-fluid ' style={{ width: 250, height: 60 }} /> &nbsp;
                &nbsp;  &nbsp;
                <img src={logo2} alt={logo2} className='img-fluid ' style={{ width: 350, height: 60 }} />  &nbsp; &nbsp;
                <img src={logo3} alt={logo3} className='img-fluid ' style={{ width: 300, height: 60 }} /> &nbsp; &nbsp;  &nbsp;
                <img src={logo4} alt={logo4} className='img-fluid ' style={{ width: 60, height: 60 }} /> &nbsp;    &nbsp;
                <img src={logo5} alt={logo5} className='img-fluid ' style={{ width: 150, height: 60 }} /> &nbsp;   &nbsp;
                <img src={logo7} alt={logo7} className='img-fluid ' style={{ width: 100, height: 60 }} /> &nbsp;   &nbsp;  &nbsp;
                <img src={logo8} alt={logo8} className='img-fluid ' style={{ width: 100, height: 60 }} />  &nbsp;&nbsp;
                <img src={logo1} alt={logo1} className='img-fluid ' style={{ width: 250, height: 60 }} /> &nbsp;
                &nbsp;  &nbsp;
                <img src={logo2} alt={logo2} className='img-fluid ' style={{ width: 350, height: 60 }} />  &nbsp; &nbsp;
                <img src={logo3} alt={logo3} className='img-fluid ' style={{ width: 300, height: 60 }} /> &nbsp; &nbsp;  &nbsp;
                <img src={logo4} alt={logo4} className='img-fluid ' style={{ width: 60, height: 60 }} /> &nbsp;    &nbsp;
                <img src={logo5} alt={logo5} className='img-fluid ' style={{ width: 150, height: 60 }} /> &nbsp;   &nbsp;
                <img src={logo7} alt={logo7} className='img-fluid ' style={{ width: 100, height: 60 }} /> &nbsp;   &nbsp;  &nbsp;
                <img src={logo8} alt={logo8} className='img-fluid ' style={{ width: 100, height: 60 }} />  &nbsp;&nbsp;
                <img src={logo1} alt={logo1} className='img-fluid ' style={{ width: 250, height: 60 }} /> &nbsp;
                &nbsp;  &nbsp;
                <img src={logo2} alt={logo2} className='img-fluid ' style={{ width: 350, height: 60 }} />  &nbsp; &nbsp;
                <img src={logo3} alt={logo3} className='img-fluid ' style={{ width: 300, height: 60 }} /> &nbsp; &nbsp;  &nbsp;
                <img src={logo4} alt={logo4} className='img-fluid ' style={{ width: 60, height: 60 }} /> &nbsp;    &nbsp;
                <img src={logo5} alt={logo5} className='img-fluid ' style={{ width: 150, height: 60 }} /> &nbsp;   &nbsp;
                <img src={logo7} alt={logo7} className='img-fluid ' style={{ width: 100, height: 60 }} /> &nbsp;   &nbsp;  &nbsp;
                <img src={logo8} alt={logo8} className='img-fluid ' style={{ width: 100, height: 60 }} />  &nbsp;&nbsp;



              </div>


            </div>

          </div>
        </div>
      </section> */}

      {/* musings from EarthBased   */}

      <section>

        <div className='container'>
          <h1 className='text-center mt-5 '>Blogs</h1>
          <h1 className='text-center mt-3 sustabinable_head'> Musings from EarthBased</h1>

          <p className='text-center mt-3 col-12 col-md-8 col-lg-6 col-xl-4 m-auto musing_text_size'>Reflections of EarthBased: Through our blogs, we inspire conscious consumption, guiding individuals to embrace a sustainable lifestyle as the default choice. Join our inclusive community dedicated to reshaping consumption habits, minimizing waste, and prioritizing environmental stewardship.

          </p>
          <div className='d-none d-md-block  text-center'>
            <div className='row    roling_marg     d-flex flex-row justify-content-center mt-4 '>
              {
                blogsData.map(blog => {
                  return <div className='col-6 '>
                    <div className='text-center'>
                      <img src={post_url + JSON.parse(blog.img_urls)[0]} alt={post_url + JSON.parse(blog.img_urls)[0]} className='  img-fluid' />
                    </div>
                    <h6 className='to_blogs_page'><strong>{blog.title}</strong> </h6>
                    <a href="/blog" className='read_blog_more'><p className='read_blog_more'>Read More</p></a>
                  </div>
                })
              }
              {/* <div className='col-6 '>
                <div className='text-center'>
                  <img src={example_bloag_2} alt={example_bloag_2} className='  img-fluid' />
                </div>
                <h6 className='to_blogs_page'><strong>5 easy ways to incorporate organic foods into yur daily meals </strong> </h6>
                <a href="/blog" className='read_blog_more'><p className='read_blog_more'>Read More</p></a>
              </div>
              <div className='col-6 '>
                <div className='text-center'>
                  <img src={example_bloag_1} alt={example_bloag_1} className='  img-fluid' />
                </div>
                <h6 className='to_blogs_page '><strong> The ultimate reason to invest in quality face massage tools from home use</strong></h6>
                <a href="/blog" className='read_blog_more'><p className='read_blog_more'>Read More</p></a>
              </div> */}

            </div>
          </div>
          <div className='d-block d-md-none mt-5 blog_slider text-center'>
            <div class=" w-100  container ">
              <Slider ref={sliderRef4} {...settings4} >
                {
                  blogsData.map(blog => {
                    return <div>
                      <div>
                        <div className='text-center'>
                          <img src={post_url + JSON.parse(blog.img_urls)[0]} alt={post_url + JSON.parse(blog.img_urls)[0]} className='  img-fluid' />
                        </div>
                        <h6 className='to_blogs_page'><strong>{blog.title}</strong> </h6>
                        <a href="/blog" className='read_blog_more'><p className='read_blog_more'>Read More</p></a>
                      </div>
                    </div>
                  })
                }
                {/* <div>
                  <div>
                    <div className='text-center'>
                      <img src={example_bloag_2} alt={example_bloag_2} className='  img-fluid' />
                    </div>
                    <h6 className='to_blogs_page'><strong>5 easy ways to incorporate organic foods into yur daily meals </strong> </h6>
                    <a href="/blog" className='read_blog_more'><p className='read_blog_more'>Read More</p></a>
                  </div>
                </div>
                <div>
                  <div>
                    <div className='text-center'>
                      <img src={example_bloag_1} alt={example_bloag_1} className='  img-fluid' />
                    </div>
                    <h6 className='to_blogs_page '><strong> The ultimate reason to invest in quality face massage tools from home use</strong></h6>
                    <a href="/blog" className='read_blog_more'><p className='read_blog_more'>Read More</p></a>
                  </div>
                </div> */}

              </Slider>
            </div>

            <div className='text-center'>
              <button class="carsoul_button_bg4 mx-2" type="button" onClick={goToPrev4}>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carsoul_button_bg4 mx-2" type="button" onClick={goToNext4}>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className='text-center'>
            <a href="/blog" >   <button className='view_blogs_btn'> <strong>View All Blogs</strong></button></a>
          </div>
        </div >


      </section >

      {/* on instagram   */}

      <section section >
        <div className='container mt-4'>
          <h3 className='text-center sustabinable_head'>on instagram @EarthBased.store</h3>
          <div className='row     roling_marg    img_row_jhkuh  '>
            <div className='col-4 col-lg-2 mt-4'>
              <img src={coffee_mocha_front_bg_large} alt={coffee_mocha_front_bg_large} className='img-fluid insta_img' />
            </div>
            <div className='col-4  col-lg-2 mt-4'>
              <img src={cheese_about_lg} alt={cheese_about_lg} className='img-fluid insta_img' />
            </div>
            <div className='col-4 col-lg-2  mt-4'>
              <img src={kitchen17} alt={kitchen17} className='img-fluid insta_img' />
            </div>
            <div className='col-4 col-lg-2 d-none d-md-block  mt-4'>
              <img src={ProductImg6_Homepage} alt={ProductImg6_Homepage} className='img-fluid insta_img' />
            </div>
            <div className='col-4 col-lg-2 d-none d-md-block    mt-4'>
              <img src={ProductImg7_Homepage} alt={ProductImg7_Homepage} className='img-fluid insta_img' />
            </div>
            <div className='col-4 col-lg-2  d-none d-md-block   mt-4'>
              <img src={ProductImg1_Homepage} alt={ProductImg1_Homepage} className='img-fluid insta_img' />
            </div>
          </div>
        </div>
      </section >


      {/* Key fact about company  */}
      {/* <section section className=' my-5' >
        <div className='hello container'>
          <h6 className='text-center mt-5'>key fact about company</h6>
          <div className="text-center">
            <Button variant="success" className="mb-3 mt-3 Getintouch" style={{ borderRadius: '50px' }}><a href='/contact' style={{ textDecoration: 'none', color: 'white' }}>Get in Touch</a></Button>
          </div>
          <div className="text-center container">
            <div className='mt-5 row '>

              <div className='col-md-3 col-6'   >
                <div className='  row '>
                  <Col lg={4} className='pt-4 star_left'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="70" viewBox="0 0 68 67" fill="none">
                      <path d="M34.9241 63.284C33.8969 64.4081 32.171 64.3805 31.1804 63.2241C25.3019 56.3616 21.5345 45.5307 21.7303 33.3107C21.9192 21.5188 25.7559 11.1334 31.5059 4.4253C32.8459 2.86193 35.1923 2.89949 36.4817 4.50496C42.014 11.3938 45.5162 21.897 45.3273 33.6893C45.1315 45.9089 41.0192 56.6133 34.9241 63.284Z" stroke="#222222" stroke-width="2.5" />
                      <path d="M3.74743 34.9611C2.621 33.9364 2.64477 32.2105 3.79901 31.2173C10.6484 25.3234 21.4708 21.5319 33.6911 21.7004C45.4835 21.863 55.8775 25.6765 62.5983 31.4114C64.1647 32.748 64.1324 35.0945 62.5298 36.3874C55.6533 41.9351 45.1579 45.4608 33.3653 45.2981C21.1452 45.1296 10.4317 41.0413 3.74743 34.9611Z" stroke="#222222" stroke-width="2.5" />
                      <circle cx="33.4673" cy="33.4666" r="5.1753" stroke="#222222" stroke-width="2.31229" />
                    </svg>

                  </Col>
                  <Col lg={8} md={4} style={{ lineHeight: 'noraml !important' }}>
                    <p className='keyfact_para'>450+</p>
                    <p className='keyfact_para1' style={{ marginTop: '-6%' }}>Glorious years</p>
                  </Col>

                </div>

              </div >

              <div className='col-md-3 col-6'   >
                <div className='  row '>
                  <Col lg={4} className='pt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 65 65" fill="none">
                      <g clip-path="url(#clip0_1_5805)">
                        <path d="M62.5954 24.0305C57.1659 22.9334 51.6652 23.5488 46.2471 25.8607C45.7901 26.0558 45.5617 26.5711 45.7243 27.0406L46.318 28.7548C43.8796 28.7556 41.854 28.1169 39.7284 27.444C39.0819 27.2393 38.4133 27.0277 37.7262 26.832C34.5294 25.9219 31.3076 26.7058 28.8863 28.9825L28.588 29.2629C24.4525 30.1962 21.5974 30.1368 18.1838 29.0028L18.8634 27.0406C19.026 26.5711 18.7977 26.0558 18.3406 25.8607C12.9225 23.549 7.42194 22.9331 1.9923 24.0305C1.55091 24.1197 1.23352 24.5076 1.23352 24.9579V48.4312C1.23352 48.9538 1.657 49.3773 2.17963 49.3773H10.4544C10.8576 49.3773 11.2164 49.1218 11.3484 48.7407L11.7204 47.6665C14.8764 48.8536 17.3094 51.385 18.6668 52.7984C18.8032 52.9404 18.9296 53.072 19.0458 53.191L28.7914 63.1772C29.3958 63.7963 30.2107 64.1403 31.0859 64.1456C31.093 64.1457 31.0998 64.1457 31.1067 64.1457C31.987 64.1457 32.812 63.8053 33.4319 63.1854C33.8213 62.796 34.0918 62.3321 34.2438 61.8391C35.6916 62.6481 37.5593 62.4382 38.7885 61.2093C39.4274 60.5702 39.791 59.7584 39.879 58.9228C40.2145 59.0176 40.5653 59.0665 40.9242 59.0665C41.9418 59.0665 42.8966 58.6723 43.6124 57.9564C44.2989 57.2699 44.6673 56.3838 44.7179 55.4832C45.9308 55.7345 47.244 55.3907 48.1838 54.4513C49.5708 53.0643 49.658 50.8974 48.4422 49.3696C48.7695 49.305 49.0956 49.2077 49.4167 49.0768C50.3893 48.6799 51.2868 48.2288 52.1549 47.7927C52.3739 47.6827 52.5874 47.5758 52.7996 47.4706L53.2394 48.7407C53.3714 49.1218 53.7303 49.3773 54.1334 49.3773H62.4082C62.9308 49.3773 63.3543 48.9538 63.3543 48.4312V24.9579C63.3542 24.5076 63.0368 24.1197 62.5954 24.0305ZM9.78089 47.4851H3.12586V25.7441C7.65594 24.973 12.2424 25.4847 16.7825 27.267L9.78089 47.4851ZM46.8458 53.1131C46.101 53.8575 44.8896 53.8575 44.1453 53.1131L38.1919 47.0259C37.8271 46.6519 37.2281 46.6445 36.8541 47.0096C36.4801 47.3746 36.4729 47.9735 36.8379 48.3474L42.2664 53.91C42.2675 53.9111 42.2687 53.912 42.2698 53.9132C42.2714 53.9148 42.2728 53.9167 42.2745 53.9183C43.0188 54.6626 43.0188 55.874 42.2745 56.6184C41.5299 57.3629 40.3183 57.3628 39.5743 56.6188L33.3681 50.2786C33.003 49.9046 32.4039 49.8973 32.0303 50.2623C31.6562 50.6273 31.6491 51.2262 32.014 51.6001L37.4426 57.1627C37.4439 57.164 37.4453 57.1651 37.4467 57.1664C37.448 57.1678 37.4493 57.1694 37.4507 57.1708V57.1709C37.8092 57.5293 38.0065 58.0088 38.0065 58.5211C38.0065 59.0334 37.8092 59.5127 37.451 59.871C36.7062 60.6154 35.4948 60.6152 34.7505 59.8712L28.0118 52.9987C27.6468 52.6247 27.0477 52.6174 26.6741 52.9824C26.3 53.3474 26.2928 53.9463 26.6578 54.3202L32.0863 59.8827C32.0875 59.884 32.0889 59.8851 32.0903 59.8865C32.0917 59.8879 32.093 59.8895 32.0944 59.8909C32.6335 60.4303 32.6336 61.3079 32.0945 61.8473C31.8302 62.1116 31.478 62.2542 31.0982 62.2535C30.7326 62.2513 30.3944 62.1098 30.1461 61.8557L20.4005 51.8694C20.2876 51.7538 20.1647 51.6257 20.0321 51.4877C18.5591 49.954 15.9175 47.2056 12.3404 45.8777L17.5649 30.7912C19.6039 31.4698 21.4871 31.8025 23.5004 31.8025C24.3271 31.8025 25.1773 31.7443 26.0675 31.633L23.8781 33.6916C22.8308 34.6764 22.2773 35.9568 22.2773 37.3945V46.901C22.2773 47.4236 22.7008 47.8471 23.2234 47.8471C27.3009 47.8471 31.5185 45.2682 31.5185 40.9521C31.5185 39.4623 32.6928 38.3975 33.593 37.6616L43.9033 47.9656C44.4007 48.4627 44.9712 48.84 45.5827 49.0921L46.8314 50.3974C47.5795 51.1802 47.586 52.373 46.8458 53.1131ZM51.3053 46.1019C50.4697 46.5215 49.6058 46.9557 48.7015 47.3246C47.4727 47.8263 46.1792 47.5654 45.2404 46.6274L34.3228 35.7165C33.968 35.362 33.3986 35.3459 33.0244 35.6794C32.924 35.7689 32.7865 35.8799 32.6273 36.0083C31.5784 36.8551 29.6258 38.4312 29.6258 40.9523C29.6258 42.7312 28.58 43.8851 27.7028 44.5398C26.7302 45.2658 25.4789 45.7417 24.169 45.8984V37.3947C24.169 36.4663 24.4976 35.7059 25.1739 35.0701L30.1825 30.3609C32.1067 28.5515 34.6675 27.9284 37.208 28.6518C37.8686 28.8397 38.5237 29.0472 39.1572 29.2478C41.5087 29.9921 43.9357 30.7583 46.9685 30.6334L52.1753 45.6683C51.8816 45.8125 51.5907 45.9584 51.3053 46.1019ZM61.462 47.4851H54.8069L47.8054 27.2672C52.3453 25.4847 56.9315 24.9732 61.462 25.7442V47.4851ZM10.2846 22.403H23.0929V25.0805C23.0929 25.6032 23.5163 26.0266 24.039 26.0266H40.5488C41.0714 26.0266 41.4949 25.6032 41.4949 25.0805V22.403H54.3031C54.8257 22.403 55.2492 21.9796 55.2492 21.4569V17.5011C55.2492 14.2651 53.3192 11.4343 50.4609 10.1942C51.3958 9.15819 51.9656 7.7929 51.9656 6.2978C51.9656 3.06855 49.3111 0.441406 46.0483 0.441406C42.7853 0.441406 40.1308 3.06855 40.1308 6.2978C40.1308 7.79416 40.7015 9.16059 41.6379 10.197C39.8298 10.9876 38.364 12.4307 37.5481 14.2423C37.2781 14.0848 36.9968 13.9437 36.7066 13.8178C37.6414 12.7818 38.2112 11.4165 38.2112 9.92151C38.2112 6.69214 35.5567 4.06499 32.2939 4.06499C29.031 4.06499 26.3765 6.69214 26.3765 9.92151C26.3765 11.4166 26.9463 12.7819 27.8812 13.818C27.591 13.9438 27.3097 14.0849 27.0398 14.2424C26.224 12.4307 24.758 10.9877 22.9501 10.1971C23.8864 9.16084 24.4571 7.79441 24.4571 6.29805C24.4571 3.06881 21.8026 0.441659 18.5398 0.441659C15.2769 0.441659 12.6224 3.06881 12.6224 6.29805C12.6224 7.79315 13.1922 9.15857 14.127 10.1945C11.2688 11.4345 9.33875 14.2654 9.33875 17.5013V21.4572C9.33849 21.9794 9.7621 22.403 10.2846 22.403ZM39.6026 24.1343H24.9852V21.1247C24.9852 18.2652 26.9613 15.8192 29.7259 15.1969C30.5031 15.5689 31.3743 15.7777 32.294 15.7777C33.2137 15.7777 34.085 15.5689 34.862 15.1969C37.6267 15.8192 39.6028 18.2652 39.6028 21.1247V24.1343H39.6026ZM46.0483 2.33349C48.2677 2.33349 50.0734 4.11179 50.0734 6.29767C50.0734 8.48356 48.2677 10.262 46.0483 10.262C43.8287 10.262 42.023 8.48356 42.023 6.29767C42.023 4.11179 43.8287 2.33349 46.0483 2.33349ZM43.4809 11.5737C44.2579 11.9455 45.1289 12.1542 46.0483 12.1542C46.9679 12.1542 47.8392 11.9453 48.6164 11.5733C51.381 12.1958 53.3571 14.6417 53.3571 17.5011V20.5108H41.47C41.3198 18.5385 40.4525 16.7511 39.1055 15.4314C39.8114 13.4941 41.4627 12.0304 43.4809 11.5737ZM32.2939 5.95708C34.5134 5.95708 36.319 7.7355 36.319 9.92139C36.319 12.1073 34.5134 13.8854 32.2939 13.8854C30.0744 13.8854 28.2687 12.1071 28.2687 9.92126C28.2687 7.73538 30.0744 5.95708 32.2939 5.95708ZM18.5397 2.33349C20.7591 2.33349 22.5648 4.11179 22.5648 6.29767C22.5648 8.48356 20.7591 10.262 18.5397 10.262C16.3201 10.262 14.5144 8.48356 14.5144 6.29767C14.5144 4.11179 16.3201 2.33349 18.5397 2.33349ZM11.2307 17.501C11.2307 14.6416 13.2068 12.1957 15.9715 11.5732C16.7486 11.9452 17.6199 12.1541 18.5397 12.1541C19.459 12.1541 20.33 11.9454 21.107 11.5735C23.1251 12.0303 24.7765 13.4939 25.4825 15.4313C24.1355 16.7509 23.2682 18.5383 23.118 20.5107H11.2307V17.501Z" fill="black" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_5805">
                          <rect width="64.5875" height="64.5875" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                  </Col>
                  <Col lg={8} style={{ lineHeight: 'noraml !important' }}>
                    <p className='keyfact_para'>1500+</p>
                    <p className='keyfact_para1' style={{ marginTop: '-6%' }}>Happy Cilents</p>
                  </Col>

                </div>

              </div >

              <div className='col-md-3 col-6'   >
                <div className='  row '>
                  <Col lg={4} className='pt-3' >
                    <img src={keyfacticon} alt={keyfacticon} />
                  </Col>
                  <Col lg={8} style={{ lineHeight: 'noraml !important' }}>
                    <p className='keyfact_para'>30+</p>
                    <p className='keyfact_para1' style={{ marginTop: '-6%' }}>vendors</p>
                  </Col>
                </div>

              </div >


              <div className='col-md-3 col-6'   >
                <div className='  row '>
                  <Col lg={4} className='pt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 66 66" fill="none">
                      <g clip-path="url(#clip0_1_5814)">
                        <path d="M65.6701 45.2196C65.2136 43.5558 63.8185 42.3177 62.1122 42.0618V17.0521H64.2915C64.8933 17.0521 65.3812 16.5642 65.3812 15.9624V5.06568C65.3812 4.46339 64.8933 3.97601 64.2915 3.97601H16.346C15.7443 3.97601 15.2564 4.46339 15.2564 5.06568V15.9624C15.2564 16.5642 15.7443 17.0521 16.346 17.0521H18.5254V38.8455H17.4357C14.7312 38.8391 12.0821 39.6143 9.80801 41.078V35.5765C9.80801 34.9742 9.32011 34.4868 8.71834 34.4868H1.09065C0.488881 34.4868 0.000976562 34.9742 0.000976562 35.5765V60.6389C0.000976562 61.2406 0.488881 61.7285 1.09065 61.7285H8.71834C9.32011 61.7285 9.80801 61.2406 9.80801 60.6389V55.1378C12.0826 56.6005 14.7312 57.3757 17.4357 57.3699H35.328C36.5677 57.3677 37.8016 57.2049 38.9993 56.8857L62.5916 50.5658C64.913 49.9332 66.2884 47.5453 65.6701 45.2196ZM17.4357 6.15535H63.2019V14.8727H17.4357V6.15535ZM20.7047 17.0521H59.9328V42.2491L47.2862 45.6405C46.7653 44.3986 45.7027 43.4659 44.404 43.11L29.7216 39.1721C28.8948 38.9545 28.0435 38.8444 27.1885 38.8455H20.7047V17.0521ZM7.62867 59.5492H2.18032V36.6661H7.62867V59.5492ZM62.026 48.4604L38.4379 54.7803C37.4233 55.0511 36.3783 55.1889 35.328 55.1905H17.4357C14.8413 55.1964 12.3156 54.3546 10.2438 52.793L9.80801 52.4663V43.749L10.2438 43.4218C12.3156 41.8601 14.8413 41.0179 17.4357 41.0248H27.1885C27.8541 41.0243 28.5176 41.1105 29.1619 41.2807L43.8395 45.2154C44.7067 45.4543 45.3415 46.1975 45.4404 47.0919C45.4521 47.1366 45.4665 47.1808 45.4841 47.2239C45.4713 47.2707 45.4617 47.3181 45.4553 47.3665C45.4564 47.5437 45.4325 47.7203 45.3835 47.8906C45.1271 48.8403 44.2667 49.5006 43.2829 49.5022C43.0908 49.5038 42.9004 49.4793 42.7152 49.4304L33.453 46.9467C33.0731 46.8339 32.6618 46.9361 32.3788 47.2138C32.0962 47.4915 31.9861 47.9007 32.092 48.2827C32.1979 48.6642 32.5027 48.959 32.8885 49.051L42.1507 51.5358C42.5205 51.6331 42.902 51.6821 43.285 51.6815C45.2441 51.6805 46.9611 50.37 47.4788 48.4801C47.5394 48.2614 47.5804 48.038 47.6022 47.8124L60.8863 44.2502C60.981 44.2262 61.0837 44.2018 61.1805 44.1858C62.2654 44.0459 63.2854 44.7317 63.5658 45.7884C63.6147 45.9725 63.6392 46.1624 63.6376 46.3529C63.6392 47.3394 62.9784 48.2034 62.026 48.4604Z" fill="black" />
                        <path d="M34.8679 21.4117H45.7646C46.3663 21.4117 46.8542 20.9238 46.8542 20.322C46.8542 19.7197 46.3663 19.2324 45.7646 19.2324H34.8679C34.2661 19.2324 33.7782 19.7197 33.7782 20.322C33.7782 20.9238 34.2661 21.4117 34.8679 21.4117Z" fill="black" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_5814">
                          <rect width="65.816" height="65.816" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                  </Col>
                  <Col lg={8} style={{ lineHeight: 'noraml !important' }}>
                    <p className='keyfact_para'>700+</p>
                    <p className='keyfact_para1' style={{ marginTop: '-6%' }}>Products</p>
                  </Col>
                </div>

              </div >
            </div>
          </div>
        </div>
      </section> */}

      <div className='about_section8 mt-5'>
        <Container>
          <div className='row'>
            <Col lg={12} md={12} sm={12} >
              <h1 className='about_headings text-center'>key fact about company</h1>
              {/* <div className='d-flex flex-row justify-content-center '><button className='keyfact_button Getintouch d-none d-md-block'><a href='/contact' style={{textDecoration:'none',color: 'white'}}>get in touch</a></button></div> */}
            </Col>
          </div>
        </Container>
      </div>


      <section className=' mb-5' >
        <div className='container hello text-center'>
          <div className='row     roling_marg    '>
            {keyFactsData.map((keyFact) => {
              return <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <div className='row    roling_marg     d-flex flex-row justify-content-center'>
                  <div className="col-lg-4   col-6 mt-3 d-flex flex-row justify-content-center">
                    <img src={post_url + keyFact.icon} />
                  </div>
                  <div className='col-lg-8   col-6  ' style={{ lineHeight: 'noraml !important' }}>
                    <p className='keyfact_para'>{keyFact.count}+</p>
                    <p className='keyfact_para1' style={{ marginTop: '-6%' }}>{keyFact.title}</p>
                  </div>
                </div>
              </div >
            })}

            {/* <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
              <div className='row    roling_marg     d-flex flex-row justify-content-center'>
                <div className="col-lg-4   col-6 mt-3 d-flex flex-row justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 68 67" fill="none " className='keyy_images'>
                    <path d="M34.9241 63.284C33.8969 64.4081 32.171 64.3805 31.1804 63.2241C25.3019 56.3616 21.5345 45.5307 21.7303 33.3107C21.9192 21.5188 25.7559 11.1334 31.5059 4.4253C32.8459 2.86193 35.1923 2.89949 36.4817 4.50496C42.014 11.3938 45.5162 21.897 45.3273 33.6893C45.1315 45.9089 41.0192 56.6133 34.9241 63.284Z" stroke="#222222" stroke-width="2.5" />
                    <path d="M3.74743 34.9611C2.621 33.9364 2.64477 32.2105 3.79901 31.2173C10.6484 25.3234 21.4708 21.5319 33.6911 21.7004C45.4835 21.863 55.8775 25.6765 62.5983 31.4114C64.1647 32.748 64.1324 35.0945 62.5298 36.3874C55.6533 41.9351 45.1579 45.4608 33.3653 45.2981C21.1452 45.1296 10.4317 41.0413 3.74743 34.9611Z" stroke="#222222" stroke-width="2.5" />
                    <circle cx="33.4673" cy="33.4666" r="5.1753" stroke="#222222" stroke-width="2.31229" />
                  </svg>
                </div>
                <div className='col-lg-8   col-6  ' style={{ lineHeight: 'noraml !important' }}>
                  <p className='keyfact_para'>450+</p>
                  <p className='keyfact_para1' style={{ marginTop: '-6%' }}>Glorious years</p>
                </div>
              </div>
            </div >

            <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
              <div className='row     roling_marg    d-flex flex-row justify-content-center'>
                <div className="col-lg-4   col-6   mt-3" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 65 65" fill="none " className='keyy_images'>
                    <g clip-path="url(#clip0_1_5805)">
                      <path d="M62.5954 24.0305C57.1659 22.9334 51.6652 23.5488 46.2471 25.8607C45.7901 26.0558 45.5617 26.5711 45.7243 27.0406L46.318 28.7548C43.8796 28.7556 41.854 28.1169 39.7284 27.444C39.0819 27.2393 38.4133 27.0277 37.7262 26.832C34.5294 25.9219 31.3076 26.7058 28.8863 28.9825L28.588 29.2629C24.4525 30.1962 21.5974 30.1368 18.1838 29.0028L18.8634 27.0406C19.026 26.5711 18.7977 26.0558 18.3406 25.8607C12.9225 23.549 7.42194 22.9331 1.9923 24.0305C1.55091 24.1197 1.23352 24.5076 1.23352 24.9579V48.4312C1.23352 48.9538 1.657 49.3773 2.17963 49.3773H10.4544C10.8576 49.3773 11.2164 49.1218 11.3484 48.7407L11.7204 47.6665C14.8764 48.8536 17.3094 51.385 18.6668 52.7984C18.8032 52.9404 18.9296 53.072 19.0458 53.191L28.7914 63.1772C29.3958 63.7963 30.2107 64.1403 31.0859 64.1456C31.093 64.1457 31.0998 64.1457 31.1067 64.1457C31.987 64.1457 32.812 63.8053 33.4319 63.1854C33.8213 62.796 34.0918 62.3321 34.2438 61.8391C35.6916 62.6481 37.5593 62.4382 38.7885 61.2093C39.4274 60.5702 39.791 59.7584 39.879 58.9228C40.2145 59.0176 40.5653 59.0665 40.9242 59.0665C41.9418 59.0665 42.8966 58.6723 43.6124 57.9564C44.2989 57.2699 44.6673 56.3838 44.7179 55.4832C45.9308 55.7345 47.244 55.3907 48.1838 54.4513C49.5708 53.0643 49.658 50.8974 48.4422 49.3696C48.7695 49.305 49.0956 49.2077 49.4167 49.0768C50.3893 48.6799 51.2868 48.2288 52.1549 47.7927C52.3739 47.6827 52.5874 47.5758 52.7996 47.4706L53.2394 48.7407C53.3714 49.1218 53.7303 49.3773 54.1334 49.3773H62.4082C62.9308 49.3773 63.3543 48.9538 63.3543 48.4312V24.9579C63.3542 24.5076 63.0368 24.1197 62.5954 24.0305ZM9.78089 47.4851H3.12586V25.7441C7.65594 24.973 12.2424 25.4847 16.7825 27.267L9.78089 47.4851ZM46.8458 53.1131C46.101 53.8575 44.8896 53.8575 44.1453 53.1131L38.1919 47.0259C37.8271 46.6519 37.2281 46.6445 36.8541 47.0096C36.4801 47.3746 36.4729 47.9735 36.8379 48.3474L42.2664 53.91C42.2675 53.9111 42.2687 53.912 42.2698 53.9132C42.2714 53.9148 42.2728 53.9167 42.2745 53.9183C43.0188 54.6626 43.0188 55.874 42.2745 56.6184C41.5299 57.3629 40.3183 57.3628 39.5743 56.6188L33.3681 50.2786C33.003 49.9046 32.4039 49.8973 32.0303 50.2623C31.6562 50.6273 31.6491 51.2262 32.014 51.6001L37.4426 57.1627C37.4439 57.164 37.4453 57.1651 37.4467 57.1664C37.448 57.1678 37.4493 57.1694 37.4507 57.1708V57.1709C37.8092 57.5293 38.0065 58.0088 38.0065 58.5211C38.0065 59.0334 37.8092 59.5127 37.451 59.871C36.7062 60.6154 35.4948 60.6152 34.7505 59.8712L28.0118 52.9987C27.6468 52.6247 27.0477 52.6174 26.6741 52.9824C26.3 53.3474 26.2928 53.9463 26.6578 54.3202L32.0863 59.8827C32.0875 59.884 32.0889 59.8851 32.0903 59.8865C32.0917 59.8879 32.093 59.8895 32.0944 59.8909C32.6335 60.4303 32.6336 61.3079 32.0945 61.8473C31.8302 62.1116 31.478 62.2542 31.0982 62.2535C30.7326 62.2513 30.3944 62.1098 30.1461 61.8557L20.4005 51.8694C20.2876 51.7538 20.1647 51.6257 20.0321 51.4877C18.5591 49.954 15.9175 47.2056 12.3404 45.8777L17.5649 30.7912C19.6039 31.4698 21.4871 31.8025 23.5004 31.8025C24.3271 31.8025 25.1773 31.7443 26.0675 31.633L23.8781 33.6916C22.8308 34.6764 22.2773 35.9568 22.2773 37.3945V46.901C22.2773 47.4236 22.7008 47.8471 23.2234 47.8471C27.3009 47.8471 31.5185 45.2682 31.5185 40.9521C31.5185 39.4623 32.6928 38.3975 33.593 37.6616L43.9033 47.9656C44.4007 48.4627 44.9712 48.84 45.5827 49.0921L46.8314 50.3974C47.5795 51.1802 47.586 52.373 46.8458 53.1131ZM51.3053 46.1019C50.4697 46.5215 49.6058 46.9557 48.7015 47.3246C47.4727 47.8263 46.1792 47.5654 45.2404 46.6274L34.3228 35.7165C33.968 35.362 33.3986 35.3459 33.0244 35.6794C32.924 35.7689 32.7865 35.8799 32.6273 36.0083C31.5784 36.8551 29.6258 38.4312 29.6258 40.9523C29.6258 42.7312 28.58 43.8851 27.7028 44.5398C26.7302 45.2658 25.4789 45.7417 24.169 45.8984V37.3947C24.169 36.4663 24.4976 35.7059 25.1739 35.0701L30.1825 30.3609C32.1067 28.5515 34.6675 27.9284 37.208 28.6518C37.8686 28.8397 38.5237 29.0472 39.1572 29.2478C41.5087 29.9921 43.9357 30.7583 46.9685 30.6334L52.1753 45.6683C51.8816 45.8125 51.5907 45.9584 51.3053 46.1019ZM61.462 47.4851H54.8069L47.8054 27.2672C52.3453 25.4847 56.9315 24.9732 61.462 25.7442V47.4851ZM10.2846 22.403H23.0929V25.0805C23.0929 25.6032 23.5163 26.0266 24.039 26.0266H40.5488C41.0714 26.0266 41.4949 25.6032 41.4949 25.0805V22.403H54.3031C54.8257 22.403 55.2492 21.9796 55.2492 21.4569V17.5011C55.2492 14.2651 53.3192 11.4343 50.4609 10.1942C51.3958 9.15819 51.9656 7.7929 51.9656 6.2978C51.9656 3.06855 49.3111 0.441406 46.0483 0.441406C42.7853 0.441406 40.1308 3.06855 40.1308 6.2978C40.1308 7.79416 40.7015 9.16059 41.6379 10.197C39.8298 10.9876 38.364 12.4307 37.5481 14.2423C37.2781 14.0848 36.9968 13.9437 36.7066 13.8178C37.6414 12.7818 38.2112 11.4165 38.2112 9.92151C38.2112 6.69214 35.5567 4.06499 32.2939 4.06499C29.031 4.06499 26.3765 6.69214 26.3765 9.92151C26.3765 11.4166 26.9463 12.7819 27.8812 13.818C27.591 13.9438 27.3097 14.0849 27.0398 14.2424C26.224 12.4307 24.758 10.9877 22.9501 10.1971C23.8864 9.16084 24.4571 7.79441 24.4571 6.29805C24.4571 3.06881 21.8026 0.441659 18.5398 0.441659C15.2769 0.441659 12.6224 3.06881 12.6224 6.29805C12.6224 7.79315 13.1922 9.15857 14.127 10.1945C11.2688 11.4345 9.33875 14.2654 9.33875 17.5013V21.4572C9.33849 21.9794 9.7621 22.403 10.2846 22.403ZM39.6026 24.1343H24.9852V21.1247C24.9852 18.2652 26.9613 15.8192 29.7259 15.1969C30.5031 15.5689 31.3743 15.7777 32.294 15.7777C33.2137 15.7777 34.085 15.5689 34.862 15.1969C37.6267 15.8192 39.6028 18.2652 39.6028 21.1247V24.1343H39.6026ZM46.0483 2.33349C48.2677 2.33349 50.0734 4.11179 50.0734 6.29767C50.0734 8.48356 48.2677 10.262 46.0483 10.262C43.8287 10.262 42.023 8.48356 42.023 6.29767C42.023 4.11179 43.8287 2.33349 46.0483 2.33349ZM43.4809 11.5737C44.2579 11.9455 45.1289 12.1542 46.0483 12.1542C46.9679 12.1542 47.8392 11.9453 48.6164 11.5733C51.381 12.1958 53.3571 14.6417 53.3571 17.5011V20.5108H41.47C41.3198 18.5385 40.4525 16.7511 39.1055 15.4314C39.8114 13.4941 41.4627 12.0304 43.4809 11.5737ZM32.2939 5.95708C34.5134 5.95708 36.319 7.7355 36.319 9.92139C36.319 12.1073 34.5134 13.8854 32.2939 13.8854C30.0744 13.8854 28.2687 12.1071 28.2687 9.92126C28.2687 7.73538 30.0744 5.95708 32.2939 5.95708ZM18.5397 2.33349C20.7591 2.33349 22.5648 4.11179 22.5648 6.29767C22.5648 8.48356 20.7591 10.262 18.5397 10.262C16.3201 10.262 14.5144 8.48356 14.5144 6.29767C14.5144 4.11179 16.3201 2.33349 18.5397 2.33349ZM11.2307 17.501C11.2307 14.6416 13.2068 12.1957 15.9715 11.5732C16.7486 11.9452 17.6199 12.1541 18.5397 12.1541C19.459 12.1541 20.33 11.9454 21.107 11.5735C23.1251 12.0303 24.7765 13.4939 25.4825 15.4313C24.1355 16.7509 23.2682 18.5383 23.118 20.5107H11.2307V17.501Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5805">
                        <rect width="64.5875" height="64.5875" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className='col-lg-8   col-6  ' style={{ lineHeight: 'noraml !important' }}>
                  <p className='keyfact_para'>1500+</p>
                  <p className='keyfact_para1' style={{ marginTop: '-6%' }}>Happy Cilents</p>
                </div>

              </div>

            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className='row    roling_marg     d-flex flex-row justify-content-center'>
                <div className="col-lg-4   col-6   mt-3 d-flex flex-row justify-content-center" >

                  <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 63 63" fill="none" className='keyy_images'>
                    <path d="M57.8382 47.3435C56.3247 46.0761 54.3806 45.2111 52.114 44.7755C54.2206 43.5377 55.6381 41.2502 55.6381 38.6355C55.6381 34.7103 52.445 31.5172 48.5198 31.5172C48.3513 31.5172 48.1839 31.5258 48.0178 31.5369C49.9324 28.4669 50.9377 24.9576 50.9377 21.2846C50.9389 10.566 42.2186 1.8457 31.5 1.8457C20.7814 1.8457 12.0623 10.566 12.0623 21.2846C12.0623 24.9588 13.0676 28.4669 14.9822 31.5369C14.8161 31.5258 14.6487 31.5172 14.4802 31.5172C10.555 31.5172 7.36189 34.7103 7.36189 38.6355C7.36189 41.2502 8.77939 43.5389 10.886 44.7755C8.61943 45.2111 6.67529 46.0761 5.16182 47.3435C3.02326 49.1338 1.8457 51.6612 1.8457 54.4605V60.416C1.8457 60.8233 2.1767 61.1543 2.58398 61.1543H18.2971H44.7029H60.416C60.8233 61.1543 61.1543 60.8233 61.1543 60.416V54.4605C61.1543 51.6612 59.9767 49.1338 57.8382 47.3435ZM41.6095 45.8263C39.9176 44.4691 37.7668 43.5451 35.2615 43.0935C36.7726 42.2617 37.9784 40.9438 38.6712 39.3529C39.626 38.9739 40.5489 38.5198 41.4323 37.9944C41.4139 38.2061 41.4016 38.4189 41.4016 38.6343C41.4016 41.2465 42.8166 43.534 44.9207 44.7718C43.7247 45.0019 42.6173 45.3538 41.6095 45.8263ZM21.3917 45.8263C20.3827 45.3538 19.2765 45.0019 18.0793 44.7718C20.1834 43.534 21.5984 41.2465 21.5984 38.6343C21.5984 38.4189 21.5873 38.2048 21.5677 37.9944C22.4511 38.5198 23.374 38.9739 24.3288 39.3529C25.0216 40.9438 26.2287 42.2604 27.7385 43.0935C25.2345 43.5451 23.0824 44.4691 21.3917 45.8263ZM13.5548 20.5464C13.7185 16.5252 15.2086 12.8412 17.6006 9.92127C19.0034 10.6854 20.6116 11.3215 22.3613 11.8162C21.575 14.4666 21.1296 17.4431 21.0681 20.5476H13.5548V20.5464ZM23.7911 12.1792C25.9764 12.68 28.3389 12.9679 30.7617 13.0171V20.5464H22.5446C22.6049 17.5588 23.0356 14.7053 23.7911 12.1792ZM41.9319 20.5464C41.8704 17.4419 41.425 14.4654 40.6387 11.815C42.3884 11.3215 43.9966 10.6842 45.3994 9.92004C47.7914 12.8399 49.2815 16.5252 49.4452 20.5451H41.9319V20.5464ZM41.9528 35.8903C41.0878 36.5105 40.1711 37.0506 39.215 37.5071C39.2827 37.0949 39.3184 36.6729 39.3184 36.2422C39.3184 35.6762 39.2569 35.125 39.1412 34.5934C39.5251 33.828 39.8709 33.0122 40.1797 32.1546C41.4323 32.5053 42.6038 32.9323 43.6718 33.4306C42.9384 34.1135 42.3478 34.9502 41.9528 35.8903ZM25.1582 36.241C25.1582 32.744 28.003 29.8979 31.5012 29.8979C34.9982 29.8979 37.8431 32.7428 37.8431 36.241C37.8431 39.738 34.9982 42.5828 31.5012 42.5828C28.003 42.5841 25.1582 39.7392 25.1582 36.241ZM38.4226 32.6123C38.2356 32.2567 38.0215 31.9159 37.784 31.5947C38.1076 31.6563 38.4275 31.7203 38.7425 31.7904C38.6404 32.0697 38.5334 32.3441 38.4226 32.6123ZM35.9457 29.8143C34.8727 29.0698 33.6066 28.5875 32.2383 28.4583V22.0217H40.4554C40.3951 25.0068 39.9644 27.8578 39.2101 30.384C38.1618 30.144 37.0703 29.9533 35.9457 29.8143ZM40.4554 20.5464H32.2383V13.0171C34.6611 12.9679 37.0223 12.68 39.2089 12.1792C39.9644 14.7053 40.3951 17.5588 40.4554 20.5464ZM32.2383 11.5406V3.38502C34.2698 3.72709 36.1893 5.47682 37.7053 8.40041C38.0892 9.13992 38.4337 9.93604 38.7401 10.7728C36.7037 11.2293 34.5023 11.4926 32.2383 11.5406ZM30.7617 3.38502V11.5393C28.4977 11.4926 26.2963 11.2293 24.2587 10.7728C24.5663 9.93481 24.9108 9.13992 25.2935 8.40041C26.8107 5.47805 28.7302 3.72832 30.7617 3.38502ZM30.7617 22.0229V28.4595C29.3934 28.5887 28.1273 29.0711 27.0543 29.8155C25.9297 29.9545 24.8382 30.1453 23.7899 30.3852C23.0344 27.8603 22.6049 25.008 22.5446 22.0229H30.7617ZM25.216 31.5947C24.9773 31.9159 24.7644 32.2567 24.5774 32.6123C24.4666 32.3441 24.3596 32.0697 24.2575 31.7904C24.5725 31.7203 24.8936 31.6563 25.216 31.5947ZM23.8576 34.5922C23.7431 35.1237 23.6804 35.6762 23.6804 36.2422C23.6804 36.6729 23.7173 37.0949 23.7837 37.5071C22.8264 37.0506 21.911 36.5105 21.0459 35.8903C20.6522 34.9515 20.0616 34.1147 19.327 33.4306C20.3938 32.9335 21.5664 32.5065 22.819 32.1546C23.1279 33.011 23.4749 33.8268 23.8576 34.5922ZM54.1615 38.6355C54.1615 41.7461 51.6305 44.2772 48.5198 44.2772C45.4092 44.2772 42.8781 41.7461 42.8781 38.6355C42.8781 35.5249 45.4092 32.9938 48.5198 32.9938C51.6305 32.9938 54.1615 35.5249 54.1615 38.6355ZM45.0142 32.4438C43.7038 31.7682 42.2321 31.1998 40.6399 30.7494C41.425 28.1002 41.8716 25.1249 41.9319 22.0217H49.4476C49.3024 25.659 48.0843 29.0969 45.9026 32.018C45.595 32.1398 45.2985 32.2826 45.0142 32.4438ZM44.3879 8.78678C43.1365 9.43647 41.7178 9.98279 40.181 10.4135C39.8389 9.4623 39.4513 8.55914 39.0169 7.72242C38.2196 6.18557 37.3066 4.92926 36.3111 3.97934C39.423 4.84313 42.1977 6.52887 44.3879 8.78678ZM26.6901 3.97687C25.6946 4.92803 24.7816 6.18434 23.9843 7.71996C23.5499 8.55668 23.1623 9.45984 22.8203 10.411C21.2834 9.98033 19.8635 9.434 18.6133 8.78432C20.8023 6.52887 23.577 4.84436 26.6901 3.97687ZM13.5536 22.0229H21.0693C21.1308 25.1262 21.5763 28.1014 22.3613 30.7506C20.7691 31.201 19.2974 31.7695 17.987 32.445C17.7028 32.2838 17.4062 32.1411 17.0998 32.0193C14.9157 29.0969 13.6976 25.659 13.5536 22.0229ZM8.83846 38.6355C8.83846 35.5249 11.3695 32.9938 14.4802 32.9938C17.5908 32.9938 20.1219 35.5249 20.1219 38.6355C20.1219 41.7461 17.5908 44.2772 14.4802 44.2772C11.3695 44.2772 8.83846 41.7461 8.83846 38.6355ZM3.32227 54.4605C3.32227 49.2741 7.7015 45.9236 14.4802 45.9236C16.6482 45.9236 18.5702 46.2607 20.2104 46.9227C18.4915 48.793 17.5576 51.1912 17.5576 53.8059V59.6777H9.08578V55.4585C9.08578 55.0512 8.75478 54.7202 8.3475 54.7202C7.94021 54.7202 7.60922 55.0512 7.60922 55.4585V59.6777H3.32227V54.4605ZM43.9646 59.6777H39.044V54.9134C39.044 54.5061 38.713 54.1751 38.3057 54.1751C37.8984 54.1751 37.5674 54.5061 37.5674 54.9134V59.6777H25.4301V54.9134C25.4301 54.5061 25.0991 54.1751 24.6918 54.1751C24.2845 54.1751 23.9535 54.5061 23.9535 54.9134V59.6777H19.0354V53.8059C19.0354 48.0006 23.9277 44.2501 31.5 44.2501C39.0723 44.2501 43.9646 48.0006 43.9646 53.8059V59.6777ZM59.6777 59.6777H55.3908V55.4585C55.3908 55.0512 55.0598 54.7202 54.6525 54.7202C54.2452 54.7202 53.9142 55.0512 53.9142 55.4585V59.6777H45.4412V53.8059C45.4412 51.1924 44.5085 48.7942 42.7883 46.9227C44.4285 46.2595 46.3505 45.9236 48.5186 45.9236C55.296 45.9236 59.6765 49.2741 59.6765 54.4605V59.6777H59.6777Z" fill="black" />
                  </svg>
                </div>
                <div className='col-lg-8   col-6  ' style={{ lineHeight: 'noraml !important' }}>
                  <p className='keyfact_para text-center'>30+</p>
                  <p className='keyfact_para1 text-center' style={{ marginTop: '-6%' }}>vendors</p>
                </div>
              </div>

            </div>


            <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
              <div className='row    roling_marg    '>
                <div className="col-lg-4   col-6   mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 66 66" fill="none" className='keyy_images'>
                    <g clip-path="url(#clip0_1_5814)">
                      <path d="M65.6701 45.2196C65.2136 43.5558 63.8185 42.3177 62.1122 42.0618V17.0521H64.2915C64.8933 17.0521 65.3812 16.5642 65.3812 15.9624V5.06568C65.3812 4.46339 64.8933 3.97601 64.2915 3.97601H16.346C15.7443 3.97601 15.2564 4.46339 15.2564 5.06568V15.9624C15.2564 16.5642 15.7443 17.0521 16.346 17.0521H18.5254V38.8455H17.4357C14.7312 38.8391 12.0821 39.6143 9.80801 41.078V35.5765C9.80801 34.9742 9.32011 34.4868 8.71834 34.4868H1.09065C0.488881 34.4868 0.000976562 34.9742 0.000976562 35.5765V60.6389C0.000976562 61.2406 0.488881 61.7285 1.09065 61.7285H8.71834C9.32011 61.7285 9.80801 61.2406 9.80801 60.6389V55.1378C12.0826 56.6005 14.7312 57.3757 17.4357 57.3699H35.328C36.5677 57.3677 37.8016 57.2049 38.9993 56.8857L62.5916 50.5658C64.913 49.9332 66.2884 47.5453 65.6701 45.2196ZM17.4357 6.15535H63.2019V14.8727H17.4357V6.15535ZM20.7047 17.0521H59.9328V42.2491L47.2862 45.6405C46.7653 44.3986 45.7027 43.4659 44.404 43.11L29.7216 39.1721C28.8948 38.9545 28.0435 38.8444 27.1885 38.8455H20.7047V17.0521ZM7.62867 59.5492H2.18032V36.6661H7.62867V59.5492ZM62.026 48.4604L38.4379 54.7803C37.4233 55.0511 36.3783 55.1889 35.328 55.1905H17.4357C14.8413 55.1964 12.3156 54.3546 10.2438 52.793L9.80801 52.4663V43.749L10.2438 43.4218C12.3156 41.8601 14.8413 41.0179 17.4357 41.0248H27.1885C27.8541 41.0243 28.5176 41.1105 29.1619 41.2807L43.8395 45.2154C44.7067 45.4543 45.3415 46.1975 45.4404 47.0919C45.4521 47.1366 45.4665 47.1808 45.4841 47.2239C45.4713 47.2707 45.4617 47.3181 45.4553 47.3665C45.4564 47.5437 45.4325 47.7203 45.3835 47.8906C45.1271 48.8403 44.2667 49.5006 43.2829 49.5022C43.0908 49.5038 42.9004 49.4793 42.7152 49.4304L33.453 46.9467C33.0731 46.8339 32.6618 46.9361 32.3788 47.2138C32.0962 47.4915 31.9861 47.9007 32.092 48.2827C32.1979 48.6642 32.5027 48.959 32.8885 49.051L42.1507 51.5358C42.5205 51.6331 42.902 51.6821 43.285 51.6815C45.2441 51.6805 46.9611 50.37 47.4788 48.4801C47.5394 48.2614 47.5804 48.038 47.6022 47.8124L60.8863 44.2502C60.981 44.2262 61.0837 44.2018 61.1805 44.1858C62.2654 44.0459 63.2854 44.7317 63.5658 45.7884C63.6147 45.9725 63.6392 46.1624 63.6376 46.3529C63.6392 47.3394 62.9784 48.2034 62.026 48.4604Z" fill="black" />
                      <path d="M34.8679 21.4117H45.7646C46.3663 21.4117 46.8542 20.9238 46.8542 20.322C46.8542 19.7197 46.3663 19.2324 45.7646 19.2324H34.8679C34.2661 19.2324 33.7782 19.7197 33.7782 20.322C33.7782 20.9238 34.2661 21.4117 34.8679 21.4117Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5814">
                        <rect width="65.816" height="65.816" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className='col-lg-8   col-6  ' style={{ lineHeight: 'noraml !important' }}>
                  <p className='keyfact_para'>700+</p>
                  <p className='keyfact_para1' style={{ marginTop: '-6%' }}>Products</p>
                </div>
              </div> */}

            {/* </div > */}

            <div className='col-lg-12 col-md-12 col-sm-12 mt-5'>
              <div className='d-flex flex-row justify-content-center '><button className='keyfact_button Getintouch '><a href='/contact' style={{ textDecoration: 'none', color: 'white' }}>get in touch</a></button></div>
            </div>

          </div>
        </div>
      </section>





      <section>
        {/* <div className='container'>
          <div className='row'>
            <div className='col-6 hello'>
              <h6>Hottest Products Now</h6>
            </div>
            <div className='col-6 d-flex flex-row justify-content-end'>
              <button className="p-2 mb-3 mr-1 second_carsoul_button_bg" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="ms-5 p-2 mb-3 second_carsoul_button_bg" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div className='container'>
              <div className='row'>
                <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {cardInfoz.map((card, index) => (
                      <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div className='col-md-3'>
                          <div className='card card-body main_div_card shadow'>
                            <div className='image_border'>
                              <img src={card.image} className='p-3 img-fluid' alt={`product-${index}`} />
                              <img src={maximizeIcon} className='img-fluid maxmize_img_car' onClick={() => handleShowModal(card)} />
                            </div>
                            <div className='d-flex p-2'>
                              <div>
                                <p className='cardpara1'>{card.title}</p>
                                <p className='cardpara2'>{card.description}</p>
                                <p className='cardpara3'>{card.price}</p>
                              </div>
                              <div className=' buy_icon_card'>
                                <img src={buyIcon} alt="Buy" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

 
        <Modal show={showModal} onHide={handleCloseModal} size="xl">
        
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
                  <div>
                    <h3 className='pop_up_descriptionfull'>{selectedCard.descriptionfull}</h3>
                    <p >{selectedCard.stars}</p>
                    <p className="deals_para">{selectedCard.price}</p>
                    <p className="deals_para1">{selectedCard.stocks}</p>
                    <p className="catagerious_para1">Category:  <span className='catagerious_para_in'> {selectedCard.catagerious}</span></p>
                  </div>

                  <div className="mb-4 row">
                    <div className='col-6'>
                      <button className='add_cart_deals_of_the_day'>Add to cart</button>
                    </div>
                    <div className='col-6'>
                      <button className='buy_now_deals_of_the_day'>Buy Now</button>
                    </div>
                  </div>

                  <select className='details_deals_of_the_day mt-4'>
                    <option value="Delivery Details" className="delivery-option">
                      Delivery Details
                    </option>
                    <option value="saab">Home</option>
                    <option value="opel">Office</option>
                    <option value="audi">Other</option>
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
      </Modal>   */}
      </section>




    </>
  )
}

export default Header;
