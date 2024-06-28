import { Input } from 'antd';
import { SearchNormal1 } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useQueryHook } from '~/common/hooks/useQuery';

interface PropsSearch {
  placeholder?: string;
  keyName?: string;
}

const SearchInput: React.FC<PropsSearch> = ({
  placeholder = '--Tìm kiếm--',
  keyName = '_search',
}) => {
  const [keyword, setKeyword] = useState<string>('');
  const { removeQueryParam, updateQueryParam, getQueryParamValue } =
    useQueryHook();
  const keyQuery = getQueryParamValue(keyName);
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setKeyword(e.target.value);
  };
  useEffect(() => {
    if (!!keyQuery) setKeyword(keyQuery as string);
  }, [keyQuery]);
  useEffect(() => {
    const handler = setTimeout(() => {
      setType(keyword);
    }, 500);
    return () => clearTimeout(handler);
  }, [keyword]);

  const setType = (value: any) => {
    if (!!value) {
      updateQueryParam(keyName, value);
    } else {
      removeQueryParam(keyName);
    }
  };
  return (
    <Input
      className="search_header"
      value={keyword}
      style={{
        fontSize: 'var(--size-text)',
        background: 'transparent',
        color: 'var(--white-text)',
        width: 160,
      }}
      placeholder={placeholder}
      allowClear
      onChange={onChange}
      suffix={<SearchNormal1 size={14} color="#fff" />}
    />
  );
};

export default SearchInput;
