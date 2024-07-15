import React from 'react';
import styles from './BoxAverageTime.module.scss';
import { Flex } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import DoughnutChartTime from '~/components/common/DoughnutChartTime/DoughnutChartTime';
interface PropBoxAverageTime {}

const BoxAverageTime: React.FC<PropBoxAverageTime> = () => {
  return (
    <div className={styles.card}>
      <div style={{ width: '100%' }}>
        <Flex justify="space-between" className={styles.boxTitle}>
          <div className={styles.title}>Thời gian trung bình</div>
          <div className={styles.boxLeft}>
            <MoreOutlined className={styles.moreOutlined} />
          </div>
        </Flex>
      </div>

      <div style={{ marginBottom: 20 }}>
        <DoughnutChartTime
          total={24}
          size={180}
          value={20}
          thickness={30}
          valueFormat={`1h34'`}
        />
      </div>
    </div>
  );
};
export default BoxAverageTime;
