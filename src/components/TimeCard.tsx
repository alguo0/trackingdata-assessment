import React from 'react';
import { Category, FilterOption } from '../models/tracking';

const labelsForPrev = {
  'daily': 'Yesterday',
  'weekly': 'Last Week',
  'monthly': 'Last Month',
};

interface Props {
  category: Category;
  title: string;
  hours: number;
  prevHours: number;
  filterOption: FilterOption;
}

function TimeCard(props: Props) {
  return (
    <div className={`timecard timecard--${props.category}`}>
      <div className="timecard__bg" />
      <div className="timecard__body">
        <p className="timecard__title">
          {props.title}
          <img className="timecard__dots" src="images/icon-ellipsis.svg" alt="Menu" />
        </p>
        <div className="timecard__values">
          <p className="timecard__hours">{props.hours}hrs</p>
          <p className="timecard__totalhours">{labelsForPrev[props.filterOption]} - {props.prevHours}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default TimeCard;
