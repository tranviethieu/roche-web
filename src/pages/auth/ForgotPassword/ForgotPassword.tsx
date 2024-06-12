import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ForgotPassword.module.scss';
import { Button, Form, Input, Space } from 'antd';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    const token = 'your_token_here'; // Giả sử bạn nhận được token từ API sau khi đăng nhập thành công
    localStorage.setItem('token', token);
    navigate('/dashboard');
  };
  const onCancel = () => {
    form.resetFields();
    navigate('/login');
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>CHANGE PASSWORD</div>
        </div>
        <Form
          labelCol={{ style: { fontWeight: 600 } }}
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          form={form}
          layout="vertical"
          requiredMark="optional"
          className={styles.form}
        >
          <Form.Item
            name="currunPassword"
            rules={[
              {
                required: true,
                message: 'Please input your Currun password!',
              },
            ]}
            label="Currun password"
          >
            <Input.Password
              //prefix={<MailOutlined />}
              type="password"
              placeholder="Currun password"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="New Password"
            rules={[
              {
                required: true,
                message: 'Please input your New Password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="New Password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The new password that you entered do not match!')
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item
            style={{
              marginBottom: '0px',
              display: 'flex',
              flexDirection: 'row-reverse',
            }}
          >
            <Space>
              <Button
                block={true}
                size="middle"
                type="primary"
                htmlType="submit"
              >
                Confirm
              </Button>
              <Button
                size="middle"
                type="primary"
                htmlType="button"
                danger
                onClick={onCancel}
              >
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default ForgotPassword;
