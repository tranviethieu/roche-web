import React from 'react';
//import GeneralLab from '../GeneralLab';
import { Col, Row } from 'antd';
import PipeDetail from '../PipeDetail/PipeDetail';
import GeneralLab from '../GeneralLab';

const Main: React.FC = () => {
  return (
    <div
      style={{
        background: '#fff',
        margin: 10,

        padding: 10,
        borderRadius: 10,
      }}
    >
      <Row gutter={10}>
        <Col span={20}>
          <GeneralLab />
        </Col>
        <Col span={4}>
          <PipeDetail />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
