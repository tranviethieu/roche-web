import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RequiredAuth from './components/protected/RequiredAuth';
import RequiredLogout from './components/protected/RequiredLogout';
import NotFound from './pages/NotFound';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import { PATH } from './constants/config';
import { Spin } from 'antd';

// Lazy load components
const Login = lazy(() => import('./pages/auth/Login'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));

const LayoutAdministration = lazy(
  () => import('./layouts/BaseLayout/components/LayoutAdministration')
);
const LayoutMain = lazy(
  () => import('./layouts/BaseLayout/components/LayoutMain')
);
const LayoutMonitoring = lazy(
  () => import('./layouts/BaseLayout/components/LayoutMonitoring')
);
const TrackSampler = lazy(() => import('./pages/main/TrackSampler'));
const Main = lazy(() => import('./pages/main/Main'));
const DetailSampler = lazy(() => import('./pages/main/DetailSampler'));
const Results = lazy(() => import('./pages/administration/Results'));
const AntibioticFamilies = lazy(
  () => import('./pages/administration/AntibioticFamilies')
);
const InstrumentDefinition = lazy(
  () => import('./pages/administration/InstrumentDefinition')
);
const router = createBrowserRouter([
  {
    element: <RequiredLogout />,
    children: [
      {
        path: PATH.Login,
        element: (
          <Suspense fallback={<Spin size="large" />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: PATH.ForgotPassword,
        element: (
          <Suspense fallback={<Spin size="large" />}>
            <ForgotPassword />
          </Suspense>
        ),
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
            element: (
              <Suspense fallback={<Spin size="large" />}>
                <LayoutMain />
              </Suspense>
            ),
            children: [
              {
                path: PATH.Main,
                element: (
                  <Suspense fallback={<Spin size="large" />}>
                    <Main />
                  </Suspense>
                ),
              },
              {
                path: '/main/detailSampler',
                element: (
                  <Suspense fallback={<Spin size="large" />}>
                    <DetailSampler />
                  </Suspense>
                ),
              },
              {
                path: `${PATH.TrackSampler}/:tabId`,
                element: (
                  <Suspense fallback={<Spin size="large" />}>
                    <TrackSampler />
                  </Suspense>
                ),
              },
            ],
          },
          {
            element: (
              <Suspense fallback={<Spin size="large" />}>
                <LayoutAdministration />
              </Suspense>
            ),
            children: [
              { path: PATH.Administration, element: <></> },
              {
                path: '/administration/results',
                element: (
                  <Suspense fallback={<Spin size="large" />}>
                    <Results />
                  </Suspense>
                ),
              },
              {
                path: '/administration/antibiogram/antibiotic-families',
                element: (
                  <Suspense fallback={<Spin size="large" />}>
                    <AntibioticFamilies />
                  </Suspense>
                ),
              },
              {
                path: `${PATH.Administration}/ICA/instrument-definition/:tabId/:id`,
                element: (
                  <Suspense fallback={<Spin size="large" />}>
                    <InstrumentDefinition />
                  </Suspense>
                ),
              },
            ],
          },
          {
            element: (
              <Suspense fallback={<Spin size="large" />}>
                <LayoutMonitoring />
              </Suspense>
            ),
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
