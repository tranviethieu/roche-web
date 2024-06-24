import React from 'react';
import styles from './TrackSampler.module.scss';
import FilterTrackSampler from './components/FilterTrackSampler';
import { useParams } from 'react-router-dom';
import { Button, Col, Flex, Row } from 'antd';
import BoxNotDelivered from './components/BoxNotDelivered';
import BoxSample from './components/BoxSample';
import BoxTotalSample from './components/BoxTotalSample';
import BoxAverageTime from './components/BoxAverageTime';
import ModelCaptureFilter from './components/ModelCaptureFilter';

const TrackSampler: React.FC = () => {
  const { tabId } = useParams();
  console.log(tabId);
  return (
    <section className={styles.container}>
      <Flex gap="small" wrap="nowrap" justify="space-between" align="center">
        <FilterTrackSampler />
        <ModelCaptureFilter />
      </Flex>
      <div className={styles.main}>
        <Row gutter={[10, 10]}>
          <Col span={5}>
            <BoxNotDelivered />
          </Col>
          <Col span={10}>
            <Row gutter={[10, 10]}>
              <Col span={12} xxl={12}>
                <BoxSample title="Mẫu khẩn" idScroll="1sss" />
              </Col>
              <Col span={12} xxl={12}>
                <BoxSample title="Mẫu ưu tiên" idScroll="2aa" />
              </Col>
              <Col span={12} xxl={12}>
                <BoxSample title="Mẫu thường quy" idScroll="3aa" />
              </Col>
              <Col span={12} xxl={12}>
                <BoxSample title="Mẫu chậm" idScroll="444" />
              </Col>
            </Row>
          </Col>
          <Col span={9}>
            <Row gutter={[10, 10]}>
              <Col span={24}>
                <BoxTotalSample />
              </Col>
              <Col span={24}>
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
