import {
  Col,
  DatePicker,
  Form,
  FormProps,
  Input,
  Radio,
  Row,
  Space,
} from 'antd';
import styles from './FormSamplerHIS.module.scss';
import dayjs from 'dayjs';
type FieldType = {
  IdHIS?: string;
  IdLIS?: string;
  IdVis?: string;
  gender: string;
  birthday: Date;
  code: string;
};

const FormSamplerHIS = () => {
  const [formOrderHIS] = Form.useForm<FieldType>();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  const handleEnterPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      formOrderHIS.submit();
    }
  };

  return (
    <Form
      form={formOrderHIS}
      name="OrderHIS"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
      //onSubmitCapture={onFinish}
      autoComplete="off"
    >
      <Row gutter={[10, 10]} style={{ marginTop: '10px' }}>
        <Col span={2}>
          <div className={styles.card_form}>
            <Form.Item<FieldType>
              style={{ fontWeight: '600' }}
              label="Order ID HIS"
              name="IdHIS"
            >
              <Input onPressEnter={handleEnterPress} allowClear />
            </Form.Item>

            <Form.Item<FieldType>
              style={{ fontWeight: '600' }}
              label="Order ID LIS"
              name="IdLIS"
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              style={{ fontWeight: '600' }}
              label="Patient visit"
              name="IdVis"
            >
              <Input />
            </Form.Item>
          </div>
        </Col>
        <Col span={11}>
          <div className={styles.card_form}>
            <Row gutter={10}>
              <Col span={3}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Order ID HIS"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Tên đầy đủ"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Tên"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Họ và tên đệm"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Số điện thoại"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={3} xl={4} xxl={3}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Giới tính"
                  name="gender"
                >
                  <Radio.Group className="custom-radio">
                    <Space direction="horizontal" style={{ gap: 0 }}>
                      <Radio value={1}>Nam</Radio>
                      <Radio value={2}>Nữ</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={8} xl={7} xxl={8}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Ngày sinh"
                  name="birthday"
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    placeholder="Chọn ngày sinh"
                    disabledDate={(current) => {
                      return current && current > dayjs().endOf('day');
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Tuổi"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="CCCD"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Số hộ chiếu"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Địa Chỉ"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={11}>
          <div className={styles.card_form}>
            <Row gutter={10}>
              <Col span={6}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Mã bệnh án"
                  name="code"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Bác sĩ"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Nơi tạo chỉ định"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Khoa/Phòng"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Dịch vụ"
                  name="code"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Nhịp sinh lý"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Mức độ ưu tiên"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Mức độ ưu tiên của HIS"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item<FieldType>
                  style={{ fontWeight: '600' }}
                  label="Chuẩn đoán"
                  name="IdLIS"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Form>
  );
};
export default FormSamplerHIS;
