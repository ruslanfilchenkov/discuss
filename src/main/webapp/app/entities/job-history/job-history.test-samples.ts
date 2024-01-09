import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 17992,
};

export const sampleWithPartialData: IJobHistory = {
  id: 24237,
  startDate: dayjs('2024-01-08T18:50'),
};

export const sampleWithFullData: IJobHistory = {
  id: 30727,
  startDate: dayjs('2024-01-09T06:32'),
  endDate: dayjs('2024-01-08T17:56'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
