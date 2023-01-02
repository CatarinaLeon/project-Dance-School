import Section from '../../common/Section/Section';
import ContainerEllipse from '../../common//ContainerEllipse/ContainerEllipse';
import s from './SectionAddressMap.module.css';

export default function SectionAddressMap() {
  return (
    <Section className={s.sectionMap}>
      SectionAddressMap
      <ContainerEllipse className={s.containerMap} title="Address">
        <address className={s.mapAddress}>
          <a
            href="tell:+1 (626) 839-8484"
            className={`${s.mapTextTell} ${s.mapText}`}
          >
            +1 (626) 839-8484
          </a>
          <a
            href="mailto:leadandfollowds@gmail.com"
            className={`${s.mapTextMail} ${s.mapText}`}
          >
            leadandfollowds@gmail.com
          </a>
          <p className={`${s.mapTextAddress} ${s.mapText}`}>
            3660 Nogales St., Unit J West Covina, CA 91792 United States
          </p>
        </address>
      </ContainerEllipse>
    </Section>
  );
}
