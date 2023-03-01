import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import uuid from 'react-uuid';
import { newsConfig } from '../../data/infoPageNews';
import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import TextParagraph from '../../common/TextParagraph/TextParagraph';
import ItemsList from '../../common/ItemsList/ItemsList';
import TitleSecondLevel from '../../common/TitleSecondLevel/TitleSecondLevel';
import ButtonArrow from '../../common/ButtonArrow/ButtonArrow';

import s from './News.module.css';

export default function News() {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(5);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = newsConfig.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(newsConfig.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % newsConfig.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <SectionHero title="News" className={s.newsHero} />
      <Section>
        <Container>
          <TitleSecondLevel title="All news" className="visuallyHidden" />
          <ul className={s.newsList}>
            {currentItems.map(items => (
              <ItemsList item={items} key={uuid()} className={s.newsListItems}>
                <p className={s.newsListSubtext}>{items.subText}</p>
                <h3 className={s.newsListTitle}>{items.title}</h3>
                <TextParagraph text={items.text} className={s.newsListText} />
                <ButtonArrow
                  to={items.url}
                  message="read more"
                  className={s.newsListBtn}
                />
              </ItemsList>
            ))}
          </ul>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            renderOnZeroPageCount={null}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            disabledClassName={s.paginationDisabledBtn}
            previousLinkClassName={s.paginationPrevLink}
            nextLinkClassName={s.paginationNextLink}
            breakLinkClassName={s.breakLink}
            className={s.padinationList}
            pageClassName={s.paginationListItem}
            activeClassName={s.paginationListItemActive}
          />
        </Container>
      </Section>
    </>
  );
}
