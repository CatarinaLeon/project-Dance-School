import uuid from 'react-uuid';
import { specialEventsConfig } from '../../data/infoPageSpecialEvents';
import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import ItemsList from '../../common/ItemsList/ItemsList';
import TitleFourthLevel from '../../common//TitleFourthLevel/TitleFourthLevel';
import TextParagraph from '../../common//TextParagraph/TextParagraph';
import ButtonArrow from '../../common/ButtonArrow/ButtonArrow';
import s from './SpecialEvents.module.css';

export default function SpecialEvents() {
  return (
    <>
      <SectionHero className={s.eventsHero} title="Special Events" />
      <Section>
        <Container>
          <ul className={s.eventsList}>
            {specialEventsConfig.map(items => (
              <ItemsList
                item={items}
                key={uuid()}
                className={s.eventsListItems}
              >
                <p className={s.eventsListSubtextData}>{items.subTextData}</p>
                <TitleFourthLevel
                  title={items.title}
                  className={s.eventsListTitle}
                />
                <p className={s.eventsListSubtext}>
                  {items.subTextAddress}
                  <br />
                  <span>{items.subTextTime}</span>
                </p>
                <TextParagraph text={items.text} className={s.eventsListText} />
                <ButtonArrow
                  url={items.url}
                  message="read more"
                  className={s.eventsListBtn}
                />
              </ItemsList>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
