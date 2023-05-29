import React from 'react';
import { Form } from 'react-bootstrap';

type SelectProps = {
  selectValue: string;
  handleSortPosts: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({ selectValue, handleSortPosts }) => {
  return (
    <div className="w-30">
      <Form.Select onChange={(e) => handleSortPosts(e.target.value)} value={selectValue}>
        <option>Сортировка по заголовку</option>
        <option value="increase">A - Z</option>
        <option value="decrease">Z - A</option>
      </Form.Select>
    </div>
  );
};

export default Select;
