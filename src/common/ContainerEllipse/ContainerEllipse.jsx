import s from './ContainerEllipse.module.css';

export default function ContainerEllipse({ title, className, children }) {
  return (
    <div className={`${s.boxEllipse} ${className}`}>
      <h2 className={s.boxEllipseTitle}>{title}</h2>
      {children}
    </div>
  );
}
