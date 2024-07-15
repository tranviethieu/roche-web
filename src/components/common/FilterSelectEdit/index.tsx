import React, { useRef, useState } from 'react';
import {
  DeleteOutlined,
  EditOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { Button, Divider, Input, message, Dropdown, Menu, Flex } from 'antd';
import type { InputRef } from 'antd';

let index = 0;

const FilterSelectEdit = () => {
  const [items, setItems] = useState(['jack', 'lucy']);
  const [name, setName] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const inputRef = useRef<InputRef>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleEdit = (item: string) => {
    const newName = prompt('Edit item', item);
    if (newName) {
      setItems(items.map((i) => (i === item ? newName : i)));
    }
  };

  const handleDelete = (item: string) => {
    setItems(items.filter((i) => i !== item));

    message.success('Item deleted');
    setDropdownVisible(true);
  };

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setDropdownVisible(false); // Close dropdown after selection
  };

  const menu = (
    <Menu>
      <Flex gap={4} style={{ padding: '8px' }}>
        <Input
          placeholder="Please enter item"
          ref={inputRef}
          value={name}
          onChange={onNameChange}
          onKeyDown={(e) => e.stopPropagation()}
        />
        <Button
          type="primary"
          onClick={(e: any) => {
            addItem(e);
            setDropdownVisible(true); // Keep dropdown open after adding an item
          }}
        >
          Save
        </Button>
      </Flex>
      <Divider style={{ margin: '8px 0' }} />
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          <div onClick={() => handleSelect(item)}>{item}</div>

          <div>
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={(e) => {
                e.preventDefault();
                handleEdit(item);
                setDropdownVisible(true); // Keep dropdown open after editing an item
              }}
            />
            <Button
              type="link"
              icon={<DeleteOutlined />}
              onClick={(e) => {
                e.preventDefault();
                handleDelete(item);
              }}
            />
          </div>
        </div>
      ))}
    </Menu>
  );

  return (
    <div>
      <div></div>
      <Dropdown
        overlay={menu}
        trigger={['click']}
        visible={dropdownVisible}
        onVisibleChange={(visible) => setDropdownVisible(visible)}
      >
        <Button>
          {selectedItem ? `${selectedItem}` : 'Bộ lọc mẫu'}
          <CaretDownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default FilterSelectEdit;
