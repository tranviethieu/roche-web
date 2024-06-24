import React, { useState } from 'react';
import styles from './TrackSampler.module.scss';
import FilterTrackSampler from './components/FilterTrackSampler';
import { useParams } from 'react-router-dom';
import { Button, Col, Flex, Row } from 'antd';
import BoxNotDelivered from './components/BoxNotDelivered';
import BoxSample from './components/BoxSample';
import BoxTotalSample from './components/BoxTotalSample';
import BoxAverageTime from './components/BoxAverageTime';

//import DoughnutChart from '~/components/common/DoughnutChart/DoughnutChart';
const TrackSampler: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { tabId } = useParams();
  console.log(tabId);
  //usePageTitle('Ngoại trú 1');
  return (
    <section className={styles.container}>
      <Flex gap="small" wrap="nowrap" justify="space-between" align="center">
        <FilterTrackSampler />
        <Button type="primary" style={{ marginRight: '20px' }}>
          Capture Filter
        </Button>
      </Flex>
      <div className={styles.main}>
        <Row gutter={[10, 10]}>
          <Col span={16}>
            <Row gutter={[10, 10]}>
              <Col span={12} xxl={8}>
                <BoxNotDelivered />
              </Col>
              <Col span={12} xxl={8}>
                <BoxSample title="Mẫu khẩn" idScroll="1sss" />
              </Col>
              <Col span={12} xxl={8}>
                <BoxSample title="Mẫu ưu tiên" idScroll="2aa" />
              </Col>
              <Col span={12} xxl={8}>
                <BoxSample title="Mẫu thường quy" idScroll="3aa" />
              </Col>
              <Col span={12} xxl={8}>
                <BoxSample title="Mẫu chậm" idScroll="444" />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row gutter={[10, 10]}>
              <Col span={24} xxl={24} xl={12}>
                <BoxTotalSample />
              </Col>
              <Col span={24} xxl={24} xl={12}>
                <BoxAverageTime />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TrackSampler;
