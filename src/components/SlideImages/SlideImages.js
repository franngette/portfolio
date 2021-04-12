import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import './SlideImages.scss'

const SlideImages = ({ images, alt }) => {
  const [index, setIndex] = useState(0);
  const sumIndex = () => {
    let newIndex;
    if (index === images.length - 1) {
      newIndex = 0;
    } else {
      newIndex = index + 1;
    }
    setIndex(newIndex);
  };
  return (
    <LazyLoadImage
      effect="blur"
      onClick={() => sumIndex()}
      className="slide" src={images[index]}
      alt={alt + index} />
  )
};
export default SlideImages;
