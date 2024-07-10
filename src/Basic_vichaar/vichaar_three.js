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


export default function vichaar_three() {
  return (
    <>
    <div className='blogdetails_section1 mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-12'>
                <h1 className='section1_heading1'>Is Veganism environmentally friendly??</h1>
                <p className='section1_paragraph1'>VEGAN VICHAAR, VEGANISM</p>
                <div className='row'>
                    <div className='col-lg-6 col-md-5 col-sm-6'>
                        <p>November 5, 2023 12:15 PM</p> 
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
                <p className='section1_paragraph2'>Animal agriculture poses a significant threat to environmental sustainability due to its contribution to greenhouse gas emissions, deforestation, water pollution, and antibiotic resistance. Livestock production alone accounts for approximately 14.5% of global greenhouse gas emissions, surpassing emissions from transportation. Methane released during the digestion process of ruminant animals like cows and sheep contributes to these emissions.
                </p>
                <p className='section1_paragraph2'> Moreover, the demand for grazing land and feed crops for livestock has resulted in widespread deforestation, particularly in tropical rainforests, exacerbating habitat loss and biodiversity decline. Additionally, animal waste runoff contaminates waterways with pollutants, posing risks to aquatic ecosystems and human health. The overuse of antibiotics in livestock production further fuels the development of antibiotic-resistant bacteria, posing a grave threat to public health.</p>


                <h1 className='journey_heading'>The Environmental Benefits of Embracing Veganism</h1>
                <p className='journey_paragraph1'>Embracing a vegan lifestyle offers a promising solution to mitigate the environmental impacts of animal agriculture. Studies have demonstrated that adopting a vegan diet can significantly reduce greenhouse gas emissions, conserve land and water resources, and safeguard biodiversity. Research indicates that a vegan diet can reduce an individual's carbon footprint by up to 50%, sparing vast agricultural land and water resources. </p>
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                <h1 className='teastore_heading'>Promoting a Sustainable Vegan Diet</h1>
                <p className="teastore_paragraph">While veganism offers environmental benefits, it is essential to adopt sustainable practices within the vegan diet to minimize environmental impact further. Choosing locally grown and seasonal produce supports regional economies and reduces carbon emissions associated with transportation. Prioritizing whole, unprocessed foods over highly processed plant-based alternatives minimizes environmental footprints.</p>
                <p className='teastore_paragraph'>Additionally, supporting sustainable farming practices such as organic farming and regenerative agriculture ensures the production of plant-based foods in an environmentally, socially, and economically sustainable manner. By making informed choices and embracing a mindful and sustainable vegan lifestyle, individuals can contribute to a healthier planet for present and future generations.</p>
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
