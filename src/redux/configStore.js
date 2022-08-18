import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ArticlesReducer from './reducers/ArticlesReducer';
import CommentReducer from './reducers/CommentReducer';
import ProfileReducer from './reducers/ProfileReducer';
import UserReducer from './reducers/UserReducer';

const rootReducers = combineReducers({
    ArticlesReducer,
    ProfileReducer,
    UserReducer,
    CommentReducer,

});

export const store = createStore(rootReducers, applyMiddleware(thunk));