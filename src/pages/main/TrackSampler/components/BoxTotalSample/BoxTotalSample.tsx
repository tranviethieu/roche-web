import React, { useMemo } from 'react';
import styles from './BoxTotalSample.module.scss';
import DoughnutChart from '~/components/common/DoughnutChart/DoughnutChart';
import { Col, Flex, Row } from 'antd';
interface PropBoxTotalSample {}
const data = [
  { value: 163, color: '#DCDFE6' },
  { value: 163, color: '#00A0FF' },
  { value: 102, color: '#67C23A' },
];

const BoxTotalSample: React.FC<PropBoxTotalSample> = () => {
  const dataWithPercentages = useMemo(() => {
    const totalSum = data.reduce((sum, item) => sum + item.value, 0);
    const title = ['Chưa chuẩn bị lấy mẫu', 'Chuẩn bị lấy mẫu', 'Đã lấy mẫu'];
    return data.map((item, index) => ({
      ...item,
      percentage: ((item.value / totalSum) * 100).toFixed(2),
      title: title[index],
    }));
  }, [data]);
  return (
    <div className={styles.card}>
      <div style={{ width: '100%' }}>
        <div className={styles.boxTitle}>
          <div className={styles.title}>Tổng lượng mẫu</div>
        </div>
      </div>
      <Flex justify="space-between" style={{ width: '100%' }} gap={20}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <div className={styles.dataChart}>
            <div className={styles.chart}>
              <div style={{ position: 'relative' }}>
                <DoughnutChart
                  data={data}
                  dataSet={data[0].value}
                  size={260}
                  innerRadius={90}
                />
              </div>
            </div>
            <Flex
              gap={12}
              style={{
                width: '100%',
                flexDirection: 'column',
                marginBottom: '60px',
              }}
            >
              {dataWithPercentages.map((item, index) => (
                <Row
                  key={index}
                  style={{
                    width: '100%',
                    padding: '0 10px',
                    fontWeight: '600',
                  }}
                >
                  <Col span={12} style={{ display: 'flex', gap: '5px' }}>
                    <div
                      className={styles.dot}
                      style={{ background: item.color }}
                    ></div>
                    <div>{item.title}</div>
                  </Col>
                  <Col span={6}>
                    <div>{item.value}</div>
                  </Col>
                  <Col span={6}>
                    <div style={{ textAlign: 'end' }}>{item?.percentage}%</div>
                  </Col>
                </Row>
              ))}
            </Flex>
          </div>
        </div>
      </Flex>
    </div>
  );
};
export default BoxTotalSample;
