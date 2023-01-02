import { ReactComponent as Fc } from '../images/SVG/icon-social-facebook.svg';
import { ReactComponent as In } from '../images/SVG/icon-social-instagram.svg';
import { ReactComponent as Ut } from '../images/SVG/icon-social-youtube.svg';

export const socialNavigation = [
  {
    url: '/contacts',
    icon: <Ut />,
  },
  {
    url: '/',
    icon: <Fc />,
  },
  {
    url: '/classes',
    icon: <In />,
  },
];
