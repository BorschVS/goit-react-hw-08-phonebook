import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Helmet } from 'react-helmet';

const Home = () => {
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
        <Typography
          variant="h1"
          component="h1"
          fontSize="60px"
          color="rgb(190, 208, 255)"
        >
          With Contacts no limits!
        </Typography>
      </Box>
    </>
  );
};

export default Home;
