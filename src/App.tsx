import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import ProgressBar from './components/common/ProgressBar/ProgressBar';
import 'react-toastify/dist/ReactToastify.css';
//import { useIsFetching, useIsMutating } from 'react-query';
import SplashScreen from './layouts/SplashScreen';
function App() {
  //const isFetching = useIsFetching();
  //const isMutating = useIsMutating();
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    // Example: Simulate a network request
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <ProgressBar isAnimating={isAnimating} />
      <SplashScreen />
      <ToastContainer autoClose={3000} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
