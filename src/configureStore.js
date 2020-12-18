import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

export const middlewares = [ReduxThunk];
const creatStoreWithMiddleware = applyMiddleware(...middlewares)(createStore) 
 
// export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)))

export default creatStoreWithMiddleware(rootReducer);