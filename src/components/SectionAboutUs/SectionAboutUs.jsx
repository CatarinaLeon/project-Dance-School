import uuid from 'react-uuid';
import { aboutUsConfig } from '../../data/infoSectionAboutUs';

import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import TitleSecondLevel from '../../common/TitleSecondLevel/TitleSecondLevel';
import TextParagraph from '../../common/TextParagraph/TextParagraph';
import ItemsList from '../../common/ItemsList/ItemsList';
import ButtonArrow from '../../common/ButtonArrow/ButtonArrow';

import s from './SectionAboutUs.module.css';
import BackgroundImg from '../../common/BackgroundImg/BackgroundImg';

export default function SectionAboutUs() {
  return (
    <Section className={s.sectionAbout}>
      <Container>
        <TitleSecondLevel title="About Us" className={s.aboutTitle} />
        <div className={s.aboutWrapper}>
          <TextParagraph
            className={s.aboutText}
            text="Starting from 2017 Lead & Follow Dance School is teaching people how
            to dance with great success and because of our innovative methods
            and unique studio format we are strongly presented among the leaders
            in the market of dance related services."
          />
          <ul className={s.aboutList}>
            {aboutUsConfig.map(items => (
              <ItemsList item={items} key={uuid()}>
                <p>{items.text}</p>
              </ItemsList>
            ))}
          </ul>
          <ButtonArrow
            className={s.aboutBtn}
            to="/about"
            message="Learn more"
          />
        </div>
      </Container>
      <BackgroundImg className={s.BackgroundImg} />
    </Section>
  );
}
