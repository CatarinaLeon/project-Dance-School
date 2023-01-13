import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import s from './SpecialEvents.module.css';

export default function SpecialEvents() {
  return (
    <>
      <SectionHero className={s.eventsHero} title="Special Events" />
      <Section>
        <Container></Container>
      </Section>
    </>
  );
}
