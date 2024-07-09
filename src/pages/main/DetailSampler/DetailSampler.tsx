import { MenuProps, message } from 'antd';
import styles from './DetailSampler.module.scss';
import React, { useState } from 'react';
import { ContextDetailSampler } from './context';
import { Sampler } from '~/types/sampler.type';
import { useParams } from 'react-router-dom';
import Counter from './components/Counter';
import FormSamplerHIS from './components/FormSamplerHIS/FormSamplerHIS';
import ContentTabSampler from './components/ContentTabSampler';
const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
];

const DetailSampler: React.FC = () => {
  const [data, setData] = useState<Sampler | null>(null);
  const [stt, setStt] = useState<number>(0);
  const { id } = useParams();
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <section className={styles.form_section}>
      <ContextDetailSampler.Provider value={{ data, setData, stt, setStt }}>
        <div className={styles.header_form}>
          <Counter />
          <FormSamplerHIS />
        </div>
        <div className={styles.container_form}>
          <ContentTabSampler />
        </div>
      </ContextDetailSampler.Provider>
    </section>
  );
};
export default DetailSampler;
