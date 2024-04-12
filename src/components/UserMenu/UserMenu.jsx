import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
