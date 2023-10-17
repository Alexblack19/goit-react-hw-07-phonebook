import { GlobalStyle, Container, MainTitle, Title } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import React, { useEffect } from 'react';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <GlobalStyle />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <>
        {contacts?.length > 0 && (
          <>
            <Title>Contacts</Title>
            <Filter />
            <ContactList />
          </>
        )}
        {isLoading && !error && <b>Request in progress...</b>}
      </>
    </Container>
  );
}
