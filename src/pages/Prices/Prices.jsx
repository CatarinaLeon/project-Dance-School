import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';

import s from './Prices.module.css';

export default function Prices() {
  return (
    <>
      <SectionHero className={s.pricesHero} title="Prices" />
      <Section>
        <Container></Container>
      </Section>
    </>
  );
}
