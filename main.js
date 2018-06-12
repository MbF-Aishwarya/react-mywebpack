import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import  postReducer from './reducer/postReducer';

const store = createstore(postReducer);

ReactDOM.render(
	<provider store={store}>
	<App /> </provider>, document.getElementById('app'));