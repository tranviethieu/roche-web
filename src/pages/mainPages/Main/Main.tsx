import React from 'react';
import FilterSelect from '~/components/common/FilterSelect/FilterSelect';

const options: {
  value: string;
  label: string;
}[] = [
  {
    value: 'jack',
    label: 'Hiếu',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'tom',
    label: 'Tom',
  },
];
const Main: React.FC = () => {
  return (
    <div style={{ background: '#fff', margin: 10, padding: 10 }}>
      <FilterSelect name="aa" listFilter={options} query="_testr" />
      <FilterSelect name="22" listFilter={options} query="_testr1" />
    </div>
  );
};

export default Main;
