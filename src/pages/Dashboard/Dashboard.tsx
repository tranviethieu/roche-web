// src/pages/Dashboard.tsx
import { Button, DatePicker, Form, Input } from 'antd';
import React from 'react';
import FloatInput from '~/components/common/FloatInput';

const validator = {
  require: {
    required: true,
    message: 'Required',
  },
};
const Dashboard: React.FC = () => {
  return (
    <div style={{ background: '#fff', margin: 10, padding: 10 }}>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Form
        size="large"
        name="user_login"
        className="login-form"
        layout="vertical"
      >
        <Form.Item name="email" rules={[validator.require]} hasFeedback>
          <FloatInput
            label="Email"
            placeholder="Email here please"
            name="email"
          />
        </Form.Item>
        <Form.Item name="email" rules={[validator.require]} hasFeedback>
          <Input placeholder="Email here please" name="aaaa" />
        </Form.Item>
      </Form>
      <br />
      <br />

      <br />
      <br />
    </div>
  );
};

export default Dashboard;
