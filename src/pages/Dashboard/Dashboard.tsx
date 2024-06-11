// src/pages/Dashboard.tsx
import { Button, DatePicker } from 'antd';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
    </>
  );
};

export default Dashboard;
