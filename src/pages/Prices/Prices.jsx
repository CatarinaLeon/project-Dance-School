import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import ImgPrices from '../../images/Prices/prices-img-mob-1x.webp';
import ContainerEllipseBlue from '../../common/ContainerEllipseBlue/ContainerEllipseBlue';

import s from './Prices.module.css';

export default function Prices() {
  return (
    <>
      <SectionHero className={s.pricesHero} title="Prices" />
      <Section>
        <Container>
          <div className={s.pricesBox}>
            <img src={ImgPrices} alt="" className={s.pricesBoxImg} />
            <div className={s.pricesBoxWrapper}>
              <h2 className={s.pricesBoxTitle}>
                For everyone who comes to our classes for the first time:
              </h2>
              <p className={s.pricesBoxText}>
                First group lesson <b>for free </b>(any class) <br />
                Trial package: 2 individual lessons and weekly group lessons =
                <b>$150</b>
                <br />
                The package applies to any group lessons in any quantity for one
                week.
              </p>
              <p className={s.pricesBoxText}>
                <b>
                  And also a nice bonus for everyone: Refer a friend who buys
                  the Trial Package and <span>get 50% off</span> one private
                  lesson.
                </b>
              </p>
            </div>
          </div>
          <ul className={s.pricesList}>
            <li className={s.pricesListItems}>
              <h3 className={s.pricesListTitle}>Groups</h3>
              <p className={s.pricesListText}>
                Drop in<span>$20</span>
              </p>
              <p className={s.pricesListText}>
                10 classes<span>$170</span>
              </p>
              <p className={s.pricesListText}>
                20 classes<span>$300 exp 3 mo</span>
              </p>
            </li>
            <li className={s.pricesListItems}>
              <h3 className={s.pricesListTitle}>Practice Parties</h3>
              <p className={s.pricesListText}>
                Drop in<span>$15</span>
              </p>
              <p className={s.pricesListText}>
                10 classes<span>$135</span>
              </p>
              <p className={s.pricesListText}>
                20 classes<span>$240 exp 3 mo</span>
              </p>
            </li>
            <li className={s.pricesListItems}>
              <h3 className={s.pricesListTitle}>
                Unlimited groups and practice
              </h3>
              <p className={s.pricesListText}>
                <span>$250/mo</span> per person
              </p>
              <p className={s.pricesListText}>
                <span>$400/mo</span> per couple or family member
              </p>
            </li>
            <li className={s.pricesListItems}>
              <h3 className={s.pricesListTitle}>on-line classes</h3>
              <p className={s.pricesListText}>
                <span>$15</span> one class
              </p>
            </li>
          </ul>
          <ContainerEllipseBlue title="Shall we dance?" message="Start Now" />
        </Container>
      </Section>
    </>
  );
}
