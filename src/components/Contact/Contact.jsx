import { useDispatch } from 'react-redux';
import { Name, Number, Button } from './Contact.styled';
import { deleteContact } from 'redux/operations';

export const Contact = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <Name>{name}&#58;</Name>
      <Number>{phone}</Number>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};
