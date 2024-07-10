import React, { useState } from "react";

import maximize_icon from '../assets/maximize_icon.png';
import buycard from '../assets/buycard.png';
import Cotton_ear from '../assets/Beauty/BECO_Cotton_Ear.jpg';
import tissue from '../assets/Beauty/Beco_Facial_Tissue_Carbox.webp';


const products = [
    
 
    //Beauty and Bath

    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "1",
        brand: "Brand A",
        image: Cotton_ear,
        price: "₹159.00",
        text: "BECO Cotton Ear Bud 200 ......."
    },
    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "2",
        brand: "Brand B",
        image:  tissue,
        price: "₹159.00",
        text:"Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "2",
        brand: "Brand B",
        image:  tissue,
        price: "₹159.00",
        text:"Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "2",
        brand: "Brand B",
        image:  tissue,
        price: "₹159.00",
        text:"Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "2",
        brand: "Brand B",
        image:  tissue,
        price: "₹159.00",
        text:"Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "2",
        brand: "Brand B",
        image:  tissue,
        price: "₹159.00",
        text:"Beco Facial Tissue Car  ......."

    },



   
    {
        name: "Product 1",
        category: "Essential_oils",
        rating: "1",
        brand: "Brand A",
        image: Cotton_ear,
        price: "₹159.00",
        text: "BECO Cotton Ear Bud 200 ......."
    },
    {
        name: "Product 1",
        category: "Essential_oils",
        rating: "2",
        brand: "Brand B",
        image:  tissue,
        price: "₹159.00",
        text:"Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Essential_oils",
        rating: "3",
        brand: "Brand A",
        image: Cotton_ear,
        price: "₹159.00",
        text: "BECO Cotton Ear Bud 200 ......."
    },
    {
        name: "Product 1",
        category: "Essential_oils",
        rating: "4",
        brand: "Brand B",
        image:  tissue,
        price: "₹159.00",
        text:"Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "5",
        brand: "Brand B",
        image:  tissue,
        price: "₹159.00",
        text:"Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "2",
        brand: "Brand B",
        image:  tissue,
        price: "₹159.00",
        text:"Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "2",
        brand: "Brand B",
        image:  tissue,
        price: "₹159.00",
        text:"Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "2",
        brand: "Brand B",
        image:  tissue,
        price: "₹159.00",
        text:"Beco Facial Tissue Car  ......."

    },
    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "3",
        brand: "Brand C",
        image: "https://via.placeholder.com/150",
        price: "₹159.00"
    },
    {
        name: "Product 1",
        category: "Beauty&Bath",
        rating: "4",
        brand: "Brand D",
        image: "https://via.placeholder.com/150",
        price: "₹159.00"
    },
   

];

function Health_Wellness() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedRating, setSelectedRating] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedPrice, setSelectedPrice] = useState("All");

    const filteredProducts = products.filter(product => {
        if (
            selectedCategory === "All" &&
            selectedRating === "All" &&
            selectedBrand === "All" &&
            selectedPrice === "All"
        ) {
            return true;
        } else {
            return (
                (selectedCategory === "All" || product.category === selectedCategory) &&
                (selectedRating === "All" || product.rating === selectedRating) &&
                (selectedBrand === "All" || product.brand === selectedBrand)  &&
                (selectedPrice === "All" || product.price === selectedPrice)
            );
        }
    });

    const totalProducts = filteredProducts.length;

    return (
        <div>

        <div className="container d-flex justify-content-evenly my-5">
            <div className="row g-1">
                <div className="col-4">
                    <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                        <option value="All">Select category</option>
                        <option value="Beauty&Bath">Beauty&Bath</option>
                        <option value="Essential_oils">Essential oils</option>
                        <option value="Eye_Care">Eye Care</option>
                        <option value="Hair_Care">Hair Care</option>
                        <option value="Lip_Care">Lip Care</option>
                        <option value="Perfumes">Perfumes</option>
                        <option value="Make_Up">Make Up</option>
                        <option value="Skin_Care">Skin Care</option>
                    </select>
                </div>
                <div className="col-4">
                    <select value={selectedRating} onChange={e => setSelectedRating(e.target.value)}>
                        <option value="All">Select  Rating</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                </div>
                <div className="col-4">
                    <select value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
                        <option value="All">Select Branding</option>
                        <option value="Brand A">Brand A</option>
                        <option value="Brand B">Brand B</option>
                        <option value="Brand C">Brand C</option>
                        <option value="Brand D">Brand D</option>
                    </select>
                </div>
                <div className="col-3">
                    <select value={selectedPrice} onChange={e => setSelectedPrice(e.target.value)}>
                        <option value="All">Select Price</option>
                        <option value="1000">Below 1000</option>
                        <option value="5000">Above 5000</option>
                        <option value="8000">8000</option>
                    </select>
                </div>
            </div>
        </div>



            <div className="container  my-5">

                <div className="row d-flex justify-content-evenly  ">
                {filteredProducts.map(product => (
                    <div className="col-lg-3 col-md-2 col-sm-12 mb-5 p-2" key={product.name}>
                        <div className="card" style={{ borderRadius: '20px' }}>
                            <span className="offers">-39%</span>
                            <div className="image_border">
                                <img src={product.image} alt={product.name} className='img-fluid shopimg p-3' />
                                <img src={maximize_icon} alt={maximize_icon} className='img-fluid maxmize_img_car' />
                            </div>
                            <div className="d-flex p-2">
                                <div className="">
                                    <p className='cardpara1 mt-3'>{product.name}</p> 
                                    {/* Display product name here */}
                                    <p className='mt-3'>{product.text}</p>
                                    {/* <p className='cardpara2'>Conscious Food Garcinia In...</p> */}
                                    <p className='cardpara3'>{product.price}</p>
                                </div>
                                <div className="d-flex flex-column justify-content-center mt-4 ms-2">
                                    <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div>

                {/* Total Products: {totalProducts} */}

            </div>
        </div>
    );
}

export default Health_Wellness;