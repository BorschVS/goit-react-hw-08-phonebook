import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';
// UI
import css from './SignUpForm.module.css';
import { Button, TextField } from '@mui/material';

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
      <TextField
        label="Name"
        variant="outlined"
        size="small"
        type="text"
        name="name"
      />
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
        register
      </Button>
    </form>
  );
};
