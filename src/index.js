import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Context } from './Context';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root')
);
registerServiceWorker();
