import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Space,
  Spin,
  message,
} from 'antd';
import { Link } from 'react-router-dom';
//import { useMutation } from '@tanstack/react-query';
//import axios from 'axios';
import { store } from '~/redux/store';
import { setStateLogin, setToken } from '~/redux/reducer/auth';
//import { delay } from '~/common/func/delay';
const { Option } = Select;

const Login: React.FC = () => {
  //const navigate = useNavigate();
  const [spinning, setSpinning] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
    //login.mutate({ userName: values?.userName, password: values?.password });
    //test de login
    setSpinning(true);
    store.dispatch(setStateLogin(true));
    store.dispatch(
      setToken(
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwQ0JCOTFGRjc4QkNDOTFDMzA4OTJCMThDNDBFRDVDMzlBRkE0MjlSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImtNdTVIX2VMekpIRENKS3hqRUR0WERtdnBDayJ9.eyJuYmYiOjE3MTg1NDExMjMsImV4cCI6MTcxODYyNzUyMywiaXNzIjoiaHR0cHM6Ly9hcGktbWVhcHAuYmVuaHZpZW4udGVjaC9pZGVudGl0eSIsImNsaWVudF9pZCI6ImFkbWluLmNsaWVudCIsInN1YiI6IjY1ZTU0MjE1ZTUzNWZkZWE3ZTJmYjNjZSIsImF1dGhfdGltZSI6MTcxODU0MTEyMywiaWRwIjoibG9jYWwiLCJlbWFpbCI6ImRlbW9kZEBnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIwMzg1NzM2MjIyIiwiZ2VuZGVyIjoibWFsZSIsImFkZHJlc3MiOiIiLCJiaXJ0aGRhdGUiOiIwOS8wNy8yMDIzIiwiY2hhdElkIjoiNjVlNTQyMTVlNTM1ZmRlYTdlMmZiM2NmIiwiYXZhdGFyIjoiNjVlNTQyMTVlNTM1ZmRlYTdlMmZiM2NkIiwidXNlck5hbWUiOiJkZW1vZGRAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJUcuG6p24gVmnhu4d0IEhp4bq_dSIsInRpdGxlIjoiIiwid29yayI6IiIsImNvZGUiOiJOSDQzMzMiLCJpc1Jvb3QiOiJGYWxzZSIsImRlcGFydG1lbnRJZCI6IjY1NzEzNDk4YzMyNWU2NmY3MTA0Mjc2MCIsImhvc3BpdGFsSWQiOiI2NTcxMWZlYWMzMjVlNjZmNzEwM2Y4OWUiLCJ2YWx1ZSI6IiIsInJvbGUiOlsiNjVmOTQ5ZjZjYzJlOTM5NjFlNTE3YWMzIiwiNjVlZmNiY2JlYTc5ZWYwYjg4MDM1OTBiIiwiNjVhNjlhMWU2ZDI4YzgzNTRmYTk3ZmU1IiwiNjVhNjlhNDU2ZDI4YzgzNTRmYTk3ZmU2IiwiNjYwMjNiMzNmMTI3NTM1NDA0MzI1NjAwIiwiNjVhNjlhNTc2ZDI4YzgzNTRmYTk3ZmU3IiwiNjVhNjlhODE2ZDI4YzgzNTRmYTk3ZmU5IiwiNjVhNjlhNzE2ZDI4YzgzNTRmYTk3ZmU4IiwiNjVhZjFmZDMzMTc3YzUzMzgzMDM0ZGJmIl0sImp0aSI6IjVDNzRCNTY3RUQwQTdCNENCQjQ0NzMyN0I5QTBDNzhEIiwiaWF0IjoxNzE4NTQxMTIzLCJzY29wZSI6WyJtZWFwcCIsIm9wZW5pZCIsInByb2ZpbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.cw7glAVIehiQERTcV3zsZGDIZw5IMMMWIZt2S2NgIkuRMXzvv9wXio8kSiuUMqnhu4y5zkuJveaKjev0f9pD912QSr7b3OxFMnyoDDdxeQp6TNDN738aY8xlpw7XmzSu6Jt9IDosg18HWFIQc9K4Ojl8UGNQTQz4EWpR1yhFfW881m-_8p0B-LggBmStiB_nNqHDqfJzRa8scnFzBX3v3JPnlHn-doFIBomBSqzO8_V30mmSg3XoimGEj_tdz6h60TX8H5IjPDD3FgQCMa5QKivV07S-E7Ns5Kg5a6ICxWmFKh4sNA2J7tnqTb60Ygnez7repdftyobxorKv2lwAjQ'
      )
    );
    message.success('Login success');
    setSpinning(false);
    //
  };
  const onCancel = () => {
    form.resetFields();
  };
  // const login = useMutation({
  //   mutationFn: async (data: { userName: string; password: string }) => {
  //     setSpinning(true);
  //     await delay(500);
  //     const response = await axios.post(
  //       'https://api-meapp.benhvien.tech/identity/connect/token',
  //       {
  //         client_id: 'admin.client',
  //         client_secret: 'meapp-admin-secret',
  //         grant_type: 'password',
  //         username: data.userName,
  //         password: data.password,
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //           Accept: 'application/json, text/plain, */*',
  //         },
  //       }
  //     );

  //     return response?.data;
  //   },
  //   onSuccess(data) {
  //     if (data) {
  //       setSpinning(false);
  //       message.success('Login success');
  //       store.dispatch(setStateLogin(true));
  //       store.dispatch(setToken(data.access_token));

  //       navigate('/');
  //     }
  //   },
  //   onError(error: any) {
  //     setSpinning(false);

  //     if (error?.response?.data) {
  //       const { data } = error?.response || undefined;

  //       return message.success(data?.error_description || 'Có lỗi xảy ra!');
  //     }
  //   },
  // });

  return (
    <section className={styles.section}>
      <Spin spinning={spinning} size="large" fullscreen />
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
