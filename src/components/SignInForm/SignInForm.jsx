import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/operations';

import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

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
      <TextField
        label="Email"
        variant="outlined"
        size="small"
        type="email"
        name="email"
      />
      <TextField
        label="Password"
        variant="outlined"
        size="small"
        type="password"
        name="password"
      />
      <Button type="submit" variant="contained">
        Log in
      </Button>
    </form>
  );
};
