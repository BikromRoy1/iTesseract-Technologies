import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout.jsx';
import Main from '../Layout/Main';
import ErrorPage from '../components/Common/ErrorPage/ErrorPage';
import Policy from '../components/Common/Policy/Policy';
import Registration from '../components/Common/Registration/Registration';
import Terms from '../components/Common/Terms/Terms';
import DBMyCourse from '../components/Dashboard/DBCourse/DBMyCourse.jsx';
import DBHeader from '../components/Dashboard/DBHeader/DBHeader.jsx';
import DBVideos from '../components/Dashboard/DBVideos/DBVideos.jsx';
import EditProfile from '../components/Dashboard/EditProfile/EditProfile.jsx';
import MyLiveClass from '../components/Dashboard/MyLiveClass/MyLiveClass.jsx';
import Profile from '../components/Dashboard/Profile/Profile.jsx';
import Login from '../components/Login/Login.jsx';
import AboutMain from '../components/Pages/About/AboutMain/AboutMain';
import BlogDetails from '../components/Pages/BlogDetails/BlogDetails/BlogDetails';
import Blogs from '../components/Pages/Blogs/Blogs/Blogs';
import ContactUS from '../components/Pages/ContactUS/ContactUS/ContactUS';
import CourseDetails from '../components/Pages/CourseDetails/CourseDetails';
import VideosPlaying from '../components/Pages/CourseDetails/videosPlaying/VideosPlaying.jsx';
import Home from '../components/Pages/Home/Home/Home';
import LiveCourse from '../components/Pages/LiveCourse/LiveCourse';
import ProductDetails from '../components/Pages/Product/ProductDetails/ProductDetails';
import ProductMain from '../components/Pages/Product/ProductMain/ProductMain';
import RecordCourse from '../components/Pages/RecordedCourse/RecordCourse';
import Team from '../components/Pages/Team/Team/Team';
import UserRegistration from '../components/UserRegistration/UserRegistration.jsx';

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
          fetch(`https://itesseract.com.bd/main/api/v1/product/${params.id}`),
      },
      {
        path: '/recorded',
        element: <RecordCourse></RecordCourse>,
      },

      {
        path: '/live',
        element: <LiveCourse></LiveCourse>,
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
        path: '/course/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://itesseract.com.bd/main/api/v1/course/${params?.id}`),
      },
      {
        path: '/videosPlay',
        element: <VideosPlaying></VideosPlaying>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/UserRegistration',
        element: <UserRegistration></UserRegistration>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: <DBHeader></DBHeader>,
      },
      {
        path: '/dashboard/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/dashboard/profile/edit',
        element: <EditProfile></EditProfile>,
      },
      {
        path: '/dashboard/my-courses',
        element: <DBMyCourse></DBMyCourse>,
      },
      {
        path: '/dashboard/my-courses/mycoursevidoes',
        element: <DBVideos></DBVideos>,
      },
      {
        path: '/dashboard/live-class',
        element: <MyLiveClass></MyLiveClass>,
      },
    ],
  },
]);

export default router;
