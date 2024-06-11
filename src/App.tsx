import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
function App() {
  useEffect(() => {
    const startProgress = () => NProgress.start();
    const stopProgress = () => NProgress.done();

    // Thiết lập các trình đổi route cho việc bắt đầu và kết thúc NProgress
    () => startProgress();
    () => stopProgress();

    // Nghe sự kiện bắt đầu và hoàn thành của việc thay đổi route
    window.addEventListener('beforeunload', startProgress);
    window.addEventListener('load', stopProgress);

    return () => {
      window.removeEventListener('beforeunload', startProgress);
      window.removeEventListener('load', stopProgress);
    };
  }, []);
  return (
    <div>
      <ToastContainer autoClose={3000} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
