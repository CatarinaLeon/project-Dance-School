import { NavLink } from 'react-router-dom';
import { navConfig } from '../../data/navigation.js';
import useResizeWindow from '../../hooks/useResizeWindow.js';

import Container from '../../common/Container/Container';
import ListNav from '../../common/ListNav/ListNav';
import ListSocialNetworks from '../../common/ListSocialNetworks/ListSocialNetworks';

import { ReactComponent as Logo } from '../../images/SVG/LOGO-footer.svg';
import { ReactComponent as IconSchedule } from '../../images/SVG/icon-schedule.svg';

import s from './Footer.module.css';

export default function Footer() {
  const width = useResizeWindow();
  const breakPointTablet = 768;

  if (width < breakPointTablet) {
    return (
      <footer className={s.footer}>
        <Container className={s.footerContainer}>
          <NavLink to="/" className={s.footerNavLogo}>
            <Logo className={s.footerLogo} />
            Go back to the main page
          </NavLink>
          <NavLink className={s.btnSchedule} to="/schedule-off">
            <IconSchedule className={s.btnScheduleIcon} />
            Schedule
          </NavLink>
          <p className={s.footerTextCopyright}>
            ©2021. Lead&Follow Dance School. All rights reserved
          </p>
          <ListSocialNetworks className={s.socialList} />
        </Container>
      </footer>
    );
  } else {
    return (
      <footer className={s.footer}>
        <Container className={s.footerContainer}>
          <NavLink to="/" className={s.footerNavLogo}>
            <Logo className={s.footerLogo} />
            Go back to the main page
          </NavLink>
          <div className={s.footerListBlock}>
            <ListNav items={navConfig} className={s.footerList} />
            <NavLink className={s.btnSchedule} to="/schedule-off">
              <IconSchedule className={s.btnScheduleIcon} />
              Schedule
            </NavLink>
          </div>
          <div className={s.footerBox}>
            <p className={s.footerTextAddress}>
              New York, wall street, 21a lfdanceshool@gmail.com +380 (67) 255 55
              55
            </p>
            <p className={s.footerTextCopyright}>
              ©2021. Lead&Follow Dance School. All rights reserved
            </p>
            <ListSocialNetworks className={s.socialList} />
          </div>
        </Container>
      </footer>
    );
  }
}
