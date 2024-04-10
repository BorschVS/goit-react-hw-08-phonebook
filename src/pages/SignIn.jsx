import { SignInForm } from 'components/SignInForm/SignInForm';
import { Helmet } from 'react-helmet';

import Box from '@mui/material/Box';

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SignInForm />
      </Box>
    </>
  );
};

export default SignIn;
