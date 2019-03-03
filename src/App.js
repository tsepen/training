import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header'
import Footer from './components/Footer'

import configureStore from './store';

const store = configureStore();

export default () => (
  <Provider store={ store }>
    <Header />
    <div className="App">
      Hello
    </div>
    <Footer />
  </Provider>
);
