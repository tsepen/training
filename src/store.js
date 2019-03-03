import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const initialState = {};

// Redux DevTools extension code
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : e => e;

export const history = createHistory();

const configureStore = () => {
  const rootReducer = combineReducers({
    router: routerReducer,
  });

  const enhancer = composeEnhancers(applyMiddleware(
    routerMiddleware(history),
    thunkMiddleware,
  ));

  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
