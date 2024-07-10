import React, { useState, useRef, useEffect, flipbookRef, toggleFullSceen } from 'react'
import { Carousel, Container, Row, Col, Button, Card, } from 'react-bootstrap';
import basicvichaarmainbook from '../assets/basic_vichaar_book_image.png';
// import veganvichaartext from '../assets/vegan-vichaar-text.png';
import veganvichaartext from '../assets/Vegan-vichaar.png';
import veganvichaarimage from '../assets/vegan_page_image.jpg';
import exampleCarouselImage from '../assets/basic_vichaar_book_image.png';
import Contactpage_Flower from '../assets/Contactpage_Flower.png'
// import basic_vicchar_text from '../assets/basic-vichaar-text.png'
import basic_vicchar_text from '../assets/basic-vichar.png'
import basicvichaarpdf from '../assets/Basic_ichaar_2nd_edition_latest.pdf';
import vegan_protein from '../assets/vegan_protein.png';
import veganism_image from '../assets/_What_is_Veganism.png';
import veganism_important from '../assets/_Why_is_veganism_important.png';
import veganism_ecofriendly from '../assets/_Veganism_environmentally.png';
import vegan_diet from '../assets/Does_Vegan_Diet_increase_life_expectancy.png';
import vegan_skincare from '../assets/_vegan_skincare.png';
import vegan_omega from '../assets/_Omega-3_in_a_Vegan_Diet.png';
import vegan_child from '../assets/_Veganism_ child.png';
import vegan_pregency from '../assets/_Veganism_ pergency.png';
import bv1 from '../assets/first_edition/BV-01.png'
import bv2 from '../assets/first_edition/BV-02.png'
import bv3 from '../assets/first_edition/BV-03.png'
import bv4 from '../assets/first_edition/BV-04.png'
import bv5 from '../assets/first_edition/BV-05.png'
import bv6 from '../assets/first_edition/BV-06.png'
import bv7 from '../assets/first_edition/BV-07.png'
import bv8 from '../assets/first_edition/BV-08.png'
import bv9 from '../assets/first_edition/BV-09.png'
import bv10 from '../assets/first_edition/BV-10.png'
import bv11 from '../assets/first_edition/BV-11.png'
import bv12 from '../assets/first_edition/BV-12.png'
import bv13 from '../assets/first_edition/BV-13.png'
import bv14 from '../assets/first_edition/BV-14.png'
import bv15 from '../assets/first_edition/BV-15.png'
import bv16 from '../assets/first_edition/BV-16.png'
import bv17 from '../assets/first_edition/BV-17.png'
import bv18 from '../assets/first_edition/BV-18.png'
import bv19 from '../assets/first_edition/BV-19.png'
import bv20 from '../assets/first_edition/BV-20.png'
import bv21 from '../assets/first_edition/BV-21.png'
import bv22 from '../assets/first_edition/BV-22.png'
import bv23 from '../assets/first_edition/BV-23.png'
import bv24 from '../assets/first_edition/BV-24.png'
import bv25 from '../assets/first_edition/BV-25.png'
import bv26 from '../assets/first_edition/BV-26.png'
import bv27 from '../assets/first_edition/BV-27.png'
import bv28 from '../assets/first_edition/BV-28.png'
import bv29 from '../assets/first_edition/BV-29.png'
import bv30 from '../assets/first_edition/BV-30.png'



import audioFile from '../assets/audio.mp3'
import Firstone from './Firstone';
import Footer from './Footer';
import "../App.css"


/* flipbook*/
import Flipbook from 'react-pageflip';
import Apicalls, { post_url } from '../Apicalls';





