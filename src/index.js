import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppRouter from './router';
import { rootReducer } from './reducers/rootReducers';
import * as serviceWorker from './serviceWorker';

import 'babel-polyfill';


const middleware = [thunk];
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
);
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <Provider store={store}><AppRouter /></Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
