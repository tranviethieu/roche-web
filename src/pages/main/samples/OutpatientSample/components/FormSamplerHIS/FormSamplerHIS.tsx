import {
  Col,
  ConfigProvider,
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
import { useContext, useEffect } from 'react';
import { ContextDetailSampler, IContextDetailSampler } from '../../context';
import { PatientInfo } from '~/types/patient.type';

const FormSamplerHIS = () => {
  const [formOrderHIS] = Form.useForm<PatientInfo>();
  const { patientInfo } =
    useContext<IContextDetailSampler>(ContextDetailSampler);
  const onFinish: FormProps<PatientInfo>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  const handleEnterPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      formOrderHIS.submit();
    }
  };
  useEffect(() => {
    if (patientInfo) {
      formOrderHIS.setFieldsValue({
        fullName: patientInfo.fullName,
        orderIDHis: patientInfo.orderIDHis,
        orderIDLis: patientInfo.orderIDLis,
        patientVisiter: patientInfo.patientVisiter,
        userName: patientInfo?.userName,
        name: patientInfo.name,
        lastName: patientInfo.lastName,
        phoneNumber: patientInfo.phoneNumber,
        gender: patientInfo.gender,
        birdday: patientInfo.birdday ? dayjs(patientInfo.birdday) : null,
        age: patientInfo.age,
        cccd: patientInfo.cccd,
        passport: patientInfo.passport,
        address: patientInfo.address,
        doctor: patientInfo.doctor,
        strListID: patientInfo.strListID,
        nhipSinhLy: patientInfo.nhipSinhLy,
        chuanDoan: patientInfo.chuanDoan,
        services: patientInfo?.services,
      });
    }
  }, [patientInfo, formOrderHIS]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainerDisabled: '#fff',
          colorTextDisabled: '#000000',
          colorBorder: '#80ACDA',
        },
        components: {
          Input: {
            paddingBlock: 2,
            colorBorder: '#80ACDA',
          },
          DatePicker: {
            paddingBlock: 2,
          },
        },
      }}
    >
      <Form
        form={formOrderHIS}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        disabled
      >
        <Row gutter={[10, 10]} style={{ marginTop: '10px' }}>
          <Col span={2}>
            <div className={styles.card_form}>
              <Form.Item<PatientInfo>
                style={{ fontWeight: '600' }}
                label="Order ID HIS"
                name="orderIDHis"
              >
                <Input
                  onPressEnter={handleEnterPress}
                  allowClear
                  disabled={false}
                />
              </Form.Item>

              <Form.Item<PatientInfo>
                style={{ fontWeight: '600' }}
                label="Order ID LIS"
                name="orderIDLis"
              >
                <Input disabled={false} />
              </Form.Item>
              <Form.Item<PatientInfo>
                style={{ fontWeight: '600' }}
                label="Patient visit"
                name="patientVisiter"
              >
                <Input disabled={false} />
              </Form.Item>
            </div>
          </Col>
          <Col span={11}>
            <div className={styles.card_form}>
              <Row gutter={10}>
                <Col span={3}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Order ID HIS"
                    name="orderIDHis"
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Tên đầy đủ"
                    name="fullName"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Tên"
                    name="name"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Họ và tên đệm"
                    name="lastName"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Số điện thoại"
                    name="phoneNumber"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={3} xl={4} xxl={3}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Giới tính"
                    name="gender"
                  >
                    <Radio.Group className="custom-radio">
                      <Space direction="horizontal" style={{ gap: 0 }}>
                        <Radio value={'1'}>Nam</Radio>
                        <Radio value={'2'}>Nữ</Radio>
                      </Space>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col span={8} xl={7} xxl={8}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Ngày sinh"
                    name="birdday"
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
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Tuổi"
                    name="age"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="CCCD"
                    name="cccd"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Số hộ chiếu"
                    name="passport"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Địa Chỉ"
                    name="address"
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
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Mã bệnh án"
                    name="userName"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Bác sĩ"
                    name="doctor"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Nơi tạo chỉ định"
                    name="strListID"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Khoa/Phòng"
                    name="depId"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Dịch vụ"
                    name="services"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Nhịp sinh lý"
                    name="nhipSinhLy"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Mức độ ưu tiên"
                    name="prorityLisID"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Mức độ ưu tiên của HIS"
                    name="prorityLisID"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item<PatientInfo>
                    style={{ fontWeight: '600' }}
                    label="Chuẩn đoán"
                    name="chuanDoan"
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Form>
    </ConfigProvider>
  );
};
export default FormSamplerHIS;
