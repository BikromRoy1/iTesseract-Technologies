import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import router from './Routes/Router';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <div>
      <ToastContainer position='top-center' />
      <RouterProvider router={router}></RouterProvider>
      <WhatsAppButton />
    </div>
  );
}

export default App;
