import { Link } from 'react-router-dom';

import { ReactComponent as ArrowRight } from '../../images/SVG/icon-arrow-right.svg';
import s from './ButtonArrow.module.css';

export default function ButtonArrow({ className, message, to }) {
  return (
    <Link to={to} className={`${s.buttonArrow} ${className}`}>
      <ArrowRight className={s.buttonArrowIcon} />
      {message}
    </Link>
  );
}
