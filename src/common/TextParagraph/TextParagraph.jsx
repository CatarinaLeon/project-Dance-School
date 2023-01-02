import s from './TextParagraph.module.css';

export default function TextParagraph({ text, className }) {
  return <p className={`${s.text} ${className}`}>{text}</p>;
}
