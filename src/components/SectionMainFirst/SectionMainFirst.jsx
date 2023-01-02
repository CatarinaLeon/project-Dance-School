import SectionHero from '../../common/SectionHero/SectionHero';
import ContainerEllipse from '../../common/ContainerEllipse/ContainerEllipse';
import Button from '../../common/Button/Button';

import s from './SectionMainFirst.module.css';

export default function SectionMainFirst() {
  return (
    <SectionHero className={s.sectionHero}>
      <ContainerEllipse className={s.heroBox} title="We are open!">
        <p className={s.heroText}>
          First group lesson for free! Shall we dance?
        </p>
        <Button message="Start Now" className={s.heroBtn} />
      </ContainerEllipse>
    </SectionHero>
  );
}
