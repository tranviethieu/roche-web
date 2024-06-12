import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '~/redux/store';

const useAuth = () => {
  const { token, isLogin } = useSelector((state: RootState) => state.auth);
  return !!token && !!isLogin;
};

const RequiredLogout: React.FC = () => {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default RequiredLogout;
