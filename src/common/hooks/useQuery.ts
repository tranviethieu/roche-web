import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

// Custom hook to manage query parameters
export function useQuery() {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

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
          search: newParams.toString(),
        },
        { replace: true, state: { scroll: false } }
      );
    },
    [navigate, pathname]
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

  return {
    getQueryParamValue,
    removeQueryParam,
    getQueryParams,
    updateQueryParam,
  };
}
// import { useLocation, useNavigate } from 'react-router-dom';

// // Custom hook to manage query parameters
// export function useQuery() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Function to get the current query parameters
//   const getQueryParams = (): URLSearchParams => {
//     return new URLSearchParams(location.search);
//   };

//   // Function to remove a query parameter
//   const removeQueryParam = (key: string) => {
//     const searchParams = getQueryParams();
//     searchParams.delete(key);
//     navigate(
//       {
//         pathname: location.pathname,
//         search: searchParams.toString(),
//       },
//       { replace: true, state: { scroll: false } }
//     );
//   };
//   const updateQueryParam = (key: string, value: string) => {
//     const searchParams = getQueryParams();
//     searchParams.set(key, value);
//     navigate(
//       {
//         pathname: location.pathname,
//         search: searchParams.toString(),
//       },
//       { replace: true, state: { scroll: false } }
//     );
//   };
//   const getQueryParamValue = (key: string): string | null => {
//     const searchParams = getQueryParams();
//     return searchParams.get(key);
//   };

//   return {
//     getQueryParamValue,
//     removeQueryParam,
//     getQueryParams,
//     updateQueryParam,
//   };
// }
