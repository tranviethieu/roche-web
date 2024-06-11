import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import RequiredAuth from './components/protected/RequiredAuth';
import Login from './pages/Login/Login';
import RequiredLogout from './components/protected/RequiredLogout';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <RequiredLogout />,
    children: [{ path: '', element: <Login /> }],
  },
  {
    element: <RequiredAuth />,
    children: [
      {
        path: '/',
        element: <Layout />,
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
