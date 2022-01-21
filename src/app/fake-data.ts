import faker from '@faker-js/faker';

export const data = Array(5)
  .fill('')
  .map(() => ({
    name: faker.name.findName(),
    totalRuns: Math.round(Math.random() * 1000),
    system: faker.company.companyName(),
  }));

export const cols = [
  { key: 'name', name: 'Name' },
  { key: 'totalRuns', name: 'Total Runs' },
  { key: 'system', name: 'System' },
  { key: 'details', name: 'Details' },
];
