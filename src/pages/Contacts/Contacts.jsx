import Section from '../../common/Section/Section';
import ContainerEllipseAdress from '../../common/ContainerEllipseAdress/ContainerEllipseAdress';
import BackgroundImg from '../../common/BackgroundImg/BackgroundImg';
import s from './Contacts.module.css';

export default function Contacts() {
  return (
    <Section className={s.sectionMap}>
      <ContainerEllipseAdress className={s.boxMap} />
      <BackgroundImg className={s.BackgroundImgMap} />
    </Section>
  );
}
