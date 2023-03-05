import { CirclesWithBar } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <CirclesWithBar
      height="150"
      width="100"
      color="#3483c7"
      wrapperStyle={{}}
      wrapperClass={s.loader}
      visible={true}
      outerCircleColor=""
      innerCircleColor="#073773"
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
  );
}
