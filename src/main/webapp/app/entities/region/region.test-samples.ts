import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 17349,
};

export const sampleWithPartialData: IRegion = {
  id: 5638,
  regionName: 'enormously arid how',
};

export const sampleWithFullData: IRegion = {
  id: 14147,
  regionName: 'ha scrawny',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
