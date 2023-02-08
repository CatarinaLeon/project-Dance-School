import { useState } from 'react';
import Calendar from 'react-calendar';

import { ReactComponent as IconSchedule } from '../../images/SVG/icon-schedule.svg';
import s from './Calendar.module.css';
import './CalendarStyles.css';

export default function CalendarComponent() {
  const [value, onChange] = useState(new Date());
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const openCalendar = () => {
    setIsOpenCalendar(prev => !prev);
  };

  return (
    <div>
      <button type="button" className={s.caLendarBtn} onClick={openCalendar}>
        <IconSchedule className={s.caLendarBtnIcon} />
        CaLendaR
      </button>
      <div className={isOpenCalendar ? s.calendarActive : s.calendar}>
        <Calendar onChange={onChange} value={value} locale="en" />
      </div>
    </div>
  );
}
