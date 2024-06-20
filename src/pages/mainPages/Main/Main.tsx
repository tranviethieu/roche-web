import React from 'react';
import FilterSelect from '~/components/common/FilterSelect/FilterSelect';
import GeneralLab from '../GeneralLab';
import { Col, Row } from 'antd';
import PipeDetail from '../PipeDetail/PipeDetail';

const options: {
  value: string;
  label: string;
}[] = [
  {
    value: 'jack',
    label: 'Hiếu',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'tom',
    label: 'Tom',
  },
];
const Main: React.FC = () => {
  return (
    <div
      style={{ background: '#fff', margin: 10, padding: 10, borderRadius: 10 }}
    >
      <Row gutter={10}>
        <Col span={18}>
          <GeneralLab />
        </Col>
        <Col span={6}>
          <PipeDetail />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
