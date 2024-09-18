import Login from './components/Account/Login';
import CustomizeCat from './components/Customize/CustomizeCat';
import Home from './components/Home/Home';
import Layout from './components/Layout';
import ProductSelected from './components/Shop/ProductSelected';
import Shop from './components/Shop/Shop';
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom';
import Testimonial from './components/Testimonial/Testimonial';
import ContactUs from './components/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout to wrap routes with navbar
    children: [
      { path: '/', element: <Navigate  to={'/home'} /> },
      { path: '/home', element: <Home /> },
      { path:'/shop', element: <Shop /> },
      {path:'/shop/productSelected', element: <ProductSelected /> },
      {path:'/login', element: <Login /> },
      {path:'/customize/customizeCat',element: <CustomizeCat /> },
      {path:'/testimonial',element: <Testimonial /> },
      {path:'/contactUs',element: <ContactUs /> }
    ],
  },
]);


function App() {
  return (
    <>
      <div className="min-h-lvh bg-[#fcfcfc] flex flex-col relative">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
