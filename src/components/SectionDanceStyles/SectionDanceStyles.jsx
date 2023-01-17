import uuid from 'react-uuid';
import { danceStylesConfig } from '../../data/infoSectionDanceStyles';

import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import TitleSecondLevel from '../../common/TitleSecondLevel/TitleSecondLevel';
import ItemsList from '../../common/ItemsList/ItemsList';
import ContainerEllipseBlue from '../../common/ContainerEllipseBlue/ContainerEllipseBlue';
import BackgroundImg from '../../common/BackgroundImg/BackgroundImg';

import s from './SectionDanceStyles.module.css';

export default function SectionDanceStyles() {
  return (
    <Section className={s.sectionDanceSt}>
      <Container>
        <TitleSecondLevel title="Dance Styles" className={s.danceStTitle} />
        <ul className={s.danceStList}>
          {danceStylesConfig.map(items => (
            <ItemsList item={items} key={uuid()}>
              <p>{items.text}</p>
            </ItemsList>
          ))}
        </ul>
        <ContainerEllipseBlue title="Shall we dance?" message="Start Now" />
      </Container>
      <BackgroundImg className={s.imgEllipse} />
    </Section>
  );
}
