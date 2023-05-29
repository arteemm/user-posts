import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/redux';

type PaginationType = {
  activePage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const PaginationPosts: React.FC<PaginationType> = (props) => {
  const { currentPosts } = useAppSelector((store) => store.posts);

  return (
    <Pagination>
      {Array.from({ length: Math.ceil(currentPosts.length / 10) || 1 }).map((_, index) => {
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
