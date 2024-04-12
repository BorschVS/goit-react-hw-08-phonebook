import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';
import { Button, ButtonGroup } from '@mui/material';

export const Navigation = () => {
  const location = useLocation();
  const isContacts = location.pathname === '/contacts';
  const activeStyle = {
    border: '2px solid #04F22A',
    borderRadius: '20px',
    padding: '6px 12px',
    transition: 'border 250ms ease-in-out',
  };
  const { isLoggedIn } = useAuth();

  const styles = () => {
    return isContacts
      ? activeStyle
      : {
          ...activeStyle,
          border: '2px solid #151515',
        };
  };

  const navItemStyles = styles();
  return (
    <nav className={css.nav}>
      {isLoggedIn && (
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink className={css.navLink} to="/">
              home
            </NavLink>
          </li>
          <li >
            <NavLink to="/contacts" style={navItemStyles}>
              contacts
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
