import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store/store.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <footer style={{fontSize:'0.8rem', marginTop:'auto'}}>by Alex Wang</footer>
  </Provider>,
);
