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

export default function vichaar_five() {
  return (
    <>
        <div className='blogdetails_section1 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-sm-12'>
                    <h1 className='section1_heading1'>Is Veganism Child Safe?</h1>
                    <p className='section1_paragraph1'>VEGAN VICHAAR</p>
                    <div className='row'>
                        <div className='col-lg-6 col-md-5 col-sm-6'>
                            <p>November 7, 2023 8:11 PM</p> 
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
                    <p className='section1_paragraph2'>Iron: Iron is crucial for children's growth and development. Plant-based sources such as beans, lentils, tofu, and leafy greens provide ample iron to support healthy brain function and red blood cell production in vegan children.
                    </p>
                    <p className='section1_paragraph2'>Calcium: Strong bones are essential for growing children, and calcium is a key nutrient for bone health. Fortified plant milks, tofu, and leafy green vegetables offer abundant calcium for vegan children to support their skeletal development.</p>
                    <p className='section1_paragraph2'>Vitamin D: Vitamin D is vital for bone health and immune function. Vegan children can obtain this nutrient through fortified plant milks, sun exposure, and certain types of mushrooms, ensuring they have optimal levels for overall well-being.</p>


                    <h1 className='journey_heading'>Scientific Support for Vegan Diets in Childhood</h1>
                    <p className='journey_paragraph1'>Academy of Nutrition and Dietetics Position: The Academy of Nutrition and Dietetics asserts that well-planned vegetarian and vegan diets are suitable for individuals of all ages, including infants, children, and adolescents, emphasizing the safety and adequacy of plant-based diets for children's nutritional needs.</p>
                    <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                    <h1 className='teastore_heading'>Promoting Immune Health in Vegan Children</h1>
                    <p className="teastore_paragraph">Nutrient-Rich Foods: Citrus fruits, berries, kiwifruit, red bell peppers, broccoli, ginger, garlic, and turmeric offer a wealth of vitamins, minerals, and antioxidants that bolster immune function, ensuring that vegan children have robust defenses against infections and illnesses.</p>
                    <p className='teastore_paragraph'>Zinc-Rich Plant Foods: Legumes, nuts, seeds, whole grains, and fortified plant-based foods are excellent sources of zinc, a vital nutrient for immune support. Including these zinc-rich options in a vegan child's diet helps maintain a strong and resilient immune system.</p>
                    <p className='teastore_paragraph'>Limiting Processed Foods: Processed foods, high in unhealthy fats, sugars, and sodium, can compromise children's health. By prioritizing whole, nutrient-dense foods and minimizing processed options, parents can promote optimal growth, development, and immune function in their vegan children.</p>
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
