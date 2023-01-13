import { NavLink } from 'react-router-dom';
import { navConfig } from '../../data/navigation.js';
import { socialNavigation } from '../../data/socialNav.js';
import useResizeWindow from '../../hooks/useResizeWindow.js';

import ListNav from '../../common/ListNav/ListNav';
import Container from '../../common/Container/Container';
import { ReactComponent as Logo } from '../../images/SVG/LOGO-header.svg';
import { ReactComponent as IconSchedule } from '../../images/SVG/icon-schedule.svg';
import { ReactComponent as IconMobMenu } from '../../images/SVG/icon-mob-menu.svg';

import s from './Header.module.css';

export default function Header() {
  const width = useResizeWindow();
  const breakPointTablet = 768;

  if (width < breakPointTablet) {
    return (
      <header className={s.header}>
        <Container className={s.containerHeader}>
          <NavLink to="/">
            <Logo className={s.headerLogo} />
          </NavLink>
          <button type="button" className={s.headerMenuBtn}>
            <IconMobMenu />
          </button>
        </Container>
      </header>
    );
  } else {
    return (
      <header className={s.header}>
        <Container className={s.containerHeader}>
          <NavLink to="/">
            <Logo className={s.headerLogo} />
          </NavLink>
          <ListNav items={navConfig} className={s.headerList} />
          <button className={s.btnSchedule}>
            <IconSchedule className={s.btnScheduleIcon} />
            Schedule
          </button>
          <ListNav items={socialNavigation} className={s.socialList} />
          <div className={s.containerLang}>
            <button type="button" className={s.btnLang}>
              EN
            </button>
            <button type="button" className={s.btnLang}>
              UK
            </button>
            <button type="button" className={s.btnLang}>
              中国人
            </button>
          </div>
          <button type="button" className={s.headerMenuBtn}>
            <IconMobMenu />
          </button>
        </Container>
      </header>
    );
  }
}
