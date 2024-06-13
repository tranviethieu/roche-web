import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { Button, Checkbox, Form, Input, Select, Space, message } from 'antd';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toastWarn } from '~/components/common/func/toast';
import { store } from '~/redux/store';
import { setStateLogin, setToken } from '~/redux/reducer/auth';
import { delay } from '~/components/common/func/delay';
const { Option } = Select;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    login.mutate({ userName: values?.userName, password: values?.password });
  };
  const onCancel = () => {
    form.resetFields();
  };
  const login = useMutation({
    mutationFn: async (data: { userName: string; password: string }) => {
      await delay(500);
      const response = await axios.post(
        'https://api-meapp.benhvien.tech/identity/connect/token',
        {
          client_id: 'admin.client',
          client_secret: 'meapp-admin-secret',
          grant_type: 'password',
          username: data.userName,
          password: data.password,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json, text/plain, */*',
          },
        }
      );

      return response?.data;
    },
    onSuccess(data) {
      if (data) {
        //toastSuccess({ msg: 'Đăng nhập thành công!' });
        message.success('Login success');
        store.dispatch(setStateLogin(true));
        store.dispatch(setToken(data.access_token));
        localStorage.setItem('token', data.access_token);
        navigate('/');
      }
    },
    onError(error: any) {
      if (error?.response?.data) {
        const { data } = error?.response || undefined;

        return toastWarn({
          msg: data?.error_description || 'Có lỗi xảy ra!',
        });
      }
    },
  });
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>LOGIN</div>
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
            name="userName"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Please input your Username!',
              },
            ]}
            label="User Name"
          >
            <Input
              //prefix={<MailOutlined />}
              placeholder="User name"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
            label="Password"
          >
            <Input.Password
              //prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="possition"
            label="Possition"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Possition"
              //onChange={onPossitionChange}
              allowClear
            >
              <Option value="1">Phlebotomy (Lấy mẫu)</Option>
              <Option value="2">Delivery (Giao mẫu)</Option>
              <Option value="3">Reception (Nhận mẫu)</Option>
              <Option value="4">Home</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link className={styles.forgotPassword} to={'/forgot-password'}>
              Forgot password?
            </Link>
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
                Log in
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

export default Login;
