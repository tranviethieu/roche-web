import { InputNumber, InputNumberProps } from 'antd';
import React, { useContext } from 'react';
import { ContextDetailSampler, IContextDetailSampler } from '../../context';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
const SttSampler: React.FC = () => {
  const { stt, setStt } =
    useContext<IContextDetailSampler>(ContextDetailSampler);
  const onChange: InputNumberProps['onChange'] = (value) => {
    setStt({ ...stt, orderNumber: Number(value) });
  };
  return (
    <InputNumber
      className={'customInputNumber'}
      addonBefore={
        <div
          onClick={() => {
            if (stt.orderNumber > 0)
              setStt({ ...stt, orderNumber: stt.orderNumber - 1 });
          }}
          style={{ padding: '0 6px' }}
        >
          <CaretLeftOutlined style={{ fontSize: 14, color: '#005AB4' }} />
        </div>
      }
      addonAfter={
        <div
          onClick={() => setStt({ ...stt, orderNumber: stt.orderNumber + 1 })}
          style={{ padding: '0 6px' }}
        >
          <CaretRightOutlined style={{ fontSize: 14, color: '#005AB4' }} />
        </div>
      }
      min={0}
      max={999}
      value={stt.orderNumber}
      onChange={onChange}
      formatter={(value) => `${value}`.padStart(3, '0')}
    />
  );
};
export default SttSampler;
