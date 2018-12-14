import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home.js';
import data from '../api.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';
//import Playlist from './src/playlist/components/playlist.js';
//import data from './src/api.json';

const initialState = {
  data: {
    ...data
  }
}

const store = createStore (
  reducer,
  initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

console.log(store.getState());

const homeContainer = document.getElementById('home-container')
// import ReactDom from 'react-dom';
//ReactDom.render(que voy a rendrizar, donde lo hare);
//render(<Media /> ,app);
//propiedades dinamicas

render(
  <Provider store={store}>
  <Home />
  </Provider>
,homeContainer);
