import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

// Custom hook to manage query parameters
export function useQueryHook() {
  const navigate = useNavigate();
  const { search, pathname, hash } = useLocation();

  // Function to get the current query parameters
  const getQueryParams = useCallback(() => {
    return new URLSearchParams(search);
  }, [search]);

  // Function to update the query parameters
  const updateQueryParams = useCallback(
    (newParams: URLSearchParams) => {
      navigate(
        {
          pathname,
          hash,
          search: newParams.toString(),
        },
        { replace: true, state: { scroll: false } }
      );
    },
    [navigate, pathname, hash]
  );

  // Function to remove a query parameter
  const removeQueryParam = useCallback(
    (key: string) => {
      const searchParams = getQueryParams();
      searchParams.delete(key);
      updateQueryParams(searchParams);
    },
    [getQueryParams, updateQueryParams]
  );

  // Function to update a query parameter
  const updateQueryParam = useCallback(
    (key: string, value: string) => {
      const searchParams = getQueryParams();
      searchParams.set(key, value);
      updateQueryParams(searchParams);
    },
    [getQueryParams, updateQueryParams]
  );

  // Function to get the value of a query parameter
  const getQueryParamValue = useCallback(
    (key: string) => {
      return getQueryParams().get(key);
    },
    [getQueryParams]
  );
  const setQueryParams = useCallback(
    (params: Record<string, string>) => {
      const queryParams = getQueryParams();
      Object.keys(params).forEach((key) => {
        queryParams.set(key, params[key]);
      });
      navigate({
        pathname,
        hash,
        search: queryParams.toString(),
      });
    },
    [getQueryParams, navigate, pathname]
  );
  // Function to remove all query parameters
  const removeAllQueryParams = useCallback(() => {
    navigate(
      {
        pathname,
        search: '',
      },
      { replace: true, state: { scroll: false } }
    );
  }, [navigate, pathname, hash]);
  const getAllQueryParams = useCallback(() => {
    const params = getQueryParams();
    const paramsObj: Record<string, string> = {};
    params.forEach((value, key) => {
      paramsObj[key] = value;
    });
    return paramsObj;
  }, [getQueryParams]);
  return {
    getQueryParamValue,
    removeQueryParam,
    getQueryParams,
    updateQueryParam,
    setQueryParams,
    getAllQueryParams,
    removeAllQueryParams,
  };
}
