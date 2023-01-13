import uuid from 'react-uuid';
import { classesConfig } from '../../data/infoPageClasses';
import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
// import TextParagraph from '../../common/TextParagraph/TextParagraph';
import ItemsList from '../../common/ItemsList/ItemsList';
// import TitleThirdLevel from '../../common/TitleThirdLevel/TitleThirdLevel';
import ButtonArrow from '../../common/ButtonArrow/ButtonArrow';

import s from './Classes.module.css';

export default function Classes() {
  return (
    <>
      <SectionHero title="Classes" className={s.classesHero} />
      <Section>
        <Container>
          <ul className={s.classesList}>
            {classesConfig.map(items => (
              <ItemsList
                item={items}
                key={uuid()}
                className={s.classesListItems}
              >
                <h4 className={s.classesListTitle}>{items.title}</h4>
                <p className={s.classesListText}>{items.text}</p>
                <ButtonArrow message="More info" className={s.classesListBtn} />
              </ItemsList>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
