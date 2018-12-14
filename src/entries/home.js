import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home.js';
import data from '../api.json';
import { createStore } from 'redux';
//import Playlist from './src/playlist/components/playlist.js';
//import data from './src/api.json';

const initialState = {
  data: {
    ...data
  }
}

const store = createStore (
  (state) => state,
  initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

console.log(store.getState());

const homeContainer = document.getElementById('home-container')
// import ReactDom from 'react-dom';
//ReactDom.render(que voy a rendrizar, donde lo hare);
//render(<Media /> ,app);
//propiedades dinamicas
render(<Home data={data} /> ,homeContainer);
