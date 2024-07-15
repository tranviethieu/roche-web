import React from 'react';
import styles from './BoxSample.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Badge, Divider, List, Skeleton } from 'antd';
import { useInfiniteQuery } from '@tanstack/react-query';
import crmAccountServices from '~/services/core/crmAccountServices';
import clsx from 'clsx';
import { httpRequest } from '~/services';
interface PropBoxSample {
  idScroll: string;
  title: string;
}
const BoxSample: React.FC<PropBoxSample> = ({ title, idScroll }) => {
  const { data, fetchNextPage, error, hasNextPage } = useInfiniteQuery({
    queryKey: [{ idScroll }],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await httpRequest({
        http: crmAccountServices.fetchAccounts({
          paging: {
            from: pageParam,
            count: 10,
          },
          keySearch: '',
        }),
      });
      return {
        items: res?.list || [],
        total: res.count || 0,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < Math.ceil(lastPage.total / 10)) {
        return pages.length + 1;
      }
      return undefined;
    },
  });

  if (error) return <div>Error loading data</div>;

  return (
    <div className={styles.card}>
      <div style={{ width: '100%' }}>
        <div className={styles.boxTitle}>
          <div className={styles.title}>
            {title}
            <Badge
              className="site-badge-count-109"
              count={109}
              style={{ backgroundColor: '#E45454' }}
            />
            <Badge
              className="site-badge-count-109"
              count={109}
              style={{ backgroundColor: '#FFBD00' }}
            />
          </div>
        </div>
      </div>

      <div
        id={idScroll}
        className={clsx(styles.scrollable, 'cls_custom_scroll')}
      >
        <InfiniteScroll
          dataLength={data?.pages.flat().length || 0}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<Skeleton title paragraph={{ rows: 2 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget={idScroll}
        >
          <List
            dataSource={data?.pages.flat().flatMap((page) => page.items) || []}
            renderItem={(item: any) => (
              <List.Item key={item?._id}>
                <List.Item.Meta
                  title={<div style={{ fontWeight: 500 }}>{item.fullName}</div>}
                  description={'Chưa chuẩn bị lấy mẫu - Chưa xếp hàng'}
                />
                <div style={{ fontWeight: 500 }}>+ 155’</div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default BoxSample;
