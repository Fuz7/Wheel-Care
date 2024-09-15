import Home from './components/Home/Home';
import Layout from './components/Layout';
import Shop from './components/Shop/Shop';
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout to wrap routes with navbar
    children: [
      { path: '/', element: <Navigate  to={'/home'} /> },
      { path: '/home', element: <Home /> },
      { path:'/shop', element: <Shop /> }
    ],
  },
]);


function App() {
  return (
    <>
      <div className="min-h-lvh bg-[#fcfcfc] flex flex-col">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
