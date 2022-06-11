import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import todoReducer from './feed/todoReducer';
import { authReducer } from './auth/auth.reducer';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  auth: authReducer,
  todoReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
