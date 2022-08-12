import React, { useState, useEffect, useCallback } from 'react';
import Profile from './Profile';
import TimeCard from './TimeCard';
import { allCategories, FilterOption, TrackingModel } from '../models/tracking';
import axiosInstance from '../utils/axios';

function Page() {
  const [filterOption, setFilterOption] = useState<FilterOption>('daily');
  const [trackingData, setTrackingData] = useState<TrackingModel[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const { data } = await axiosInstance.get('');
      setTrackingData(data);
    };

    loadData();
  }, []);

  const onChangeFilterOption = useCallback((option: FilterOption) => {
    setFilterOption(option);
  }, []);

  return (
    <div className="page">
      <div className="container">
        <Profile
          filterOption={filterOption}
          onChangeFilterOption={onChangeFilterOption}
        />
        {trackingData.map((data: TrackingModel, index: number) => (
          <TimeCard
            key={index}
            category={allCategories[index]}
            title={data.title}
            hours={data.timeframes[filterOption].current}
            prevHours={data.timeframes[filterOption].previous}
            filterOption={filterOption}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
