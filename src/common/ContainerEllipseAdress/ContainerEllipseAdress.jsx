import ContainerEllipse from '../ContainerEllipse/ContainerEllipse';
import s from './ContainerEllipseAdress.module.css';

export default function ContainerEllipseAdress({ className }) {
  return (
    <ContainerEllipse
      className={`${s.containerMap} ${className}`}
      title="Address"
    >
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
  );
}
