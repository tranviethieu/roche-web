import { Outlet } from 'react-router-dom';
import Slider from '../Slider';
import { menuItemMain } from '~/constants/config';

const LayoutMain = () => {
  return (
    <>
      <Slider menuItemSlider={menuItemMain} />
      <Outlet />
    </>
  );
};
export default LayoutMain;
