import s from './TitleSecondLevel.module.css';

export default function TitleSecondLevel({ title, className }) {
  return <h2 className={`${s.title} ${className}`}>{title}</h2>;
}
