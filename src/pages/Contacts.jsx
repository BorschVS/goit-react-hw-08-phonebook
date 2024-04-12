import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';

// UI
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const contactsExist = contacts.length > 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Box component="section" display="flex" flexDirection="column">
        <div className="container">
          <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <ContactForm />
            </Grid>
            <Grid item xs={4} md={8}>
              {contactsExist && <ContactList />}
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Contacts;
