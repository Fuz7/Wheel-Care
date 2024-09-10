import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="min-h-lvh bg-[#fcfcfc] flex flex-col">
      {/* Always show Navbar */}
      <Navbar />
      
      {/* Outlet renders the matched child route here */}
      <Outlet />
    </div>
  );
}

export default Layout;
