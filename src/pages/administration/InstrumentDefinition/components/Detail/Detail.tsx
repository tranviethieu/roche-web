import { useContext, useEffect } from 'react';
import {
  ContextInstrumentDefinition,
  IContextInstrumentDefinition,
} from '../../context';
import {
  Form,
  Col,
  Input,
  Row,
  Select,
  Flex,
  Button,
  Space,
  InputNumber,
  Checkbox,
} from 'antd';
import { useQueryHook } from '~/common/hooks/useQuery';
const { Option } = Select;
const Detail = () => {
  const { detail, setDetail } = useContext<IContextInstrumentDefinition>(
    ContextInstrumentDefinition
  );
  const { removeAllQueryParams } = useQueryHook();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
    setDetail(values);
  };
  const onReset = () => {
    removeAllQueryParams();
  };
  useEffect(() => {
    if (detail) {
      form.setFieldsValue({
        ...detail,
        driverID: detail.id,
        instrumentName: detail.description,
      });
    } else {
      form.resetFields();
    }
  }, [detail]);

  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      labelCol={{ flex: '140px' }}
      labelAlign="left"
      style={{ marginTop: 'auto' }}
    >
      <Row gutter={24} style={{ width: '100%' }}>
        <Col span={6}>
          <Form.Item
            name="driverID"
            label="Driver ID"
            rules={[{ required: true }]}
          >
            <Input placeholder="Driver ID" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="instrumentName"
            label="Instrument name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Instrument name" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="Type" label="Type">
            <Input placeholder="Type" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="Application"
            label="Application"
            rules={[{ required: true }]}
          >
            <Select placeholder="Application" onChange={() => {}} allowClear>
              <Option value="1">1</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="analyzerNumber"
            label="Analyzer number"
            rules={[{ required: true }]}
          >
            <InputNumber
              placeholder="Analyzer number"
              min={0}
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="communicationType" label="Communication type">
            <Input placeholder="Communication type" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="Location"
            label="Location"
            rules={[{ required: true }]}
          >
            <Select placeholder="Location" onChange={() => {}} allowClear>
              <Option value="Location*">Location*</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="tracesLogType"
            label="Comm. traces log type"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Comm. traces log type"
              onChange={() => {}}
              allowClear
            >
              <Option value="Debug">Debug</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="driverVersion" label="Driver version">
            <Input placeholder="Driver version" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="encoding" label="Encoding">
            <Input placeholder="Encoding" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="Trace" valuePropName="checked">
            <Checkbox>Trace</Checkbox>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="serial" label="Serial">
            <Input placeholder="Serial" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="versionInfo" label="Version info">
            <Input placeholder="Version info" />
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
export default Detail;
