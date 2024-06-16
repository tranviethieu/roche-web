// src/components/common/ProgressBar/ProgressBar.jsx
import { useEffect } from 'react';
import { useNavigation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const ProgressBar = ({ children }: any) => {
  const navigation = useNavigation();
  console.log(1);
  useEffect(() => {
    const startProgress = () => NProgress.start();
    const stopProgress = () => NProgress.done();

    if (navigation && navigation.state === 'loading') {
      startProgress();
    } else {
      stopProgress();
    }

    return () => {
      stopProgress();
    };
  }, [navigation]);

  return <>{children}</>;
};

export default ProgressBar;
