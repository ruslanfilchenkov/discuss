import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 1076,
};

export const sampleWithPartialData: IEmployee = {
  id: 16610,
  firstName: 'Alisha',
  lastName: 'Blick',
  phoneNumber: 'justly elongate',
  salary: 15341,
  commissionPct: 15444,
};

export const sampleWithFullData: IEmployee = {
  id: 15599,
  firstName: 'Luz',
  lastName: 'Price',
  email: 'Bryon_Schumm73@hotmail.com',
  phoneNumber: 'previous mysteriously loosely',
  hireDate: dayjs('2024-01-09T02:11'),
  salary: 8378,
  commissionPct: 23301,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
