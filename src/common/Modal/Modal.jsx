import { NavLink } from 'react-router-dom';

import { ReactComponent as IconClose } from '../../images/SVG/icon-close-btn.svg';
import { ReactComponent as Logo } from '../../images/SVG/LOGO-header.svg';

import s from './Modal.module.css';

export default function Modal({ children, isModalOpen, closeModal }) {
  return (
    <div className={isModalOpen ? s.menuActive : s.menu} onClick={closeModal}>
      <div className={s.backdropModal}>
        <div className={s.modal} onClick={e => e.stopPropagation()}>
          <header className={s.modalHeader}>
            <NavLink to="/" className={s.modalHeaderLink}>
              <Logo className={s.modalIconLogo} />
              Go back to the main
            </NavLink>
            <button
              className={s.modalBtnClose}
              type="submit"
              aria-label="button close modal"
              onClick={closeModal}
            >
              <IconClose />
            </button>
          </header>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
