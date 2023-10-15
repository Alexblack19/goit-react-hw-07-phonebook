import { Name, Number, Button } from './Contact.styled';

export const Contact = ({ item: { id, name, number }, deleteContact }) => {
  return (
    <>
      <Name>{name}&#58;</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </>
  );
};
