import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({
  onClick = () => {},
  type,
  message,
  className,
  children,
}) {
  return (
    <button
      className={`${s.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
      {message}
    </button>
  );
}

Button.propTypes = {
  // message: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
