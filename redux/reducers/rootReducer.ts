import { combineReducers } from 'redux';
import Filter from './filter';
import Main from './main';

const rootReducer = combineReducers({
    main: Main,
    filter: Filter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
