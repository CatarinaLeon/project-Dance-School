import Container from '../Container/Container';
// import Section from '../Section/Section';
import TitleFirstLevel from '../TitleFirstLevel/TitleFirstLevel';
import BackgroundImg from '../BackgroundImg/BackgroundImg';

import s from './SectionHero.module.css';

export default function SectionHero({ className, title, children }) {
  return (
    <section className={`${s.hero} ${className}`}>
      <Container>
        <TitleFirstLevel className={s.heroTitle} title={title} />
        {children}
        <BackgroundImg className={s.heroImgBottom} />
      </Container>
    </section>
  );
}
