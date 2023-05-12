import { createStore } from 'redux';
import rootReducer from './modules/sample-module/reducers';

const store = createStore(rootReducer);

export default store;
