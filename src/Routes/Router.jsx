import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/Common/ErrorPage/ErrorPage';
import Registration from '../components/Common/Registration/Registration';
import AboutMain from '../components/Pages/About/AboutMain/AboutMain';
import BlogDetails from '../components/Pages/BlogDetails/BlogDetails/BlogDetails';
import Blogs from '../components/Pages/Blogs/Blogs/Blogs';
import Certification from '../components/Pages/Certification/Certification';
import ContactUS from '../components/Pages/ContactUS/ContactUS/ContactUS';
import Home from '../components/Pages/Home/Home/Home';
import ProductMain from '../components/Pages/Product/ProductMain/ProductMain';
import School from '../components/Pages/School/School/School';
import Team from '../components/Pages/Team/Team/Team';
import University from '../components/Pages/University/University/University';
import Main from '../Layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <AboutMain></AboutMain>,
      },
      {
        path: '/team',
        element: <Team></Team>,
      },
      {
        path: '/contact',
        element: <ContactUS></ContactUS>,
      },
      {
        path: '/product',
        element: <ProductMain></ProductMain>,
      },
      {
        path: '/school',
        element: <School></School>,
      },
      {
        path: '/university',
        element: <University></University>,
      },
      {
        path: '/certification',
        element: <Certification></Certification>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/blogDetails',
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
    ],
  },
]);

export default router;
