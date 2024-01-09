import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 4670,
};

export const sampleWithPartialData: IJob = {
  id: 4256,
  minSalary: 30592,
};

export const sampleWithFullData: IJob = {
  id: 15653,
  jobTitle: 'Global Applications Associate',
  minSalary: 23387,
  maxSalary: 12742,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
