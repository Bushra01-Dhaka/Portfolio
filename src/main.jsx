import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { RouterProvider } from "react-router";
import router from './Routes/router';
import Aos from 'aos';
import "aos/dist/aos.css";
Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='md:max-w-screen-2xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
