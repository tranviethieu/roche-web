import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SplashScreen from './layouts/SplashScreen';
import { ConfigProvider } from 'antd';
import { themeCustom } from './constants/config/theme';

function App() {
  return (
    <ConfigProvider theme={themeCustom}>
      <SplashScreen />
      <ToastContainer autoClose={3000} />
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  );
}

export default App;
