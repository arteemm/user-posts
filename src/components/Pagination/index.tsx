import React from 'react';
import { Pagination } from 'react-bootstrap';

type PaginationType = {
  activePage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const PaginationPosts: React.FC<PaginationType> = (props) => {
  return (
    <Pagination>
      {Array.from({ length: 10 }).map((_, index) => {
        const number = index + 1;
        return (
          <Pagination.Item
            onClick={() => props.setPage(number)}
            key={number}
            active={number === props.activePage}
          >
            {number}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};

export default PaginationPosts;
