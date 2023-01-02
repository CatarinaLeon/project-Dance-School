import uuid from 'react-uuid';
import { pageAboutUsConfig } from '../../data/infoPageAboutUs';

import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import TextParagraph from '../../common/TextParagraph/TextParagraph';
import ItemsList from '../../common/ItemsList/ItemsList';
import TitleThirdLevel from '../../common/TitleThirdLevel/TitleThirdLevel';
import ButtonArrow from '../../common/ButtonArrow/ButtonArrow';
import SectionAwards from '../../components/SectionAwards/SectionAwards';

import s from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <>
      <SectionHero className={s.aboutHero} title="About Us" />
      <Section className={s.sectionAboutUs}>
        <Container>
          <TextParagraph
            className={s.aboutUsText}
            text="Starting from 2017 Lead & Follow Dance School is teaching people how to dance with great success and 
              because of our innovative methods and unique studio format we are strongly presented among the 
              leaders in the market of dance related services"
          />
          <ul className={s.aboutUsList}>
            {pageAboutUsConfig.map(items => (
              <ItemsList
                item={items}
                key={uuid()}
                className={s.aboutUsListItem}
              >
                <div className={s.aboutUsWrapper}>
                  <TitleThirdLevel
                    title={items.title}
                    className={s.aboutUsListTitle}
                  />
                  <TextParagraph
                    className={s.aboutUsListText}
                    text={items.text}
                  />
                  <ButtonArrow
                    to={items.url}
                    message="Start now"
                    className={s.aboutUsListBtn}
                  />
                </div>
              </ItemsList>
            ))}
          </ul>
        </Container>
      </Section>
      <SectionAwards />
    </>
  );
}
