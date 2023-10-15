import { Contact } from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Text } from './ContactList.styled';
import {
  deleteContact,
  getContacts,
  getFilter,
} from '../../redux/contactSlice';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const onDelete = contactID => dispatch(deleteContact(contactID));

  const filterContacts = () => {
    const filterNormalize = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };
  const filtredContacts = filterContacts();
  return (
    <>
      {filtredContacts.length ? (
        <List>
          {filtredContacts.map(item => (
            <Item key={item.id}>
              <Contact item={item} deleteContact={() => onDelete(item.name)} />
            </Item>
          ))}
        </List>
      ) : (
        <Text>No contacts</Text>
      )}
    </>
  );
}
