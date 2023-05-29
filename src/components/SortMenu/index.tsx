import React, { Dispatch, SetStateAction } from 'react';
import Select from '../Select';
import SearchBar from '../SearchBar';
import { Form, Alert } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/redux';
import { setCurrentPosts } from '../../redux/actions/actionsCreator';
import { useDispatch } from 'react-redux';
import { sortPostsList } from './sort';

type SortMenuProps = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
};

const SortMenu: React.FC<SortMenuProps> = ({
  searchValue,
  setSearchValue,
  selectValue,
  setSelectValue,
}) => {
  const dispatch = useDispatch();
  const { posts, currentPosts } = useAppSelector((store) => store.posts);

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
    let sortedPostsList = posts.filter((post) => post.title.includes(value));

    if (selectValue) {
      sortedPostsList = sortPostsList(selectValue, sortedPostsList);
    }

    dispatch(setCurrentPosts(sortedPostsList));
  };

  const handleSortPosts = (value: string) => {
    if (!value) return;

    setSelectValue(value);
    const sortedPostsList = sortPostsList(value, currentPosts);
    dispatch(setCurrentPosts(sortedPostsList));
  };

  const handleSkip = () => {
    setSearchValue('');
    let sortedPostsList = [...posts];

    if (selectValue) {
      sortedPostsList = sortPostsList(selectValue, sortedPostsList);
    }

    dispatch(setCurrentPosts(sortedPostsList));
  };

  return (
    <div className="d-flex align-items-sm-center">
      <Form.Group className="d-flex me-3 align-items-sm-center">
        <Form.Label className="me-2">Поиск по заголовку: </Form.Label>
        <SearchBar {...{ searchValue, handleSearchValue, handleSkip }} />
      </Form.Group>
      <Form.Group className="d-flex me-3 align-items-sm-center">
        <Form.Label className="me-2">Сортировка: </Form.Label>
        <Select {...{ selectValue, handleSortPosts }} />
      </Form.Group>
    </div>
  );
};

export default SortMenu;
