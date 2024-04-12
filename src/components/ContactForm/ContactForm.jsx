import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

import { IoMdPersonAdd } from 'react-icons/io';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [form, setForm] = useState({});

  function contactExists(currentName) {
    return contacts.find(({ name }) => name === currentName) !== undefined;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.name.trim() === '') console.log('asdasd');
    contactExists(form.name)
      ? toast.error(`${form.name} is already in contacts`)
      : dispatch(addContact(form));

    !contactExists(form.name) && setForm({});
  }
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          name="name"
          value={form.name || ''}
          onChange={handleChange}
          required
          placeholder="NAME"
        />
      </label>

      <label className={css.label}>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={form.number || ''}
          onChange={handleChange}
          required
          placeholder="NUMBER"
        />
      </label>

      <button type="submit" className={css.button}>
        <span>Add contact</span>
        <IoMdPersonAdd />
      </button>
    </form>
  );
};
