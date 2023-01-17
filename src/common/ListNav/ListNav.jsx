import { NavLink } from 'react-router-dom';
import uuid from 'react-uuid';
import s from './ListNav.module.css';

export default function ListNav({
  children,
  className,
  items,
  onClick = () => {},
}) {
  return (
    <ul className={`${s.list} ${className}`}>
      {items.map(({ name, url, icon }) => (
        <li className={s.listItem} key={uuid()}>
          <NavLink
            to={url}
            className={({ isActive }) =>
              isActive ? s.activeListLink : s.listLink
            }
            onClick={onClick}
          >
            {children}
            {name}
            {icon}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
