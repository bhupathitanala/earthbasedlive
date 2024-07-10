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

export default function vichaar_seven() {
  return (
    <>
    <div className='blogdetails_section1 mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-12'>
                <h1 className='section1_heading1'>Vegan Skincare</h1>
                <p className='section1_paragraph1'>VEGAN VICHAAR</p>
                <div className='row'>
                    <div className='col-lg-6 col-md-5 col-sm-6'>
                        <p>November 11, 2023 2:30 PM</p> 
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
                <p className='section1_paragraph2'>In recent years, there has been a surge in the popularity of vegan skincare products, driven by a growing awareness of the ethical and environmental implications of animal-derived ingredients. This trend reflects a broader shift towards more sustainable and compassionate consumer choices.
                </p>
                <p className='section1_paragraph2'>According to a report by Allied Market Research, the global vegan skincare market is projected to reach USD 11.47 billion by 2027, indicating a significant increase in demand. This rise can be attributed to consumers seeking products that align with their values of cruelty-free and environmentally friendly practices.</p>


                <h1 className='journey_heading'>Ethical and Environmental Concerns</h1>
                <p className='journey_paragraph1'>The production of animal-derived ingredients for skincare products raises ethical concerns due to the involvement of cruel practices in animal husbandry. Ingredients like honey and lanolin often come from sources where animals are subjected to exploitation and harm. Additionally, the environmental impact of animal agriculture cannot be overlooked.</p>
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                <h1 className='teastore_heading'>Benefits of Vegan Skincare</h1>
                <p className="teastore_paragraph">Vegan skincare products offer numerous benefits beyond their ethical and environmental advantages. They are cruelty-free, meaning they are not tested on animals, which aligns with the principles of compassion. Moreover, these products are often formulated with plant-based ingredients that are rich in antioxidants, promoting healthier skin. </p>
                <p className='teastore_paragraph'>By opting for vegan skincare, individuals can nourish their skin with ingredients that are less likely to cause irritation or allergic reactions compared to non-vegan products. Additionally, the use of sustainable ingredients supports a more eco-conscious approach to skincare, contributing to a healthier planet for future generations.</p>
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
