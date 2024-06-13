import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { RootState } from '~/redux/store';

const RequiredLogout: React.FC = () => {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const { loading } = useSelector((state: RootState) => state.site);

  useEffect(() => {
    if (isLogin && !loading) navigate('/');
  }, [isLogin, loading, navigate]);

  if (!isLogin && !loading) {
    return <Outlet />;
  }

  return <div className="loading-page"></div>;
};

export default RequiredLogout;
