import { Flex } from 'antd';
import FilterSelect from '~/components/common/FilterSelect/FilterSelect';
import styles from './FilterTrackSampler.module.scss';
//import { useTranslation } from 'react-i18next';
import FilterSelectEdit from '~/components/common/FilterSelectEdit';
import ModelCaptureFilter from '../ModelCaptureFilter';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/constants/config/enum';
import { httpRequest } from '~/services';
import dMTestServices from '~/services/roche/dMTestServices';
// eslint-disable-next-line react-refresh/only-export-components
function FilterTrackSampler() {
  //const { t } = useTranslation();
  const dataSampleType = useQuery({
    queryKey: [QUERY_KEY.GetAllTestPaging],
    queryFn: () =>
      httpRequest({
        http: dMTestServices.GetAllTestPaging({
          keywords: '',
          pageCurrent: 1,
          pageSize: 20,
          name: '',
        }),
      }),
  });

  return (
    <div className={styles.container}>
      <Flex gap={10} wrap flex={1}>
        <FilterSelect
          label="Loại lấy mẫu"
          name="a1"
          query="_a"
          listFilter={
            dataSampleType?.data
              ? dataSampleType?.data?.listRecords.map((item: any) => ({
                  label: item.name,
                  value: item.id,
                }))
              : []
          }
        />

        <FilterSelect
          label="Phòng khoa"
          name="2a1"
          query="_a"
          listFilter={[]}
        />
        <FilterSelect
          label="Thời gian"
          name="time"
          query="_timeHour"
          listFilter={[
            { label: '12h', value: '12' },
            { label: '24h', value: '24' },
          ]}
        />
        <div style={{ margin: 'auto 10px 0 auto' }}>
          <ModelCaptureFilter />
        </div>
      </Flex>
      <FilterSelectEdit />
    </div>
  );
}
export default FilterTrackSampler;
