import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

import { AppBar } from '@mui/material';
import css from './NavBar.module.css';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" component="header" className={css.header}>
      <div className={css.container}>
        <div className={css.nav}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </AppBar>
  );
};
