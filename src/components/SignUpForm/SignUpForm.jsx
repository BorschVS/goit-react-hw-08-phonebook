import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';
// UI
import css from './SignUpForm.module.css';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <input className={css.input} placeholder="NAME" type="text" name="name" />
      <input
        className={css.input}
        placeholder="EMAIL"
        type="email"
        name="email"
      />
      <input
        className={css.input}
        placeholder="PASSWORD"
        type="password"
        name="password"
      />
      <button className={css.button} type="submit">
        register
      </button>
    </form>
  );
};
