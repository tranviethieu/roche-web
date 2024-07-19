import { Button, Tabs, TabsProps } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ListTest from './components/ListTest';
import RequestCard from './components/RequestCard';
import Collection from './components/Collection';

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
      children: <RequestCard />,
    },
    {
      key: 'collection',
      label: 'COLLECTION',
      children: <Collection />,
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
          hash: `#${key}`,
        },
        { replace: true, state: { scroll: false } }
      );
    },
    [navigate]
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
