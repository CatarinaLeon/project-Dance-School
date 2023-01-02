import TitleSecondLevel from '../../common/TitleSecondLevel/TitleSecondLevel';
import Container from '../../common/Container/Container';
import Section from '../../common/Section/Section';
import s from './SectionOurTeachers.module.css';
import SimpleSlider from '../../common/SimpleSlider/SimpleSlider';
import { ourTeachersConfig } from '../../data/infoSectionOurTeachers';

import SliderCard from '../../common/SliderCard/SliderCard';

export default function SectionOurTeachers() {
  return (
    <Section className={s.sectionTeachers}>
      <Container>
        <TitleSecondLevel title="Our Teachers" className={s.teachersTitle} />
        <SimpleSlider className={s.slider}>
          {ourTeachersConfig.map((items, index) => (
            <SliderCard item={items} key={index} />
          ))}
        </SimpleSlider>
      </Container>
    </Section>
  );
}

// ({
//   arrows: true,
//   dots: true,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   speed: 1000,
//   // тип анимации
//   easing: 'ease',
//   // бесконечная прокрутка слайдов
//   infinite: false,
//   // стартовый слайд, по умолчанию 0
//   initialSlide: 0,
//   // Автоматическая адаптивная высота слайдера => adaptiveHeight
//   adaptiveHeight: true,
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         dots: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
//   // mobileFirst:false,
//   // автоматичеая прокрутка слайдов => autoplay по умол false
//   // autoplay: false,
//   // скорость прокрутки => autoplaySpeed
//   // autoplaySpeed:3000,
//   // пауза при наведении => pauseOnHover
//   // pauseOnHover: true,
//   // пауза в фокусе => pauseOnFocus
//   // pauseOnFocus:true,
//   // пауза при наведении на точки => pauseOnDotsHover
//   // pauseOnDotsHover: true,
//   // не свайпать мышкой => draggable
//   // draggable:false,
//   // не свайпать на моб устройствах => swipe
//   // swipe:false,
//   // touchThreshold:5,
//   // touchMove:true,
//   // быстро перелистивать слайды
//   // waitForAnimate: false,
//   // первый слайд по центру
//   // centerMode:false,
//   // variableWidth:false,
//   // rows:1,
//   // slidesPerRow:2,
//   // vertical: true,
//   // verticalSwiping: true,
// });
