import React, { useEffect, useState } from 'react';
import styles from './Overview.module.scss';
import VirtualList from 'rc-virtual-list';
import { Checkbox, Col, Flex, Input, List, Row, Select, Spin } from 'antd';
import { SearchNormal1 } from 'iconsax-react';
import ItemNotification from './ItemNotification';
import { useInfiniteQuery } from '@tanstack/react-query';
import crmAccountServices from '~/services/core/crmAccountServices';
import { QUERY_KEY } from '~/constants/config/enum';
interface typeSearch {
  keyword: string;
}

const Overview: React.FC = () => {
  //const [loading, setLoading] = useState(false);
  const [mergedData, setMergedData] = useState<any>([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [keyword, setKeyword] = useState<string>('');
  const [onSearch, setOnSearch] = useState<typeSearch>({
    keyword: '',
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.Notifications, onSearch],
      queryFn: async ({ pageParam = 0 }) => {
        const res = await crmAccountServices.fetchAccounts({
          paging: {
            from: pageParam,
            count: 10,
          },
          keySearch: onSearch?.keyword ?? '',
        });

        return {
          items: res?.data?.list || [],
          total: res.data.count || 0,
        };
      },
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < Math.ceil(lastPage.total / 10)) {
          return pages.length + 1;
        }
        return undefined;
      },
      enabled: !loadingPage,
    });
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const target = e.currentTarget;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  };
  useEffect(() => {
    if (data) {
      const dataNew = data ? data.pages.flatMap((page) => page.items) : [];
      setMergedData(dataNew);
    }
  }, [data]);

  return (
    <section className={styles.section}>
      {loadingPage ? (
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
                <Col span={6} lg={6} xs={12}>
                  <Select
                    defaultValue="Descending"
                    style={{ width: 120 }}
                    onChange={(value: string) => {
                      console.log(`selected ${value}`);
                    }}
                    options={[{ value: 'Descending', label: 'Descending' }]}
                  />
                </Col>
                <Col span={6} lg={6} xs={12}>
                  <Checkbox
                    onChange={(e) => {
                      console.log(`checked = ${e.target.checked}`);
                    }}
                  >
                    Unread
                  </Checkbox>
                </Col>
                <Col span={12} lg={12} xs={24}>
                  <Flex gap={10}>
                    <Input
                      placeholder="..."
                      value={keyword}
                      style={{ width: '162px' }}
                      onChange={(e: any) => {
                        setKeyword(e.target.value);
                      }}
                    />
                    <div
                      onClick={() => {
                        setOnSearch({ keyword: keyword });
                      }}
                    >
                      <SearchNormal1 size="24" color="#303133" />
                    </div>
                  </Flex>
                </Col>
              </Row>
              <List
                className="list_overview"
                style={{ margin: '10px 0' }}
                //loading={loading}
              >
                <VirtualList
                  data={mergedData}
                  height={320}
                  itemHeight={47}
                  itemKey="email"
                  onScroll={handleScroll}
                >
                  {(item: any) => (
                    <List.Item key={item._id}>
                      <ItemNotification
                        name={item?._id}
                        date={item?.createdTime}
                      />
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
