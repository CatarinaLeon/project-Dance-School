import s from './TitleFirstLevel.module.css';

export default function TitleFirstLevel({ title, className }) {
  return <h1 className={`${s.title} ${className}`}>{title}</h1>;
}
