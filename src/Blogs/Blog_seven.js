import React from 'react'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'

// Images
import blog_instagram from '../assets/blog_instagram.png'
import facebook from '../assets/facebook.png'
import share from '../assets/share.png'
import blog_twitter from '../assets/blog_twitter.png'
import blogtitlepage_img1 from '../assets/blogtitlepage_img1.png'
import news from '../assets/news.png'
import hot_news from '../assets/hot_news.png'
import blogimg2_sample from '../assets/blogimg2_sample.png'
import comment_img from '../assets/comment_img.png'

function Blog_seven() {
  return (
    <>
    <div className='blogdetails_section1 mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-12'>
                <h1 className='section1_heading1'>Is it Hard to Find Vegan Options in Restaurants?</h1>
                <p className='section1_paragraph1'>VEGAN VICHAAR</p>
                <div className='row'>
                    <div className='col-lg-6 col-md-5 col-sm-6'>
                        <p>November 25, 2023 1:00 PM</p> 
                    </div>
                    <div className='col-lg-6 col-md-7 col-sm-6 '>
                    <div className='socialmedia'>
                        <img src={share} alt={share} className='img-fluid '/>
                        <img src={blog_instagram} alt={blog_instagram} className='img-fluid ms-3'/>
                        <img src={facebook} alt={facebook} className='img-fluid ms-3'/>
                        <img src={blog_twitter} alt={blog_twitter} className='img-fluid ms-3'/>
                    </div>  
                    </div>
                </div>
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>
                <p className='section1_paragraph2'>Growing up in a traditional Indian household, a significant revelation unfolded before me — a considerable portion of our flavorful meals are inherently vegan.
                </p>
                {/* <p className='section1_paragraph2'> Join with them as we dive into the story behind the steaming cups, and discover why masala chai stands as India's most cherished refreshment- The Chai.</p> */}


                <h1 className='journey_heading'>Most of our yummy Indian dishes are already vegan!</h1>
                <p className='journey_paragraph1'>Did you know that a significant number of Indian dishes are already vegan? That's right, from the flavorful curries to the aromatic veg pulao, Indian cuisine offers a plethora of plant-based options that will tantalize your taste buds. Growing up in a traditional Indian household, I can attest to the fact that a large portion of our meals revolve around vegetables, lentils, and grains. In fact, the essence of Indian cooking lies in the inventive use of spices and herbs, which brings out the natural flavors of plant-based ingredients.</p>
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                <h1 className='journey_heading'>Savoring Vegan Delights: Quick Bites for Every Craving</h1>
                <p className="teastore_paragraph">When hunger strikes, vegan options abound to satisfy your palate with delicious and convenient treats. From crispy samosas and hearty veggie burgers to classic French fries and flavorful Pav Bhaji, there's a wide selection of simple yet satisfying bites to enjoy. Restaurants increasingly cater to diverse dietary preferences, offering dedicated vegan menus and clearly labeled options, ensuring inclusivity and culinary exploration for all diners.</p>
                <p className='teastore_paragraph'> Venture beyond the familiar and discover a bounty of vegan delights awaiting you in restaurants. From vibrant salads bursting with fresh ingredients to comforting soups brimming with flavors, the options are plentiful. Don't hesitate to inquire about vegan alternatives for your favorite dishes; many establishments are eager to accommodate, making your dining experience memorable and fulfilling. With the growing popularity of veganism, restaurant menus reflect the abundance of plant-based choices, inviting you to indulge in the diverse and delicious flavors of nature.</p>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 d-none d-md-block'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row'>
                            <h1 className='hotnews_heading'>Hot News</h1>
                            <img src={hot_news} alt={hot_news} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row justify-content-center'>
                            <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                    <p className='news_para1 mt-2 text-center'>Veganism: A Mindful Lifestyle for Everyone</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row justify-content-center'>
                            <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                    <p className='news_para1 mt-2 text-center'>Veganism: A Mindful Lifestyle for Everyone</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row mt-3'>
                            <h1 className='hotnews_heading'>TRENDING NEWS</h1>
                            <img src={news} alt={news} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row justify-content-center'>
                            <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                    <p className='news_para1 mt-2 text-center'>Revealing Remedy of Masala Chai: The Chai History with The Tea Shore</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row justify-content-center'>
                            <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                    <p className='news_para1 mt-2 text-center'>Veganism’s Positive Impact on the Ecosystem: Lessons from COVID-19</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row justify-content-center'>
                            <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                    <p className='news_para1 mt-2 text-center'>Embracing Vegan Living: One Switch at a Time with Vegan Vichar</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>

<div className='blogdetails_section2 mt-5' style={{background:'#F9F7F080'}}>
<div className="container">
    <div className='row'>
        <div className='col-lg-8 col-md-8 col-sm-12'>
            <h1 className='section2_heading1 text-center mt-4'>leave a comment</h1>
            <p className='section2_paragraph text-center'>And join the conversation</p>
            <div className='d-flex flex-row justify-content-center'>
                <input type="text" placeholder='| write something .....' className='write_something'/>
            </div>
            <div  className='d-flex flex-row justify-content-center'>
                <button className='comment_button mt-3'>comment</button>
            </div>

            <div className='d-flex flex-row justify-content-center mt-5'>
                <img src={comment_img} alt={comment_img} className='img-fluid'/>
                <div className='ms-4' >
                    <h1 className='comment_name'>Teja Mallipudi</h1>
                    <p className='comment_para'>And join the conversation</p>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-center mt-4'>
                <img src={comment_img} alt={comment_img} className='img-fluid'/>
                <div className='ms-4' >
                    <h1 className='comment_name'>ram pinapothula </h1>
                    <p className='comment_para'>And join the conversation</p>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-center mt-4'>
                <img src={comment_img} alt={comment_img} className='img-fluid'/>
                <div className='ms-4'>
                    <h1 className='comment_name'>Satya</h1>
                    <p className='comment_para'>And join the conversation</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

  </>
  )
}

export default Blog_seven