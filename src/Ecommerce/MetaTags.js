import React, { useState, useEffect } from 'react';

const MetaTags = ({ tags }) => {
  const { url, image, title, description } = tags;
  return (
    <>
        {/* post_url +'productimages/'+ product.productImages[0] */}
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
    </>
  );
};

export default MetaTags;