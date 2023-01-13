import Slider from 'react-slick';
import './SimpleSlider.css';

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
