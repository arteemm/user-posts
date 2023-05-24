import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './reducers/usersSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
  middleware: () => customizedMiddleware.concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;