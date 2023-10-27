import Image from "next/image";
import image1 from '@/public/image-1.jpg';
import image2 from '@/public/image-2.jpg';
import image3 from '@/public/image-3.jpg';
import image4 from '@/public/image-4.jpg';
import image5 from '@/public/image-5.jpg';

import Slider from "react-slick";
export default function CarouselInfo() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <>
      <section className="slide-container-site">
      <Slider {...settings}>
            <Image id="img-carousel" src={image1} className="active" alt="Carousel" />
            <Image id="img-carousel" src={image2} alt="Carousel" />
            <Image id="img-carousel" src={image3} alt="Carousel" />
            <Image id="img-carousel" src={image4} alt="Carousel" />
            <Image id="img-carousel" src={image5} alt="Carousel" />
      </Slider>

        
      </section>
    </>
  )
}
