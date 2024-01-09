import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 5592,
};

export const sampleWithPartialData: ITask = {
  id: 20944,
  title: 'maybe but',
  description: 'uh-huh',
};

export const sampleWithFullData: ITask = {
  id: 1306,
  title: 'gee energetically',
  description: 'penny',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
