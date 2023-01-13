import uuid from 'react-uuid';
import { danceStylesConfig } from '../../data/infoSectionDanceStyles';

import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import TitleSecondLevel from '../../common/TitleSecondLevel/TitleSecondLevel';
import ItemsList from '../../common/ItemsList/ItemsList';
import ContainerEllipse from '../../common/ContainerEllipse/ContainerEllipse';
import Button from '../../common/Button/Button';

import s from './SectionDanceStyles.module.css';
import BackgroundImg from '../../common/BackgroundImg/BackgroundImg';

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
        <ContainerEllipse title="Shall we dance?" className={s.danceStEllipse}>
          <Button message="Start Now" className={s.danceStBtn} />
        </ContainerEllipse>
      </Container>
      <BackgroundImg className={s.imgEllipse} />
    </Section>
  );
}
