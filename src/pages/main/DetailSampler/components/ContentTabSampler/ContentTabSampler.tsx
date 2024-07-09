import { Button, Tabs, TabsProps } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ListTest from './components/ListTest';

const ContentTabSampler = () => {
  const [activeKey, setActiveKey] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();
  const items: TabsProps['items'] = [
    {
      key: 'listTest',
      label: 'LIST TEST',
      children: <ListTest />,
    },
    {
      key: 'requestCard',
      label: 'THẺ YÊU CẦU',
      children: <>333</>,
    },
    {
      key: 'collection',
      label: 'COLLECTION',
      children: 'Content of Tab Pane 3',
    },
  ];
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveKey(hash);
    } else {
      setActiveKey('listTest');
    }
  }, [location.hash]);
  const handleTabChange = useCallback(
    (key: string) => {
      setActiveKey(key);
      navigate(
        {
          ...location,
          hash: `#${key}`,
        },
        { replace: true, state: { scroll: false } }
      );
    },
    [navigate, location]
  );
  return (
    <Tabs
      onChange={handleTabChange}
      className="custom_tab_sampler"
      size={'large'}
      type="card"
      activeKey={activeKey}
      items={items}
      tabBarExtraContent={<Button>Right Extra Action</Button>}
    />
  );
};
export default ContentTabSampler;
