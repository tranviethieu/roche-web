import React, { useEffect, useState, useCallback } from 'react';
import { Tabs, TabsProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

interface CustomTabsProps {
  items: TabsProps['items'];
  activeKeyDefault: string;
}

const TabsCustom: React.FC<CustomTabsProps> = React.memo(
  ({ items, activeKeyDefault }) => {
    const [activeKey, setActiveKey] = useState<string>(activeKeyDefault);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const hash = location.hash.replace('#', '');
      if (hash) {
        setActiveKey(hash);
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
      <Tabs activeKey={activeKey} onChange={handleTabChange} items={items} />
    );
  }
);

export default TabsCustom;
