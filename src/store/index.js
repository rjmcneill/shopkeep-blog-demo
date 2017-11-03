import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(createLogger())
  );
}

export default configureStore;
