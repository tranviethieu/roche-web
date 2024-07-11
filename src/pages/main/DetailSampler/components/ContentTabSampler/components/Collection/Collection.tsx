import { Tabs, TabsProps } from 'antd';
import styles from './Collection.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useQueryHook } from '~/common/hooks/useQuery';
import GeneralLab from './components/GeneralLab';
const items: TabsProps['items'] = [
  {
    key: 'generalLab',
    label: 'General lab',
    children: <GeneralLab />,
  },
  {
    key: 'microbiology',
    label: 'Microbiology',
    children: <></>,
  },
  {
    key: 'pathology',
    label: 'Pathology',
    children: <></>,
  },
  {
    key: 'interview',
    label: 'Interview',
    children: <></>,
  },
];
const Collection = () => {
  const { search, hash } = useLocation();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState<string>('');
  const { getQueryParamValue } = useQueryHook();

  useEffect(() => {
    const tab = getQueryParamValue('tab');
    if (tab) {
      setActiveKey(tab);
    } else {
      setActiveKey('generalLab');
    }
  }, [getQueryParamValue, search]);

  const handleTabChange = useCallback(
    (key: string) => {
      navigate(
        {
          hash,
          search: `?tab=${key}`,
        },
        { replace: true, state: { scroll: false } }
      );
    },
    [hash, navigate]
  );
  return (
    <section className={styles.container}>
      <Tabs
        activeKey={activeKey}
        size="small"
        tabPosition={'left'}
        items={items}
        onChange={handleTabChange}
      />
    </section>
  );
};
export default Collection;
