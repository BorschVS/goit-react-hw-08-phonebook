import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/operations';

import css from './SignInForm.module.css';

export const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <input
        className={css.input}
        type="email"
        name="email"
        placeholder="EMAIL"
      />
      <input
        className={css.input}
        type="password"
        name="password"
        placeholder="PASSWORD"
      />
      <button className={css.button} type="submit">
        Log in
      </button>
    </form>
  );
};
