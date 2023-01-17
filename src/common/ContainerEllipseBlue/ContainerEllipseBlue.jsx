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
      <h2 className={s.boxEllipseTitle}>{title}</h2>
      {children}
      <Button message={message} className={s.boxEllipseBtn} />
    </div>
  );
}
