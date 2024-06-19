import { Form, Select } from 'antd';
import { PropFilterSelect } from './interfaces';
import { useQuery } from '~/common/hooks/useQuery';
import { removeVietnameseTones } from '~/common/func/optionConvert';
function FilterSelect({
  label,
  name,
  listFilter,
  query,
  disabled = false,
  isSearch = true,
}: PropFilterSelect) {
  const { removeQueryParam, updateQueryParam, getQueryParamValue } = useQuery();
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
      className="form_filter_select"
      layout={'vertical'}
      initialValues={initialValues}
    >
      <Form.Item label={label} name={name}>
        <Select
          showSearch={isSearch}
          //defaultValue={getQueryParamValue(query)}
          style={{ width: 260, height: 32, borderRadius: 4 }}
          optionFilterProp="children"
          onChange={onChange}
          filterOption={filterOption}
          allowClear
          placeholder={'Tất cả'}
          options={listFilter}
          disabled={disabled}
          className="filter_select"
        />
      </Form.Item>
    </Form>
  );
}

export default FilterSelect;
