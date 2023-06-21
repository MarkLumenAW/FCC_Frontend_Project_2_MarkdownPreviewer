import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store/store.js';
import './index.css';
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Footer />
  </Provider>,
);
