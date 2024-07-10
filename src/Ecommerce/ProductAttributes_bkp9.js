import React, { useState, useEffect } from 'react';
import './ProductAttributes.css'; // Import CSS for styling
import Apicalls, { post_url } from "../Apicalls";

const ProductAttributes = ({ products, handleVariableImage, handleSelectedAttributes }) => {
    // console.log("products")
    // console.log(products);
    const [selectedValues, setSelectedValues] = useState({});
    const [selectedProducts, setSelectedProducts] = useState([]);

    // Extract all unique attributes and their values
    const attributes = {};
    products?.length && products?.forEach(product => {
        product.attributes.forEach(attribute => {
            const { name, value } = attribute;
            if (!attributes[name]) {
                attributes[name] = new Set();
            }
            attributes[name].add(value);
        });
    });

    // Some code to render products

    // const handleClick = (imageUrl) => {
    //     // Call the handleVariableImage function with the image URL
    //     handleVariableImage(imageUrl);
    // };

    // Set default selection to the first button value for each attribute
    useEffect(() => {
        const initialSelection = {};
        Object.keys(attributes).forEach(attributeName => {
            initialSelection[attributeName] = Array.from(attributes[attributeName])[0];
        });
        setSelectedValues(initialSelection);
    }, [products]);

    // Handle button click
    const handleButtonClick = (attributeName, value) => {
     //   console.log(attributeName)
        setSelectedValues(prevSelectedValues => ({
            ...prevSelectedValues,
            [attributeName]: value
        }));
    };

    // Find products matching selected attributes
    useEffect(() => {
        const matchingProducts = products?.filter(product =>
            product.attributes.every(attr =>
                selectedValues[attr.name] === attr.value
            )
        );
        const mergedProducts = products?.map(product => ({
            ...product,
            selectedValues
        })).filter(product =>
            product.attributes.every(attr =>
                selectedValues[attr.name] === attr.value
            )
        );
        // console.log(typeof(matchingProducts))
        if(products?.length > 0){
            // console.log(typeof(matchingProducts))
            // console.log(matchingProducts)
            // Accessing the image value
            // if(matchingProducts[0]?.image != ''){
            //     const imageUrl = matchingProducts[0].image;
            //     // let imageUrl = matchingProducts[0]['image'][0];
            //     // console.log(imageUrl)
            //     // // let imageUrl = 'http://65.1.233.19:3001/productimages/1715928215-main-7_Powder_Blue.webp';
            //     let main_img = post_url + 'productimages/' + imageUrl
            //     handleVariableImage(main_img);
            // }
            if (matchingProducts.length > 0) {
                const imageUrl = matchingProducts[0]?.image; // Check if matchingProducts[0] is defined before accessing 'image'
                if (imageUrl) {
                    const main_img = post_url + 'productimages/' + imageUrl;
                    handleVariableImage(main_img);
                }
            }
            
        }
        
        console.log(matchingProducts)
        setSelectedProducts(matchingProducts);

        // Merge matchingProducts and selectedValues into a single object
        // const mergedData = {
        //     matchingProducts,
        //     selectedValues
        // };

        // Pass the merged data back to the parent component
        handleSelectedAttributes(mergedProducts);
        

    }, [selectedValues, products]);

    return (
        <div className="product-attributes">
            {/* <div className="attribute-buttons">
                {Object.keys(attributes).map(attributeName => (
                    <div key={attributeName} className="attribute">
                        <h3>{attributeName.charAt(0).toUpperCase() + attributeName.slice(1)} : {selectedValues[attributeName]}</h3>
                        {Array.from(attributes[attributeName]).map(attributeValue => (
                            <button
                                key={attributeValue}
                                className={selectedValues[attributeName] === attributeValue ? 'active' : ''}
                                onClick={() => handleButtonClick(attributeName, attributeValue)}
                            >
                                {attributeValue}
                            </button>
                        ))}
                    </div>
                ))}
            </div> */}
            <div className="attribute-buttons">
        {Object.keys(attributes).map(attributeName => (
          attributeName.length > 0 && (
            <div key={attributeName} className="attribute">
              <h3>{attributeName.charAt(0).toUpperCase() + attributeName.slice(1)} : {selectedValues[attributeName]}</h3>
              {Array.from(attributes[attributeName]).map(attributeValue => (
                <button
                  key={attributeValue}
                  className={selectedValues[attributeName] === attributeValue ? 'active' : ''}
                  onClick={() => handleButtonClick(attributeName, attributeValue)}
                >
                  {/*{attributeValue}*/}
                  {attributeValue.charAt(0).toUpperCase() + attributeValue.slice(1)}
                </button>
              ))}
            </div>
          )
        ))}
      </div>
            <div className="selected-values" style={{display:"none"}}>
                <h2>Selected Values:</h2>
                {Object.keys(selectedValues).map(attributeName => (
                    <p key={attributeName}>
                        {attributeName.charAt(0).toUpperCase() + attributeName.slice(1)}: {selectedValues[attributeName]}
                    </p>
                ))}
            </div>
            <div className="remaining-fields">
                {/* <h2>Remaining Fields for Selected Products:</h2> */}
                {selectedProducts && selectedProducts.map((product, index) => (
                    <div key={index}>
                        {/* <h3>Product {index + 1}</h3> */}
                        <p>SKU: {product.sku}</p>
                        
                            {
                               product.sale_price!='' && (product?.price - product?.sale_price!=0) ? (<p><del><strong>₹ {product.price}</strong></del> <span><strong>₹ {product.sale_price}</strong></span></p>) : (<p><span><strong>₹ {product.price}</strong></span></p>) 
                            }
                            

                            
                        
                        <p>{product.quantity} in Stock</p>
                        <p>cod_charges: {product.cod_charges}</p>
                        <p>shipping_charges: {product.shipping_charges}</p>
                        {/* <p>Weight: {product.weight}</p> */}
                        {/* <p>Dimensions: {product.dimensions.length} x {product.dimensions.width} x {product.dimensions.height}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductAttributes;