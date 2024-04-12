import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { IoMdPerson } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.listItem} key={id}>
      <div className={css.infoWrapper}>
        <p className={css.info}>
          <IoMdPerson />
          <span className={css.name}>{name}</span>
        </p>
        <a className={css.info} href={`tel:${number}`}>
          <span className={css.number}>
            <FaPhoneAlt />
            {number}
          </span>
        </a>
      </div>
      <button
        className={css.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        <RiDeleteBin2Line size={16} />
      </button>
    </li>
  );
};
