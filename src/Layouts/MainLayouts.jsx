import {Outlet} from 'react-router-dom';
import Header from './../components/layouts/Header';
import Footer from './../components/layouts/Footer';
import Aside from './../components/layouts/Aside';

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <Aside />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayouts;