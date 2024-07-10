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

export default function vichaar_six() {
  return (
    <>
    <div className='blogdetails_section1 mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-12'>
                <h1 className='section1_heading1'>Vegan Diet During Pregnancy</h1>
                <p className='section1_paragraph1'>VEGAN VICHAAR</p>
                <div className='row'>
                    <div className='col-lg-6 col-md-5 col-sm-6'>
                        <p>November 9, 2023 8:00 PM</p> 
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
                {/* <div className='d-flex flex-row '>
                    <p>March 08, 2023  5:16 AM</p>
                    <div className='socialmedia'>
                        <img src={share} alt={share} className='img-fluid '/>
                        <img src={insta} alt={insta} className='img-fluid ms-3'/>
                        <img src={facebook} alt={facebook} className='img-fluid ms-3'/>
                        <img src={twitter} alt={twitter} className='img-fluid ms-3'/>
                    </div>
                </div> */}
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>
                <p className='section1_paragraph2'>Pregnancy is a remarkable journey of transformation, a time when you nourish and nurture a new life within you. As you embark on this incredible phase, it's crucial to make informed choices about your diet, ensuring that both you and your baby receive the essential nutrients needed for optimal growth and development.
                </p>
                <p className='section1_paragraph2'>A well-planned vegan diet can be a healthy and sustainable choice during pregnancy, providing you with the necessary vitamins, minerals, and protein to support your baby's growth and development. However, it's essential to be mindful of certain nutrients that may be more challenging to obtain through a purely plant-based diet.</p>


                <h1 className='journey_heading'>Essential Nutrients for a Vegan Pregnancy</h1>
                <p className='journey_paragraph1'>Ensuring your baby's optimal development during a vegan pregnancy requires careful attention to essential nutrients. Calcium, crucial for bone health, can be sourced from dark leafy greens, calcium-set tofu, fortified plant-based milks, and sesame seeds. Iron, essential for red blood cell formation, is abundant in beans, lentils, tofu, tempeh, quinoa, and fortified cereals.</p>
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                <h1 className='journey_heading'>Maintaining a Healthy Vegan Diet during Pregnancy</h1>
                <p className="teastore_paragraph">To ensure optimal nutrition during your vegan pregnancy, embrace variety by incorporating a wide range of plant-based foods. Plan your meals to include iron-rich foods at each meal and calcium-rich foods throughout the day. Consider consulting with your healthcare provider to determine if prenatal supplements or additional supplements for vitamin B12, iodine, and omega-3 fatty acids are necessary.</p>
                <p className='teastore_paragraph'>Stay hydrated by drinking plenty of water, and listen to your body's hunger and fullness cues. Regular prenatal checkups with your healthcare provider can provide personalized guidance and ensure both you and your baby receive the essential nutrients needed for a thriving pregnancy and a healthy baby.</p>
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

                {/* <div className='d-flex flex-row'>
                    <h1 className='hotnews_heading'>Hot News</h1>
                    <img src={hot_news} alt={hot_news} className='img-fluid'/>
                </div>
                <div className='d-flex flex-row'>
                    <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                    <p className='news_para1 mt-2'>Veganism: A Mindful Lifestyle for Everyone</p>
                </div>
                <div className='d-flex flex-row'>
                    <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid mt-2'/>
                    <p className='news_para1 mt-3'>Veganism: A Mindful Lifestyle for Everyone</p>
                </div> */}

                


                {/* <div className='d-flex flex-row mt-3'>
                    <h1 className='hotnews_heading'>TRENDING NEWS</h1>
                    <img src={news} alt={news} className='img-fluid'/>
                </div>
                <div className='d-flex flex-row'>
                    <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                    <p className='news_para1 mt-2'>Revealing Remedy of Masala Chai: The Chai History with The Tea Shore</p>
                </div>
                <div className='d-flex flex-row'>
                    <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid mt-2'/>
                    <p className='news_para1 mt-3'>Veganism’s Positive Impact on the Ecosystem: Lessons from COVID-19</p>
                </div>
                <div className='d-flex flex-row'>
                    <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid mt-2'/>
                    <p className='news_para1 mt-3'>Embracing Vegan Living: One Switch at a Time with Vegan Vichar</p>
                </div> */}
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
