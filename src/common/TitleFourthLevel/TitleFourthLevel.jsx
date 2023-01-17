import s from './TitleFourthLevel.module.css';

export default function TitleFourthLevel({ title, className }) {
  return <h4 className={`${s.title} ${className}`}>{title}</h4>;
}
