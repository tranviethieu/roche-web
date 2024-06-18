import { Outlet } from 'react-router-dom';
import Slider from '../Slider';
import { menuItemSlider } from '~/constants/config';
const LayoutMonitoring = () => {
  return (
    <>
      <Slider menuItemSlider={menuItemSlider} />
      <Outlet />
    </>
  );
};
export default LayoutMonitoring;