function BasicVichaar() {

  useEffect(() => {
    const handleClick = () => {
      // Get the text content of the link
      const linkText = "https://earthbased.store/?v=a83cd41b5721"; // Replace this with your actual link
      // Create a temporary textarea element to copy the text
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = linkText;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      // Execute the copy command
      document.execCommand('copy');
      // Clean up by removing the temporary textarea
      document.body.removeChild(tempTextarea);

      // Change the text content of the copyText span to "Copied!"
      const copyText = document.getElementById("copyText");
      copyText.textContent = "Copied!";
      // Show the "Copied" text for a short duration (e.g., 2 seconds)
      setTimeout(() => {
        copyText.textContent = "Copy";
      }, 60000);
    };

    const shareButton = document.getElementById("shareButton");
    shareButton.addEventListener("click", handleClick);

    return () => {
      shareButton.removeEventListener("click", handleClick);
    };
  }, []);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleCarouselSlide = (direction) => {
    const numSlides = 3; // Adjust this value based on the number of slides
    let newIndex;

    if (direction === 'prev') {
      newIndex = (index - 1 + numSlides) % numSlides;
    } else if (direction === 'next') {
      newIndex = (index + 1) % numSlides;
    }

    setIndex(newIndex);
  };


  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };


  const book = useRef();
  const [basicVichaarData, setBasicVichaarData] = useState([])

  useEffect(() => {
    Promise.all([
      Apicalls.get('basicVichaar')
    ]).then(([data]) => {
      setBasicVichaarData(data.data)
    })
  }, [])

  const monthAbbreviations = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  return (
    <>




      <div className='container flip_block'>
        <Row className='justify-content-center'>
          <Col xs={12} className='mt-4 d-flex justify-content-center'>
            <img src={basic_vicchar_text} alt="Flower" className="img-fluid" />
          </Col>
        </Row>
      </div>





      {/* starting Vegan vichaar */}

      <div className="section4 ">
        <div className='container'>
          <div className='row d-flex flex-row justify-content-evenly'>
            <div className='col-lg-6 col-xs-12 col-sm-12 col-md-6 '>
              <div className='flipbook_section'>
                <Flipbook width={300} height={400} ref={book} className='flip_book' >
                  <img src={bv1} alt="BV-1" className='img-fluid' />
                  <img src={bv2} alt="BV-1" className='img-fluid' />
                  <img src={bv3} alt="BV-1" className='img-fluid' />
                  <img src={bv4} alt="BV-1" className='img-fluid' />
                  <img src={bv5} alt="BV-1" className='img-fluid' />
                  <img src={bv6} alt="BV-1" className='img-fluid' />
                  <img src={bv7} alt="BV-1" className='img-fluid' />
                  <img src={bv8} alt="BV-1" className='img-fluid' />
                  <img src={bv9} alt="BV-1" className='img-fluid' />
                  <img src={bv10} alt="BV-1" className='img-fluid' />
                  <img src={bv11} alt="BV-1" className='img-fluid' />
                  <img src={bv12} alt="BV-1" className='img-fluid' />
                  <img src={bv13} alt="BV-1" className='img-fluid' />
                  <img src={bv14} alt="BV-1" className='img-fluid' />
                  <img src={bv15} alt="BV-1" className='img-fluid' />
                  <img src={bv16} alt="BV-1" className='img-fluid' />
                  <img src={bv17} alt="BV-1" className='img-fluid' />
                  <img src={bv18} alt="BV-1" className='img-fluid' />
                  <img src={bv19} alt="BV-1" className='img-fluid' />
                  <img src={bv20} alt="BV-1" className='img-fluid' />
                  <img src={bv21} alt="BV-1" className='img-fluid' />
                  <img src={bv22} alt="BV-1" className='img-fluid' />
                  <img src={bv23} alt="BV-1" className='img-fluid' />
                  <img src={bv24} alt="BV-1" className='img-fluid' />
                  <img src={bv25} alt="BV-1" className='img-fluid' />
                  <img src={bv26} alt="BV-1" className='img-fluid' />
                  <img src={bv27} alt="BV-1" className='img-fluid' />
                  <img src={bv28} alt="BV-1" className='img-fluid' />
                  <img src={bv29} alt="BV-1" className='img-fluid' />
                  <img src={bv30} alt="BV-1" className='img-fluid' />
                </Flipbook>
                <div className='text-center flip_buttons ' style={{ marginTop: '5px', marginTop:"0px", display:"flex", justifyContent:"space-around" }}>
                  <button onClick={() =>
                    book.current.pageFlip().flipPrev()} className='btn btn-success mx-2'><i class="bi bi-arrow-left-square-fill"></i></button>
                  <button onClick={() =>
                    book.current.pageFlip().flipNext()} className='btn btn-success mx-2'><i class="bi bi-arrow-right-square-fill"></i></button>

                </div>

              </div>
              <div className='row justify-content-evenly mt-4'>

                {/* <div className='col-lg-1 pt-1 '>
                  <p>1/30</p>
                </div> */}
                <div className='col-lg-2 pt-1  download_button shadow' style={{ height: '40px' }} >
                  <a href={basicvichaarpdf} download>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginTop: '5px' }}>
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M17 8L12 13L7 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 13V1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </a>

                </div>
                <div class="col-lg-3 share-buttons">
                  <button id="shareButton" className="share-main-button" style={{ backgroundColor: '#F6F1DD', height: '40px' }}>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z"></path>
                    </svg>
                    <span id="copyText" class="copy-text"> </span>

                  </button>


                  {/*   <button class="twitter-button share-button" style={{ transitionDelay: "0s, 0s, 0s", transitionProperty: "translate, background, box-shadow" }}>
                    <a href='https://twitter.com/intent/post?url=https%3A%2F%2Fearthbased.store%2Fbasic-vichaar%2F%3Fv%3Da83cd41b5721%23flipbook-df_17972%2F23%2F&text=I%20wanted%20you%20to%20see%20this%20FlipBook' style={{ textDecoration: 'none !important' }} className='ref'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </a>
                  </button>
                <button class="messenger-button share-button" style={{ transitionDelay: "0s, 0s, 0s", transitionProperty: "translate, background, box-shadow" }}>
                    <a style={{ textDecoration: 'none' }} href='https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fearthbased.store%252Fbasic-vichaar%252F%253Fv%253Da83cd41b5721%2523flipbook-df_17972%252F23%252F%26t%3DI%2Bwanted%2Byou%2Bto%2Bsee%2Bthis%2BFlipBook&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </a>
                  </button>
                  <button class="pinterest-button share-button" style={{ transitionDelay: "0s, 0s, 0s", transitionProperty: "translate, background, box-shadow" }}>
                    <a style={{ textDecoration: 'none' }} href='https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fearthbased.store%2Fbasic-vichaar%2F%3Fv%3Da83cd41b5721%23flipbook-df_17972%2F23%2F&media=&description=I%20wanted%20you%20to%20see%20this%20FlipBook'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="30" width="30">
                        <path d="M12.48 2.4a9.6 9.6 0 0 0-3.498 18.543c-.084-.76-.16-1.927.033-2.757.175-.75 1.125-4.772 1.125-4.772s-.287-.575-.287-1.424c0-1.336.774-2.332 1.738-2.332.818 0 1.214.614 1.214 1.352 0 .824-.524 2.055-.795 3.196-.226.955.48 1.735 1.422 1.735 1.706 0 3.018-1.8 3.018-4.397 0-2.298-1.653-3.904-4.01-3.904-2.732 0-4.335 2.048-4.335 4.165 0 .825.318 1.71.714 2.191a.288.288 0 0 1 .067.276c-.073.302-.235.955-.266 1.088-.042.176-.14.213-.322.129-1.2-.558-1.949-2.311-1.949-3.72 0-3.028 2.201-5.808 6.344-5.808 3.33 0 5.918 2.372 5.918 5.544 0 3.308-2.087 5.971-4.981 5.971-.974 0-1.888-.505-2.201-1.103l-.598 2.283c-.217.834-.803 1.879-1.194 2.516A9.6 9.6 0 1 0 12.48 2.4Z"></path>
                      </svg>
                    </a>
                  </button>
                  <button class="instagram-button share-button" style={{ transitionDelay: "0s, 0s, 0s", transitionProperty: "translate, background, box-shadow" }}>
                    <a style={{ textDecoration: 'none' }} href='#'>
                      <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
                      </svg>
                    </a>
                  </button>
                  <button class="snapchat-button share-button" style={{ transitionDelay: "0s, 0s, 0s", transitionProperty: "translate, background, box-shadow" }}>
                    <a style={{ textDecoration: 'none' }} href='#'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                      </svg>
                    </a>

                  </button>
                  <button class="whatsapp-button share-button" style={{ transitionDelay: "0s, 0s, 0s", transitionProperty: "translate, background, box-shadow" }}>
                    <a style={{ textDecoration: 'none' }} href='https://api.whatsapp.com/send/?text=I%20wanted%20you%20to%20see%20this%20FlipBook+https%3A%2F%2Fearthbased.store%2Fbasic-vichaar%2F%3Fv%3Da83cd41b5721%23flipbook-df_17972%2F23%2F&type=custom_url&app_absent=0'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="30" width="30">
                        <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
                      </svg>
                    </a>
                  </button>  */}
                </div>




                {/* <div className='col-lg-4 pt-1 download_button' onClick={togglePlay} style={{ height: '40px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginTop: '5px' }}>
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.07 4.92993C20.9447 6.80521 21.9979 9.34829 21.9979 11.9999C21.9979 14.6516 20.9447 17.1947 19.07 19.0699M15.54 8.45993C16.4774 9.39757 17.004 10.6691 17.004 11.9949C17.004 13.3208 16.4774 14.5923 15.54 15.5299" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <audio ref={audioRef}>
                    <source src={audioFile} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div> */}
              </div>
            </div>
            <div className='col-lg-5 col-xs-12 col-sm-12 col-md-6 flip_content_text d-flex flex-column justify-content-center'>
              <h3 className='basic_heading mt-4' style={{}}>1st Edition- Basic Vichaar</h3>
              <p className='mt-2'>In an era where sustainability is the buzzword, Basic Vichaar is here to unravel the interconnectedness between sustainability, veganism, and consumer consciousness. Our magazine dives deep into the importance of adopting a plant-based lifestyle to reduce our carbon footprint and promote a healthier planet.</p>
              <p> We explore how conscious consumer choices, such as opting for eco-friendly products and supporting ethical brands, can make a significant impact on the environment. Join us on this enlightening journey towards a sustainable future, where every choice we make counts.  </p>

              <div style={{ textAlign: 'center' }}>
              <a href="/BasicVichaar2" style={{ textDecoration: 'none', color: 'inherit ' }}>
                <button variant="success" className='mt-3 first_edition hover_bg' style={{ fontSize:"14px"}} >2nd Edition
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 17" fill="none">
                    <g clip-path="url(#clip0_1_2903)">
                      <path d="M10.036 4.90007C10.0874 4.539 10.064 4.17121 9.96724 3.81957C9.87048 3.46793 9.7024 3.13995 9.47348 2.85604C9.24455 2.57212 8.95966 2.33834 8.63652 2.16922C8.31339 2.00011 7.95892 1.89928 7.59515 1.873C7.23139 1.84672 6.8661 1.89556 6.52202 2.01648C6.17793 2.1374 5.8624 2.32781 5.59505 2.57588C5.32769 2.82394 5.11422 3.12436 4.96792 3.45844C4.82162 3.79252 4.74562 4.15313 4.74463 4.51785C4.74463 4.8336 4.76125 5.18259 5.10026 5.18259C5.14844 5.18313 5.19616 5.1732 5.24012 5.15347C5.28408 5.13374 5.32322 5.10469 5.35484 5.06833C5.38645 5.03197 5.40979 4.98918 5.42322 4.94291C5.43665 4.89664 5.43986 4.848 5.43263 4.80036C5.39234 4.51756 5.41327 4.22941 5.494 3.9554C5.57474 3.68139 5.7134 3.42792 5.9006 3.21216C6.08781 2.99639 6.31918 2.82336 6.57906 2.70478C6.83893 2.58619 7.12126 2.52482 7.40691 2.52482C7.69257 2.52482 7.97489 2.58619 8.23477 2.70478C8.49465 2.82336 8.72602 2.99639 8.91322 3.21216C9.10042 3.42792 9.23908 3.68139 9.31982 3.9554C9.40056 4.22941 9.42149 4.51756 9.38119 4.80036C9.37572 4.88342 9.40162 4.96551 9.45377 5.0304C9.50592 5.09528 9.58051 5.13824 9.6628 5.15077C9.7451 5.1633 9.8291 5.1445 9.8982 5.09808C9.96729 5.05166 10.0165 4.981 10.036 4.90007Z" fill="white" />
                      <path d="M7.40235 0.860587C7.96031 0.860622 8.51086 0.988364 9.01183 1.23403C9.5128 1.47969 9.9509 1.83675 10.2926 2.27787C10.6342 2.71899 10.8704 3.23246 10.983 3.77894C11.0956 4.32543 11.0816 4.89043 10.9421 5.43067C10.9201 5.51618 10.9329 5.60694 10.9778 5.68298C11.0226 5.75903 11.0959 5.81413 11.1814 5.83616C11.2669 5.8582 11.3577 5.84537 11.4337 5.80049C11.5097 5.75561 11.5649 5.68236 11.5869 5.59686C11.7511 4.95853 11.7671 4.29109 11.6337 3.64562C11.5003 3.00015 11.221 2.39375 10.8171 1.87285C10.4133 1.35195 9.89559 0.930342 9.30372 0.640299C8.71185 0.350255 8.06147 0.199463 7.40235 0.199463C6.74324 0.199463 6.09285 0.350255 5.50098 0.640299C4.90912 0.930342 4.39145 1.35195 3.9876 1.87285C3.58375 2.39375 3.30442 3.00015 3.171 3.64562C3.03757 4.29109 3.05359 4.95853 3.21781 5.59686C3.23985 5.68236 3.29495 5.75561 3.371 5.80049C3.40865 5.82271 3.45031 5.8373 3.4936 5.84342C3.5369 5.84954 3.58097 5.84708 3.62331 5.83616C3.66564 5.82525 3.70542 5.80611 3.74036 5.77983C3.7753 5.75354 3.80472 5.72063 3.82694 5.68298C3.84916 5.64533 3.86375 5.60367 3.86987 5.56038C3.87599 5.51708 3.87352 5.47301 3.86261 5.43067C3.72312 4.89043 3.70913 4.32543 3.82172 3.77894C3.9343 3.23246 4.17047 2.71899 4.51214 2.27787C4.8538 1.83675 5.2919 1.47969 5.79287 1.23403C6.29384 0.988364 6.84439 0.860622 7.40235 0.860587Z" fill="white" />
                      <path d="M13.4393 8.1722C13.3039 8.16498 13.1685 8.18542 13.0413 8.23228C12.9142 8.27914 12.7979 8.35144 12.6996 8.44476C12.6013 8.53808 12.523 8.65046 12.4696 8.77504C12.4162 8.89962 12.3888 9.03377 12.389 9.16931V8.1722C12.389 7.90775 12.2839 7.65414 12.0969 7.46714C11.9099 7.28015 11.6563 7.17509 11.3919 7.17509C11.1274 7.17509 10.8738 7.28015 10.6868 7.46714C10.4998 7.65414 10.3948 7.90775 10.3948 8.1722V7.50746C10.3948 7.24301 10.2897 6.9894 10.1027 6.8024C9.91573 6.61541 9.66211 6.51035 9.39766 6.51035C9.13321 6.51035 8.87959 6.61541 8.6926 6.8024C8.5056 6.9894 8.40055 7.24301 8.40055 7.50746V4.90501C8.40581 4.64252 8.31131 4.38781 8.13613 4.19226C7.96094 3.99672 7.7181 3.8749 7.45662 3.85139C7.32127 3.84417 7.18587 3.86461 7.05869 3.91147C6.93151 3.95833 6.81522 4.03063 6.71692 4.12395C6.61862 4.21727 6.54038 4.32965 6.48698 4.45423C6.43358 4.57881 6.40614 4.71296 6.40633 4.8485V9.83405C6.40633 8.42481 4.41211 8.02596 4.41211 9.16931V11.8283C4.41211 12.8861 4.83232 13.9005 5.5803 14.6485C6.32827 15.3965 7.34275 15.8167 8.40055 15.8167H10.3948C11.4526 15.8167 12.467 15.3965 13.215 14.6485C13.963 13.9005 14.3832 12.8861 14.3832 11.8283V9.22582C14.3885 8.96333 14.294 8.70862 14.1188 8.51307C13.9436 8.31753 13.7008 8.19571 13.4393 8.1722Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2903">
                        <rect width="15.9538" height="15.9538" fill="white" transform="translate(0.755859 0.195923)" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div >

      </div >

      {/* starting Vegan vichaar */}





      {/* starting Vegan vichaar */}

      <div className="section3 my-5" hidden>
        <Container>
          <div className='row mb-5'>
            <div className='col-lg-12  d-flex align-items-center justify-content-center'>
              <img src={veganvichaartext} alt={veganvichaartext} className='mb-5 img-fluid image_text' />
            </div>
          </div>
        </Container>
      </div>

      <div className=" mt-5" hidden>
        <Container>
          <div className='row mt-5'>
            {basicVichaarData.map((item) => {
              const date = new Date(item.created_on)
              return <div className='col-lg-4  col-md-4 col-xs-12 col-sm-12  mb-5 pb-5' >
                <Card className='vegan_card p-2' style={{ height: "330px" }}>
                  <Card.Img variant="top" src={post_url + (JSON.parse(item.img_urls)[0])} alt={item.heading} className='vegan_vichaar_image img-fluid' style={{ borderRadius: '50px' }} />
                  <Card.Body>
                    <Card.Title className='what_is'>{item.heading}
                    </Card.Title>
                    <Card.Text className='Read_more' ><a href={"/basicVichaar/"+item.id} style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</a></Card.Text>
                    <hr />
                    <Card.Text className='Read_more1' >{monthAbbreviations[date.getMonth()]} {date.getDate()}, {date.getFullYear()}  |  No Comments</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            })

            }

            {/* starting  First Card   */}

            {/* <div className='col-lg-4  col-md-4 col-xs-12 col-sm-12  mb-5 pb-5' >
              <Card className='vegan_card p-2' style={{ height: "330px" }}>
                <Card.Img variant="top" src={veganism_image} alt={veganism_image} className='vegan_vichaar_image img-fluid' style={{ borderRadius: '50px' }} />
                <Card.Body>
                  <Card.Title className='what_is'>What is veganism in simple words?
                  </Card.Title>
                  <Card.Text className='Read_more' ><a href="/vichaar_one" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</a></Card.Text>
                  <hr />
                  <Card.Text className='Read_more1' >November 4, 2023  |  No Comments</Card.Text>
                </Card.Body>
              </Card>
            </div> */}

            {/*  Ending   First Card   */}

            {/* starting   second  Card   */}

            {/* <div className='col-lg-4 col-lg-4 col-md-4 col-xs-12 col-sm-12  mb-5 pb-5' >
              <Card className='vegan_card p-2' style={{ height: "330px" }}>
                <Card.Img variant="top" src={veganism_important} alt={veganism_important} className='vegan_vichaar_image img-fluid' style={{ borderRadius: '50px' }} />
                <Card.Body>
                  <Card.Title className='what_is' >Why veganism is the healthiest ....?
                  </Card.Title>
                  <Card.Text className='Read_more' ><a href="/vichaar_two" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</a></Card.Text>
                  <hr />
                  <Card.Text className='Read_more1' >November 4, 2023  |  No Comments</Card.Text>

                </Card.Body>
              </Card>
            </div> */}

            {/*  Ending  second  Card   */}


            {/* starting   Third Card   */}

            {/* <div className='col-lg-4 col-lg-4 col-md-4 col-xs-12 col-sm-12  mb-5 pb-5' >
              <Card className='vegan_card p-2' style={{ height: "330px" }}>
                <Card.Img variant="top" src={veganism_ecofriendly} alt={veganism_ecofriendly} className='vegan_vichaar_image img-fluid ' style={{ borderRadius: '50px' }} />
                <Card.Body>
                  <Card.Title className='what_is' >Is Veganism environmentally friendly??</Card.Title>
                  <Card.Text className='Read_more' ><a href="/vichaar_three" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</a></Card.Text>
                  <hr />
                  <Card.Text className='Read_more1' >November 5, 2023  |  No Comments</Card.Text>

                </Card.Body>
              </Card>
            </div> */}

            {/*  Ending  Third Card   */}

            {/*   starting  fourth  Card   */}

            {/* <div className='col-lg-4 col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-5 pb-5' >
              <Card className='vegan_card p-2' style={{ height: "330px" }}>
                <Card.Img variant="top" src={vegan_diet} alt={vegan_diet} className='vegan_vichaar_image img-fluid ' style={{ borderRadius: '50px' }} />
                <Card.Body>
                  <Card.Title className='what_is' >Does Vegan Diet increase life expectancy?</Card.Title>
                  <Card.Text className='Read_more' ><a href="/vichaar_four" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</a></Card.Text>
                  <hr />
                  <Card.Text className='Read_more1' >November 7, 2023  |  No Comments</Card.Text>

                </Card.Body>
              </Card>
            </div> */}

            {/*    Ending  fourth  Card */}

            {/*    starting  fifth   Card */}

            {/* <div className='col-lg-4 col-lg-4 col-md-4 col-xs-12 col-sm-12  mb-5 pb-5' >
              <Card className='vegan_card p-2' style={{ height: "330px" }}>
                <Card.Img variant="top" src={vegan_child} alt={vegan_child} className='vegan_vichaar_image img-fluid ' style={{ borderRadius: '50px' }} />
                <Card.Body>
                  <Card.Title className='what_is'> How do vegans get B12 naturally ..?</Card.Title>
                  <Card.Text className='Read_more' ><a href="/vichaar_five" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</a></Card.Text>
                  <hr />
                  <Card.Text className='Read_more1' >November 7, 2023  |  No Comments</Card.Text>

                </Card.Body>
              </Card>
            </div> */}


            {/*    Ending   fifth   Card */}

            {/*     starting  sixth   Card */}

            {/* <div className='col-lg-4 col-lg-4 col-md-4 col-xs-12 col-sm-12  mb-5 pb-5' >
              <Card className='vegan_card p-2 ' style={{ height: "330px" }}>
                <Card.Img variant="top" src={vegan_pregency} alt={vegan_pregency} className='vegan_vichaar_image img-fluid' style={{ borderRadius: '50px' }} />
                <Card.Body>
                  <Card.Title className='what_is'>Is a vegan diet good for getting pregnant?</Card.Title>
                  <Card.Text className='Read_more' ><a href="/vichaar_six" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</a></Card.Text>
                  <hr />
                  <Card.Text className='Read_more1' >November 9, 2023  |  No Comments</Card.Text>

                </Card.Body>
              </Card>
            </div> */}

            {/*  Ending  sixth Card */}

            {/*  Ending   seventh  Card */}

            {/* <div className='col-lg-4 col-lg-4 col-md-4 col-xs-12 col-sm-12  mb-5 pb-5' >
              <Card className='vegan_card p-2  ' style={{ height: "330px" }}>
                <Card.Img variant="top" src={vegan_skincare} alt={vegan_skincare} className='vegan_vichaar_image img-fluid' style={{ borderRadius: '50px' }} />
                <Card.Body>
                  <Card.Title className='what_is' >Which cosmetic brand is 100% vegan?
                  </Card.Title>
                  <Card.Text className='Read_more' ><a href="/vichaar_seven" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</a></Card.Text>
                  <hr />
                  <Card.Text className='Read_more1' >November 11, 2023  |  No Comments</Card.Text>

                </Card.Body>
              </Card>
            </div> */}

            {/*  Ending   seventh  Card */}

            {/* starting  eight  Card */}

            {/* <div className='col-lg-4 col-lg-4 col-md-4 col-xs-12 col-sm-12  mb-5 pb-5' >
              <Card className='vegan_card p-2' style={{ height: "330px" }}>
                <Card.Img variant="top" src={vegan_protein} alt={vegan_protein} className='vegan_vichaar_image img-fluid' style={{ borderRadius: '50px' }} />
                <Card.Body>
                  <Card.Title className='what_is'>  How do vegans get their proteins?</Card.Title>
                  <Card.Text className='Read_more' ><a href="/vichaar_eight" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</a></Card.Text>
                  <hr />
                  <Card.Text className='Read_more1' >November 14, 2023  |  No Comments</Card.Text>

                </Card.Body>
              </Card>
            </div> */}

            {/*  Ending   eight  Card */}

            {/* starting  ninth  Card */}

            {/* <div className='col-lg-4 col-lg-4 col-md-4 col-xs-12 col-sm-12  mb-5 pb-5' >
              <Card className='vegan_card p-2 img-fluid' style={{ height: "330px" }}>
                <Card.Img variant="top" src={vegan_omega} alt={vegan_omega} className='vegan_vichaar_image img-fluid' style={{ borderRadius: '50px' }} />
                <Card.Body>
                  <Card.Title className='what_is' >How much omega-3 should a vegan have a day?
                  </Card.Title>
                  <Card.Text className='Read_more' ><a href="/vichaar_nine" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</a></Card.Text>
                  <hr />
                  <Card.Text className='Read_more1' >November 16, 2023  |  No Comments</Card.Text>

                </Card.Body>
              </Card>
            </div> */}

            {/* Ending  ninth  Card */}

          </div>
        </Container >
      </div >

      {/*  Ending  Vegan vichaar */}






    </>
  )

}



export default BasicVichaar;
