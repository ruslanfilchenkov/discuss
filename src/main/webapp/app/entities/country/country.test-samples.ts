import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 8020,
};

export const sampleWithPartialData: ICountry = {
  id: 8083,
  countryName: 'than castanet',
};

export const sampleWithFullData: ICountry = {
  id: 3874,
  countryName: 'till extremely',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
