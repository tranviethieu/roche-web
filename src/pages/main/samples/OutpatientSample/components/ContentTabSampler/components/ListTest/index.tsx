import { Tabs, TabsProps } from 'antd';
import styles from './ListTest.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import TableListTest from './components/TableListTest';
import { useQueryHook } from '~/common/hooks/useQuery';
import { useCallback, useEffect, useState } from 'react';
const items: TabsProps['items'] = [
  {
    key: 'perform',
    label: 'Thực hiện (50)',
    children: <TableListTest />,
  },
  {
    key: 'Signed',
    label: 'Đã ký (2)',
    children: <TableListTest />,
  },
  {
    key: 'deleted',
    label: 'Đã xóa (10)',
    children: <TableListTest />,
  },
];
const ListTest = () => {
  const { search, hash } = useLocation();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState<string>('');
  const { getQueryParamValue } = useQueryHook();

  useEffect(() => {
    const tab = getQueryParamValue('tab');
    if (tab) {
      setActiveKey(tab);
    } else {
      setActiveKey('perform');
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
export default ListTest;
