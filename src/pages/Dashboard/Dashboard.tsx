// src/pages/Dashboard.tsx
import { Button, DatePicker, Form } from 'antd';
import React from 'react';
import FloatInput from '~/components/common/FloatInput';
import TabButton from '~/components/common/TabButton/TabButton';

const validator = {
  require: {
    required: true,
    message: "Required"
  }
};
const Dashboard: React.FC = () => {
  
  return (
    <div style={{background: '#fff'}}>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
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
      </Form>
      <br/>
      <br/>
      <TabButton label="Tab 1"/>
      <TabButton label="Tab 1"/>
      <TabButton label="Tab 1"/>
      <br/>
      <br/>
    </div>
  );
};

export default Dashboard;
