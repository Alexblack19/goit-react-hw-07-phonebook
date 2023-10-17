import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { List, Item } from './ContactList.styled';
import { getVisibleContacts } from 'redux/selectors';

export function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  console.log(visibleContacts);

  return (
    <>
      <List>
        {visibleContacts.map(item => (
          <Item key={item.id}>
            <Contact contact={item} />
          </Item>
        ))}
      </List>
    </>
  );
}
