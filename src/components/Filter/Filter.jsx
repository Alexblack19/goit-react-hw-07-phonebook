import { Input, Label, Span } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact, getFilter } from '../../redux/contactSlice';

export function Filter() {
  const dispatch = useDispatch();

  const valueFilter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(filterContact(e.currentTarget.value.trim()));
  };

  return (
    <Label>
      <Span> Find contacts by name </Span>
      <Input
        placeholder="Search"
        type="text"
        value={valueFilter}
        onChange={onChangeFilter}
      />
    </Label>
  );
}
