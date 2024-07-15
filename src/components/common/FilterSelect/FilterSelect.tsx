import { Form, Select } from 'antd';
import { PropFilterSelect } from './interfaces';
import { useQueryHook } from '~/common/hooks/useQuery';
import { removeVietnameseTones } from '~/common/func/optionConvert';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { CaretDownOutlined } from '@ant-design/icons';
function FilterSelect({
  label,
  name,
  listFilter,
  query,
  disabled = false,
  isSearch = true,
  color = true,
}: PropFilterSelect) {
  const { t } = useTranslation();
  const { removeQueryParam, updateQueryParam, getQueryParamValue } =
    useQueryHook();
  const initialValues = {
    [name]: getQueryParamValue(query),
  };
  const onChange = (value: string) => {
    if (value) {
      updateQueryParam(query, value);
    } else {
      removeQueryParam(query);
    }
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) =>
    removeVietnameseTones(option?.label ?? '').includes(
      input ? removeVietnameseTones(input.toLowerCase()) : ''
    );

  return (
    <Form
      className={clsx('form_filter_select', {
        ['form_filter_select_color']: color,
      })}
      layout={'vertical'}
      initialValues={initialValues}
    >
      <Form.Item label={label} name={name} style={{ fontWeight: '600' }}>
        <Select
          showSearch={isSearch}
          suffixIcon={<CaretDownOutlined />}
          //defaultValue={getQueryParamValue(query)}
          style={{ width: 240, height: 30, borderRadius: 5 }}
          optionFilterProp="children"
          onChange={onChange}
          filterOption={filterOption}
          allowClear
          placeholder={t('filter.All')}
          options={listFilter}
          disabled={disabled}
          className={clsx('filter_select', { ['filter_select_color']: color })}
        />
      </Form.Item>
    </Form>
  );
}

export default FilterSelect;
