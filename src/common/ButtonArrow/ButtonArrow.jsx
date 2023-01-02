import { Link } from 'react-router-dom';

import { ReactComponent as ArrowRight } from '../../images/SVG/icon-arrow-right.svg';
import s from './ButtonArrow.module.css';

export default function ButtonArrow({
  className,
  type = 'button',
  message,
  to,
}) {
  return (
    <button className={`${s.buttonArrow} ${className}`} type={type}>
      <ArrowRight className={s.buttonArrowIcon} />
      <Link to={to} className={s.buttonArrowLink}>
        {message}
      </Link>
    </button>
  );
}
