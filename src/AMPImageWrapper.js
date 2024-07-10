// src/components/AMPImageWrapper.js
import React from 'react';
import { AmpImg } from 'react-amphtml';

const AMPImageWrapper = ({ src, alt, ...props }) => {
  return (
    <AmpImg
      src={src}
      alt={alt}
      width="auto"
      height="auto"
      layout="responsive"
      {...props}
    />
  );
};

export default AMPImageWrapper;
