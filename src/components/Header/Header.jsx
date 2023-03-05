import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { navConfig } from '../../data/navigation.js';

import Container from '../../common/Container/Container';
import ListNav from '../../common/ListNav/ListNav';
import ListSocialNetworks from '../../common/ListSocialNetworks/ListSocialNetworks';
import Modal from '../../common/Modal/Modal.jsx';
import BackgroundImg from '../../common/BackgroundImg/BackgroundImg';

import { ReactComponent as Logo } from '../../images/SVG/LOGO-header.svg';
import { ReactComponent as IconSchedule } from '../../images/SVG/icon-schedule.svg';
import { ReactComponent as IconMobMenu } from '../../images/SVG/icon-mob-menu.svg';

import s from './Header.module.css';

export default function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <NavLink to="/" className={s.headerNavLogo}>
          <Logo className={s.headerLogo} />
          Home
        </NavLink>
        {isDesktop && <ListNav items={navConfig} className={s.headerList} />}
        {isTablet && (
          <>
            <NavLink className={s.btnSchedule} to="/schedule-off">
              <IconSchedule className={s.btnScheduleIcon} />
              Schedule
            </NavLink>
            <ListSocialNetworks className={s.socialList} />
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
          </>
        )}
        <button
          type="submit"
          className={s.headerMenuBtn}
          onClick={openModal}
          aria-label="button open modal"
        >
          <IconMobMenu />
        </button>

        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
          <ListNav
            items={navConfig}
            className={s.modalList}
            onClick={closeModal}
          />
          <BackgroundImg className={s.modalBackgroundImg} />
          {isMobile && (
            <div className={s.ContainerWrapper}>
              <NavLink className={s.btnSchedule} to="/schedule-off">
                <IconSchedule className={s.btnScheduleIcon} />
                Schedule
              </NavLink>
              <ListSocialNetworks />
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
            </div>
          )}
        </Modal>
      </Container>
    </header>
  );
}
