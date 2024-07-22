import { useInfiniteQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { httpRequest } from '~/services';
import crmAccountServices from '~/services/core/crmAccountServices';
import styles from './BoxTestResults.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Checkbox, Divider, GetProp, Input, List, Skeleton } from 'antd';
import useDebounce from '~/common/hooks/useDebounce';
import { useState } from 'react';
interface PropBoxTestResults {
  idScroll: string;
  height: string;
  title: string;
  color?: string;
  checked?: string[];
  setChecked: (check: string[]) => void;
}
const BoxTestResults: React.FC<PropBoxTestResults> = ({
  title,
  idScroll,
  height,
  color = '#797C87',
  checked = [],
  setChecked,
}) => {
  const [keySearch, setKeySearch] = useState<string>('');
  const debounce = useDebounce(keySearch, 500);
  const { data, fetchNextPage, error, hasNextPage } = useInfiniteQuery({
    queryKey: [{ idScroll, debounce }],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await httpRequest({
        http: crmAccountServices.fetchAccounts({
          paging: {
            from: pageParam,
            count: 20,
          },
          keySearch: debounce as string,
        }),
      });
      return {
        items: res?.list || [],
        total: res.count || 0,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < Math.ceil(lastPage.total / 20)) {
        return pages.length + 1;
      }
      return undefined;
    },
  });
  const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (
    checkedValues
  ) => {
    if (setChecked) {
      setChecked(checkedValues as string[]);
    }
  };
  const handleChangeKeyword = (e: any) => {
    setKeySearch(e.target.value);
  };
  if (error) return <div>Error loading data</div>;
  return (
    <Checkbox.Group
      defaultValue={checked}
      onChange={onChange}
      style={{
        border: `1px solid ${color}`,
        borderRadius: '8px',
        width: '100%',
      }}
    >
      <div className={styles.title} style={{ background: color }}>
        {title}
      </div>
      <div
        id={idScroll}
        style={{ height: height }}
        className={clsx(styles.scrollable, 'cls_custom_scroll')}
      >
        <InfiniteScroll
          dataLength={data?.pages.flat().length || 0}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<Skeleton title paragraph={{ rows: 2 }} active />}
          endMessage={
            data?.pages && data?.pages?.flat().length > 20 ? (
              <Divider plain>It is all</Divider>
            ) : (
              <></>
            )
          }
          scrollableTarget={idScroll}
        >
          <List
            dataSource={data?.pages.flat().flatMap((page) => page.items) || []}
            header={
              <>
                <Input
                  value={keySearch}
                  placeholder="Tìm kiếm"
                  onChange={handleChangeKeyword}
                />
              </>
            }
            renderItem={(item: any) => (
              <List.Item key={item?._id}>
                <Checkbox value={item._id}>{item._id}</Checkbox>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </Checkbox.Group>
  );
};
export default BoxTestResults;
