import { Outlet } from 'react-router-dom';
import Slider from '../Slider';
import { menuItemSlider } from '~/constants/config';

const LayoutMain = () => {
  return (
    <>
      <Slider menuItemSlider={menuItemSlider} />
      <Outlet />
    </>
  );
};
export default LayoutMain;
