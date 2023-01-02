import Slider from 'react-slick';
import './SimpleSlider.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider({ children }) {
  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
  };
  return <Slider {...settings}>{children}</Slider>;
}
