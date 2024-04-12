import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';
import clsx from 'clsx';

export const Navigation = () => {
  const location = useLocation();
  const isContacts = location.pathname === '/contacts';

  const { isLoggedIn } = useAuth();

  const navItemStyles = clsx(css.navItem, isContacts && css.active);

  return (
    <nav className={css.nav}>
      {isLoggedIn && (
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink className={css.navLink} to="/">
              home
            </NavLink>
          </li>
          <li className={navItemStyles}>
            <NavLink to="/contacts">contacts</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
