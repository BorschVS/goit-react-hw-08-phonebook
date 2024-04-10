import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from '../routes/RestrictedRoute';
import { PrivateRoute } from '../routes/PrivateRoute';
import { Layout } from 'components/Layout/Layout';

import { refreshUser } from '../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const SignUp = lazy(() => import('../pages/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    // refresh всему голова
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<SignIn />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};

// 35
