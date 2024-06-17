import { menuItemSlider } from '~/constants/config';
import Slider from '../Slider';
import { Outlet } from 'react-router-dom';
const LayoutAdministration = () => {
  return (
    <>
      <Slider menuItemSlider={menuItemSlider} />
      <Outlet />
    </>
  );
};
export default LayoutAdministration;
