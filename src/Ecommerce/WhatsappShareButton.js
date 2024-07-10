import React, { useState, useEffect } from 'react';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const WhatsappShareButton = ({ product }) => {
    const { title, link, description } = product;
   
    const handleWhatsAppShare = () => {
      const text = `Check out this product: ${title}\n\n${description}\n\n${link}`;
      const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(text)}`;
  
      window.open(whatsappUrl, '_blank');
    };
  return (
    <>
        {/* WhatsApp Contact Icon */}
        <a onClick={handleWhatsAppShare}  target="_blank"  className='share_whatsapp_product'>
            <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:"18px"}} className='d-none d-md-block'/>
            <FontAwesomeIcon icon={faWhatsapp} className='d-block d-md-none'/>
        </a>
    </>
  );
};

export default WhatsappShareButton;