// src/components/ProtectedRoute.tsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { RootState } from '~/redux/store';

const RequiredAuth: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.site);
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      if (!isLogin && !loading) {
        navigate('/login');
      }
    })();
  }, [isLogin, loading, navigate]);
  if (isLogin && !loading) {
    return <Outlet />;
  }

  return <div className="loading-page"></div>;
};

export default RequiredAuth;
