import { ReactComponent as Fc } from '../images/SVG/icon-social-facebook.svg';
import { ReactComponent as In } from '../images/SVG/icon-social-instagram.svg';
import { ReactComponent as Ut } from '../images/SVG/icon-social-youtube.svg';

export const socialNetworksConfig = [
  {
    url: 'https://www.youtube.com/',
    icon: <Ut />,
    ariaLabel: 'link to youtube page',
  },
  {
    url: 'https://www.facebook.com/',
    icon: <Fc />,
    ariaLabel: 'link to facebook page',

  },
  {
    url: 'https://www.instagram.com',
    icon: <In />,
    ariaLabel: 'link to instagram page',
  },
];
