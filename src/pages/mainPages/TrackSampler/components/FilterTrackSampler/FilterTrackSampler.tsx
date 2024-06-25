import { Flex } from 'antd';
import FilterSelect from '~/components/common/FilterSelect/FilterSelect';
import styles from './FilterTrackSampler.module.scss';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line react-refresh/only-export-components
function FilterTrackSampler() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Flex gap={10} wrap>
        <FilterSelect label="Vị trí" name="a1" query="_a" listFilter={[]} />
        <FilterSelect
          label={t('filter.Object')}
          name="3a1"
          query="_status"
          listFilter={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
          ]}
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
          query="_time"
          listFilter={[
            { label: '12h', value: '12' },
            { label: '24h', value: '24' },
          ]}
        />
        <FilterSelect label="Filter" name="1a1" query="_a" listFilter={[]} />
      </Flex>
    </div>
  );
}
export default FilterTrackSampler;
