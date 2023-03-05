import uuid from 'react-uuid';
import { socialNetworksConfig } from '../../data/socialNav';
import s from './ListSocialNetworks.module.css';

export default function ListSocialNetworks({ className }) {
  return (
    <ul className={`${s.socialList} ${className}`}>
      {socialNetworksConfig.map(({ url, icon, ariaLabel }) => (
        <li className={s.socialListItems} key={uuid()}>
          <a
            href={url}
            className={s.socialListLink}
            aria-label={ariaLabel}
            target="blank"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
