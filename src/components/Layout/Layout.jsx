import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from '../NavBar/NavBar';

import css from './Layout.module.css';
import { Box } from '@mui/material';

export const Layout = () => {
  return (
    <main>
      <NavBar />
      <Suspense
        fallback={
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <RotatingLines width="4rem" strokeColor="rgb(190, 208, 255)" />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
      <ToastContainer position="top-center" />
    </main>
  );
};
