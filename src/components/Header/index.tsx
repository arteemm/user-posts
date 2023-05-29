import React, { useState } from 'react';
import NavMenu from '../NavMenu';
import SortMenu from '../SortMenu';
import { useLocation, Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

const Header: React.FC = () => {
  const location = useLocation();
  const [selectValue, setSelectValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="p-2 bg-light d-flex align-items-center justify-content-between">
      <NavMenu />
      {location.pathname === '/' ? (
        <SortMenu {...{ searchValue, setSearchValue, selectValue, setSelectValue }} />
      ) : (
        <NavLink className="me-5" as={Link} to="/">
          Назад
        </NavLink>
      )}
    </header>
  );
};

export default Header;
