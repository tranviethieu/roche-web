import React, { useContext, useEffect } from 'react';
import { Button, Col, Flex, Form, Input, Row, Select, Space } from 'antd';
import { ContextResults, IContextResults } from '../../context';

const { Option } = Select;
const AddResults: React.FC = () => {
  const { detail, setDetail } = useContext<IContextResults>(ContextResults);
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
    setDetail(values);
  };
  const onReset = () => {
    setDetail(null);
  };
  useEffect(() => {
    if (detail) {
      form.setFieldsValue(detail);
    } else {
      form.resetFields();
    }
  }, [detail]);
  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      labelCol={{ flex: '110px' }}
      labelAlign="left"
      style={{ marginTop: 'auto' }}
    >
      <Row gutter={24} style={{ maxWidth: 800 }}>
        <Col span={12}>
          <Form.Item name="id" label="ID" rules={[{ required: true }]}>
            <Input placeholder="ID" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input placeholder="Description" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="type" label="Type" rules={[{ required: true }]}>
            <Select placeholder="Type" onChange={() => {}} allowClear>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="order" label="Order">
            <Input placeholder="Order" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Flex>
          <Space align="center" style={{ marginLeft: 'auto' }}>
            <Button type="primary" htmlType="submit">
              Confirm
            </Button>
            <Button htmlType="button" type="primary" onClick={onReset}>
              Cancel
            </Button>
          </Space>
        </Flex>
      </Form.Item>
    </Form>
  );
};
export default AddResults;
