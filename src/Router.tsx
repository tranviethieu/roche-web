import { createBrowserRouter } from 'react-router-dom';
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
import LayoutMain from './layouts/BaseLayout/components/LayoutMain';
import LayoutMonitoring from './layouts/BaseLayout/components/LayoutMonitoring';

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
            element: <LayoutMain />,
            children: [{ path: PATH.Main, element: <Main /> }],
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
          {
            element: <LayoutMonitoring />,
            children: [{ path: PATH.Monitoring, element: <></> }],
          },
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
