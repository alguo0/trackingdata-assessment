export type Category = 'exercise' | 'play' | 'selfcare' | 'social' | 'study' | 'work';
export type FilterOption = 'daily' | 'weekly' | 'monthly';

export const allCategories: Category[] = [
  'work',
  'play',
  'study',
  'exercise',
  'social',
  'selfcare',
];

export const allFilterOptions: FilterOption[] = [
  'daily',
  'weekly',
  'monthly',
];

export interface TimeframeModel {
  current: number;
  previous: number;
};

export interface TrackingModel {
  timeframes: {
    [key: string]: TimeframeModel
  };
  title: string;
};
