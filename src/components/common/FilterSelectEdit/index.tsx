import React, { useRef, useState } from 'react';
import {
  DeleteOutlined,
  EditOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { Button, Input, message, Dropdown, ConfigProvider } from 'antd';
import type { InputRef } from 'antd';
import styles from './FilterSelect.module.scss';
import clsx from 'clsx';

const FilterSelectEdit = () => {
  const [items, setItems] = useState(['Filter 1', 'Filter 2']);
  const [name, setName] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const inputRef = useRef<InputRef>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [itemActive, setItemActive] = useState('');
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setItems(items.map((i) => (i === itemActive ? name : i)));
    setItemActive('');
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleDelete = (item: string) => {
    setItems(items.filter((i) => i !== item));
    message.success('Item deleted');
    setDropdownVisible(true);
  };

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setDropdownVisible(false);
  };

  const menuItems = [
    {
      key: 'input',
      label: (
        <div style={{ display: 'flex', gap: '4px', padding: '8px' }}>
          <Input
            placeholder="Please enter item"
            ref={inputRef}
            value={name}
            onChange={onNameChange}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />
          <Button
            type="primary"
            onClick={(e: any) => {
              e.stopPropagation();
              handleItem(e);
              setDropdownVisible(true); // Keep dropdown open after adding an item
            }}
          >
            Save
          </Button>
        </div>
      ),
    },
    ...items.map((item, idx) => ({
      key: idx,
      label: (
        <div
          className={clsx(styles.option, {
            [styles.active]: itemActive == item,
          })}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '4px 12px',
            cursor: 'pointer',
          }}
        >
          <div onClick={() => handleSelect(item)} style={{ width: '70%' }}>
            {item}
          </div>

          <div>
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setItemActive(item);
                setName(item);
                setDropdownVisible(true); // Keep dropdown open after editing an item
              }}
            />
            <Button
              type="link"
              icon={<DeleteOutlined style={{ color: '#FF4D4F' }} />}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleDelete(item);
              }}
            />
          </div>
        </div>
      ),
    })),
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          controlPaddingHorizontal: 0,
        },
        components: {
          Dropdown: {
            paddingBlock: 0,
          },
        },
      }}
    >
      <div className={styles.box}>
        <div className={styles.label}>Bộ lọc mẫu</div>
        <Dropdown
          menu={{ items: menuItems }}
          trigger={['click']}
          open={dropdownVisible}
          onOpenChange={(visible) => setDropdownVisible(visible)}
        >
          <Button className={styles.btn_search}>
            {selectedItem ? `${selectedItem}` : 'Bộ lọc mẫu'}
            <CaretDownOutlined />
          </Button>
        </Dropdown>
      </div>
    </ConfigProvider>
  );
};

export default FilterSelectEdit;
