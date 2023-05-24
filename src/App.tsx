import React from 'react';
import { useAppSelector, useAppDispatch } from './hooks/redux';
import { fetchPosts } from './redux/actions/actionsCreator';

function App() {
  const { user } = useAppSelector((store) => store.users);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchPosts());
  };

  return (
    <div className="App">
      <header className="App-header">{user}</header>
      <button onClick={handleClick}>BUTTON</button>
    </div>
  );
}

export default App;