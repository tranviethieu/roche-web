import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import RequiredAuth from './components/protected/RequiredAuth';
import RequiredLogout from './components/protected/RequiredLogout';
import NotFound from './pages/NotFound';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import ForgotPassword from './pages/auth/ForgotPassword';
import Login from './pages/auth/Login';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <RequiredLogout />,
    children: [{ path: '', element: <Login /> }],
  },
  {
    path: 'forgot-password',
    element: <RequiredLogout />,
    children: [{ path: '', element: <ForgotPassword /> }],
  },
  {
    element: <RequiredAuth />,
    children: [
      {
        path: '/',
        element: <BaseLayout />,
        children: [
          { path: '/', element: <>aaa</> },
          { path: 'dashboard', element: <Dashboard /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
export default router;
