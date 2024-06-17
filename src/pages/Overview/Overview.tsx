import React, { useEffect, useState } from 'react';
import styles from './Overview.module.scss';
import VirtualList from 'rc-virtual-list';
import { Checkbox, Col, Flex, Input, List, Row, Select, Spin } from 'antd';
import { SearchNormal1 } from 'iconsax-react';
import ItemNotification from './ItemNotification';
interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
const fakeDataUrl =
  'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 310;
const Overview: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<UserItem[]>([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (
      Math.abs(
        e.currentTarget.scrollHeight -
          e.currentTarget.scrollTop -
          ContainerHeight
      ) <= 1
    ) {
      appendData();
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className={styles.section}>
      {loading ? (
        <Flex
          align="center"
          gap="middle"
          style={{ justifyContent: 'center', width: '100%', height: '100%' }}
        >
          <Spin size="large" />
        </Flex>
      ) : (
        <Row style={{ height: '100%' }}>
          <Col span={11} lg={11} xs={24}>
            <Flex gap={10} align="center" style={{ marginBottom: '10px' }}>
              <div>Notification</div>
              <div className={styles.line}></div>
            </Flex>
            <div>
              <Row align="middle">
                <Col span={6} xs={12}>
                  <Select
                    defaultValue="Descending"
                    style={{ width: 120 }}
                    onChange={(value: string) => {
                      console.log(`selected ${value}`);
                    }}
                    options={[{ value: 'Descending', label: 'Descending' }]}
                  />
                </Col>
                <Col span={6} xs={12}>
                  <Checkbox
                    onChange={(e) => {
                      console.log(`checked = ${e.target.checked}`);
                    }}
                  >
                    Unread
                  </Checkbox>
                </Col>
                <Col span={12} xs={24}>
                  <Flex gap={10}>
                    <Input placeholder="..." style={{ width: '162px' }} />
                    <div>
                      <SearchNormal1 size="24" color="#303133" />
                    </div>
                  </Flex>
                </Col>
              </Row>
              <List className="list_overview" style={{ margin: '10px 0' }}>
                <VirtualList
                  data={data}
                  height={ContainerHeight}
                  itemHeight={47}
                  itemKey="email"
                  onScroll={onScroll}
                >
                  {(item: UserItem, index: number) => (
                    <List.Item key={index}>
                      <ItemNotification key={index} name={item.name.first} />
                    </List.Item>
                  )}
                </VirtualList>
              </List>
            </div>
            <Flex gap={10} align="center" style={{ marginBottom: '10px' }}>
              <div>Favoties</div>
              <div className={styles.line}></div>
            </Flex>
          </Col>
          <Col span={2} lg={2} xs={0}>
            <div className={styles.line2}></div>
          </Col>
          <Col span={11} lg={11} xs={24}>
            <Flex gap={10} align="center" style={{ marginBottom: '10px' }}>
              <div>Charts</div>
              <div className={styles.line}></div>
            </Flex>
            <Select
              defaultValue=""
              style={{ width: 300 }}
              onChange={(value: string) => {
                console.log(`selected ${value}`);
              }}
              options={[{ value: '', label: '---' }]}
            />
          </Col>
        </Row>
      )}
    </section>
  );
};
export default Overview;
