import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 32531,
  departmentName: 'frost',
};

export const sampleWithPartialData: IDepartment = {
  id: 24571,
  departmentName: 'vivid spurn',
};

export const sampleWithFullData: IDepartment = {
  id: 10427,
  departmentName: 'if ack',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'rectangular outside',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
