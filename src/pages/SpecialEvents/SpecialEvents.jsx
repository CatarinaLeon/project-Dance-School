import { useState } from 'react';
import uuid from 'react-uuid';
import { specialEventsConfig } from '../../data/infoPageSpecialEvents';
import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import ItemsList from '../../common/ItemsList/ItemsList';
import TitleSecondLevel from '../../common/TitleSecondLevel/TitleSecondLevel';
import TextParagraph from '../../common//TextParagraph/TextParagraph';
import ButtonArrow from '../../common/ButtonArrow/ButtonArrow';
import Pagination from '../../components/Pagination/Pagination';

import s from './SpecialEvents.module.css';

export default function SpecialEvents() {
  const [itemsPageEvents] = useState(specialEventsConfig);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = itemsPageEvents.slice(firstItemIndex, lastItemIndex);

  return (
    <>
      <SectionHero className={s.eventsHero} title="Special Events" />
      <Section>
        <Container>
          <TitleSecondLevel title="Special Events" className="visuallyHidden" />
          <ul className={s.eventsList}>
            {currentItem.map(items => (
              <ItemsList
                item={items}
                key={uuid()}
                className={s.eventsListItems}
              >
                <p className={s.eventsListSubtextData}>{items.subTextData}</p>
                <h3 className={s.eventsListTitle}>{items.title}</h3>
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
          <Pagination
            totalItems={itemsPageEvents.length}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Container>
      </Section>
    </>
  );
}
