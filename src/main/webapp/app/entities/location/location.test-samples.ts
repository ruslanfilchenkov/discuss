import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 18814,
};

export const sampleWithPartialData: ILocation = {
  id: 4115,
};

export const sampleWithFullData: ILocation = {
  id: 30110,
  streetAddress: 'infer drainage',
  postalCode: 'save how',
  city: 'Salinas',
  stateProvince: 'impossible upbeat reference',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
