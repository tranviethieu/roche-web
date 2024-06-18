import { Col, Popconfirm, PopconfirmProps, Row, message } from 'antd';
import React from 'react';
import styles from './ItemNotification.module.scss';
import clsx from 'clsx';
import { convertUtcToUtc7 } from '~/common/func/convertDate';
interface PropItem {
  name: string;
  code: string;
  date: string | null;
  count: number;
}
const ItemNotification: React.FC<Partial<PropItem>> = ({ name, date }) => {
  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };

  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Click on No');
  };
  return (
    <Popconfirm
      placement="bottom"
      title=""
      description={name}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Confirm"
      cancelText="Delete"
    >
      <Row style={{ width: '100%' }} align="middle" onClick={() => {}}>
        <Col span={11} className={clsx(styles.item, styles.error)}>
          {name || '---'}
        </Col>
        <Col span={1} className={styles.item}></Col>
        <Col span={3} className={styles.item}>
          ~ System ~
        </Col>
        <Col span={3} className={styles.item}>
          {convertUtcToUtc7(date!, 'DD-MM-YYYY') || '---'}
        </Col>
        <Col span={3} className={styles.item}>
          0
        </Col>
        <Col span={2} style={{ display: 'flex' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="51"
            viewBox="0 0 23 51"
            fill="none"
          >
            <path
              d="M0.5 1.50274L21.8287 25.31L0.5 49.1174L0.5 1.50274Z"
              fill="white"
              stroke="#C8C9CC"
            />
          </svg>
        </Col>
      </Row>
    </Popconfirm>
  );
};
export default ItemNotification;
