import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    contacts.length > 0 && (
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    )
  );
};
