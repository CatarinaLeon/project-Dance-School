import s from './TitleThirdLevel.module.css';

export default function TitleThirdLevel({ title, className }) {
  return <h3 className={`${s.title} ${className}`}>{title}</h3>;
}
