import Button from '../Button/Button';
import s from './ContainerEllipseBlue.module.css';

export default function ContainerEllipseBlue({
  title,
  className,
  children,
  message,
}) {
  return (
    <div className={`${s.boxEllipse} ${className}`}>
      <p className={s.boxEllipseTitle}>{title}</p>
      {children}
      <Button message={message} className={s.boxEllipseBtn} />
    </div>
  );
}
