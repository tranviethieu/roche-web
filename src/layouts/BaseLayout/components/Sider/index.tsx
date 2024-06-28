import { Menu, MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LevelKeysProps, getLevelKeys } from '~/common/func/getLevelKeys';
import { MenuItem } from '~/constants/config';

const Sider: React.FC<{ menus: MenuItem[]; keyParent: string }> = ({
  menus,
  keyParent,
}) => {
  const levelKeys = getLevelKeys(menus as LevelKeysProps[]);
  const [stateOpenKeys, setStateOpenKeys] = useState(['']);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const splitArray = location.pathname.split('/');
    const reversedArray = splitArray
      .filter((e) => e !== keyParent && e !== '')
      .reverse();
    setStateOpenKeys(reversedArray);
  }, [location.pathname]);
  function formatArray(arr: string[]): string {
    const sortedArray = arr.sort((a, b) => arr.indexOf(b) - arr.indexOf(a));
    return sortedArray.join('/');
  }
  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  const handleClickMenu: MenuProps['onClick'] = (e) => {
    const path = formatArray(e?.keyPath);
    navigate(`/${keyParent}/${path}`);
    if (e?.keyPath.length === 1) {
      setStateOpenKeys([]);
    }
  };
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[
        location.pathname.split('/').slice(-1)[0] as string,
      ]}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      onClick={handleClickMenu}
      className="sider_custom"
      items={menus}
    />
  );
};
export default Sider;
