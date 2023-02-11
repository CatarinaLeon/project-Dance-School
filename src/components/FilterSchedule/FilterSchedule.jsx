import uuid from 'react-uuid';
// import { useState } from 'react';
import {
  filterDanceConfig,
  difficultyLevelConfig,
} from '../../data/infoFilterDance';
import Button from '../../common/Button/Button';
import Calendar from '../../common/Calendar/Calendar';
import Chart from '../../common/Chart/Chart';
// import CalendarTimeline from '../../common/CalendarTimeline/CalendarTimeline';
import ContainerEllipseBlue from '../../common//ContainerEllipseBlue/ContainerEllipseBlue';
import s from './FilterSchedule.module.css';

export default function FilterSchedule() {
  return (
    <div className={s.filterContainer}>
      <ul className={s.filterList}>
        {filterDanceConfig.map(items => (
          <li key={uuid()} className={s.filterListItem}>
            <input
              id={items.id}
              type="radio"
              name="tabs"
              defaultChecked="checked"
              className={s.filterListInput}
            />
            <label htmlFor={items.id} className={s.filterListLabel}>
              {items.title}
            </label>
            <div className={s.filterItemContainer}>
              <img src={items.img} alt="" className={s.filterItemImg} />
              <ul className={s.checkboxList}>
                {items.category.map(({ name }) => (
                  <li className={s.checkboxListItem} key={uuid()}>
                    <input
                      type="checkbox"
                      className={s.checkboxListInput}
                      name="policy"
                      id="policy"
                    />
                    <label htmlFor="policy" className={s.checkboxListLabel}>
                      {name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <div className={s.containerRadioBtn}>
        <p className={s.radioText}>Difficulty level</p>
        <ul className={s.radioList}>
          {difficultyLevelConfig.map(({ id, name }) => (
            <li className={s.radioListItem} key={uuid()}>
              <input type="radio" name="policy" id={id} />
              <label htmlFor={id} className={s.radioListLabel}>
                {name}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.containerSearchTeacher}>
        <label htmlFor="" className={s.searchTeacherLabel}>
          Teachers name
        </label>
        <input
          type="text"
          placeholder="teachers name..."
          className={s.searchTeacherInput}
        />
      </div>
      <div className={s.containerButton}>
        <Button message="Searh" className={s.buttonSearh} />
        <Button message="Clear" className={s.buttonClear} />
      </div>
      <div className={s.calendarContainer}>
        <Calendar />
        <Chart />
        {/* <CalendarTimeline /> */}
      </div>
      <ContainerEllipseBlue
        title="Join us!"
        message="join"
        className={s.ellipseSchedule}
      >
        <input
          type="text"
          name="user"
          placeholder="name*"
          required
          className={s.ellipseInput}
        />
        <input
          type="text"
          name="user"
          placeholder="E-mail*"
          required
          className={s.ellipseInput}
        />
        <input
          type="text"
          name="user"
          placeholder="phone number*"
          required
          className={s.ellipseInput}
        />
      </ContainerEllipseBlue>
    </div>
  );
}
