import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ErrorPage from '../components/Common/ErrorPage/ErrorPage';
import Policy from '../components/Common/Policy/Policy';
import Registration from '../components/Common/Registration/Registration';
import Terms from '../components/Common/Terms/Terms';
import AboutMain from '../components/Pages/About/AboutMain/AboutMain';
import BlogDetails from '../components/Pages/BlogDetails/BlogDetails/BlogDetails';
import Blogs from '../components/Pages/Blogs/Blogs/Blogs';
import Certification from '../components/Pages/Certification/Certification';
import ContactUS from '../components/Pages/ContactUS/ContactUS/ContactUS';
import CourseDetails from '../components/Pages/CourseDetails/CourseDetails';
import VideosPlaying from '../components/Pages/CourseDetails/videosPlaying/VideosPlaying.jsx';
import Home from '../components/Pages/Home/Home/Home';
import ProductDetails from '../components/Pages/Product/ProductDetails/ProductDetails';
import ProductMain from '../components/Pages/Product/ProductMain/ProductMain';
import School from '../components/Pages/School/School/School';
import Team from '../components/Pages/Team/Team/Team';
import University from '../components/Pages/University/University/University';

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
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`https://itesseract.com.bd/master/api/v1/product/${params.id}`),
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
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`https://itesseract.com.bd/master/api/v1/blog/${params.id}`),
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
      },
      {
        path: '/terms',
        element: <Terms></Terms>,
      },
      {
        path: '/policy',
        element: <Policy></Policy>,
      },
      {
        path: '/courseDetails',
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: '/videosPlay',
        element: <VideosPlaying></VideosPlaying>,
      },
    ],
  },
]);

export default router;
