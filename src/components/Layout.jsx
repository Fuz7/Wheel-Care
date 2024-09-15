import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


function Layout() {
  return (
    <div className="min-h-lvh relative bg-[#fcfcfc] flex flex-col">
      {/* Always show Navbar */}
      <Navbar />
      
      {/* Outlet renders the matched child route here */}
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Layout;
