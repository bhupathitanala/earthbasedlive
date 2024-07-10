import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap'

// Images
import About_image1 from '../assets/about/Image-1-1.png';
import About_image2 from '../assets/about/Image-2.2.png';
import About_img1 from '../assets/khushi-xs.png';
import About_img2 from '../assets/About_img2.png';
import About_img3 from '../assets/About_img3.png';
import About_Logo1 from '../assets/About_Logo1.png';
import About_Logo2 from '../assets/About_Logo2.png';
import About_Logo3 from '../assets/About_Logo3.png';
import About_Logo4 from '../assets/About_Logo4.png';
import About_img4 from '../assets/About_img4.png';
import About_img5 from '../assets/About_img5.jpg';
import founder_two_md from '../assets/founder_two_md.png'
// import founder_one_md from '../assets/founder_one_md.png'
import founder_one_md from '../assets/khushi-xs.png'

import about_flowerimg from '../assets/about_flowerimg.png';
import Team1 from '../assets/Team1.png';
import Team2 from '../assets/Team2.png';
import Team3 from '../assets/Team3.png';
import Team4 from '../assets/Team4.png';
import key_fact_fourth_icon from '../assets/key_fact_fourth_icon.png'
import ourmission_value_mob_img from '../assets/ourmission_value_mob_img.png'
import our_mssion_new_image_one from '../assets/our_mssion_new_image_one.png'
import axios from 'axios';
import example_bloag_2 from '../assets/example_bloag_2.png';
import Apicalls, { post_url }  from "../Apicalls";



