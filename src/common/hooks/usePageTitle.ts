import { useEffect } from 'react';

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
    localStorage.setItem('pageTitle', title);
  }, [title]);
};
export default usePageTitle;
