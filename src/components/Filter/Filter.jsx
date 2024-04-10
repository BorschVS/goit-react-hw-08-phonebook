import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/filter/slice';
import { selectFilterContacts } from '../../redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterContacts);

  return (
    <label className={css.Filter__label}>
      Find contact
      <input
        className={css.Filter__input}
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
        placeholder="Rosie Simpson"
      />
    </label>
  );
};

export default Filter;
