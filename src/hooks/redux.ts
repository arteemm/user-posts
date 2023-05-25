import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { AppState } from '../redux/reducers/rootReducer';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
