import { Button, Form, FormProps, Input, Modal, Space } from 'antd';
import React from 'react';
type FieldType = {
  name?: string;
};
const ModelCaptureFilter: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    setOpen(false);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };
  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      <Button
        type="primary"
        style={{ marginRight: '20px' }}
        onClick={showLoading}
      >
        Capture Filter
      </Button>
      <Modal
        className="ant_module_custom"
        title={'Capture Filter'}
        footer={false}
        closeIcon={false}
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <Form
          name="captureFilter"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Nhập tên Filter"
            name="name"
            rules={[{ required: true, message: 'Please input your filter!' }]}
          >
            <Input placeholder="Nhập tên Filter" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 16, span: 24 }}>
            <Space>
              <Button
                type="default"
                htmlType="button"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ModelCaptureFilter;
