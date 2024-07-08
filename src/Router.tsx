import { createBrowserRouter } from 'react-router-dom';
import { PATH } from './constants/config';
import RequiredAuth from './components/protected/RequiredAuth';
import RequiredLogout from './components/protected/RequiredLogout';
import NotFound from './pages/NotFound';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import LayoutAdministration from './layouts/BaseLayout/components/LayoutAdministration';
import LayoutMain from './layouts/BaseLayout/components/LayoutMain';
import LayoutMonitoring from './layouts/BaseLayout/components/LayoutMonitoring';
import TrackSampler from './pages/main/TrackSampler';
import Main from './pages/main/Main';
import DetailSampler from './pages/main/DetailSampler';
import Results from './pages/administration/Results';
import AntibioticFamilies from './pages/administration/AntibioticFamilies';
import InstrumentDefinition from './pages/administration/InstrumentDefinition';

const router = createBrowserRouter([
  {
    element: <RequiredLogout />,
    children: [
      {
        path: PATH.Login,
        element: <Login />,
      },
      {
        path: PATH.ForgotPassword,
        element: <ForgotPassword />,
      },
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
            children: [
              {
                path: PATH.Main,
                element: <Main />,
              },
              {
                path: '/main/detailSampler',
                element: <DetailSampler />,
              },
              {
                path: `${PATH.TrackSampler}/:tabId`,
                element: <TrackSampler />,
              },
            ],
          },
          {
            element: <LayoutAdministration />,
            children: [
              { path: PATH.Administration, element: <></> },
              {
                path: '/administration/results',
                element: <Results />,
              },
              {
                path: '/administration/antibiogram/antibiotic-families',
                element: <AntibioticFamilies />,
              },
              {
                path: `${PATH.Administration}/ICA/instrument-definition`,
                element: <InstrumentDefinition />,
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
