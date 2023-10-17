import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { List, Item, Text } from './ContactList.styled';
import { getVisibleContacts } from 'redux/selectors';

export function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <>
      {visibleContacts.length ? (
        <List>
          {visibleContacts.map(item => (
            <Item key={item.id}>
              <Contact contact={item} />
            </Item>
          ))}
        </List>
      ) : (
        <Text>No contacts</Text>
      )}
    </>
  );
}
