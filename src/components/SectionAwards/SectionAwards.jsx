import { awardsConfig } from '../../data/infoSectionAwards';

import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import TitleSecondLevel from '../../common/TitleSecondLevel/TitleSecondLevel';
import SimpleSlider from '../../common/SimpleSlider/SimpleSlider';
import SliderCard from '../../common/SliderCard/SliderCard';

import s from './SectionAwards.module.css';

export default function SectionAwards() {
  return (
    <Section>
      <Container>
        <TitleSecondLevel title="Awards" />
        <SimpleSlider>
          {awardsConfig.map((items, index) => (
            <SliderCard
              item={items}
              key={index}
              className={s.awardsSliderCard}
            />
          ))}
        </SimpleSlider>
      </Container>
    </Section>
  );
}
