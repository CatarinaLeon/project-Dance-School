import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import s from './ScheduleOff.module.css';
import TextParagraph from '../../common/TextParagraph/TextParagraph';
import { NavLink } from 'react-router-dom';

export default function ScheduleOff() {
  return (
    <>
      <SectionHero className={s.scheduleHero} title="Schedule. Off-line">
        <Button message="Download schedule" className={s.scheduleBtn} />
      </SectionHero>
      <Section>
        <Container>
          <div className={s.scheduleBtnBox}>
            <NavLink
              to="/schedule-off"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.scheduleListLink
              }
            >
              Off-line
            </NavLink>
            <NavLink
              to="/schedule-on"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.scheduleListLink
              }
            >
              On-line
            </NavLink>
          </div>
          <TextParagraph
            className={s.scheduleText}
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur"
          />

          <div></div>
        </Container>
      </Section>
    </>
  );
}
