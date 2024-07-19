import React from 'react';
import styles from './TrackSampler.module.scss';
import FilterTrackSampler from './components/FilterTrackSampler';
import { useParams } from 'react-router-dom';
import { Col, Flex, Row } from 'antd';
import BoxNotDelivered from './components/BoxNotDelivered';
import BoxSample from './components/BoxSample';
import BoxTotalSample from './components/BoxTotalSample';
import BoxAverageTime from './components/BoxAverageTime';

const TrackSampler: React.FC = () => {
  const { tabId } = useParams();
  console.log(tabId);
  return (
    <section className={styles.container}>
      <Flex gap="small" wrap="nowrap" justify="space-between" align="center">
        <FilterTrackSampler />
      </Flex>
      <div className={styles.main}>
        <Row gutter={[10, 10]}>
          <Col span={5}>
            <BoxNotDelivered />
          </Col>
          <Col span={10}>
            <Row gutter={[10, 10]}>
              <Col span={12} xxl={12}>
                <BoxSample
                  title="Mẫu khẩn"
                  idScroll="GetListGeneralLabByFilter"
                />
              </Col>
              <Col span={12} xxl={12}>
                <BoxSample
                  title="Mẫu ưu tiên"
                  idScroll="GetListSamplePrority"
                />
              </Col>
              <Col span={12} xxl={12}>
                <BoxSample
                  title="Mẫu thường quy"
                  idScroll="GetListSampleQuickly"
                />
              </Col>
              <Col span={12} xxl={12}>
                <BoxSample title="Mẫu chậm" idScroll="GetListSampleSlow" />
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
