import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useIsFetching, useIsMutating } from 'react-query';
import SplashScreen from './layouts/SplashScreen';
import { FloatButton } from 'antd';

function App() {
  return (
    <>
      <SplashScreen />
      <ToastContainer autoClose={3000} />
      <RouterProvider router={router}></RouterProvider>
      <FloatButton.BackTop style={{ width: '30px', height: '30px' }} />
    </>
  );
}

export default App;
