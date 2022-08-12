import React from 'react';
import { FilterOption, allFilterOptions } from '../models/tracking';

interface Props {
  filterOption: FilterOption;
  onChangeFilterOption: (option: FilterOption) => void;
}

function Profile(props: Props) {
  return (
    <div className="profile">
      <div className="profile__body">
        <img className="profile__avatar" src="images/image-jeremy.png" alt="Avatar" />
        <p className="profile__name">
          <span className="profile__report">Report for</span>
          Jeremy Robson
        </p>
      </div>
      <div className="profile__menu">
        {allFilterOptions.map((option: FilterOption) => (
          <div
            key={option}
            className={`profile__menuitem ${props.filterOption === option ? 'active' : ''}`}
            onClick={() => props.onChangeFilterOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
