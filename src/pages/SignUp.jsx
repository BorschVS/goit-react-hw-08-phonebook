import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { Helmet } from 'react-helmet';

import Box from '@mui/material/Box';

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SignUpForm />
      </Box>
    </>
  );
};

export default SignUp;
