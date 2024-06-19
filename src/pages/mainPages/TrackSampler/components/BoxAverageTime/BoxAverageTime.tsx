import React from 'react';
import styles from './BoxAverageTime.module.scss';
import { Flex } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import DoughnutChartTime from '~/components/common/DoughnutChartTime/DoughnutChartTime';
interface PropBoxAverageTime {}

const BoxAverageTime: React.FC<PropBoxAverageTime> = () => {
  return (
    <div className={styles.card}>
      <Flex justify="space-between" style={{ width: '100%' }}>
        <div className={styles.title}>Thời gian trung bình</div>
        <MoreOutlined className={styles.moreOutlined} />
      </Flex>

      <DoughnutChartTime
        total={24}
        size={180}
        value={20}
        thickness={30}
        valueFormat={`1h34'`}
      />
    </div>
  );
};
export default BoxAverageTime;
