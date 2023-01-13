import uuid from 'react-uuid';
import { newsConfig } from '../../data/infoPageNews';
import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import TextParagraph from '../../common/TextParagraph/TextParagraph';
import ItemsList from '../../common/ItemsList/ItemsList';
// import TitleThirdLevel from '../../common/TitleThirdLevel/TitleThirdLevel';
import ButtonArrow from '../../common/ButtonArrow/ButtonArrow';

import s from './News.module.css';

export default function News() {
  return (
    <>
      <SectionHero title="News" className={s.newsHero} />
      <Section>
        <Container>
          <ul>
            {newsConfig.map(items => (
              <ItemsList
                item={items}
                index={uuid()}
                className={s.newsListItems}
              >
                <p className={s.newsListSubtext}>{items.subText}</p>
                <h4 className={s.newsListTitle}>{items.title}</h4>
                {/* <TitleThirdLevel title={items.title} /> */}
                <TextParagraph text={items.text} className={s.newsListText} />
                <ButtonArrow
                  to={items.url}
                  message="read more"
                  className={s.newsListBtn}
                />
              </ItemsList>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
