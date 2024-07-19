import { InputNumber, InputNumberProps } from 'antd';
import React, { useContext } from 'react';
import { ContextDetailSampler, IContextDetailSampler } from '../../context';
import styles from './SttSampler.module.scss';
const SttSampler: React.FC = () => {
  const { stt, setStt } =
    useContext<IContextDetailSampler>(ContextDetailSampler);
  const onChange: InputNumberProps['onChange'] = (value) => {
    setStt(Number(value));
  };
  return (
    <div style={{ display: 'flex' }}>
      <InputNumber
        className={styles.customInputNumber}
        addonBefore={
          <button
            className={`${styles.button} ${styles.decrement}`}
            onClick={() => setStt(stt - 1)}
          >
            -
          </button>
        }
        addonAfter={
          <button
            className={`${styles.button} ${styles.increment}`}
            onClick={() => setStt(stt + 1)}
          >
            +
          </button>
        }
        min={0}
        max={999}
        value={stt}
        onChange={onChange}
        formatter={(value) => `${value}`.padStart(3, '0')}
      />
      <h1>{`${stt}`.padStart(3, '0')}</h1>
    </div>
  );
};
export default SttSampler;
