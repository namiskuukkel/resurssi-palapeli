import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import personReducer from './reducers/personReducer'
import projectReducer from './reducers/projectReducer'

const reducer = combineReducers({
  personnel: personReducer,
  projects: projectReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;