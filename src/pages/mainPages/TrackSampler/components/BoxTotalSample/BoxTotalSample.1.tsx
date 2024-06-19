import React, { useMemo } from 'react';
import styles from './BoxTotalSample.module.scss';
import DoughnutChart from '~/components/common/DoughnutChart/DoughnutChart';
import { Flex } from 'antd';
import { PropBoxTotalSample } from './BoxTotalSample';

export const BoxTotalSample: React.FC<PropBoxTotalSample> = () => {
  const data: any = [
    { value: 163, color: '#DCDFE6' },
    { value: 163, color: '#00A0FF' },
    { value: 102, color: '#67C23A' },
  ];
  const dataWithPercentages = useMemo(() => {
    const totalSum = data.reduce((sum, item) => sum + item.value, 0);

    return data.map((item) => ({
      ...item,
      percentage: ((item.value / totalSum) * 100).toFixed(2),
    }));
  }, [data]);
  return (
    <div className={styles.card}>
      <div className={styles.title}>Tổng lượng mẫu</div>

      <div className={styles.chart}>
        <div style={{ position: 'relative' }}>
          <DoughnutChart
            data={data}
            dataSet={data[0].value}
            size={250}
            innerRadius={80}
          />
          <div className={styles.dataChart}>
            {dataWithPercentages.map((item) => (
              <Flex
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
        </div>
      </div>
    </div>
  );
};
