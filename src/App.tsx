import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SplashScreen from './layouts/SplashScreen';

function App() {
  return (
    <>
      <SplashScreen />
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
