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

function Blog_six() {
  return (
    <>
    <div className='blogdetails_section1 mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-12'>
                <h1 className='section1_heading1'>Vegan Desserts</h1>
                <p className='section1_paragraph1'>VEGAN VICHAAR</p>
                <div className='row'>
                    <div className='col-lg-6 col-md-5 col-sm-6'>
                        <p>November 26, 2023 6:33 PM</p> 
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
                <p className='section1_paragraph2'>Vegan desserts are not only delicious but also packed with nutrients. These yummy desserts offer a tasty and enjoyable treat. They come in various flavors and textures, making them an excellent choice for people with specific diets or those trying to include more plant-based foods.
                </p>
                <p className='section1_paragraph2'>Explore a variety of simple vegan desserts like Gulab Jamun, Payasam, Modaks, and Brownies, which add diversity to your plant-based experience. Plus, they align with a wholesome lifestyle.</p>


                <h1 className='journey_heading'>The Delight of Vegan Desserts</h1>
                <p className='journey_paragraph1'>Vegan desserts have gained popularity in recent years, as more people are embracing a plant-based lifestyle. These desserts offer a delightful combination of flavors and textures that can rival their traditional counterparts. By using plant-based ingredients, vegan desserts not only provide a guilt-free indulgence but also contribute to a healthier and more sustainable way of living.</p>
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                <h1 className='journey_heading'>Indulging in Vegan Delights: Exploring Flavorful Desserts</h1>
                <p className="teastore_paragraph">Delve into the world of vegan desserts with irresistible treats that capture the essence of traditional Indian sweets. From the fragrant Gulab Jamun to the creamy Payasam, these desserts offer a delightful fusion of flavors without compromising on taste or texture. Vegan versions of Modaks and decadent brownies showcase the versatility of plant-based ingredients, providing a cruelty-free option for satisfying your sweet cravings. </p>
                <p className='teastore_paragraph'>By embracing vegan desserts, you not only diversify your culinary experience but also contribute to a wholesome lifestyle that prioritizes health, compassion, and sustainability. Whether you're a seasoned vegan or simply curious about plant-based indulgences, these desserts promise a journey of taste and satisfaction for everyone.</p>
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

export default Blog_six