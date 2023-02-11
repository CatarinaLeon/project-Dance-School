import React from 'react';
import Timeline from 'react-calendar-timeline';
import moment from 'moment';
import './CalendarTimeline.css';

export default function CalendarTimeline() {
  const groups = [
    { id: 1, title: '07 am' },
    { id: 2, title: '08 am' },
    { id: 3, title: '09 am' },
    { id: 4, title: '10 am' },
    { id: 5, title: '11 am' },
    { id: 6, title: '12 am' },
    { id: 7, title: '01 am' },
    { id: 8, title: '02 am' },
    { id: 9, title: '03 am' },
    { id: 10, title: '04 am' },
    { id: 11, title: '05 am' },
    { id: 12, title: '06 am' },
    { id: 13, title: '07 am' },
    { id: 14, title: '08 am' },
    { id: 15, title: '09 am' },
    { id: 16, title: '10 am' },
    { id: 17, title: '11 am' },
    { id: 18, title: '12 am' },
  ];

  const items = [
    {
      id: 1,
      group: 1,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(0.5, 'hour'),
    },
    {
      id: 3,
      group: 1,
      title: 'item 3',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(3, 'hour'),
    },
  ];
  return (
    <div>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
        sidebarWidth={50}
        lineHeight={40}
        canMove={false}
      />
    </div>
  );
}
