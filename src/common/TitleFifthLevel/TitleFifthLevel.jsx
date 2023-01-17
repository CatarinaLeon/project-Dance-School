import s from './TitleFifthLevel.module.css';

export default function TitleFifthLevel({ title, className }) {
  return <h5 className={`${s.title} ${className}`}>{title}</h5>;
}
