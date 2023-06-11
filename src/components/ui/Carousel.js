import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Carousel = ({ slides }) =>
  <ResponsiveCarousel emulateTouch autoPlay infiniteLoop showThumbs={false} showStatus={false}>
    {
      slides.map((slide, index) => 
        <div key={`slide${index}`}>
          <img src={`/images/${slide.image.source}`} alt={slide.image.alternate} />
        </div>
      )
    }
  </ResponsiveCarousel>;