export default function About_us() {

  const [showSecondPara, setShowSecondPara] = useState(false);

  // Function to toggle the visibility of the second paragraph
  const toggleSecondPara = () => {
    setShowSecondPara(!showSecondPara);
  };


  const [showSecondPara2, setShowSecondPara2] = useState(false);

  // Function to toggle the visibility of the second paragraph
  const toggleSecondPara2 = () => {
    setShowSecondPara2(!showSecondPara2);
  };

  const [showSecondPara3, setShowSecondPara3] = useState(false);

  // Function to toggle the visibility of the second paragraph
  const toggleSecondPara3 = () => {
    setShowSecondPara3(!showSecondPara3);
  };
  const [keyFactsData, setKeyFactsData] = useState([])

  const [data, setData] = useState({});

  useEffect(() => {
    Promise.all([
      Apicalls.get('about'),
      Apicalls.get('keyfacts'),

    ]).then(([queriesData, keyfactsData]) => {
      setData(queriesData.data)
      setKeyFactsData(keyfactsData.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  console.log(data)


const [inView, setInView] = useState(false);
const Statistic = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector('.counter');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (inView) {
      let counter = 0;
      interval = setInterval(() => {
        if (counter <= value) {
          setDisplayValue(counter);
          counter += Math.ceil(value / 100); // Increment by a fraction of the value for smooth animation
        } else {
          setDisplayValue(value);
          clearInterval(interval);
        }
      }, 50);
    }

    return () => clearInterval(interval);
  }, [value, inView]);

  return (
    <div className="statistic">
      <div className="value">{displayValue}+</div>
      <div className="label">{label}</div>
    </div>
  );
};



  return (
    <>
      <div className='container-fluid'>
        <div className='row m-3 mb-0 about'>
          <div className='col-md-3 text-center' style={{verticalAlign:"middle"}}>
            <img src={About_image1} style={{width:"100%"}}/>
          </div>
          <div className='col-md-6 p-3' style={{textAlign:""}}>
            <h1 className='text-center heading-title'>About</h1>
            <p className='para'>
              Khushi Agrawal & Nikhila Vishnuvajhala started EarthBased to make sustainable living easy, accessible, and affordable. Their aim is to build a community-first e-commerce platform that fulfills the needs of a plant-based lifestyle.
            </p>

            <p className='para'>
              All products on the platform are Plant-Based, Non-Toxic, 100% Cruelty-Free and Made in India. We also extend dry waste management support post-delivery.
            </p>

            <p className='para'>
              They aspire to cater a wide range of plant-based products, in all price ranges, and appreciate even the small changes their customers are making to be more planet-friendly. Our would love to hear from you, tell us what you would like to see on EarthBased and how we can support you to make the green move.
            </p>
          </div>
          <div className='col-md-3 text-center' style={{verticalAlign:"middle"}}>
            <img src={About_image2} style={{width:"100%"}}/>
          </div>
        </div> 





        <div className='row m-3'>
          <div className='col-md-4 ourMission pt-5 pb-5'>
            <h2 className="heading-title text-center mb-5">Our Mission</h2>
                {(data.our_mission ? data.our_mission : '').split('\n').map((text) => {
                  return <p className='para'>{text}</p>
                })}
          </div>
          <div className='col-md-4 text-center'>
              <img src={About_img5} alt={About_img5} style={{ width:"100%" }} className='mt-5' />
          </div>
          <div className='col-md-4 ourMission pt-5 pb-5'>
            <h2 className="heading-title text-center mb-5">Our Vision</h2>
              {(data.our_vision ? data.our_vision : '').split('\n').map((text) => {
                return <p className='para'>{text}</p>
              })}
          </div>
        </div>
      </div>


     
  



      <div className="about_section3">
        <div className='container'>
          <div className='row mob_sec_choose pt-5 pb-5'>
            <div className='col-12 col-md-12'>
              <h1 className='heading-title text-center mb-4'>Why Choose Us?</h1>
              <p className='para text-center mb-3'> Accessible | Affordable | Alternative</p>
              <p className='para sm_para' >Basic Vichaar magazine promotes a plant-based lifestyle for sustainability, advocating conscious consumer choices to reduce our carbon footprint and support ethical brands. Join us in shaping a greener future where every decision matters.</p>
            </div>
          </div>
        </div>
      </div>


      
      <div className='about_section3'>
        <div className='container'>
          <div className='row only_padding_for_card'>

            {/* column1 small device */}

            <div className='col-lg-3 col-md-3 col-sm-12 d-block d-md-none  mob_sec mt-3'>
              <div className="row mario  ">
                <div className="col-sm-4 d-flex flex-row justify-content-center">
                  <img src={About_Logo2} alt={About_Logo2} className='img-fluid logo_img  ' />
                </div>
                <div className="col-sm-10 ">
                  <p className='about_cards_heading'>One-Stop Shop For Ethical Living</p>
                  <p className='para logo_para_mob  mt-4'>Enjoy the freedom to shop with confidence. No hidden clauses, no animal testing. Our values ensure ethical and transparent products.</p>
                </div>
              </div>
            </div>

              
            <div className='col-lg-3 col-md-3 col-sm-12 d-none d-md-block '>
              <div className='text-center p-3 m-1 bg-white pt-5 pb-5'>
                <img src={About_Logo2} alt={About_Logo2} className='img-fluid mb-3' />
                <p className='about_cards_heading'>One-stop Shop for Ethical Living</p>
                <p className='para'>Enjoy the freedom to shop with confidence. No hidden clauses, no animal testing. Our values ensure ethical and transparent products.</p>
              </div>
            </div>

            {/* column2 small device */}
            <div className='col-lg-3 col-md-3 col-sm-12 d-block d-md-none d-flex flex-row justify-content-center mob_sec mt-3'>
              <div className="row ">
                <div className="col-sm-4 d-flex flex-row justify-content-center">
                  <img src={About_Logo1} alt={About_Logo1} className='img-fluid logo_img' />
                </div>
                <div className="col-sm-8">
                  <p className='about_cards_heading'>Social Responsibility</p>
                  <p className='para logo_para_mob mt-4'>Embrace a lifestyle that prioritizes the welfare of all living beings without sacrificing your quality of life and well-being.</p>
                </div>
              </div>
            </div>

            
            {/* column1 large device */}
            <div className='col-lg-3 col-md-3 col-sm-12 d-none d-md-block'>
              <div className='text-center p-3 m-1 bg-white pt-5 pb-5'>
                <img src={About_Logo1} alt={About_Logo1} className='img-fluid mb-3' />
                <p className='about_cards_heading'>Social Responsibility</p>
                <p className='para'>Embrace a lifestyle that prioritizes the welfare of all living beings without sacrificing your quality of life and well-being.</p>
              </div>
            </div>


            

            {/* column3 small device */}
            <div className='col-lg-3 col-md-3 col-sm-12 d-block d-md-none d-flex flex-row justify-content-center mob_sec mt-3'>
              <div className="row">
                <div className="col-sm-4 d-flex flex-row justify-content-center">
                  <img src={About_Logo3} alt={About_Logo3} className='img-fluid logo_img' />
                </div>
                <div className="col-sm-8 ">
                  <p className='about_cards_heading'>Thriving Vegan Community</p>
                  <p className='para logo_para_mob mt-4'>We strive to connect manufacturers and consumers through valuable feedback, advocating for more sustainable product alternatives.</p>
                </div>
              </div>
            </div>


            <div className='col-lg-3 col-md-3 col-sm-12 d-none d-md-block'>
              <div className='text-center p-3 m-1 bg-white pt-5 pb-5'>
                <img src={About_Logo3} alt={About_Logo3} className='img-fluid mb-3' />
                <p className='about_cards_heading'>Thriving Vegan Community</p>
                <p className='para'>We strive to connect manufacturers and consumers through valuable feedback, advocating for more sustainable product alternatives.</p>
              </div>
            </div>

            {/* column4 small device */}
            <div className='col-lg-3 col-md-3 col-sm-12 d-block d-md-none d-flex flex-row justify-content-center mob_sec mt-3'>
              <div className="row">
                <div className="col-sm-4 d-flex flex-row justify-content-center">
                  <img src={About_Logo4} alt={About_Logo4} className='img-fluid logo_img' />
                </div>
                <div className="col-sm-8">
                  <p className='about_cards_heading'>Prioritize Your Health Sustainably</p>
                  <p className='para logo_para_mob mt-4'>A plant-based diet is highly effective for maintaining your health. Consuming fresh fruits, vegetables, nuts, and seeds has proven benefits.</p>
                </div>
              </div>
            </div>


            <div className='col-lg-3 col-md-3 col-sm-12 d-none d-md-block'>
              <div className='text-center p-3 m-1 bg-white pt-5 pb-5'>
                <img src={About_Logo4} alt={About_Logo4} className='img-fluid mb-3' />
                <p className='about_cards_heading mb-3'>Prioritize Your Health Sustainably</p>
                <p className='para'>A plant-based diet is highly effective for maintaining your health. Consuming fresh fruits, vegetables, nuts, and seeds has proven benefits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="about_section1 mt-5 ">
        <div className="container ">
          <div className='row' style={{ alignItems: 'center'}}>
            <div className='col-lg-4 col-md-4 col-sm-12 order-2 order-sm-2 order-md-1'>
              <div className="d-flex flex-row justify-content-center img_mob mt-3">
                <img src={About_img1} alt={About_img1} className='img-fluid d-none d-md-block' style={{ borderRadius: '20px' }} />

              </div>
              
            </div>
            <div className='col-lg-8 col-md-7 col-sm-12 order-1 order-sm-1 order-md-2 d-flex flex-column mt-0  d-none d-lg-block '>
              {/* <h1 className='about_heading1  text-center'>Our team</h1> */}

              <div className='mt-3'>
                <h1 className='name_tag  text-center'>Khushi Agrawal</h1>
                <p className='designation text-center'>CEO & Co-Founder</p>
              </div>
              <p className='sm_para para'>Khushi Agrawal started EarthBased to make sustainable living easy, accessible, and affordable. Their aim is to build a community-first e-commerce platform that fulfills the needs of a plant-based lifestyle.</p>
              <p className='sm_para para'>Being an environment-conscious consumer is difficult today. The dominant narrative in this space is an “all or nothing” philosophy that can turn people away from taking small yet meaningful steps towards environmental consciousness.</p>
              <p className='sm_para para'>With EarthBased, they hope to create an inclusive space supportive of everyone who intend to make changes one step at a time. Their message is simple - “The power of change lies in your pocket and you can use that to make an impact on the planet positively”.</p>
            </div>

            <div className=' col-lg-8 col-md-7 col-sm-12 order-1 order-sm-1 order-md-2 d-flex flex-column mt-0 d-lg-none mob_sec_team' >
              {/* <h1 className='about_heading1_meami  text-center'>Our team</h1> */}
              <img src={founder_one_md} alt={founder_one_md} className='d-block founder_img_radioud img-fluid d-sm-none' />
              <div className='mt-3'>
                <h1 className='name_tag  text-center'>Khushi Agrawal</h1>
                <p className='designation text-center'>CEO & Co-Founder</p>
              </div>
              <p className='para'>Khushi Agrawal started EarthBased to make sustainable living easy, accessible, and affordable. Their aim is to build a community-first e-commerce platform that fulfills the needs of a plant-based lifestyle.</p>
              <p className='para'>Being an environment-conscious consumer is difficult today. The dominant narrative in this space is an “all or nothing” philosophy that can turn people away from taking small yet meaningful steps towards environmental consciousness.</p>    
              <p className='para'>With EarthBased, they hope to create an inclusive space supportive of everyone who intend to make changes one step at a time. Their message is simple - “The power of change lies in your pocket and you can use that to make an impact on the planet positively”.</p>
            </div>
          </div>
        </div>
      </div>





      <div className="counter">
        <div className="statistics-container">
          <Statistic value={2} label="Glorious years" />
          <Statistic value={2000} label="Happy clients" />
          <Statistic value={50} label="Vendors" />
          <Statistic value={2000} label="Products" />
        </div>
      </div>
    


      <div className='about_section8 mt-5' style={{display:"none"}}>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} >
              <h1 className='about_headings text-center'>key fact about company</h1>
              {/* <div className='d-flex flex-row justify-content-center '><button className='keyfact_button Getintouch d-none d-md-block'><a href='/contact' style={{textDecoration:'none',color: 'white'}}>get in touch</a></button></div> */}
            </Col>
          </Row>
        </Container>
      </div>

      <section className=' mb-5' style={{display:"none"}} >
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

      {/* <section className=' mb-5' >
        <div className='container hello text-center'>
          <div className='row '>

            <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
              <div className='row d-flex flex-row justify-content-center'>
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
              <div className='row d-flex flex-row justify-content-center'>
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
              <div className='row d-flex flex-row justify-content-center'>
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
              <div className='row'>
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
              </div>

            </div >

            <div className='col-lg-12 col-md-12 col-sm-12 mt-5'>
              <div className='d-flex flex-row justify-content-center '><button className='keyfact_button Getintouch '><a href='/contact' style={{ textDecoration: 'none', color: 'white' }}>get in touch</a></button></div>
            </div>

          </div>
        </div>
      </section> */}


      {/* <Footer/> */}

    </>
  )
}
