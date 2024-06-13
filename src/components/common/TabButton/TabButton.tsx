import React from 'react';
import styles from './TabButton.module.scss';
import { Button } from 'antd';

interface TabButtonProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ label, onClick, active }) => {
  return (
    <Button
      className={`${styles.tabButton} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default TabButton;
