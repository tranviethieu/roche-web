import { Tabs, TabsProps } from 'antd';
import styles from './ListTest.module.scss';
import { useLocation } from 'react-router-dom';
import Perform from './components/Perform';
const items: TabsProps['items'] = [
  {
    key: 'perform',
    label: 'Thực hiện (50)',
    children: <Perform key={'perform'} />,
  },
  {
    key: 'detail1',
    label: 'Đã ký (2)',
    children: 'Content of Tab Pane 2',
  },
  {
    key: 'detail2',
    label: 'Đã xóa (10)',
    children: 'Content of Tab Pane 3',
  },
];
const ListTest = () => {
  const location = useLocation();
  console.log(location.search);
  return (
    <section className={styles.container}>
      <Tabs size="small" tabPosition={'left'} items={items} />
    </section>
  );
};
export default ListTest;
