import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useAuth } from 'hooks/useAuth';
import { Helmet } from 'react-helmet';

const Home = () => {
  const { user } = useAuth();

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
        {user?.name && (
          <Typography
            variant="h1"
            component="h1"
            fontSize="60px"
            color="#04F22A"
          >
            Welcome, {user.name}!
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Home;
