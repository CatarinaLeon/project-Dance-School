import { NavLink } from 'react-router-dom';
import s from './ListNav.module.css';

export default function ListNav({ children, className, items }) {
  return (
    <ul className={`${s.list} ${className}`}>
      {items.map(({ name, url, icon }, index) => (
        <li className={s.listItem} key={index}>
          <NavLink className={`${s.listLink} ${className}`} to={url}>
            {children}
            {name}
            {icon}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
