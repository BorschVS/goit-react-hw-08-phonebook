import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/signup">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </nav>
  );
};
