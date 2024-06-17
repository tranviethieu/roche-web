import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import RequiredAuth from './components/protected/RequiredAuth';
import RequiredLogout from './components/protected/RequiredLogout';
import NotFound from './pages/NotFound';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import { PATH } from './constants/config';
import Main from './pages/Main';
import TrackSampler from './pages/TrackSampler';
import LayoutAdministration from './layouts/BaseLayout/components/LayoutAdministration';

const router = createBrowserRouter([
  {
    element: <RequiredLogout />,
    children: [
      { path: PATH.Login, element: <Login /> },
      { path: PATH.ForgotPassword, element: <ForgotPassword /> },
    ],
  },
  {
    element: <RequiredAuth />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            path: PATH.Main,
            element: <Main />,
            children: [{ path: '/:tabId/:id', element: <></> }],
          },
          {
            element: <LayoutAdministration />,
            children: [
              { path: PATH.Administration, element: <></> },
              {
                path: `${PATH.Administration}${PATH.TrackSampler}/:tabId`,
                element: <TrackSampler />,
              },
            ],
          },
          { path: PATH.Monitoring, element: <Dashboard /> },
          { path: `${PATH.TrackSampler}/:tabId`, element: <TrackSampler /> },
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
