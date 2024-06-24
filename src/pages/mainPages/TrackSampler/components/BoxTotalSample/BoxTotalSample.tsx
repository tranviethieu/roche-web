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
      <div className={styles.title}>Tổng lượng mẫu</div>
      <Flex justify="space-between" style={{ width: '100%' }} gap={20}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <div className={styles.dataChart}>
            {dataWithPercentages.map((item, index) => (
              <Flex
                key={index}
                gap={5}
                wrap="nowrap"
                align="center"
                style={{ marginBottom: '10px' }}
              >
                <div
                  className={styles.dot}
                  style={{ background: item.color }}
                ></div>
                <span>{item?.percentage}%</span>
              </Flex>
            ))}
          </div>
          {dataWithPercentages.map((item, index) => (
            <Row key={index} gutter={[50, 10]}>
              <Col span={12} className={styles.titleSub}>
                {item.title}
              </Col>
              <Col span={12}>
                <div
                  className={styles.value}
                  style={{ background: item?.color }}
                >
                  {item.value}
                </div>
              </Col>
            </Row>
          ))}
        </div>
        <div className={styles.chart}>
          <div style={{ position: 'relative' }}>
            <DoughnutChart
              data={data}
              dataSet={data[0].value}
              size={260}
              innerRadius={90}
            />
            {/*  */}
          </div>
        </div>
      </Flex>
    </div>
  );
};
export default BoxTotalSample;
