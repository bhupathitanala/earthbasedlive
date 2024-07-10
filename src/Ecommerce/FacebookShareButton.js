import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const FacebookShareBtn = ({ url, quote, hashtag }) => {
  return (
    <FacebookShareButton
      url={url}
      quote={quote}
      hashtag={hashtag}
      className="facebook-share-button"
    >
      <FacebookIcon size={25} round />
    </FacebookShareButton>
  );
};

export default FacebookShareBtn;
